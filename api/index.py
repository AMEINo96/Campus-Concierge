import json
import os
import re
from html import unescape
from typing import Any, Dict, List, Optional
from urllib.parse import parse_qs, urljoin, urlparse

from bs4 import BeautifulSoup
from curl_cffi import requests as curl_requests
from fastapi import FastAPI, HTTPException, Request, Form, Query
from fastapi.middleware.cors import CORSMiddleware
from urllib3.exceptions import InsecureRequestWarning

import requests as std_requests

std_requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)

QALAM_BASE = "https://qalam.nust.edu.pk"
LMS_BASE = "https://lms.nust.edu.pk"
LMS_AJAX_URL = f"{LMS_BASE}/lib/ajax/service.php"

TERM_RE = re.compile(r"^(Fall|Spring|Summer)\s+\d{4}$", re.I)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index():
    return {
        "status": "ok",
        "service": "nust-sync-backend",
        "routes": ["/health", "/sync_qalam", "/sync_lms"],
    }


@app.get("/health")
def health():
    return {"status": "ok"}


@app.api_route("/sync_qalam", methods=["GET", "POST"])
@app.api_route("/api/sync_qalam", methods=["GET", "POST"])
async def sync_qalam(
    request: Request,
    user: Optional[str] = Query(None),
    password: Optional[str] = Query(None),
):
    if request.method == "POST":
        form_data = await request.form()
        user = user or form_data.get("user")
        password = password or form_data.get("password")

    if not user or not password:
        raise HTTPException(status_code=400, detail="Missing user or password")

    try:
        import asyncio
        loop = asyncio.get_event_loop()
        session = await loop.run_in_executor(None, _login_qalam, user, password)
        data = await loop.run_in_executor(None, _fetch_qalam_data, session)
        return data
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Qalam sync failed: {exc}")


@app.api_route("/sync_lms", methods=["GET", "POST"])
@app.api_route("/api/sync_lms", methods=["GET", "POST"])
async def sync_lms(
    request: Request,
    user: Optional[str] = Query(None),
    password: Optional[str] = Query(None),
):
    if request.method == "POST":
        form_data = await request.form()
        user = user or form_data.get("user")
        password = password or form_data.get("password")

    if not user or not password:
        raise HTTPException(status_code=400, detail="Missing user or password")

    try:
        import asyncio
        loop = asyncio.get_event_loop()
        session, dashboard_html = await loop.run_in_executor(None, _login_lms, user, password)
        data = await loop.run_in_executor(None, _fetch_lms_data, session, dashboard_html)
        return data
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"LMS sync failed: {exc}")



def _login_qalam(user: str, password: str) -> curl_requests.Session:
    session = curl_requests.Session(impersonate="chrome")
    login_page = session.get(f"{QALAM_BASE}/web/login", timeout=30)
    soup = BeautifulSoup(login_page.text, "html.parser")
    token = soup.find("input", {"name": "csrf_token"})
    if not token or not token.get("value"):
        raise RuntimeError("Could not find Qalam CSRF token")

    response = session.post(
        f"{QALAM_BASE}/web/login",
        data={
            "csrf_token": token["value"],
            "login": user,
            "password": password,
        },
        timeout=30,
        allow_redirects=True,
    )

    if "/student/dashboard" not in response.url:
        raise RuntimeError("Qalam login did not reach the dashboard")

    return session


def _fetch_qalam_data(session: curl_requests.Session) -> Dict[str, Any]:
    response = session.get(f"{QALAM_BASE}/student/results", timeout=30)
    soup = BeautifulSoup(response.text, "html.parser")
    result_table = next(
        (table for table in soup.find_all("table") if "table_tree" in table.get("class", [])),
        None,
    )
    if not result_table:
        return {}

    terms = _parse_qalam_results_table(result_table)
    if not terms:
        return {}

    all_terms_data = []
    for term_data in terms:
        courses: Dict[str, Dict[str, Any]] = {}
        for index, course in enumerate(term_data["courses"], start=1):
            credit_hours = course.get("credit_hours", 0.0)
            grade_points = course.get("grade_points", 0.0)
            max_points = max(credit_hours * 4.0, 1.0)
            performance = round(min(100.0, max(0.0, (grade_points / max_points) * 100.0)), 1)
            course_name = course["name"]
            key = _slugify(course_name) or f"course_{index}"
            courses[key] = {
                "name": course_name,
                "term": term_data["term"],
                "attendance": performance,
                "assessments": [
                    {
                        "name": course_name,
                        "obtained_marks": round(grade_points, 1),
                        "max_marks": round(max_points, 1),
                        "class_average": round(max_points * 0.75, 1),
                    }
                ],
                "danger_alert": performance < 75.0,
                "survival_status": _attendance_status(performance),
                "latest_class": {
                    "status": course.get("final_grade", "N/A"),
                    "date": term_data["term"],
                },
                "credit_hours": credit_hours,
                "grade_points": round(grade_points, 1),
                "final_grade": course.get("final_grade", ""),
            }
        
        all_terms_data.append({
            "term": term_data["term"],
            "courses": courses,
            "summary": term_data.get("summary", {})
        })

    # Scrape dashboard for Active Semester courses
    try:
        dashboard_res = session.get(f"{QALAM_BASE}/student/dashboard", timeout=30)
        dash_soup = BeautifulSoup(dashboard_res.text, "html.parser")
        active_courses = {}
        active_term = "Active Semester"
        
        for elem in dash_soup.find_all(string=re.compile(r"Active Class", re.I)):
            card = elem.find_parent("div")
            for _ in range(8):
                if card.parent and len(card.parent.get_text()) < 800:
                    card = card.parent
                else:
                    break
                
            if not card: continue
            
            strings = list(card.stripped_strings)
            if not strings: continue
            
            course_name = strings[0]
            full_text = " ".join(strings)
            
            att_match = re.search(r"Attendance[:\s]*([\d\.]+)", full_text, re.I) or re.search(r"Active Class\s*([\d\.]+)", full_text, re.I)
            attendance_val = float(att_match.group(1)) if att_match else 0.0
            
            term_match = re.search(r"(Fall|Spring|Summer)\s*\d{4}", full_text, re.I)
            if term_match:
                active_term = term_match.group(0).strip()
                
            key = _slugify(course_name) or course_name
            active_courses[key] = {
                "name": course_name,
                "term": active_term,
                "attendance": attendance_val,
                "assessments": [],
                "danger_alert": attendance_val < 75.0,
                "survival_status": _attendance_status(attendance_val),
                "latest_class": {"status": "N/A", "date": active_term},
                "credit_hours": 3.0,
                "grade_points": 0.0,
                "final_grade": "In Progress"
            }
            
        if active_courses:
            # Check if this term already exists in all_terms_data
            existing_term = next((t for t in all_terms_data if t["term"] == active_term), None)
            if existing_term:
                # Update existing term courses
                for k, v in active_courses.items():
                    existing_term["courses"][k] = v
                # Move to end so it's treated as latest
                all_terms_data.remove(existing_term)
                all_terms_data.append(existing_term)
            else:
                latest_summary = all_terms_data[-1].get("summary", {}) if all_terms_data else {}
                all_terms_data.append({
                    "term": active_term,
                    "courses": active_courses,
                    "summary": latest_summary
                })
                
        user_name = "NUST Student"
        reg_span = dash_soup.find(string=re.compile(r'^\s*\d{10,}\s*$'))
        if reg_span and reg_span.parent and reg_span.parent.find_previous_sibling():
            extracted_name = reg_span.parent.find_previous_sibling().get_text(strip=True).title()
            if extracted_name:
                user_name = extracted_name
            
    except Exception as e:
        print(f"Failed to parse dashboard: {e}")
        user_name = "NUST Student"

    return {"terms": all_terms_data, "user_name": user_name}


def _parse_qalam_results_table(table) -> List[Dict[str, Any]]:
    rows = []
    for tr in table.find_all("tr"):
        cells = [cell.get_text(" ", strip=True) for cell in tr.find_all(["th", "td"])]
        if cells:
            rows.append(cells)

    terms: List[Dict[str, Any]] = []
    current: Optional[Dict[str, Any]] = None
    reading_courses = False

    for row in rows:
        label = row[0].strip()

        if TERM_RE.match(label) and len(row) >= 12:
            if current:
                terms.append(current)
            current = {
                "term": label,
                "summary": {
                    "grade_points": _parse_float(row[1]),
                    "cumulative_gp": _parse_float(row[2]),
                    "attempted_ch": _parse_float(row[3]),
                    "earned_ch": _parse_float(row[4]),
                    "cumulative_ch": _parse_float(row[5]),
                    "current_sgpa": _parse_float(row[6]),
                    "current_cgpa": _parse_float(row[7]),
                    "previous_sgpa": _parse_float(row[8]),
                    "previous_cgpa": _parse_float(row[9]),
                    "term_type": row[10],
                    "regular_semester_count": row[11],
                },
                "courses": [],
            }
            reading_courses = False
            continue

        if label.lower() == "course":
            reading_courses = True
            continue

        if current and reading_courses and len(row) >= 4:
            current["courses"].append(
                {
                    "name": row[0],
                    "credit_hours": _parse_float(row[1]),
                    "grade_points": _parse_float(row[2]),
                    "final_grade": row[3],
                }
            )

    if current:
        terms.append(current)

    return terms


def _login_lms(user: str, password: str) -> tuple[curl_requests.Session, str]:
    session = curl_requests.Session(impersonate="chrome")

    login_page = session.get(f"{LMS_BASE}/login/index.php", timeout=30, verify=False)
    soup = BeautifulSoup(login_page.text, "html.parser")
    token = soup.find("input", {"name": "logintoken"})
    if not token or not token.get("value"):
        raise RuntimeError("Could not find LMS logintoken")

    response = session.post(
        f"{LMS_BASE}/login/index.php",
        data={
            "logintoken": token["value"],
            "username": user,
            "password": password,
        },
        timeout=30,
        verify=False,
        allow_redirects=True,
    )

    if "Dashboard | NUST LMS" not in response.text and "/my/" not in response.url:
        raise RuntimeError("LMS login did not reach the dashboard")

    return session, response.text


def _fetch_lms_data(session: Any, dashboard_html: str) -> Dict[str, Any]:
    sesskey = _extract_sesskey(dashboard_html)
    if not sesskey:
        fallback = session.get(f"{LMS_BASE}/my/", timeout=30, verify=False)
        sesskey = _extract_sesskey(fallback.text)

    dashboard_soup = BeautifulSoup(dashboard_html, "html.parser")
    courses = _fetch_lms_courses(session, sesskey) if sesskey else []
    if not courses:
        courses = _extract_lms_courses_from_dashboard(dashboard_soup)

    activities: List[Dict[str, Any]] = []
    seen_pairs = set()

    for course in courses:
        course_id = course.get("id")
        course_url = course.get("viewurl") or (
            f"{LMS_BASE}/course/view.php?id={course_id}" if course_id else ""
        )
        if not course_url:
            continue

        course_detail = _scrape_lms_course(session, course, course_url)
        course["summary"] = course_detail["summary"]
        course["lecture_count"] = course_detail["summary"]["lecture_count"]
        course["assignment_count"] = course_detail["summary"]["assignment_count"]
        course["quiz_count"] = course_detail["summary"]["quiz_count"]
        course["resource_count"] = course_detail["summary"]["lecture_count"]
        course["content_count"] = course_detail["summary"]["content_count"]

        for activity in course_detail["activities"]:
            dedupe_key = (activity.get("type"), activity.get("module_id") or activity.get("url"))
            if dedupe_key in seen_pairs:
                continue
            seen_pairs.add(dedupe_key)
            activities.append(activity)

    timeline_items = _fetch_lms_timeline_events(session, sesskey) if sesskey else []
    if not timeline_items:
        timeline_items = _fetch_lms_timeline_items(dashboard_soup)

    if not activities:
        activities = timeline_items

    user_name = "NUST Student"
    user_text_el = dashboard_soup.find(class_="usertext")
    if user_text_el:
        user_name = user_text_el.get_text(" ", strip=True)
    elif dashboard_soup.find("span", class_="userbutton"):
        userbutton = dashboard_soup.find("span", class_="userbutton")
        user_name = userbutton.get_text(" ", strip=True)

    summary = {
        "course_count": len(courses),
        "lecture_files": sum(int(course.get("lecture_count", 0)) for course in courses),
        "assignments": sum(int(course.get("assignment_count", 0)) for course in courses),
        "quizzes": sum(int(course.get("quiz_count", 0)) for course in courses),
        "content_items": len(activities),
        "source": "moodle",
        "user_name": user_name,
    }

    return {
        "summary": summary,
        "courses": courses,
        "activities": activities,
        "items": timeline_items if timeline_items else activities,
        "timeline": timeline_items,
        "legacy_quests": activities,
        "source": "moodle",
    }


def _fetch_lms_courses(session: Any, sesskey: Optional[str]) -> List[Dict[str, Any]]:
    if not sesskey:
        return []

    payload = [
        {
            "index": 0,
            "methodname": "core_course_get_enrolled_courses_by_timeline_classification",
            "args": {
                "offset": 0,
                "limit": 0,
                "classification": "all",
                "sort": "fullname",
                "customfieldname": "",
                "customfieldvalue": "",
                "requiredfields": [
                    "id",
                    "fullname",
                    "shortname",
                    "showcoursecategory",
                    "showshortname",
                    "visible",
                    "enddate",
                ],
            },
        }
    ]

    response = session.post(
        f"{LMS_AJAX_URL}?sesskey={sesskey}&info=core_course_get_enrolled_courses_by_timeline_classification",
        data=json.dumps(payload),
        headers={"Content-Type": "application/json"},
        timeout=30,
        verify=False,
    )
    if response.status_code >= 400:
        return []

    try:
        data = response.json()
    except Exception:
        try:
            data = json.loads(response.text)
        except Exception:
            return []

    raw_courses: List[Dict[str, Any]] = []
    if isinstance(data, list):
        for entry in data:
            raw_courses.extend(_extract_course_list(entry))
    elif isinstance(data, dict):
        raw_courses.extend(_extract_course_list(data))

    courses: List[Dict[str, Any]] = []
    seen_ids = set()
    for raw in raw_courses:
        course = _normalize_lms_course(raw)
        if not course.get("id"):
            continue
        if course["id"] in seen_ids:
            continue
        seen_ids.add(course["id"])
        courses.append(course)

    return courses


def _extract_course_list(entry: Any) -> List[Dict[str, Any]]:
    if isinstance(entry, dict):
        if isinstance(entry.get("data"), dict):
            data = entry["data"]
            if isinstance(data.get("courses"), list):
                return data["courses"]
            if isinstance(data.get("course"), list):
                return data["course"]
        if isinstance(entry.get("courses"), list):
            return entry["courses"]
        if isinstance(entry.get("data"), list):
            return entry["data"]
    if isinstance(entry, list):
        return [item for item in entry if isinstance(item, dict)]
    return []


def _normalize_lms_course(raw: Dict[str, Any]) -> Dict[str, Any]:
    course_id = raw.get("id")
    try:
        course_id = int(course_id)
    except (TypeError, ValueError):
        course_id = 0

    fullname = _clean_text(raw.get("fullname") or raw.get("displayname") or raw.get("name"))
    shortname = _clean_text(raw.get("shortname") or fullname)
    viewurl = raw.get("viewurl") or raw.get("url") or (f"{LMS_BASE}/course/view.php?id={course_id}" if course_id else "")
    summary = _clean_text(raw.get("summary") or "")

    return {
        "id": course_id,
        "name": fullname or shortname or f"Course {course_id}",
        "shortname": shortname or fullname or f"Course {course_id}",
        "viewurl": viewurl,
        "url": viewurl,
        "summary": summary,
        "visible": raw.get("visible", True),
        "enddate": raw.get("enddate"),
    }


def _extract_lms_courses_from_dashboard(soup: BeautifulSoup) -> List[Dict[str, Any]]:
    courses: List[Dict[str, Any]] = []
    seen_ids = set()

    for link in soup.select('a[href*="/course/view.php?id="]'):
        href = link.get("href", "")
        course_id = _extract_query_int(href, "id")
        if not course_id or course_id in seen_ids:
            continue
        text = _clean_text(link.get_text(" ", strip=True) or link.get("title") or link.get("aria-label"))
        seen_ids.add(course_id)
        courses.append(
            {
                "id": course_id,
                "name": text or f"Course {course_id}",
                "shortname": text or f"Course {course_id}",
                "viewurl": href if href.startswith("http") else urljoin(LMS_BASE, href),
                "url": href if href.startswith("http") else urljoin(LMS_BASE, href),
                "summary": "",
                "visible": True,
                "enddate": None,
            }
        )

    return courses


def _scrape_lms_course(session: Any, course: Dict[str, Any], course_url: str) -> Dict[str, Any]:
    course_name = course.get("name") or course.get("shortname") or "NUST LMS"
    activities: List[Dict[str, Any]] = []
    seen_keys = set()
    
    # Check assignment status table
    assign_statuses = {}
    course_id = course.get("id")
    if course_id:
        try:
            ai_res = session.get(f"{LMS_BASE}/mod/assign/index.php?id={course_id}", timeout=15, verify=False)
            ai_soup = BeautifulSoup(ai_res.text, "html.parser")
            for tr in ai_soup.find_all("tr"):
                cells = [c.get_text(" ", strip=True) for c in tr.find_all(["th", "td"])]
                if len(cells) >= 3:
                    due_val = cells[1]
                    sub_val = cells[-1].lower()
                    is_sub = "submitted" in sub_val
                    for a_tag in tr.find_all("a", href=True):
                        mid = _extract_query_int(a_tag["href"], "id")
                        if mid:
                            assign_statuses[mid] = {
                                "status": "Submitted" if is_sub else "Open",
                                "due_date": due_val
                            }
        except Exception:
            pass

    response = session.get(course_url, timeout=30, verify=False)
    soup = BeautifulSoup(response.text, "html.parser")

    for link in soup.find_all("a", href=True):
        href = link["href"].strip()
        module_type = _module_type_from_href(href)
        if not module_type:
            continue

        module_id = _extract_query_int(href, "id")
        dedupe_key = (module_type, module_id or href)
        if dedupe_key in seen_keys:
            continue
        seen_keys.add(dedupe_key)

        title = _clean_text(
            link.get_text(" ", strip=True)
            or link.get("title")
            or link.get("aria-label")
            or link.get("data-original-title")
        )
        if not title:
            title = f"{module_type.title()} item"

        url = href if href.startswith("http") else urljoin(LMS_BASE, href)
        
        assign_info = assign_statuses.get(module_id) if module_type == "assignment" else None
        is_sub = (assign_info.get("status") == "Submitted") if assign_info else False
        status = "Submitted" if is_sub else "Open"
        action_label = "Submitted" if is_sub else _action_label_for_module(module_type)
        due_date = assign_info.get("due_date") if assign_info else "N/A"

        activities.append(
            {
                "type": module_type,
                "name": title,
                "course": course_name,
                "course_id": course.get("id"),
                "course_shortname": course.get("shortname", course_name),
                "url": url,
                "module_id": module_id,
                "openable": True,
                "submission_capable": module_type == "assignment",
                "quiz_capable": module_type == "quiz",
                "status": status,
                "due_date": due_date,
                "action_label": action_label,
                "kind_label": _kind_label_for_module(module_type),
                "section": _extract_section_name(link),
            }
        )

    summary = {
        "lecture_count": sum(1 for item in activities if item["type"] == "resource"),
        "assignment_count": sum(1 for item in activities if item["type"] == "assignment"),
        "quiz_count": sum(1 for item in activities if item["type"] == "quiz"),
        "content_count": len(activities),
    }

    return {"activities": activities, "summary": summary}


def _fetch_lms_timeline_events(session: Any, sesskey: Optional[str]) -> List[Dict[str, Any]]:
    if not sesskey:
        return []
    payload = [{
        "index": 0,
        "methodname": "core_calendar_get_action_events_by_timesort",
        "args": {"timesortfrom": 0, "limitnum": 20}
    }]
    try:
        res = session.post(
            f"{LMS_AJAX_URL}?sesskey={sesskey}&info=core_calendar_get_action_events_by_timesort",
            json=payload,
            timeout=20,
            verify=False
        )
        data = res.json()
        events = data[0].get("data", {}).get("events", []) if isinstance(data, list) and data else []
        timeline_items = []
        for e in events:
            raw_time = e.get("formattedtime", "")
            time_soup = BeautifulSoup(raw_time, "html.parser")
            clean_due = time_soup.get_text(" ", strip=True) or "Upcoming"
            
            action = e.get("action", {})
            action_name = action.get("name", "")
            actionable = action.get("actionable", True)
            
            is_submitted = (not actionable) or ("view" in action_name.lower()) or ("submitted" in action_name.lower())
            status = "Submitted" if is_submitted else "Open"
            action_label = "Submitted" if is_submitted else "Submit"
            
            timeline_items.append({
                "type": "assignment" if e.get("modulename") == "assign" else (e.get("modulename") or "activity"),
                "name": e.get("activityname") or e.get("name"),
                "course": e.get("course", {}).get("fullname") or "Course",
                "due_date": clean_due,
                "status": status,
                "url": e.get("url") or action.get("url") or "",
                "openable": True,
                "action_label": action_label,
                "kind_label": "ASSIGNMENT",
                "source": "timeline"
            })
        return timeline_items
    except Exception as exc:
        print("Timeline fetch error:", exc)
        return []


def _fetch_lms_timeline_items(soup: BeautifulSoup) -> List[Dict[str, Any]]:
    timeline = soup.find(attrs={"data-region": "timeline"})
    if not timeline:
        return []

    items: List[Dict[str, Any]] = []
    seen_urls = set()

    for link in timeline.find_all("a", href=True):
        href = link["href"].strip()
        text = _clean_text(link.get_text(" ", strip=True))
        if not text or href == "#" or href.startswith("javascript:"):
            continue

        if not _looks_like_lms_activity(href, text):
            continue

        if href in seen_urls:
            continue

        seen_urls.add(href)
        container = link.find_parent(["li", "div", "article"]) or link.parent
        context_text = _clean_text(container.get_text(" ", strip=True)) if container else text
        due_date = _extract_due_text(context_text) or "N/A"
        course = _extract_course_name(context_text, text)
        module_type = _infer_activity_type_from_text(href, text)
        
        ctx_lower = context_text.lower()
        is_submitted = "submitted" in ctx_lower or "done" in ctx_lower or "graded" in ctx_lower
        status = "Submitted" if is_submitted else "Open"
        action_label = "Submitted" if is_submitted else _action_label_for_module(module_type)

        items.append(
            {
                "type": module_type,
                "name": text,
                "course": course,
                "due_date": due_date,
                "status": status,
                "url": href if href.startswith("http") else f"{LMS_BASE}{href}",
                "openable": True,
                "action_label": action_label,
                "kind_label": _kind_label_for_module(module_type),
                "source": "timeline",
            }
        )

    return items


def _extract_sesskey(html: str) -> Optional[str]:
    patterns = [
        r'"sesskey"\s*:\s*"([^"]+)"',
        r'name="sesskey"\s+value="([^"]+)"',
        r"M\.cfg\.sesskey\s*=\s*'([^']+)'",
        r'M\.cfg\.sesskey\s*=\s*"([^"]+)"',
        r'"sesskey":"([^"]+)"',
    ]
    for pattern in patterns:
        match = re.search(pattern, html)
        if match:
            return match.group(1)
    return None


def _module_type_from_href(href: str) -> Optional[str]:
    href_lower = href.lower()
    if "/mod/resource/" in href_lower:
        return "resource"
    if "/mod/assign/" in href_lower:
        return "assignment"
    if "/mod/quiz/" in href_lower:
        return "quiz"
    return None


def _infer_activity_type_from_text(href: str, text: str) -> str:
    module_type = _module_type_from_href(href)
    if module_type:
        return module_type
    text_lower = text.lower()
    if "quiz" in text_lower:
        return "quiz"
    if "assign" in text_lower or "submission" in text_lower:
        return "assignment"
    return "resource"


def _action_label_for_module(module_type: str) -> str:
    if module_type == "assignment":
        return "Open / Submit"
    if module_type == "quiz":
        return "Take Quiz"
    return "Open File"


def _kind_label_for_module(module_type: str) -> str:
    if module_type == "assignment":
        return "ASSIGNMENT"
    if module_type == "quiz":
        return "QUIZ"
    return "LECTURE FILE"


def _extract_section_name(link) -> Optional[str]:
    for ancestor in link.parents:
        class_list = ancestor.get("class", []) if hasattr(ancestor, "get") else []
        if isinstance(class_list, str):
            class_list = [class_list]
        if any("section" in str(item).lower() for item in class_list):
            heading = ancestor.find(["h2", "h3", "h4", "h5"], recursive=True)
            if heading:
                text = _clean_text(heading.get_text(" ", strip=True))
                if text:
                    return text
    return None


def _extract_query_int(url: str, key: str) -> int:
    try:
        parsed = urlparse(url)
        values = parse_qs(parsed.query).get(key, [])
        if not values:
            return 0
        return int(values[0])
    except (TypeError, ValueError):
        return 0


def _looks_like_lms_activity(href: str, text: str) -> bool:
    href_lower = href.lower()
    text_lower = text.lower()
    return any(
        token in href_lower or token in text_lower
        for token in [
            "/mod/resource/",
            "/mod/assign/",
            "/mod/quiz/",
            "/mod/lesson/",
            "/mod/forum/",
            "/mod/attendance/",
            "assignment",
            "quiz",
            "deadline",
            "due",
            "submission",
        ]
    )


def _extract_due_text(text: str) -> Optional[str]:
    match = re.search(r"(Due|Deadline)[:\s]+([A-Za-z0-9,:\-/ ]{4,})", text, re.I)
    if match:
        return match.group(2).strip()
    return None


def _extract_course_name(context_text: str, fallback: str) -> str:
    patterns = [
        r"Course[:\s]+([A-Za-z0-9&()\-.,/ ]+)",
        r"Course\s+([A-Za-z0-9&()\-.,/ ]+)",
        r"\b([A-Z][A-Za-z0-9&()\-.,/ ]{3,})\b",
    ]
    for pattern in patterns:
        match = re.search(pattern, context_text)
        if match:
            candidate = match.group(1).strip()
            if candidate and candidate.lower() != fallback.lower():
                return candidate[:120]
    return "NUST LMS"


def _parse_float(value: Any) -> float:
    try:
        return float(str(value).replace(",", "").strip())
    except (TypeError, ValueError):
        return 0.0


def _clean_text(value: Any) -> str:
    if value is None:
        return ""
    text = unescape(str(value))
    text = re.sub(r"\s+", " ", text).strip()
    return text


def _slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "_", value)
    return value.strip("_")


def _attendance_status(value: float) -> str:
    if value >= 83:
        return "SAFE"
    if value >= 75:
        return "WARNING"
    if value >= 65:
        return "CRITICAL"
    return "DEBARRED"


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", "8000"))
    uvicorn.run("app:app", host="0.0.0.0", port=port, reload=True)

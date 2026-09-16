"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight, ChevronDown, Flame } from "lucide-react";
import { useQalamData } from "@/lib/useBackend";
import { useState } from "react";

export default function QalamPage() {
  const { data, loading, error } = useQalamData();
  const [viewMode, setViewMode] = useState<"active" | "previous">("active");
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  let coursesToDisplay: any[] = [];
  
  if (data && data.terms && data.terms.length > 0) {
    const latestTerm = data.terms[data.terms.length - 1];
    
    if (viewMode === "active") {
      coursesToDisplay = Object.values(latestTerm.courses);
    } else {
      data.terms.forEach((termData: any) => {
        if (termData.term !== latestTerm.term) {
          coursesToDisplay = [...coursesToDisplay, ...Object.values(termData.courses)];
        }
      });
    }
  }

  return (
    <>
      <TopBar title="Qalam" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-[40px] leading-[1.2] font-bold text-slate-900 dark:text-white mb-2">My Courses (Qalam)</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Check your attendance and evaluations.</p>
          </div>
          
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-max">
            <button
              onClick={() => setViewMode("active")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${viewMode === "active" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"}`}
            >
              Active Courses
            </button>
            <button
              onClick={() => setViewMode("previous")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${viewMode === "previous" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"}`}
            >
              Previous Courses
            </button>
          </div>
        </section>

        {loading && <div className="text-center text-slate-500 py-12">Authenticating with Qalam & Fetching...</div>}
        {error && <div className="bg-red-100 text-red-600 p-4 rounded-xl border border-red-200">{error}</div>}

        {!loading && !error && coursesToDisplay.length === 0 && (
          <div className="text-center text-slate-500 py-12">No courses found for this view.</div>
        )}

        {!loading && !error && coursesToDisplay.length > 0 && (
          <div className="flex flex-col gap-4">
            {coursesToDisplay.map((course: any, idx: number) => {
                            return (
                <Link key={idx} href={`/portal/qalam/${encodeURIComponent(course.name)}`} className={`group block border ${course.danger_alert ? 'border-red-500 dark:border-red-600' : 'border-slate-200 dark:border-slate-600'} rounded-[16px] bg-white dark:bg-slate-800 overflow-hidden transition-all shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer`}>
                  <div className="w-full p-6 text-left">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-semibold group-hover:text-[#f97316]">
                          {course.term} &bull; {course.danger_alert ? 'CRITICAL' : 'SAFE'}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{course.name}</h3>
                      </div>
                      <div className="flex items-center gap-3">

                        <div className={`flex items-center gap-1 ${course.danger_alert ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'} px-3 py-1.5 rounded-full font-bold text-sm shadow-sm dark:shadow-none`}>
                          <span>{Math.round(course.attendance)}% Att.</span>
                        </div>
                        {course.total_classes > 0 && (
                          <div className={`flex items-center gap-1 ${course.danger_alert ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-[#e0f2fe] text-[#0369a1] dark:bg-sky-900/40 dark:text-sky-300'} px-3 py-1.5 rounded-full font-bold text-sm shadow-sm dark:shadow-none`}>
                            <span>{course.attended_classes} / {course.total_classes}</span>
                          </div>
                        )}
                        <ChevronRight className="text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}

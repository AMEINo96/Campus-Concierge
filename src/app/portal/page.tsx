"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import PortalBottomNav from "@/components/PortalBottomNav";
import {
  BookOpen, CalendarClock, GraduationCap, AlertTriangle,
  HelpCircle, Bell, ChevronRight, TrendingUp, Clock,
  Users, Star, ArrowRight, FileText, FlaskConical, Calendar,
  Gift, Grid, LayoutGrid, Activity
} from "lucide-react";

/* ── Small SVG progress ring ───────────────────────────────────── */
function Ring({ pct, color }: { pct: number; color: string }) {
  const r = 22, c = 2 * Math.PI * r;
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
      <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="5" />
      <circle cx="28" cy="28" r={r} fill="none" stroke={color} strokeWidth="5"
        strokeDasharray={`${(pct / 100) * c} ${c}`} strokeLinecap="round" />
    </svg>
  );
}

export default function PortalDashboardPage() {
  const router = useRouter();

  const handleAction = (path: string, params: Record<string, string>) => {
    try {
      const query = new URLSearchParams(params).toString();
      router.push(`${path}?${query}`);
    } catch (error) {
      console.error("Navigation error:", error);
      alert("This service is currently unavailable.");
    }
  };
  return (
    <>
      <TopBar title="STUDENT PORTAL" showBack={false} />

      <main className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-4 md:py-8 pb-36">

        {/* ══ GREETING ═════════════════════════════════════════════ */}
        <div className="mb-4 md:mb-6">
          <h1 className="text-2xl md:text-[34px] font-bold tracking-tight text-[#0F172A] mb-0.5 md:mb-1 uppercase">
            Student Portal
          </h1>
          <p className="text-[13px] md:text-[16px] text-[#64748B] font-medium flex items-center gap-2">
            Welcome back! Here's your academic overview. <span>👋</span>
          </p>
        </div>

        {/* ══ TOP ROW: SNAPSHOT & QUICK ACCESS ═════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 mb-6 md:mb-8">

          {/* ── ACADEMIC SNAPSHOT ─────────────── */}
          <div className="lg:col-span-5 p-4 md:p-6 flex flex-col rounded-[22px] shadow-[0_8px_30px_rgba(15,23,42,0.08)] relative overflow-hidden bg-gradient-to-br from-[#0B2F6B] via-[#0E4092] to-[#1455B7] text-white">
            {/* Decorative Shield Watermark */}
            <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
              <svg width="250" height="300" viewBox="0 0 100 120" fill="currentColor">
                <path d="M50 0L0 20v40c0 30 20 50 50 60 30-10 50-30 50-60V20L50 0z" />
              </svg>
            </div>

            <div className="flex items-center justify-between mb-4 md:mb-6 z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-white/10 flex items-center justify-center border border-white/20">
                  <GraduationCap size={14} className="text-[#FACC15] w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <span className="text-[9px] md:text-[11px] font-bold text-[#FACC15] uppercase tracking-widest">Academic Snapshot</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 rounded-full bg-[#10B981]/20 text-[#34D399] text-[10px] md:text-[12px] font-bold border border-[#34D399]/30">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#34D399] animate-pulse"></span>
                Active
              </div>
            </div>

            <div className="mb-6 md:mb-8 z-10">
              <h2 className="text-2xl md:text-[32px] font-bold text-white leading-none mb-1 md:mb-2 uppercase">BS-AI 2A</h2>
              <p className="text-[12px] md:text-[15px] text-blue-100 font-medium">Computer Science Dept.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-auto z-10">
              <div className="bg-[#0A2458]/40 border border-white/10 rounded-[16px] p-3 md:p-5 backdrop-blur-md">
                <p className="text-[9px] md:text-[11px] font-bold text-blue-200 uppercase tracking-widest mb-1">CGPA</p>
                <p className="text-xl md:text-[32px] font-bold text-white leading-none">3.82</p>
              </div>
              <div className="bg-[#0A2458]/40 border border-white/10 rounded-[16px] p-3 md:p-5 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-[9px] md:text-[11px] font-bold text-blue-200 uppercase tracking-widest mb-1">Completion</p>
                  <p className="text-xl md:text-[32px] font-bold text-white leading-none">88%</p>
                </div>
                <div className="scale-75 md:scale-100 origin-right">
                  <Ring pct={88} color="#FACC15" />
                </div>
              </div>
            </div>
          </div>

          {/* ── QUICK ACCESS ──────────────────────────────────── */}
          <div className="lg:col-span-7 bg-[#FAFBFC] border border-[#E6EEF8] rounded-[22px] shadow-[0_8px_24px_rgba(15,23,42,0.04)] p-4 md:p-7">
            <div className="flex items-center gap-3 mb-6">
              <LayoutGrid className="text-[#3B82F6]" size={20} />
              <h3 className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">Quick Access</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  href: "/portal/lms", icon: BookOpen, label: "My Courses", subtitle: "LMS Materials",
                  color: "#3B82F6", bg: "#FFFFFF",
                  arrowBg: "bg-blue-50/80", arrowColor: "text-blue-600",
                  hoverBg: "hover:bg-[#F0F7FF]", hoverBorder: "hover:border-[#BFDBFE]",
                  hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.12)]",
                  hoverIconBg: "group-hover:bg-[#DBEAFE]", hoverText: "group-hover:text-[#1D4ED8]",
                  hoverArrowBg: "group-hover:bg-[#3B82F6]", hoverIconColor: "group-hover:text-[#1D4ED8]",
                  hoverArrowColor: "group-hover:text-white"
                },
                {
                  href: "/portal/attendance", icon: Activity, label: "Attendance", subtitle: "75% Tracker",
                  color: "#EF4444", bg: "#FFFFFF",
                  arrowBg: "bg-red-50/80", arrowColor: "text-red-600",
                  hoverBg: "hover:bg-[#FEF2F2]", hoverBorder: "hover:border-[#FECACA]",
                  hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.12)]",
                  hoverIconBg: "group-hover:bg-[#FEE2E2]", hoverText: "group-hover:text-[#B91C1C]",
                  hoverArrowBg: "group-hover:bg-[#EF4444]", hoverIconColor: "group-hover:text-[#B91C1C]",
                  hoverArrowColor: "group-hover:text-white"
                },
                {
                  href: "/portal/evaluator", icon: Star, label: "AI Evaluator", subtitle: "Performance",
                  color: "#EAB308", bg: "#FFFFFF",
                  arrowBg: "bg-yellow-50/80", arrowColor: "text-yellow-600",
                  hoverBg: "hover:bg-[#FEFCE8]", hoverBorder: "hover:border-[#FEF08A]",
                  hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(234,179,8,0.12)]",
                  hoverIconBg: "group-hover:bg-[#FEF9C3]", hoverText: "group-hover:text-[#A16207]",
                  hoverArrowBg: "group-hover:bg-[#EAB308]", hoverIconColor: "group-hover:text-[#A16207]",
                  hoverArrowColor: "group-hover:text-white"
                },
                {
                  href: "/portal/qalam", icon: GraduationCap, label: "Qalam", subtitle: "Fees & Admin",
                  color: "#10B981", bg: "#FFFFFF",
                  arrowBg: "bg-green-50/80", arrowColor: "text-green-600",
                  hoverBg: "hover:bg-[#F0FDF4]", hoverBorder: "hover:border-[#BBF7D0]",
                  hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.12)]",
                  hoverIconBg: "group-hover:bg-[#DCFCE7]", hoverText: "group-hover:text-[#15803D]",
                  hoverArrowBg: "group-hover:bg-[#10B981]", hoverIconColor: "group-hover:text-[#15803D]",
                  hoverArrowColor: "group-hover:text-white"
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex flex-col justify-center p-3.5 md:p-6 rounded-[22px] bg-white border border-[#E6EEF8] shadow-sm transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer h-[120px] md:h-[160px] ${item.hoverBg} ${item.hoverBorder} ${item.hoverShadow}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-[250ms] ease-in-out ${item.hoverIconBg} overflow-hidden`}
                        style={{ background: item.bg }}
                      >
                        <item.icon size={24} strokeWidth={2} style={{ color: item.color }} className={`transition-colors duration-[250ms] ${item.hoverIconColor}`} />
                      </div>
                      <div className="flex flex-col">
                        <p className={`text-sm md:text-[16px] font-bold text-[#0F172A] transition-colors duration-[250ms] ${item.hoverText}`}>{item.label}</p>
                        <p className={`text-[10px] md:text-[12px] font-medium text-[#64748B] transition-colors duration-[250ms] ${item.hoverText} opacity-60`}>{item.subtitle}</p>
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-[250ms] ease-in-out group-hover:translate-x-1.5 shadow-sm ${item.arrowBg} ${item.hoverArrowBg} ${item.arrowColor} ${item.hoverArrowColor}`}
                    >
                      <ChevronRight size={18} strokeWidth={3} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ══ BOTTOM ROW: DEADLINES & ANNOUNCEMENTS ════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ── LMS DEADLINES ─────────────────────────────────── */}
          <div className="lg:col-span-7 bg-white border border-[#E6EEF8] rounded-[22px] shadow-[0_8px_24px_rgba(15,23,42,0.04)] p-4 md:p-8 pb-7">
            <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#F59E0B] w-5 h-5" />
                <h3 className="text-[12px] md:text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">LMS Deadlines</h3>
              </div>
              <Link href="/portal/lms" className="flex items-center gap-1 text-[12px] md:text-[13px] font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors">
                View All <ChevronRight size={14} />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {/* Deadline 1 */}
              <div className="group flex items-center justify-between p-4 rounded-[16px] bg-white border border-[#E6EEF8] shadow-sm hover:bg-[#F8FAFC] hover:border-[#BFDBFE] hover:shadow-md transition-all duration-[250ms] cursor-pointer">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#FFFBEB] flex items-center justify-center border border-[#FEF3C7] shrink-0 transition-colors group-hover:bg-[#FEF3C7]">
                    <AlertTriangle size={18} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-sm md:text-[15px] font-bold text-[#0F172A] mb-0.5 group-hover:text-[#1D4ED8] transition-colors">OOP Assignment 3</p>
                    <p className="text-[12px] md:text-[13px] font-medium text-[#64748B]">CS-211 • <span className="text-[#EA580C] font-semibold">Due Tonight</span></p>
                  </div>
                </div>
                <button 
                  onClick={() => handleAction('/portal/lms/submit', { title: 'OOP Assignment 3', course: 'CS-211', date: 'Tonight, 11:59 PM' })}
                  className="px-4 md:px-5 py-2 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white text-[12px] md:text-[14px] font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  Submit
                </button>
              </div>

              {/* Deadline 2 */}
              <div className="group flex items-center justify-between p-4 rounded-[16px] bg-white border border-[#E6EEF8] shadow-sm hover:bg-[#F8FAFC] hover:border-[#BFDBFE] hover:shadow-md transition-all duration-[250ms] cursor-pointer">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center border border-[#DBEAFE] shrink-0 transition-colors group-hover:bg-[#DBEAFE]">
                    <HelpCircle size={18} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm md:text-[15px] font-bold text-[#0F172A] mb-0.5 group-hover:text-[#1D4ED8] transition-colors">AI Quiz</p>
                    <p className="text-[12px] md:text-[13px] font-medium text-[#64748B]">AI-301 • <span className="text-[#3B82F6] font-semibold">Tomorrow</span></p>
                  </div>
                </div>
                <button 
                  onClick={() => handleAction('/portal/lms/prepare', { title: 'AI Quiz', course: 'AI-301', date: 'Tomorrow, 10:00 AM' })}
                  className="px-4 md:px-5 py-2 rounded-full bg-white border border-[#F59E0B] text-[#F59E0B] hover:bg-[#FFFBEB] text-[12px] md:text-[14px] font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  Prepare
                </button>
              </div>
            </div>
          </div>

          {/* ── ANNOUNCEMENTS ─────────────────────────────────── */}
          <div className="lg:col-span-5 bg-white border border-[#E6EEF8] rounded-[22px] shadow-[0_8px_24px_rgba(15,23,42,0.04)] p-4 md:p-8 pb-7">
            <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-4">
              <Bell className="text-[#3B82F6] w-5 h-5" />
              <h3 className="text-[12px] md:text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">Announcements</h3>
            </div>

            <div className="flex flex-col gap-3">
              {/* Announcement 1 */}
              <div 
                onClick={() => handleAction('/portal/announcements/detail', { title: 'Midterm Exams', date: 'May 20 – May 24', desc: 'Midterm exams start soon.', icon: 'star' })}
                className="flex items-center justify-between p-4 rounded-[16px] bg-[#FFFBEB] border border-[#FEF3C7] hover:shadow-md hover:border-[#FDE68A] transition-all duration-[250ms] cursor-pointer group"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                    <Star size={18} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-sm md:text-[15px] font-bold text-[#0F172A] mb-0.5">Midterm Exams</p>
                    <p className="text-[12px] md:text-[13px] font-medium text-[#64748B]">May 20 – May 24</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] transition-all duration-[250ms] group-hover:bg-[#F59E0B] group-hover:text-white group-hover:translate-x-1 shadow-sm">
                  <ChevronRight size={16} strokeWidth={3} />
                </div>
              </div>

              {/* Announcement 2 */}
              <div 
                onClick={() => handleAction('/portal/announcements/detail', { title: 'Hackathon 2024', date: 'Register by May 15', desc: 'Join the hackathon!', icon: 'gift' })}
                className="flex items-center justify-between p-4 rounded-[16px] bg-[#EFF6FF] border border-[#DBEAFE] hover:shadow-md hover:border-[#BFDBFE] transition-all duration-[250ms] cursor-pointer group"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                    <Gift size={18} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm md:text-[15px] font-bold text-[#0F172A] mb-0.5">Hackathon 2024</p>
                    <p className="text-[12px] md:text-[13px] font-medium text-[#64748B]">Register by May 15</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] transition-all duration-[250ms] group-hover:bg-[#3B82F6] group-hover:text-white group-hover:translate-x-1 shadow-sm">
                  <ChevronRight size={16} strokeWidth={3} />
                </div>
              </div>

              <Link href="/portal/announcements" className="flex items-center justify-between text-[12px] md:text-[13px] font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors mt-1">
                <span>View All Announcements</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </main>

      <PortalBottomNav />
    </>
  );
}

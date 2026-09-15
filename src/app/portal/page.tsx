"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import { BookOpen, CalendarClock, Receipt, GraduationCap, AlertTriangle, HelpCircle, CheckCircle } from "lucide-react";
import { useQalamData, useLmsData } from "@/lib/useBackend";

export default function PortalDashboardPage() {
  const { data: qalamData, loading: qalamLoading } = useQalamData();
  const { data: lmsData, loading: lmsLoading } = useLmsData();

  let cgpa = "0.00";
  let completion = "0%";
  let degreeName = "Student";
  
  if (qalamData && qalamData.terms && qalamData.terms.length > 0) {
    const latestTerm = qalamData.terms[qalamData.terms.length - 1];
    const previousTerm = qalamData.terms.length > 1 ? qalamData.terms[qalamData.terms.length - 2] : null;
    
    const summaryToUse = (latestTerm.summary && Object.keys(latestTerm.summary).length > 0) 
      ? latestTerm.summary 
      : previousTerm?.summary;
      
    cgpa = summaryToUse?.current_cgpa?.toFixed(2) || "N/A";
    const earned = summaryToUse?.earned_ch || 0;
    const total = 135; // Mock total degree credits
    completion = Math.round((earned / total) * 100) + "%";
  }

  if (lmsData?.summary?.user_name) {
    degreeName = lmsData.summary.user_name;
  }

  const items = lmsData?.items || [];
  const deadlines = items.filter((item: any) => item.due_date && item.due_date !== "N/A").slice(0, 3);

  return (
    <>
      <TopBar title="STUDENT PORTAL" showBack={false} />
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-32">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            Student Portal
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Welcome back. Here&apos;s your academic overview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Academic Snapshot */}
          <div className="lg:col-span-5 rounded-2xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] border border-[#3B82F6]/30 shadow-md dark:shadow-none relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#3B82F6] rounded-full blur-3xl opacity-30 z-0"></div>
            
            {/* Building Illustration */}
            <div 
              className="absolute right-0 bottom-0 w-[80%] h-[90%] opacity-30 z-0 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url('/building.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-xs font-bold text-[#93C5FD] uppercase mb-6 tracking-widest">
                Academic Snapshot
              </h2>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[28px] font-bold text-white leading-[1.3]">
                    {degreeName}
                  </p>
                  <p className="text-base text-[#BFDBFE] mt-1">
                    {qalamLoading ? "Fetching..." : "Active Semester"}
                  </p>
                </div>
                <div className="bg-[#3B82F6]/30 px-4 py-1.5 rounded-full border border-[#3B82F6]/50 shadow-sm dark:shadow-none">
                  <span className="text-[13px] font-bold text-white">
                    {qalamLoading ? "..." : "Active"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 relative z-10">
              <div className="flex-1 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-sm dark:shadow-none">
                <p className="text-[12px] font-semibold text-[#93C5FD] uppercase tracking-widest mb-1">
                  CGPA
                </p>
                <p className="text-[28px] font-bold text-white">{qalamLoading ? "..." : cgpa}</p>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-center justify-between shadow-sm dark:shadow-none">
                <div>
                  <p className="text-[12px] font-semibold text-[#93C5FD] uppercase tracking-widest mb-1">
                    Completion
                  </p>
                  <p className="text-[28px] font-bold text-white">{qalamLoading ? "..." : completion}</p>
                </div>
                <div className="relative w-12 h-12 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-md dark:drop-shadow-none" viewBox="0 0 36 36">
                    <path
                      className="text-white/20"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="100, 100"
                      strokeWidth="4"
                    />
                    <path
                      className="text-[#60A5FA]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="88, 100"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="lg:col-span-7 bento-card-light">
            <h2 className="text-xs font-bold text-[#3B82F6] uppercase mb-6 tracking-widest">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/portal/lms" className="flex flex-col items-center justify-center p-6 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-100 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100/50 dark:hover:bg-blue-900/40 dark:hover:border-blue-500 group">
                <BookOpen size={32} strokeWidth={2} className="mb-3 text-[#1E3A8A] dark:text-[#93C5FD] group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                <span className="text-base font-semibold text-center text-slate-900 dark:text-white">My Courses (LMS)</span>
              </Link>
              <Link href="/portal/makeup" className="flex flex-col items-center justify-center p-6 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-purple-100 hover:border-purple-500 hover:shadow-md hover:shadow-purple-100/50 dark:hover:bg-purple-900/40 dark:hover:border-purple-500 group">
                <CalendarClock size={32} strokeWidth={2} className="mb-3 text-[#6D28D9] dark:text-[#A78BFA] group-hover:text-purple-600 group-hover:scale-110 transition-all" />
                <span className="text-base font-semibold text-center text-slate-900 dark:text-white">Make-up classes</span>
              </Link>
              <Link href="/portal/qalam" className="flex flex-col items-center justify-center p-6 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-emerald-100 hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-100/50 dark:hover:bg-emerald-900/40 dark:hover:border-emerald-500 group">
                <GraduationCap size={32} strokeWidth={2} className="mb-3 text-[#047857] dark:text-[#34D399] group-hover:text-emerald-600 group-hover:scale-110 transition-all" />
                <span className="text-base font-semibold text-center text-slate-900 dark:text-white">Qalam</span>
              </Link>
            </div>
          </div>

          {/* LMS Deadlines */}
          <div className="lg:col-span-12 bento-card-light">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">
                LMS Deadlines
              </h2>
              <Link href="/portal/lms" className="text-[#3B82F6] hover:text-[#1E3A8A] transition-colors text-sm font-bold">
                View All
              </Link>
            </div>
            
            {lmsLoading && <div className="text-slate-500 py-4">Fetching deadlines...</div>}
            
            {!lmsLoading && deadlines.length === 0 && (
              <div className="text-slate-500 py-4 border border-dashed border-slate-200 dark:border-slate-600 rounded-xl text-center">
                No upcoming deadlines.
              </div>
            )}
            
            {!lmsLoading && deadlines.length > 0 && (
              <div className="space-y-4">
                {deadlines.map((item: any, idx: number) => {
                  const isSubmitted = item.status === 'Submitted' || item.action_label === 'Submitted';
                  return (
                  <div key={idx} className={`flex items-center justify-between p-5 border border-slate-200 dark:border-slate-600 rounded-xl hover:border-${item.type === 'assignment' ? '[#FACC15]' : '[#3B82F6]'} transition-colors ${isSubmitted ? 'bg-emerald-50/50 dark:bg-emerald-900/10 opacity-75' : 'bg-white dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-sm dark:shadow-none ${isSubmitted ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-200' : (item.type === 'assignment' ? 'bg-[#FEF9C3] dark:bg-yellow-900/30 border-[#FEF08A] dark:border-yellow-700' : 'bg-white dark:bg-slate-600 border-slate-200 dark:border-slate-500')}`}>
                        {isSubmitted ? (
                          <CheckCircle size={24} strokeWidth={2} className="text-emerald-600 dark:text-emerald-400" />
                        ) : item.type === 'assignment' ? (
                          <AlertTriangle size={24} strokeWidth={2} className="text-[#A16207] dark:text-yellow-400" />
                        ) : (
                          <HelpCircle size={24} strokeWidth={2} className="text-slate-600 dark:text-slate-300" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                          {item.course} &bull; Due: {item.due_date}
                        </p>
                      </div>
                    </div>
                    {isSubmitted ? (
                      <div className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm dark:shadow-none cursor-default flex items-center gap-2">
                        <CheckCircle size={16} /> Submitted
                      </div>
                    ) : (
                      <a href={item.url} target="_blank" rel="noreferrer" className={item.type === 'assignment' ? "btn-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md dark:shadow-none" : "bg-white dark:bg-slate-600 text-slate-900 dark:text-white border border-[#E2E8F0] dark:border-slate-500 px-5 py-2.5 rounded-lg font-bold text-sm hover:border-[#3B82F6] hover:text-[#3B82F6] dark:hover:text-[#93C5FD] transition-all shadow-sm dark:shadow-none"}>
                        {item.type === 'assignment' ? "Submit" : "Open"}
                      </a>
                    )}
                  </div>
                )})}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

import Link from "next/link";
import TopBar from "@/components/TopBar";
import { BookOpen, CalendarClock, Receipt, GraduationCap, AlertTriangle, HelpCircle } from "lucide-react";

export default function PortalDashboardPage() {
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
                    BS-AI 2A
                  </p>
                  <p className="text-base text-[#BFDBFE] mt-1">
                    Computer Science Dept.
                  </p>
                </div>
                <div className="bg-[#3B82F6]/30 px-4 py-1.5 rounded-full border border-[#3B82F6]/50 shadow-sm dark:shadow-none">
                  <span className="text-[13px] font-bold text-white">
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 relative z-10">
              <div className="flex-1 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-sm dark:shadow-none">
                <p className="text-[12px] font-semibold text-[#93C5FD] uppercase tracking-widest mb-1">
                  CGPA
                </p>
                <p className="text-[28px] font-bold text-white">3.82</p>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-center justify-between shadow-sm dark:shadow-none">
                <div>
                  <p className="text-[12px] font-semibold text-[#93C5FD] uppercase tracking-widest mb-1">
                    Completion
                  </p>
                  <p className="text-[28px] font-bold text-white">88%</p>
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
            <div className="grid grid-cols-2 gap-4">
              <Link href="/portal/lms" className="flex flex-col items-center justify-center p-6 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-100 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100/50 dark:hover:bg-blue-900/40 dark:hover:border-blue-500 group">
                <BookOpen size={32} strokeWidth={2} className="mb-3 text-[#1E3A8A] dark:text-[#93C5FD] group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                <span className="text-base font-semibold text-center text-slate-900 dark:text-white">My Courses (LMS)</span>
              </Link>
              <Link href="/portal/makeup" className="flex flex-col items-center justify-center p-6 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-purple-100 hover:border-purple-500 hover:shadow-md hover:shadow-purple-100/50 dark:hover:bg-purple-900/40 dark:hover:border-purple-500 group">
                <CalendarClock size={32} strokeWidth={2} className="mb-3 text-[#6D28D9] dark:text-[#A78BFA] group-hover:text-purple-600 group-hover:scale-110 transition-all" />
                <span className="text-base font-semibold text-center text-slate-900 dark:text-white">Make-up classes</span>
              </Link>
              <Link href="/portal/evaluator" className="flex flex-col items-center justify-center p-6 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-cyan-100 hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-100/50 dark:hover:bg-cyan-900/40 dark:hover:border-cyan-500 group">
                <div className="mb-3 w-12 h-12 rounded-full bg-white dark:bg-slate-600 flex items-center justify-center shadow-sm">
                  <img src="https://lh3.googleusercontent.com/aida/ADBb0uj14Zt2xc9Y5WgNFmlwfwpKJqK3RDQJ45mu_XE3nXN5EJMXMYWKS6QRsdOY_pmzqVUCaJn31qRp0gbfJHu4Lt8OAc4NyudtewgIl2TyiqTOxFRayQG6gSNpAefu52_bPrbSR1I8ChSkavZwx7LiNogXaesXN7iAGRJNOrRDTnmfUDhgsuqs67m_PM22wnjK6LyGOrvqeORVIqgKIZVwxh3vh00jc54NWh9PFNnMLmMs03QMLNB61_-QEfeqVtk6H3rrY45mEhzwtjg" alt="AI Evaluator" className="w-8 h-8 object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
                <span className="text-base font-semibold text-center text-slate-900 dark:text-white">AI Evaluator</span>
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
              <button className="text-[#3B82F6] hover:text-[#1E3A8A] transition-colors text-sm font-bold">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {/* Deadline Item 1 */}
              <div className="flex items-center justify-between p-5 border border-slate-200 dark:border-slate-600 rounded-xl hover:border-[#FACC15] transition-colors bg-white dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FEF9C3] dark:bg-yellow-900/30 rounded-full flex items-center justify-center border border-[#FEF08A] dark:border-yellow-700 shadow-sm dark:shadow-none">
                    <AlertTriangle size={24} strokeWidth={2} className="text-[#A16207] dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Data Structures Assignment 3
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      CS-201 • Due Tonight, 11:59 PM
                    </p>
                  </div>
                </div>
                <Link href="/portal/lms/submit" className="btn-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md dark:shadow-none">
                  Submit
                </Link>
              </div>
              
              {/* Deadline Item 2 */}
              <div className="flex items-center justify-between p-5 border border-slate-200 dark:border-slate-600 rounded-xl hover:border-[#3B82F6] transition-colors bg-white dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-600 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-500 shadow-sm dark:shadow-none">
                    <HelpCircle size={24} strokeWidth={2} className="text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">AI Quiz</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      AI-301 • Tomorrow, 10:00 AM
                    </p>
                  </div>
                </div>
                <button className="bg-white dark:bg-slate-600 text-slate-900 dark:text-white border border-[#E2E8F0] dark:border-slate-500 px-5 py-2.5 rounded-lg font-bold text-sm hover:border-[#3B82F6] hover:text-[#3B82F6] dark:hover:text-[#93C5FD] transition-all shadow-sm dark:shadow-none">
                  Prepare
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

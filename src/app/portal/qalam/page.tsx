import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight, Flame } from "lucide-react";

export default function QalamPage() {
  return (
    <>
      <TopBar title="Qalam" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-slate-900 dark:text-white mb-2">My Courses (Qalam)</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Check your attendance and evaluations.</p>
        </section>

        <div className="flex flex-col gap-4">
          <Link
            href="/portal/qalam/cs211"
            className="group block border border-slate-200 dark:border-slate-600 rounded-[16px] p-6 bg-white dark:bg-slate-800 hover:border-[#f97316] hover:bg-[#fff7ed] dark:hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-semibold group-hover:text-[#f97316]">CS-211</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Object-Oriented Programming (Java)</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-[#ffedd5] dark:bg-orange-900/30 text-[#ea580c] dark:text-orange-400 px-3 py-1.5 rounded-full font-bold text-sm shadow-sm dark:shadow-none">
                  <Flame size={16} strokeWidth={2.5} />
                  <span>14 Streak</span>
                </div>
                <ChevronRight className="text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/portal/qalam/cs350"
            className="group block border border-slate-200 dark:border-slate-600 rounded-[16px] p-6 bg-white dark:bg-slate-800 hover:border-[#f97316] hover:bg-[#fff7ed] dark:hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-semibold group-hover:text-[#f97316]">CS-350</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Artificial Intelligence</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-[#ffedd5] dark:bg-orange-900/30 text-[#ea580c] dark:text-orange-400 px-3 py-1.5 rounded-full font-bold text-sm shadow-sm dark:shadow-none">
                  <Flame size={16} strokeWidth={2.5} />
                  <span>8 Streak</span>
                </div>
                <ChevronRight className="text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/portal/qalam/mth201"
            className="group block border border-slate-200 dark:border-slate-600 rounded-[16px] p-6 bg-white dark:bg-slate-800 hover:border-[#f97316] hover:bg-[#fff7ed] dark:hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-semibold group-hover:text-[#f97316]">MTH-201</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Linear Algebra & Differential Equations</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-3 py-1.5 rounded-full font-bold text-sm shadow-sm dark:shadow-none">
                  <span>No Streak</span>
                </div>
                <ChevronRight className="text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

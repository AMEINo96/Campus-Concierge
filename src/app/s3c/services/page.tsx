import Link from "next/link";
import TopBar from "@/components/TopBar";
import { FileText, GraduationCap, Search, BadgeCheck, Wallet, Plus, Users, AlertTriangle } from "lucide-react";

export default function ServicesDirectoryPage() {
  return (
    <>
      <TopBar title="Services Directory" showBack={true} backHref="/s3c" />
      <main className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 pb-36">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">Service Directory</h1>
          <p className="text-sm md:text-lg text-[#64748B]">Browse and access all campus services in one place.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Link href="/s3c/services/academic" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-indigo-100 hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-100/50 dark:hover:bg-indigo-900/40 dark:hover:border-indigo-500">
            <div className="w-16 h-16 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center mb-4 transition-colors">
              <GraduationCap size={32} strokeWidth={2} className="text-indigo-600 group-hover:text-indigo-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">ACADEMIC</span>
          </Link>

          <Link href="/s3c/services/finance" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-emerald-100 hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-100/50 dark:hover:bg-emerald-900/40 dark:hover:border-emerald-500">
            <div className="w-16 h-16 rounded-full bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center mb-4 transition-colors">
              <Wallet size={32} strokeWidth={2} className="text-emerald-600 group-hover:text-emerald-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">FINANCE</span>
          </Link>

          <Link href="/s3c/services/hostel" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-pink-100 hover:border-pink-500 hover:shadow-md hover:shadow-pink-100/50 dark:hover:bg-pink-900/40 dark:hover:border-pink-500">
            <div className="w-16 h-16 rounded-full bg-pink-100 group-hover:bg-pink-200 flex items-center justify-center mb-4 transition-colors">
              <FileText size={32} strokeWidth={2} className="text-pink-600 group-hover:text-pink-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">HOSTEL</span>
          </Link>

          <Link href="/s3c/services/career" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-100 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100/50 dark:hover:bg-blue-900/40 dark:hover:border-blue-500">
            <div className="w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-4 transition-colors">
              <Users size={32} strokeWidth={2} className="text-blue-600 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">CAREER</span>
          </Link>

          <Link href="/s3c/services/student_affairs" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-amber-100 hover:border-amber-500 hover:shadow-md hover:shadow-amber-100/50 dark:hover:bg-amber-900/40 dark:hover:border-amber-500">
            <div className="w-16 h-16 rounded-full bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center mb-4 transition-colors">
              <Search size={32} strokeWidth={2} className="text-amber-600 group-hover:text-amber-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">STUDENT AFFAIRS</span>
          </Link>

          <Link href="/s3c/services/ict" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-cyan-100 hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-100/50 dark:hover:bg-cyan-900/40 dark:hover:border-cyan-500">
            <div className="w-16 h-16 rounded-full bg-cyan-100 group-hover:bg-cyan-200 flex items-center justify-center mb-4 transition-colors">
              <BadgeCheck size={32} strokeWidth={2} className="text-cyan-600 group-hover:text-cyan-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">ICT</span>
          </Link>

          <Link href="/s3c/services/medical" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-red-100 hover:border-red-500 hover:shadow-md hover:shadow-red-100/50 dark:hover:bg-red-900/40 dark:hover:border-red-500">
            <div className="w-16 h-16 rounded-full bg-red-100 group-hover:bg-red-200 flex items-center justify-center mb-4 transition-colors">
              <Plus size={32} strokeWidth={2} className="text-red-600 group-hover:text-red-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">MEDICAL</span>
          </Link>

          <Link href="/s3c/services/general_query" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-slate-100 hover:border-slate-500 hover:shadow-md hover:shadow-slate-100/50 dark:hover:bg-slate-900/40 dark:hover:border-slate-500">
            <div className="w-16 h-16 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center mb-4 transition-colors">
              <AlertTriangle size={32} strokeWidth={2} className="text-slate-600 group-hover:text-slate-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">GENERAL QUERY</span>
          </Link>
        </div>
      </main>
    </>
  );
}

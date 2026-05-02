import Link from "next/link";
import TopBar from "@/components/TopBar";
import { DoorOpen, FileText, Activity, GraduationCap, Search, BadgeCheck, Wallet, Plus, Users, AlertTriangle } from "lucide-react";

export default function ServicesDirectoryPage() {
  return (
    <>
      <TopBar title="Services Directory" showBack={true} backHref="/s3c" />
      <main className="w-full max-w-5xl mx-auto px-6 py-12 pb-32">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">Service Directory</h1>
          <p className="text-lg text-[#64748B]">Browse and access all campus services in one place.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <Link href="/s3c/services/hostel" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-rose-100 hover:border-rose-500 hover:shadow-md hover:shadow-rose-100/50 dark:hover:bg-rose-900/40 dark:hover:border-rose-500">
            <div className="w-16 h-16 rounded-full bg-pink-100 group-hover:bg-rose-200 flex items-center justify-center mb-4 transition-colors">
              <DoorOpen size={32} strokeWidth={2} className="text-pink-600 group-hover:text-rose-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">HOSTEL SERVICES</span>
          </Link>

          <Link href="/s3c/services/documents" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-amber-100 hover:border-amber-500 hover:shadow-md hover:shadow-amber-100/50 dark:hover:bg-amber-900/40 dark:hover:border-amber-500">
            <div className="w-16 h-16 rounded-full bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center mb-4 transition-colors">
              <FileText size={32} strokeWidth={2} className="text-amber-600 group-hover:text-amber-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">DOCUMENTS</span>
          </Link>

          <Link href="/s3c/services/sports" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-purple-100 hover:border-purple-500 hover:shadow-md hover:shadow-purple-100/50 dark:hover:bg-purple-900/40 dark:hover:border-purple-500">
            <div className="w-16 h-16 rounded-full bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center mb-4 transition-colors">
              <Activity size={32} strokeWidth={2} className="text-purple-600 group-hover:text-purple-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">SPORTS COMPLEX</span>
          </Link>

          <Link href="/s3c/services/exams" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-indigo-100 hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-100/50 dark:hover:bg-indigo-900/40 dark:hover:border-indigo-500">
            <div className="w-16 h-16 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center mb-4 transition-colors">
              <GraduationCap size={32} strokeWidth={2} className="text-indigo-600 group-hover:text-indigo-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">EXAMS</span>
          </Link>

          <Link href="/s3c/services/lost" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-teal-100 hover:border-teal-500 hover:shadow-md hover:shadow-teal-100/50 dark:hover:bg-teal-900/40 dark:hover:border-teal-500">
            <div className="w-16 h-16 rounded-full bg-teal-100 group-hover:bg-teal-200 flex items-center justify-center mb-4 transition-colors">
              <Search size={32} strokeWidth={2} className="text-teal-600 group-hover:text-teal-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">LOST & FOUND</span>
          </Link>

          <Link href="/s3c/services/cards" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-100 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100/50 dark:hover:bg-blue-900/40 dark:hover:border-blue-500">
            <div className="w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-4 transition-colors shadow-sm">
              <BadgeCheck size={32} strokeWidth={2} className="text-blue-600 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">UNI CARDS</span>
          </Link>

          <Link href="/s3c/services/fees" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-emerald-100 hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-100/50 dark:hover:bg-emerald-900/40 dark:hover:border-emerald-500">
            <div className="w-16 h-16 rounded-full bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center mb-4 transition-colors">
              <Wallet size={32} strokeWidth={2} className="text-emerald-600 group-hover:text-emerald-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">FEES</span>
          </Link>

          <Link href="/s3c/services/clubs" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-orange-100 hover:border-orange-500 hover:shadow-md hover:shadow-orange-100/50 dark:hover:bg-orange-900/40 dark:hover:border-orange-500">
            <div className="w-16 h-16 rounded-full bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center mb-4 transition-colors">
              <Users size={32} strokeWidth={2} className="text-orange-600 group-hover:text-orange-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">CLUB ACTIVITIES</span>
          </Link>

          <Link href="/s3c/services/incident" className="bento-card-light flex flex-col items-center justify-center text-center aspect-square md:col-span-1 group transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-red-100 hover:border-red-500 hover:shadow-md hover:shadow-red-100/50 dark:hover:bg-red-900/40 dark:hover:border-red-500">
            <div className="w-16 h-16 rounded-full bg-red-100 group-hover:bg-red-200 flex items-center justify-center mb-4 transition-colors">
              <AlertTriangle size={32} strokeWidth={2} className="text-red-600 group-hover:text-red-600 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-white uppercase tracking-widest">REPORT INCIDENT</span>
          </Link>

          <Link href="/s3c/services/custom" className="bg-gradient-to-br from-[#15A8E3] to-[#0070B8] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] shadow-md group">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
              <Plus size={32} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-bold text-white uppercase tracking-widest">CUSTOM REQUEST</span>
          </Link>
        </div>
      </main>
    </>
  );
}

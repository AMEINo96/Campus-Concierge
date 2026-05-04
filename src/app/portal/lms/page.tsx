import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight } from "lucide-react";

export default function LMSPage() {
  return (
    <>
      <TopBar title="LMS Workspace" showBack={true} backHref="/portal" />
      <main className="w-full max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6 pb-36 flex flex-col gap-6 md:gap-8">
        <section className="mb-2 text-center md:text-left">
          <h2 className="text-2xl md:text-[34px] font-bold text-[#0F172A] mb-1 tracking-tight uppercase">My Courses</h2>
          <p className="text-[13px] md:text-[16px] text-[#64748B] font-medium">Access your lecture slides, lab manuals, and assignments.</p>
        </section>

        <div className="flex flex-col gap-4 md:gap-5">
          {/* Course Card 1 */}
          <Link
            href="/portal/lms/cs211"
            className="group flex items-center justify-between p-4 md:p-6 bg-white border border-[#E6EEF8] rounded-[20px] md:rounded-[24px] shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-[250ms] ease-in-out hover:bg-[#F0F7FF] hover:border-[#BFDBFE] hover:shadow-[0_12px_32px_rgba(59,130,246,0.08)] cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] md:text-[11px] font-bold text-[#3B82F6] uppercase tracking-[0.1em]">CS-211</span>
              <h3 className="text-[16px] md:text-[20px] font-bold text-[#0F172A] leading-tight">Object-Oriented Programming</h3>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <span className="hidden sm:inline-block bg-blue-50/80 text-blue-600 text-[11px] md:text-[12px] font-bold px-4 py-2 rounded-full whitespace-nowrap border border-blue-100 shadow-sm transition-colors duration-[250ms] group-hover:bg-blue-100/50">
                2 New Files
              </span>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-blue-50/80 text-blue-600 transition-all duration-[250ms] group-hover:bg-[#3B82F6] group-hover:text-white group-hover:translate-x-1.5 shadow-sm">
                <ChevronRight size={18} className="md:w-5 md:h-5" strokeWidth={3} />
              </div>
            </div>
          </Link>

          {/* Course Card 2 */}
          <Link
            href="/portal/lms/cs350"
            className="group flex items-center justify-between p-4 md:p-6 bg-white border border-[#E6EEF8] rounded-[20px] md:rounded-[24px] shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-[250ms] ease-in-out hover:bg-[#F0F7FF] hover:border-[#BFDBFE] hover:shadow-[0_12px_32px_rgba(59,130,246,0.08)] cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] md:text-[11px] font-bold text-[#64748B] uppercase tracking-[0.1em] group-hover:text-[#3B82F6] transition-colors">CS-350</span>
              <h3 className="text-[16px] md:text-[20px] font-bold text-[#0F172A] leading-tight">Artificial Intelligence</h3>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-blue-50/80 text-blue-600 transition-all duration-[250ms] group-hover:bg-[#3B82F6] group-hover:text-white group-hover:translate-x-1.5 shadow-sm">
                <ChevronRight size={18} className="md:w-5 md:h-5" strokeWidth={3} />
              </div>
            </div>
          </Link>

          {/* Course Card 3 */}
          <Link
            href="/portal/lms/mth201"
            className="group flex items-center justify-between p-4 md:p-6 bg-white border border-[#E6EEF8] rounded-[20px] md:rounded-[24px] shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-[250ms] ease-in-out hover:bg-[#FFFBEB] hover:border-[#FEF08A] hover:shadow-[0_12px_32px_rgba(234,179,8,0.08)] cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] md:text-[11px] font-bold text-[#64748B] uppercase tracking-[0.1em] group-hover:text-[#EAB308] transition-colors">MTH-201</span>
              <h3 className="text-[16px] md:text-[20px] font-bold text-[#0F172A] leading-tight">Linear Algebra</h3>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <span className="hidden sm:inline-block bg-yellow-50/80 text-yellow-600 text-[11px] md:text-[12px] font-bold px-4 py-2 rounded-full whitespace-nowrap border border-yellow-100 shadow-sm transition-colors duration-[250ms] group-hover:bg-yellow-100/50">
                Assignment Due
              </span>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-yellow-50/80 text-yellow-600 transition-all duration-[250ms] group-hover:bg-[#EAB308] group-hover:text-white group-hover:translate-x-1.5 shadow-sm">
                <ChevronRight size={18} className="md:w-5 md:h-5" strokeWidth={3} />
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

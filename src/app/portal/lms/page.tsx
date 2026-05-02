import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight } from "lucide-react";

export default function LMSPage() {
  return (
    <>
      <TopBar title="LMS Workspace" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">My Courses</h2>
          <p className="text-lg text-[#64748B]">Access your lecture slides, lab manuals, and assignments.</p>
        </section>

        <div className="flex flex-col gap-4">
          {/* Course Card 1 */}
          <Link
            href="/portal/lms/cs211"
            className="bento-card-light group flex items-center justify-between cursor-pointer hover:border-[#3B82F6]"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">CS-211</span>
              <h3 className="text-lg font-semibold text-[#0F172A]">Object-Oriented Programming (Java)</h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#DBEAFE] text-[#1E3A8A] text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm border border-[#BFDBFE]">
                2 New Files
              </span>
              <ChevronRight className="text-[#64748B] group-hover:text-[#3B82F6] group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

          {/* Course Card 2 */}
          <Link
            href="/portal/lms/cs350"
            className="bento-card-light group flex items-center justify-between cursor-pointer hover:border-[#3B82F6]"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest group-hover:text-[#3B82F6] transition-colors">CS-350</span>
              <h3 className="text-lg font-semibold text-[#0F172A]">Artificial Intelligence</h3>
            </div>
            <div className="flex items-center gap-4">
              <ChevronRight className="text-[#64748B] group-hover:text-[#3B82F6] group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

          {/* Course Card 3 */}
          <Link
            href="/portal/lms/mth201"
            className="bento-card-light group flex items-center justify-between cursor-pointer hover:border-[#FACC15]"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest group-hover:text-[#FACC15] transition-colors">MTH-201</span>
              <h3 className="text-lg font-semibold text-[#0F172A]">Linear Algebra & Differential Equations</h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#FEF9C3] text-[#A16207] text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm border border-[#FEF08A]">
                Assignment Due
              </span>
              <ChevronRight className="text-[#64748B] group-hover:text-[#FACC15] group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight } from "lucide-react";
import { useLmsData } from "@/lib/useBackend";

export default function LMSPage() {
  const { data, loading, error } = useLmsData();

  // The LMS data returns {"courses": [...], ...}
  const courses = data?.courses || [];

  return (
    <>
      <TopBar title="LMS Workspace" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">My Courses</h2>
          <p className="text-lg text-[#64748B]">Access your lecture slides, lab manuals, and assignments.</p>
        </section>

        {loading && <div className="text-center text-slate-500 py-12">Authenticating with LMS & Fetching...</div>}
        {error && <div className="bg-red-100 text-red-600 p-4 rounded-xl border border-red-200">{error}</div>}

        {!loading && !error && courses.length > 0 && (
          <div className="flex flex-col gap-4">
            {courses.map((course: any, idx: number) => (
              <Link
                key={idx}
                href={`/portal/lms/${course.id}`}
                className="bento-card-light group flex items-center justify-between cursor-pointer hover:border-[#3B82F6]"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">{course.shortname}</span>
                  <h3 className="text-lg font-semibold text-[#0F172A]">{course.name}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <ChevronRight className="text-[#64748B] group-hover:text-[#3B82F6] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

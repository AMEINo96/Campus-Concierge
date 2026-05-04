"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import { hostelIssues } from "./data";

export default function HostelServicesPage() {
  return (
    <>
      <TopBar title="Hostel Services" showBack={true} backHref="/s3c/services" />
      <main className="w-full max-w-3xl mx-auto px-6 py-12 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2 tracking-tight">Hostel Request</h1>
          <p className="text-[#64748B]">Select the type of issue you are experiencing in your hostel.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hostelIssues.map((issue) => {
            const Icon = issue.icon;
            return (
              <Link
                key={issue.id}
                href={`/s3c/services/hostel/${issue.id}`}
                className="bento-card-light relative flex items-center gap-4 p-6 text-left transition-all hover:border-[#EC4899] hover:bg-[#FDF2F8] hover:shadow-md active:scale-[0.98]"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${issue.bg}`}>
                  <Icon size={28} className={issue.color} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#0F172A] text-lg">
                    {issue.title}
                  </span>
                  <span className="text-xs text-[#64748B]">Tap to report issue</span>
                </div>
                
                <div className="ml-auto opacity-20">
                  <Icon size={40} />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}



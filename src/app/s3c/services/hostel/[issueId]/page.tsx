"use client";

import { useState, use } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import { CheckCircle2, ArrowLeft, Home } from "lucide-react";
import { hostelIssues } from "../data";

export default function IssueRequestPage({ params }: { params: Promise<{ issueId: string }> }) {
  const resolvedParams = use(params);
  const [submitted, setSubmitted] = useState(false);
  const issue = hostelIssues.find((i) => i.id === resolvedParams.issueId) || hostelIssues[0];
  const Icon = issue.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <>
        <TopBar title="Request Submitted" showBack={false} />
        <main className="w-full max-w-xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mb-8 animate-in zoom-in duration-500">
            <CheckCircle2 size={48} className="text-emerald-600" />
          </div>
          
          <div className="mb-12">
            <div className={`w-16 h-16 rounded-full ${issue.bg} flex items-center justify-center mx-auto mb-4 opacity-50`}>
              <Icon size={32} className={issue.color} />
            </div>
            <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Request Submitted!</h1>
            <p className="text-lg text-[#64748B]">
              Your <strong>{issue.title}</strong> has been logged. Our maintenance team will contact you shortly.
            </p>
          </div>

          <Link 
            href="/s3c/services/hostel"
            className="w-full bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <TopBar title="Submit Request" showBack={true} backHref="/s3c/services/hostel" />
      <main className="w-full max-w-2xl mx-auto px-6 py-12 pb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-16 h-16 rounded-full ${issue.bg} flex items-center justify-center shrink-0 shadow-sm`}>
            <Icon size={32} className={issue.color} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">{issue.title}</h1>
            <p className="text-[#64748B]">New Maintenance Request</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bento-card-light p-8 space-y-8 shadow-xl border-[#EC4899]/10">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-3">Room Number</label>
              <input 
                required
                type="text" 
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-4 focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all text-lg"
                placeholder="e.g. Attar-102"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-3">Issue Description</label>
              <textarea 
                required
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-4 min-h-[180px] focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all text-lg"
                placeholder="Please describe the problem in detail so we can bring the right tools..."
              ></textarea>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <button 
              type="submit" 
              className="w-full bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold py-5 rounded-xl transition-all shadow-lg text-lg flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Submit Request
            </button>
            
            <Link 
              href="/s3c/services/hostel"
              className="w-full text-[#64748B] hover:text-[#0F172A] font-bold py-2 text-center transition-colors text-sm flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Cancel and go back
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}

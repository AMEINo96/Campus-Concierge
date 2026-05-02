"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Wrench, Zap, Sparkles, BedDouble, HelpCircle } from "lucide-react";

export default function HostelServicesPage() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const issues = [
    { id: "plumbing", title: "Plumbing Issue", icon: Wrench, color: "text-blue-600", bg: "bg-blue-100" },
    { id: "electrical", title: "Electrical Issue", icon: Zap, color: "text-amber-600", bg: "bg-amber-100" },
    { id: "cleaning", title: "Room Cleaning", icon: Sparkles, color: "text-emerald-600", bg: "bg-emerald-100" },
    { id: "furniture", title: "Furniture Repair", icon: BedDouble, color: "text-purple-600", bg: "bg-purple-100" },
    { id: "other", title: "Other", icon: HelpCircle, color: "text-gray-600", bg: "bg-gray-100" },
  ];

  return (
    <>
      <TopBar title="Hostel Services" showBack={true} backHref="/s3c/services" />
      <main className="w-full max-w-3xl mx-auto px-6 py-12 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2 tracking-tight">Hostel Request</h1>
          <p className="text-[#64748B]">Select the type of issue you are experiencing in your hostel.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {issues.map((issue) => {
            const Icon = issue.icon;
            const isSelected = selectedIssue === issue.id;
            return (
              <button
                key={issue.id}
                onClick={() => setSelectedIssue(issue.id)}
                className={`bento-card-light flex items-center gap-4 p-5 text-left transition-all ${
                  isSelected ? "border-[#EC4899] ring-2 ring-[#EC4899]/20 bg-[#FDF2F8]" : "hover:border-[#EC4899] hover:bg-[#FDF2F8]"
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${issue.bg} flex items-center justify-center shrink-0`}>
                  <Icon size={24} className={issue.color} />
                </div>
                <span className="font-bold text-[#0F172A]">{issue.title}</span>
              </button>
            );
          })}
        </div>

        {selectedIssue && (
          <form className="bento-card-light p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">Request Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#64748B] uppercase tracking-widest mb-2">Room Number</label>
                <input 
                  type="text" 
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all"
                  placeholder="e.g. Attar-102"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#64748B] uppercase tracking-widest mb-2">Description</label>
                <textarea 
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 min-h-[120px] focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all"
                  placeholder="Please provide specific details about the issue..."
                ></textarea>
              </div>

              <button type="button" className="w-full bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold py-4 rounded-xl transition-colors shadow-md mt-4">
                Submit Request
              </button>
            </div>
          </form>
        )}
      </main>
    </>
  );
}

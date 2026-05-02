"use client";

import TopBar from "@/components/TopBar";
import { AlertTriangle, Lock, ShieldCheck } from "lucide-react";

export default function IncidentReportingPage() {
  return (
    <>
      <TopBar title="Report Incident" showBack={true} backHref="/s3c/services" />
      <main className="w-full max-w-2xl mx-auto px-6 py-12 pb-32">
        <div className="mb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle size={24} className="text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Report an Incident</h1>
          </div>
          <p className="text-[#64748B] leading-relaxed">
            Use this secure form to report sensitive incidents such as harassment, bullying, or safety concerns. Your identity will be kept strictly confidential.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-start gap-4">
          <Lock className="text-blue-600 shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>Confidentiality Notice:</strong> Information submitted here is encrypted and routed directly to the Campus Disciplinary & Safety Committee. It will not be shared with your department or peers.
          </p>
        </div>

        <form className="bento-card-light p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-2">Incident Type</label>
              <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-[#0F172A]">
                <option value="" disabled selected>Select an option...</option>
                <option value="harassment">Harassment or Discrimination</option>
                <option value="bullying">Bullying or Ragging</option>
                <option value="safety">Campus Safety Concern</option>
                <option value="academic">Academic Integrity Violation</option>
                <option value="other">Other Sensitive Issue</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-2">Date of Incident</label>
                <input type="date" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-[#0F172A]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-2">Location (Optional)</label>
                <input type="text" placeholder="e.g. Library, SCME Block" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-[#0F172A]" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-2">Detailed Description</label>
              <textarea 
                placeholder="Please describe what happened as clearly as possible..."
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 min-h-[160px] focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-[#0F172A]"
              ></textarea>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-1 flex-shrink-0">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                </div>
                <span className="text-sm text-[#475569] group-hover:text-[#0F172A] transition-colors leading-relaxed">
                  I prefer to remain completely anonymous. (If checked, we will not contact you for follow-up, but we will still investigate the matter).
                </span>
              </label>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center gap-4">
            <button type="submit" className="w-full sm:w-auto bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2">
              <ShieldCheck size={20} />
              Submit Report Securely
            </button>
            <span className="text-xs text-[#64748B] flex-1 text-center sm:text-left">
              If this is an immediate emergency, please dial campus security at <strong>111-222-333</strong>.
            </span>
          </div>
        </form>
      </main>
    </>
  );
}

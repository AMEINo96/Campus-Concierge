"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import { 
  FileText, GraduationCap, Search, BadgeCheck, Wallet, Plus, 
  Users, AlertTriangle, Info, CheckCircle2, Home, WifiOff, Loader2
} from "lucide-react";

// Map categories to their UI properties
const categoryMap: Record<string, any> = {
  academic: { title: "Academic", icon: GraduationCap, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
  finance: { title: "Finance", icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200" },
  hostel: { title: "Hostel", icon: FileText, color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
  career: { title: "Career", icon: Users, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
  student_affairs: { title: "Student Affairs", icon: Search, color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
  ict: { title: "ICT", icon: BadgeCheck, color: "text-cyan-600", bg: "bg-cyan-100", border: "border-cyan-200" },
  medical: { title: "Medical", icon: Plus, color: "text-red-600", bg: "bg-red-100", border: "border-red-200" },
  general_query: { title: "General Query", icon: AlertTriangle, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200" },
};

export default function GenericServicePage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const [submitted, setSubmitted] = useState(false);
  const [isOfflineSubmit, setIsOfflineSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slowWarning, setSlowWarning] = useState(false);
  const [failWarning, setFailWarning] = useState(false);
  
  // Safe fallback to prevent crashes if an unknown category is passed
  const categoryData = categoryMap[resolvedParams.category] || {
    title: resolvedParams.category.charAt(0).toUpperCase() + resolvedParams.category.slice(1),
    icon: Info,
    color: "text-gray-600",
    bg: "bg-gray-100",
    border: "border-gray-200"
  };

  const Icon = categoryData.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOfflineSubmit(true);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // Simulate slow network fetch if online
    setIsSubmitting(true);
    
    const slowTimer = setTimeout(() => setSlowWarning(true), 10000);
    const failTimer = setTimeout(() => {
        setSlowWarning(false);
        setFailWarning(true);
        setIsSubmitting(false);
    }, 20000);

    // Simulate standard successful fetch taking 2 seconds
    setTimeout(() => {
        clearTimeout(slowTimer);
        clearTimeout(failTimer);
        setIsSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  if (submitted) {
    return (
      <>
        <TopBar title={isOfflineSubmit ? "Request Saved Offline" : "Request Submitted"} showBack={false} />
        <main className="w-full max-w-xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <div className={`w-24 h-24 rounded-full ${isOfflineSubmit ? "bg-amber-100" : "bg-emerald-100"} flex items-center justify-center mb-8 animate-in zoom-in duration-500`}>
            {isOfflineSubmit ? <WifiOff size={48} className="text-amber-600" /> : <CheckCircle2 size={48} className="text-emerald-600" />}
          </div>
          
          <div className="mb-12">
            <div className={`w-16 h-16 rounded-full ${categoryData.bg} flex items-center justify-center mx-auto mb-4 opacity-50`}>
              <Icon size={32} className={categoryData.color} />
            </div>
            <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
              {isOfflineSubmit ? "Request Saved!" : "Request Submitted!"}
            </h1>
            <p className="text-lg text-[#64748B]">
              {isOfflineSubmit ? (
                <>Your <strong>{categoryData.title}</strong> request has been saved locally. It will be submitted automatically when you're back online.</>
              ) : (
                <>Your <strong>{categoryData.title}</strong> request has been successfully logged.</>
              )}
            </p>
          </div>

          <Link 
            href="/s3c/services"
            className="w-full bg-[#1E3A8A] hover:bg-[#15A8E3] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Home size={20} />
            Back to Services Directory
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <TopBar title={`${categoryData.title} Service`} showBack={true} backHref="/s3c/services" />
      <main className="w-full max-w-2xl mx-auto px-4 md:px-6 py-8 md:py-12 pb-32 flex flex-col gap-6">
        
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${categoryData.bg} flex items-center justify-center shrink-0 shadow-sm border ${categoryData.border}`}>
            <Icon size={28} className={categoryData.color} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight">{categoryData.title}</h1>
            <p className="text-sm md:text-base text-[#64748B]">Submit a new service request</p>
          </div>
        </div>

        <section className={`bento-card-light p-5 md:p-8 rounded-2xl shadow-sm border ${categoryData.border}`}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest">
                Request Title
              </label>
              <input 
                required
                type="text" 
                placeholder="Brief summary of your request" 
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-[#0F172A]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest">
                Detailed Description
              </label>
              <textarea 
                required
                rows={5}
                placeholder="Provide detailed information so we can assist you better..." 
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-[#0F172A]"
              ></textarea>
            </div>

            {resolvedParams.category !== "custom" && (
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest">
                  Urgency Level
                </label>
                <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-[#0F172A]">
                  <option value="low">Low (Normal Priority)</option>
                  <option value="medium">Medium (Important)</option>
                  <option value="high">High (Urgent)</option>
                </select>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`text-white font-bold w-full mt-4 py-4 px-6 rounded-xl tracking-wide shadow-md transition-all ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#1E3A8A] hover:bg-[#15A8E3] active:scale-[0.98]"}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={20} className="animate-spin" /> 
                  Submitting...
                </span>
              ) : "Submit Request"}
            </button>
            
            {/* Network condition feedback messages */}
            {slowWarning && !failWarning && (
                <div className="bg-amber-50 border border-amber-200 text-amber-700 p-4 rounded-xl flex items-center gap-3 animate-in fade-in">
                    <Loader2 size={20} className="animate-spin text-amber-500 shrink-0" />
                    <span className="text-sm font-bold">Taking longer than usual… still trying.</span>
                </div>
            )}
            {failWarning && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex flex-col gap-3 animate-in fade-in">
                    <div className="flex items-center gap-3">
                        <AlertTriangle size={20} className="text-red-500 shrink-0" />
                        <span className="text-sm font-bold">Something went wrong. Check your connection.</span>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => { setFailWarning(false); handleSubmit(new Event('submit') as unknown as React.FormEvent); }}
                        className="bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-4 rounded-lg self-start text-sm transition-colors"
                    >
                        Retry Submission
                    </button>
                </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

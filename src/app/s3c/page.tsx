import Link from "next/link";
import TopBar from "@/components/TopBar";
import S3CBottomNav from "@/components/S3CBottomNav";
import {
  Grip, GraduationCap, Utensils, Laptop, HeartPulse,
  ArrowRight, Bot, Zap, MessageCircle, Navigation
} from "lucide-react";

export default function S3CServicesDashboardPage() {
  return (
    <>
      <TopBar title="S3C SERVICES" showBack={false} />

      <main className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-8 md:py-12 pb-36">

        {/* ── Hero heading ─────────────────────────────────────── */}
        <div className="mb-6 md:mb-8 max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-[48px] font-bold text-[#0F172A] tracking-tight leading-[1.1] mb-2">
            How can we help you today?
          </h1>
          <p className="text-sm md:text-[18px] text-[#64748B] font-medium max-w-lg leading-relaxed mx-auto md:mx-0">
            Your unified dashboard for campus life, schedules, and support services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ── Browse Services bento ───────────────────────────── */}
          <Link
            href="/s3c/services"
            className="lg:col-span-7 bg-white border border-[#E6EEF8] rounded-[22px] shadow-[0_8px_24px_rgba(15,23,42,0.04)] p-6 md:p-8 flex flex-col group transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:bg-[#F8FAFC] hover:border-[#BFDBFE] hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)] relative overflow-hidden"
          >
            <div className="relative z-10 flex-grow">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#EFF6FF] flex items-center justify-center border border-[#DBEAFE] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors duration-[250ms]">
                    <Grip className="w-5 h-5 md:w-5 md:h-5 text-[#3B82F6] group-hover:text-white transition-colors duration-[250ms]" />
                  </div>
                  <span className="text-[11px] md:text-[12px] font-bold text-[#3B82F6] group-hover:text-[#2563EB] uppercase tracking-[0.15em] transition-colors duration-[250ms]">Service Directory</span>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:text-[#2563EB] transition-colors duration-[250ms] shadow-sm">
                  <Navigation className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#64748B] group-hover:text-[#2563EB] transition-colors duration-[250ms]" />
                </div>
              </div>

              <h2 className="text-3xl md:text-[34px] font-bold text-[#0F172A] mb-2 md:mb-3 leading-tight tracking-tight">Browse Services</h2>
              <p className="text-sm md:text-[16px] text-[#64748B] mb-8 md:mb-10 leading-relaxed max-w-md">
                Access academic advising, IT support, dining plans, and facility reservations in one centralized location.
              </p>

              {/* Category tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-2 md:mt-0">
                {[
                  { icon: GraduationCap, label: "Academics", color: "#3B82F6", bg: "bg-blue-50/50" },
                  { icon: Utensils, label: "Dining", color: "#F59E0B", bg: "bg-amber-50/50" },
                  { icon: Laptop, label: "IT Help", color: "#3B82F6", bg: "bg-blue-50/50" },
                  { icon: HeartPulse, label: "Health", color: "#EF4444", bg: "bg-red-50/50" },
                ].map((cat) => (
                  <div
                    key={cat.label}
                    className={`flex flex-col items-center gap-2 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-[20px] border border-gray-100 bg-white transition-all duration-[250ms] hover:border-[#E2E8F0] hover:shadow-md active:scale-[0.96] cursor-pointer`}
                  >
                    <div
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border transition-all duration-[250ms] ${cat.bg} border-transparent group-hover:scale-105`}
                    >
                      <cat.icon strokeWidth={2} style={{ color: cat.color }} className="w-5 h-5 md:w-[26px] md:h-[26px]" />
                    </div>
                    <div className="flex flex-col items-center gap-1 md:gap-1.5">
                      <span className="text-[10px] md:text-[11px] font-bold text-[#0F172A] uppercase tracking-widest text-center">{cat.label}</span>
                      <div className="w-4 md:w-5 h-[2px] md:h-[3px] rounded-full" style={{ backgroundColor: cat.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>

          {/* ── Chatbot bento ──────────────────────────────────── */}
          <Link
            href="/s3c/chat"
            className="lg:col-span-5 rounded-[22px] p-6 md:p-9 flex flex-col relative overflow-hidden group cursor-pointer transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(11,47,107,0.3)] active:scale-[0.98]"
            style={{
              background: "linear-gradient(145deg, #0B2F6B 0%, #0E4092 100%)",
            }}
          >
            {/* Stars decoration */}
            <div className="absolute top-8 right-12 text-[#FACC15] animate-pulse">✨</div>
            <div className="absolute top-24 left-8 text-[#60A5FA] opacity-30 scale-75">✨</div>
            <div className="absolute bottom-24 right-8 text-[#60A5FA] opacity-30 scale-50">✨</div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-6 md:mb-8">
                <div className="w-9 h-9 rounded-full bg-[#FACC15] flex items-center justify-center shadow-lg">
                  <Zap size={16} className="text-[#0B2F6B]" />
                </div>
                <span className="text-[11px] md:text-[12px] font-bold text-[#FACC15] uppercase tracking-[0.2em]">Instant Guide</span>
              </div>

              <div className="flex items-start gap-4 mb-8 md:mb-10 flex-grow">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-[34px] font-bold text-white mb-3 md:mb-4 leading-tight tracking-tight">AI Assistant</h2>
                  <p className="text-sm md:text-[16px] text-blue-100/90 leading-relaxed">
                    Ask about schedules, campus locations, or university policies for immediate support.
                  </p>
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-[#36C5F4] blur-3xl opacity-40 rounded-full"></div>
                  <Bot size={75} strokeWidth={1} className="text-white relative z-10 transition-transform group-hover:scale-110 duration-500" />
                </div>
              </div>

              {/* CTA button */}
              <div
                className="w-full flex items-center justify-between px-6 md:px-7 py-3.5 md:py-4.5 rounded-full font-bold text-[13px] md:text-[14px] text-[#0B2F6B] uppercase tracking-[0.15em] transition-all hover:brightness-110 active:scale-[0.98] shadow-xl"
                style={{
                  background: "#FACC15",
                }}
              >
                <span>Start Chat</span>
                <ArrowRight size={20} strokeWidth={2.5} />
              </div>
            </div>
          </Link>
        </div>
      </main>

      <S3CBottomNav />
    </>
  );
}

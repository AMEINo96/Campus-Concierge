import Link from "next/link";
import { GraduationCap, Compass, ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";

export default function GatewayPage() {
  return (
    <>
      <TopBar />
      <main className="flex-grow px-4 md:px-12 pt-4 md:pt-2 pb-32 max-w-[1060px] mx-auto w-full">
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-[42px] leading-[1.1] tracking-tight font-extrabold text-[#0B1426] dark:text-white mb-2">
            Welcome back, Amina
          </h1>
          <p className="text-base md:text-[17px] font-medium text-[#64748B] dark:text-slate-400">
            Where would you like to go today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <Link
            href="/portal"
            className="group block relative overflow-hidden rounded-[28px] p-5 md:p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-[250ms] ease-out hover:-translate-y-2 hover:bg-[#F5F9FF]/90 hover:border-[#BFDBFE] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] active:scale-[0.98] cursor-pointer"
          >
            {/* Line Art Illustration - Preserved exactly as requested */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img 
                src="/images/gateway-library.png" 
                alt="NUST Central Library" 
                className="absolute right-0 bottom-0 h-[120%] w-auto object-cover object-bottom opacity-[0.03] mix-blend-multiply transition-all duration-300 ease-out group-hover:scale-[1.03] dark:mix-blend-screen dark:[filter:brightness(0)_saturate(100%)_invert(79%)_sepia(25%)_saturate(1206%)_hue-rotate(177deg)_brightness(102%)_contrast(101%)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-slate-800 dark:via-slate-800/80 group-hover:from-[#F5F9FF]/40 transition-colors duration-300" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px] md:min-h-[180px]">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#EEF4FF] dark:bg-slate-700/80 flex items-center justify-center border border-[#E0E7FF] dark:border-slate-600 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-[250ms]">
                  <GraduationCap
                    strokeWidth={1.5}
                    className="w-7 h-7 md:w-[30px] md:h-[30px] text-[#2563EB] group-hover:text-white transition-colors duration-[250ms]"
                  />
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[#94A3B8] bg-white/40 dark:bg-slate-800/50 backdrop-blur-sm group-hover:translate-x-2 group-hover:text-[#2563EB] group-hover:bg-white transition-all duration-[250ms]">
                  <ArrowRight strokeWidth={2} className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-[26px] leading-[1.2] font-bold text-[#0F172A] dark:text-slate-50 group-hover:text-[#1E40AF] mb-1 transition-colors duration-[250ms]">
                  Student Portal
                </h2>
                <p className="font-bold text-[10px] md:text-[11px] tracking-[0.1em] text-[#94A3B8] mb-3 uppercase group-hover:text-[#3B82F6] transition-colors duration-[250ms]">
                  LMS & QALAM ECOSYSTEM
                </p>
                <p className="text-sm md:text-[15px] leading-relaxed text-[#475569] dark:text-slate-300 transition-colors duration-[250ms] max-w-[280px] group-hover:text-[#1E3A8A]">
                  Access your courses, attendance, grades, and administrative updates in one place.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/s3c"
            className="group block relative overflow-hidden rounded-[28px] p-5 md:p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-[250ms] ease-out hover:-translate-y-2 hover:bg-[#F0FDF4]/90 hover:border-[#BBF7D0] hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] active:scale-[0.98] cursor-pointer"
          >
            {/* Line Art Illustration - Preserved exactly as requested */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img 
                src="/images/gateway-s3c.png" 
                alt="NUST S3C Office" 
                className="absolute right-0 bottom-0 h-[120%] w-auto object-cover object-bottom opacity-[0.03] mix-blend-multiply transition-all duration-300 ease-out group-hover:scale-[1.03] dark:mix-blend-screen dark:[filter:brightness(0)_saturate(100%)_invert(79%)_sepia(25%)_saturate(1206%)_hue-rotate(177deg)_brightness(102%)_contrast(101%)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-slate-800 dark:via-slate-800/80 group-hover:from-[#F0FDF4]/40 transition-colors duration-300" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px] md:min-h-[180px]">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F0FDF4] dark:bg-slate-700/80 flex items-center justify-center border border-[#DCFCE7] dark:border-slate-600 group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-[250ms]">
                  <Compass
                    strokeWidth={1.5}
                    className="w-7 h-7 md:w-[30px] md:h-[30px] text-[#10B981] group-hover:text-white transition-colors duration-[250ms]"
                  />
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[#94A3B8] bg-white/40 dark:bg-slate-800/50 backdrop-blur-sm group-hover:translate-x-2 group-hover:text-[#10B981] group-hover:bg-white transition-all duration-[250ms]">
                  <ArrowRight strokeWidth={2} className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-[26px] leading-[1.2] font-bold text-[#0F172A] dark:text-slate-50 group-hover:text-[#065F46] mb-1 transition-colors duration-[250ms]">
                  S3C Support
                </h2>
                <p className="font-bold text-[10px] md:text-[11px] tracking-[0.1em] text-[#94A3B8] mb-3 uppercase opacity-0 select-none group-hover:opacity-100 group-hover:text-[#10B981] transition-all duration-[250ms]">
                  SERVICES & DIRECTORY
                </p>
                <p className="text-sm md:text-[15px] leading-relaxed text-[#475569] dark:text-slate-300 transition-colors duration-[250ms] max-w-[280px] group-hover:text-[#064E3B]">
                  Browse campus services, manage hostel requests, and get instant help via chat.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

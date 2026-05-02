import Link from "next/link";
import { GraduationCap, Compass, ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";

export default function GatewayPage() {
  return (
    <>
      <TopBar />
      <main className="flex-grow px-4 md:px-12 pt-12 pb-32 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-[40px] leading-[1.2] tracking-tight font-bold text-slate-900 dark:text-white mb-2">
            Welcome back, Amein
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Where would you like to go today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/portal"
            className="group block bento-card relative overflow-hidden min-h-[220px] bg-white dark:bg-slate-800 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-slate-200 dark:border-slate-600 hover:border-cyan-300 hover:shadow-cyan-100/50 hover:shadow-lg dark:hover:border-cyan-700 dark:hover:shadow-cyan-900/50"
          >
            {/* Line Art Illustration */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img 
                src="/images/gateway-library.png" 
                alt="NUST Central Library" 
                className="h-full w-full object-cover object-bottom opacity-[0.06] mix-blend-multiply transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-[0.14] md:opacity-[0.1] dark:opacity-[0.1] dark:mix-blend-screen dark:group-hover:opacity-[0.16] dark:[filter:brightness(0)_saturate(100%)_invert(79%)_sepia(25%)_saturate(1206%)_hue-rotate(177deg)_brightness(102%)_contrast(101%)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-slate-800 dark:via-slate-800/65" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-lg bg-cyan-50 dark:bg-slate-700/80 flex items-center justify-center border border-slate-200 dark:border-slate-600 group-hover:bg-[#15A8E3] group-hover:border-[#15A8E3] transition-colors shadow-sm">
                  <GraduationCap
                    size={36}
                    strokeWidth={2}
                    className="text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors"
                  />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm group-hover:translate-x-1 group-hover:text-[#15A8E3] transition-transform duration-300">
                  <ArrowRight size={24} strokeWidth={2} />
                </div>
              </div>
              <div className="relative z-10 w-[68%] rounded-2xl bg-gradient-to-br from-white/80 via-white/50 to-transparent p-3 md:w-[60%] dark:from-slate-800/90 dark:via-slate-800/65 dark:to-transparent">
                <h2 className="text-[28px] leading-[1.3] font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Student Portal
                </h2>
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold text-slate-600 dark:text-slate-300 mb-4 uppercase">
                  (LMS &amp; Qalam)
                </p>
                <p className="text-base text-slate-600 dark:text-slate-200">
                  Access LMS courses, check attendance, view grades, and Qalam updates.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/s3c"
            className="group block bento-card relative overflow-hidden min-h-[220px] bg-white dark:bg-slate-800 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-slate-200 dark:border-slate-600 hover:border-cyan-300 hover:shadow-cyan-100/50 hover:shadow-lg dark:hover:border-cyan-700 dark:hover:shadow-cyan-900/50"
          >
            {/* Line Art Illustration */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img 
                src="/images/gateway-s3c.png" 
                alt="NUST S3C Office" 
                className="h-full w-full object-cover object-bottom opacity-[0.06] mix-blend-multiply transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-[0.14] md:opacity-[0.1] dark:opacity-[0.1] dark:mix-blend-screen dark:group-hover:opacity-[0.16] dark:[filter:brightness(0)_saturate(100%)_invert(79%)_sepia(25%)_saturate(1206%)_hue-rotate(177deg)_brightness(102%)_contrast(101%)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-slate-800 dark:via-slate-800/65" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-lg bg-cyan-50 dark:bg-slate-700/80 flex items-center justify-center border border-slate-200 dark:border-slate-600 group-hover:bg-[#15A8E3] group-hover:border-[#15A8E3] transition-colors shadow-sm">
                  <Compass
                    size={36}
                    strokeWidth={2}
                    className="text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors"
                  />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm group-hover:translate-x-1 group-hover:text-[#15A8E3] transition-transform duration-300">
                  <ArrowRight size={24} strokeWidth={2} />
                </div>
              </div>
              <div className="relative z-10 w-[68%] rounded-2xl bg-gradient-to-br from-white/80 via-white/50 to-transparent p-3 md:w-[60%] dark:from-slate-800/90 dark:via-slate-800/65 dark:to-transparent">
                <h2 className="text-[28px] leading-[1.3] font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  S3C Support
                </h2>
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold text-slate-600 dark:text-slate-300 mb-4 uppercase">
                  &nbsp;
                </p>
                <p className="text-base text-slate-600 dark:text-slate-200">
                  Browse campus services, manage hostel requests, IT help, and chatbot.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

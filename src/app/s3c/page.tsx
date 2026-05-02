import Link from "next/link";
import TopBar from "@/components/TopBar";
import { Grip, GraduationCap, Utensils, Laptop, HeartPulse, ArrowRight } from "lucide-react";

export default function S3CServicesDashboardPage() {
  return (
    <>
      <TopBar title="S3C Services" showBack={false} />
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 pb-32">
        <header className="mb-12 max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            How can we help you today?
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Your unified dashboard for campus life, schedules, and support.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Browse Services Bento */}
          <Link href="/s3c/services" className="lg:col-span-7 bento-card-light flex flex-col cursor-pointer group relative overflow-hidden transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98]">
            {/* Building Illustration */}
            <div 
              className="absolute right-0 bottom-0 w-[60%] h-[90%] opacity-30 dark:opacity-10 z-0 pointer-events-none mix-blend-multiply dark:mix-blend-screen"
              style={{
                backgroundImage: `url('/building.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest block mb-2">
                  DIRECTORY
                </span>
                <h2 className="text-[28px] font-bold text-slate-900 dark:text-white">Browse Services</h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#DBEAFE] dark:bg-slate-700 flex items-center justify-center group-hover:bg-[#3B82F6] transition-colors duration-300">
                <Grip size={24} strokeWidth={2} className="text-[#3B82F6] group-hover:text-white transition-colors" />
              </div>
            </div>
            
            <p className="text-base text-slate-600 dark:text-slate-300 mb-8 flex-grow relative z-10">
              Access academic advising, IT support, dining plans, and facility reservations all in one centralized location.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-slate-700/50 group-hover:bg-[#DBEAFE]/30 dark:group-hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">
                <GraduationCap size={24} strokeWidth={2} className="text-[#1E3A8A] dark:text-[#93C5FD] mb-2" />
                <span className="text-[10px] font-bold text-slate-900 dark:text-slate-200 text-center uppercase tracking-widest">
                  Academics
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-slate-700/50 group-hover:bg-[#DBEAFE]/30 dark:group-hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">
                <Utensils size={24} strokeWidth={2} className="text-[#1E3A8A] dark:text-[#93C5FD] mb-2" />
                <span className="text-[10px] font-bold text-slate-900 dark:text-slate-200 text-center uppercase tracking-widest">
                  Dining
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-slate-700/50 group-hover:bg-[#DBEAFE]/30 dark:group-hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">
                <Laptop size={24} strokeWidth={2} className="text-[#1E3A8A] dark:text-[#93C5FD] mb-2" />
                <span className="text-[10px] font-bold text-slate-900 dark:text-slate-200 text-center uppercase tracking-widest">
                  IT Help
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-slate-700/50 group-hover:bg-[#DBEAFE]/30 dark:group-hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">
                <HeartPulse size={24} strokeWidth={2} className="text-[#1E3A8A] dark:text-[#93C5FD] mb-2" />
                <span className="text-[10px] font-bold text-slate-900 dark:text-slate-200 text-center uppercase tracking-widest">
                  Health
                </span>
              </div>
            </div>
          </Link>

          {/* Chatbot Guide Bento */}
          <Link
            href="/s3c/chat"
            className="lg:col-span-5 bg-gradient-to-br from-[#15A8E3] to-[#0070B8] rounded-2xl p-8 flex flex-col relative overflow-hidden group cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest block mb-2">
                INSTANT HELP
              </span>
              <div className="flex flex-row items-center gap-4 mb-8 flex-grow">
                <div className="flex-1">
                  <h2 className="text-[28px] font-bold text-white mb-4">Chatbot Guide</h2>
                  <p className="text-[14px] text-white/90 leading-relaxed">
                    Ask questions about your schedule, find campus locations, or get immediate answers to common university policy inquiries.
                  </p>
                </div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                  <img
                    alt="Chatbot Robot"
                    className="w-full h-full object-contain mix-blend-luminosity brightness-200"
                    src="https://lh3.googleusercontent.com/aida/ADBb0uj14Zt2xc9Y5WgNFmlwfwpKJqK3RDQJ45mu_XE3nXN5EJMXMYWKS6QRsdOY_pmzqVUCaJn31qRp0gbfJHu4Lt8OAc4NyudtewgIl2TyiqTOxFRayQG6gSNpAefu52_bPrbSR1I8ChSkavZwx7LiNogXaesXN7iAGRJNOrRDTnmfUDhgsuqs67m_PM22wnjK6LyGOrvqeORVIqgKIZVwxh3vh00jc54NWh9PFNnMLmMs03QMLNB61_-QEfeqVtk6H3rrY45mEhzwtjg"
                  />
                </div>
              </div>
              <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold uppercase tracking-widest px-6 py-4 rounded-xl flex items-center justify-between hover:bg-white hover:text-[#3B82F6] transition-colors w-full mt-auto group/btn">
                START CONVERSATION
                <ArrowRight size={20} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

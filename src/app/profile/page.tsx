import TopBar from "@/components/TopBar";
import S3CBottomNav from "@/components/S3CBottomNav";
import { User, Settings, LogOut, FileText } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <TopBar title="My Profile" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6 flex flex-col items-center text-center gap-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-primary)]">
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0uihtiEBdCvCO2_LQjzdIk0AT6zjGn7dxBRGKkgSf_tJr3csMxYsdr8HlDahhINq3aszr9_pPCWPCa4LmZlrGsBD0yatwrf9rOku20lvaVqNXnnwDtSOX1sfci-mD7dBcpLB2SUd3cXk55djW0mFwv5jZG86qWNZuOhuF_m53leMULOYWlr9A1gbGYIJggwpUuodpfIvs3wLbn1PcOQar3Lwbv9DkCcje3Uci8gT31TPohS14PiiBpeeCatVsB9292SI1NGazbZ1tUc" 
              alt="Profile avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[32px] leading-[1.2] font-bold text-[#171717]">Amein</h2>
            <p className="text-[#474747]">BS-AI 2A • 345678</p>
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <div className="bento-card flex flex-col gap-2">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold mb-2">Account Settings</h3>
            
            <button className="flex items-center justify-between p-4 hover:bg-[#f9f9f8] rounded-lg transition-colors border border-transparent hover:border-[#E2E2E2]">
              <div className="flex items-center gap-3">
                <User size={24} className="text-[#171717]" />
                <span className="text-lg font-semibold text-[#171717]">Personal Information</span>
              </div>
            </button>
            
            <button className="flex items-center justify-between p-4 hover:bg-[#f9f9f8] rounded-lg transition-colors border border-transparent hover:border-[#E2E2E2]">
              <div className="flex items-center gap-3">
                <FileText size={24} className="text-[#171717]" />
                <span className="text-lg font-semibold text-[#171717]">Academic Records</span>
              </div>
            </button>
            
            <button className="flex items-center justify-between p-4 hover:bg-[#f9f9f8] rounded-lg transition-colors border border-transparent hover:border-[#E2E2E2]">
              <div className="flex items-center gap-3">
                <Settings size={24} className="text-[#171717]" />
                <span className="text-lg font-semibold text-[#171717]">Preferences</span>
              </div>
            </button>
          </div>

          <Link href="/" className="bento-card-light flex items-center justify-center p-4 hover:bg-[#f9f9f8] transition-colors mt-4 border border-red-500 text-red-500 font-semibold gap-2">
            <LogOut size={20} />
            Sign Out
          </Link>
        </div>
      </main>
      <S3CBottomNav />
    </>
  );
}

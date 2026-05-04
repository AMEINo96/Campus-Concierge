import TopBar from "@/components/TopBar";
import S3CBottomNav from "@/components/S3CBottomNav";
import { ClipboardList, Clock, CheckCircle } from "lucide-react";

export default function RequestsPage() {
  return (
    <>
      <TopBar title="My Requests" />
      <main className="w-full max-w-4xl mx-auto px-6 py-8 md:py-12 pb-32 flex flex-col gap-6 md:gap-8">
        <section className="mb-2 md:mb-4 text-center md:text-left">
          <h2 className="text-2xl md:text-[42px] leading-[1.2] font-bold text-[#0F172A] mb-2 tracking-tight">My Requests</h2>
          <p className="text-sm md:text-[18px] text-[#64748B] font-medium">Track your active and past service requests in real-time.</p>
        </section>

        <div className="flex flex-col gap-5">
          <div className="group flex flex-col gap-4 p-5 md:p-6 rounded-[22px] bg-white border border-[#E6EEF8] shadow-sm transition-all duration-[250ms] ease-in-out hover:bg-[#F8FAFC] hover:border-[#BFDBFE] hover:shadow-md hover:-translate-y-1 cursor-pointer">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 md:pb-5">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <ClipboardList size={22} />
                </div>
                <h3 className="text-lg md:text-[20px] font-bold text-[#0F172A]">WiFi Connectivity Issue</h3>
              </div>
              <span className="bg-yellow-50 text-yellow-700 border border-yellow-100 text-[10px] md:text-[11px] px-3 md:px-4 py-1 md:py-1.5 rounded-full font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm transition-colors group-hover:bg-yellow-100/50">
                <Clock size={14} strokeWidth={2.5} /> In Progress
              </span>
            </div>
            <p className="text-[#64748B] text-xs md:text-[14px] font-medium px-1">Submitted 2 days ago in <span className="text-[#0F172A] font-bold">IT Support</span></p>
          </div>

          <div className="group flex flex-col gap-4 p-5 md:p-6 rounded-[22px] bg-white border border-[#E6EEF8] shadow-sm transition-all duration-[250ms] ease-in-out hover:bg-[#F8FAFC] hover:border-[#BFDBFE] hover:shadow-md hover:-translate-y-1 cursor-pointer">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 md:pb-5">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <ClipboardList size={22} />
                </div>
                <h3 className="text-lg md:text-[20px] font-bold text-[#0F172A]">Room Cleaning</h3>
              </div>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] md:text-[11px] px-3 md:px-4 py-1 md:py-1.5 rounded-full font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm transition-colors group-hover:bg-emerald-100/50">
                <CheckCircle size={14} strokeWidth={2.5} /> Resolved
              </span>
            </div>
            <p className="text-[#64748B] text-xs md:text-[14px] font-medium px-1">Submitted 1 week ago in <span className="text-[#0F172A] font-bold">Hostel Maintenance</span></p>
          </div>
        </div>
      </main>
      <S3CBottomNav />
    </>
  );
}

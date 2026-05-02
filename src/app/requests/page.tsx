import TopBar from "@/components/TopBar";
import S3CBottomNav from "@/components/S3CBottomNav";
import { ClipboardList, Clock, CheckCircle } from "lucide-react";

export default function RequestsPage() {
  return (
    <>
      <TopBar title="My Requests" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">My Requests</h2>
          <p className="text-lg text-[#474747]">Track your active and past service requests.</p>
        </section>

        <div className="flex flex-col gap-4">
          <div className="bento-card flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-[#E2E2E2] pb-4">
              <div className="flex items-center gap-3">
                <ClipboardList size={24} className="text-[#171717]" />
                <h3 className="text-lg font-bold text-[#171717]">WiFi Connectivity Issue</h3>
              </div>
              <span className="bg-[#E4E613]/20 text-[#96960d] font-[family-name:var(--font-space-grotesk)] text-[12px] px-3 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-1">
                <Clock size={14} /> In Progress
              </span>
            </div>
            <p className="text-[#474747] text-sm">Submitted 2 days ago in IT Support</p>
          </div>

          <div className="bento-card-light flex flex-col gap-4 bg-[#f9f9f8]">
            <div className="flex justify-between items-center border-b border-[#E2E2E2] pb-4">
              <div className="flex items-center gap-3">
                <ClipboardList size={24} className="text-[#474747]" />
                <h3 className="text-lg font-bold text-[#171717]">Room Cleaning</h3>
              </div>
              <span className="bg-[#15A8E3]/10 text-[#15A8E3] font-[family-name:var(--font-space-grotesk)] text-[12px] px-3 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-1">
                <CheckCircle size={14} /> Resolved
              </span>
            </div>
            <p className="text-[#474747] text-sm">Submitted 1 week ago in Hostel Maintenance</p>
          </div>
        </div>
      </main>
      <S3CBottomNav />
    </>
  );
}

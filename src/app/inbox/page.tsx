import TopBar from "@/components/TopBar";
import S3CBottomNav from "@/components/S3CBottomNav";
import { Mail, Bell } from "lucide-react";

export default function InboxPage() {
  return (
    <>
      <TopBar title="Inbox & Notifications" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">Inbox</h2>
          <p className="text-lg text-[#474747]">Stay updated with messages and alerts.</p>
        </section>

        <div className="flex flex-col gap-4">
          <div className="bento-card-light flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#15A8E3]/20 flex items-center justify-center text-[var(--color-primary)]">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#171717]">IT Support Request Updated</h3>
              <p className="text-sm text-[#474747] mt-1">Your request #REQ-8910 has been marked as resolved.</p>
              <span className="text-xs text-[#6e7880] mt-2 block">2 hours ago</span>
            </div>
          </div>

          <div className="bento-card-light flex items-start gap-4 bg-[#f9f9f8]">
            <div className="w-12 h-12 rounded-full bg-[#eeeeed] flex items-center justify-center text-[#474747]">
              <Bell size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#171717]">Campus Maintenance Notice</h3>
              <p className="text-sm text-[#474747] mt-1">Water supply in Hostel A will be disrupted from 2PM to 4PM.</p>
              <span className="text-xs text-[#6e7880] mt-2 block">1 day ago</span>
            </div>
          </div>
        </div>
      </main>
      <S3CBottomNav />
    </>
  );
}

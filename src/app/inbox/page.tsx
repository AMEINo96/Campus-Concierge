"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCheck, Check, Bell } from "lucide-react";
import TopBar from "@/components/TopBar";

// Mock data grouped by date
const initialGroups = [
  {
    title: "Today",
    items: [
      { id: 1, title: "Course materials updated", subtitle: "CS-211 • 2 hours ago", read: false, type: "lms", route: "/portal/lms" },
      { id: 2, title: "Quiz marks released", subtitle: "AI-301 • 5 hours ago", read: false, type: "marks", route: "/portal/qalam" },
    ]
  },
  {
    title: "Yesterday",
    items: [
      { id: 3, title: "Hackathon 2024", subtitle: "Event • Yesterday", read: false, type: "event", route: "/portal/announcements/detail?title=Hackathon+2024&date=May+20&description=Join+the+annual+coding+competition." },
      { id: 4, title: "Hostel Fee Due", subtitle: "Finance • Yesterday", read: true, type: "finance", route: "/s3c/services/finance" },
    ]
  },
  {
    title: "This Week",
    items: [
      { id: 5, title: "Midterm Schedule Published", subtitle: "Academic • 3 days ago", read: true, type: "academic", route: "/s3c/services/academic" },
      { id: 6, title: "System Maintenance", subtitle: "ICT Support • 5 days ago", read: true, type: "ict", route: "/s3c/services/ict" },
    ]
  }
];

export default function InboxPage() {
  const router = useRouter();
  const [groups, setGroups] = useState(initialGroups);

  const totalUnread = groups.flatMap(g => g.items).filter(i => !i.read).length;

  const markAsRead = (id: number) => {
    setGroups(prev => prev.map(group => ({
      ...group,
      items: group.items.map(item => item.id === id ? { ...item, read: true } : item)
    })));
  };

  const markAllAsRead = () => {
    setGroups(prev => prev.map(group => ({
      ...group,
      items: group.items.map(item => ({ ...item, read: true }))
    })));
  };

  const handleItemClick = (item: any) => {
    if (!item.read) markAsRead(item.id);
    router.push(item.route);
  };

  return (
    <>
      <TopBar title="All Notifications" showBack={true} backHref="/portal" />
      <main className="w-full max-w-3xl mx-auto px-4 py-6 md:py-8 pb-36">
        
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3">
              Inbox <Bell size={24} className="md:w-7 md:h-7 text-[#0B2F6B]" strokeWidth={2.5} />
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium">You have {totalUnread} unread notifications</p>
          </div>
          {totalUnread > 0 && (
            <button 
              onClick={markAllAsRead} 
              className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 md:px-4 py-2 rounded-xl font-bold transition-all active:scale-95 text-[11px] md:text-sm"
            >
              <CheckCheck size={16} className="md:w-[18px] md:h-[18px]" />
              Mark All Read
            </button>
          )}
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {groups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h2 className="text-[10px] md:text-[13px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">
                {group.title}
              </h2>
              <div className="flex flex-col gap-3">
                {group.items.map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => handleItemClick(item)}
                    className={`relative p-4 md:p-5 rounded-2xl flex items-start gap-3 md:gap-4 transition-all duration-200 cursor-pointer border ${
                      item.read 
                        ? "bg-white border-slate-100 opacity-70 hover:opacity-100" 
                        : "bg-white border-blue-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Unread dot */}
                    <div className="pt-1.5 shrink-0 w-3 md:w-4 flex justify-center">
                      {!item.read && <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/40" />}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-sm md:text-[16px] ${item.read ? "font-semibold text-slate-700" : "font-bold text-slate-900"}`}>
                        {item.title}
                      </h3>
                      <p className="text-[12px] md:text-[14px] text-slate-500 mt-1 font-medium">{item.subtitle}</p>
                    </div>

                    {!item.read && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); markAsRead(item.id); }}
                        className="p-1.5 md:p-2 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-full transition-colors"
                        title="Mark as read"
                      >
                        <Check size={16} className="md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}

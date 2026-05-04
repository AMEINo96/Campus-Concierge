"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Star, Gift, ChevronRight, X, Calendar, Bell } from "lucide-react";

export default function AnnouncementsPage() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any | null>(null);

  const announcements = [
    {
      id: 1,
      title: "Midterm Exams",
      dateRange: "May 20 – May 24",
      icon: Star,
      iconColor: "text-[#F59E0B]",
      bg: "bg-[#FFFBEB]",
      border: "border-[#FEF3C7]",
      hoverBorder: "hover:border-[#FDE68A]",
      iconBg: "bg-[#F59E0B]/10",
      description: "Midterm exams for all undergraduate programs will commence on May 20th. Please ensure you have cleared all your dues to receive your examination slip. Seating plans will be uploaded to the LMS 48 hours prior to your first exam."
    },
    {
      id: 2,
      title: "Hackathon 2024",
      dateRange: "Register by May 15",
      icon: Gift,
      iconColor: "text-[#3B82F6]",
      bg: "bg-[#EFF6FF]",
      border: "border-[#DBEAFE]",
      hoverBorder: "hover:border-[#BFDBFE]",
      iconBg: "bg-[#3B82F6]/10",
      description: "Join the largest university hackathon of the year! Form teams of 3-4 and build innovative solutions over 48 hours. Winners will receive cash prizes and internship opportunities at top tech firms."
    },
    {
      id: 3,
      title: "Campus Maintenance",
      dateRange: "Saturday, May 18",
      icon: Calendar,
      iconColor: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      hoverBorder: "hover:border-emerald-200",
      iconBg: "bg-emerald-100",
      description: "The main library and SCME block will be closed for routine electrical maintenance this Saturday from 8:00 AM to 4:00 PM. Please plan your study sessions accordingly."
    },
    {
      id: 4,
      title: "New AI Club Registrations",
      dateRange: "Closing May 12",
      icon: Bell,
      iconColor: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      hoverBorder: "hover:border-purple-200",
      iconBg: "bg-purple-100",
      description: "The NUST Artificial Intelligence Society (NAIS) is opening its doors for new members. If you're interested in machine learning, neural networks, or just want to learn more about the future of tech, sign up now on the S3C Clubs page."
    }
  ];

  return (
    <>
      <TopBar title="All Announcements" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-8 md:py-12 pb-32">
        <div className="mb-6 md:mb-10 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">Announcements</h1>
          <p className="text-sm md:text-lg text-[#64748B]">Stay updated with the latest campus news and events.</p>
        </div>

        <div className="flex flex-col gap-4">
          {announcements.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedAnnouncement(item)}
              className={`flex items-center justify-between p-4 md:p-5 rounded-2xl ${item.bg} border ${item.border} ${item.hoverBorder} hover:shadow-md transition-all duration-[250ms] cursor-pointer group active:scale-[0.99]`}
            >
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                  <item.icon size={22} className={item.iconColor} />
                </div>
                <div>
                  <p className="text-[15px] md:text-[17px] font-bold text-[#0F172A] mb-0.5 md:mb-1">{item.title}</p>
                  <p className="text-[12px] md:text-[14px] font-medium text-[#64748B]">{item.dateRange}</p>
                </div>
              </div>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} transition-all duration-[250ms] group-hover:bg-opacity-20 shadow-sm`}>
                <ChevronRight size={20} strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedAnnouncement && (
          <div className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className={`px-6 py-5 flex items-center justify-between border-b border-[#E2E8F0] ${selectedAnnouncement.bg}`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-sm">
                    <selectedAnnouncement.icon size={20} className={selectedAnnouncement.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-lg leading-tight">{selectedAnnouncement.title}</h3>
                    <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">{selectedAnnouncement.dateRange}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedAnnouncement(null)} className="p-2 hover:bg-white/50 rounded-full transition-colors">
                  <X size={20} className="text-[#0F172A]" />
                </button>
              </div>
              
              <div className="p-8">
                <p className="text-[#475569] leading-relaxed text-lg">
                  {selectedAnnouncement.description}
                </p>
                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedAnnouncement(null)}
                    className="px-6 py-3 bg-[#0B2F6B] hover:bg-[#0E4092] text-white font-bold rounded-xl transition-colors shadow-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

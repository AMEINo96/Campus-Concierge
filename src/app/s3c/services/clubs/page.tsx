"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Users, Tent, Presentation, Music, MonitorPlay, X } from "lucide-react";

interface Club {
  id: string;
  name: string;
  category: string;
  icon: any;
  color: string;
  bg: string;
  description: string;
}

export default function ClubActivitiesPage() {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  
  const clubs: Club[] = [
    { id: "adventure", name: "NUST Adventure Club", category: "Sports & Outdoors", icon: Tent, color: "text-emerald-600", bg: "bg-emerald-100", description: "Join us for hiking, camping, and outdoor exploration." },
    { id: "debate", name: "Debating Society", category: "Literary", icon: Presentation, color: "text-blue-600", bg: "bg-blue-100", description: "Enhance your public speaking and critical thinking skills." },
    { id: "music", name: "Music Society", category: "Arts & Culture", icon: Music, color: "text-purple-600", bg: "bg-purple-100", description: "A platform for vocalists and instrumentalists to perform." },
    { id: "tech", name: "Computing & Tech Club", category: "Technical", icon: MonitorPlay, color: "text-cyan-600", bg: "bg-cyan-100", description: "Hackathons, coding challenges, and tech workshops." },
    { id: "volunteer", name: "Community Service", category: "Social Work", icon: Users, color: "text-orange-600", bg: "bg-orange-100", description: "Give back to the community through organized social campaigns." },
  ];

  return (
    <>
      <TopBar title="Club Activities" showBack={true} backHref="/s3c/services" />
      <main className="w-full max-w-5xl mx-auto px-6 py-12 pb-32">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">NUST Clubs & Societies</h1>
          <p className="text-lg text-[#64748B]">Discover and join campus organizations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubs.map((club) => {
            const Icon = club.icon;
            return (
              <div key={club.id} className="bento-card-light p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-[#F97316] transition-colors group">
                <div className={`w-16 h-16 rounded-full ${club.bg} flex items-center justify-center shrink-0 shadow-sm`}>
                  <Icon size={32} strokeWidth={2} className={`${club.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{club.category}</span>
                  <h2 className="text-xl font-bold text-[#0F172A] mb-2">{club.name}</h2>
                  <p className="text-sm text-[#475569] mb-4 leading-relaxed">{club.description}</p>
                  <button 
                    onClick={() => setSelectedClub(club)}
                    className="w-full sm:w-auto bg-[#F8FAFC] text-[#F97316] border border-[#E2E8F0] hover:border-[#F97316] hover:bg-[#FFF7ED] font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Modal */}
        {selectedClub && (
          <div className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className={`px-6 py-4 flex items-center justify-between border-b border-[#E2E8F0] ${selectedClub.bg}`}>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <selectedClub.icon size={20} className={selectedClub.color} />
                  </div>
                  <h3 className="font-bold text-[#0F172A]">Join {selectedClub.name}</h3>
                </div>
                <button onClick={() => setSelectedClub(null)} className="p-2 hover:bg-white/50 rounded-full transition-colors">
                  <X size={20} className="text-[#0F172A]" />
                </button>
              </div>
              
              <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSelectedClub(null); alert("Application submitted!"); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-1">Full Name</label>
                    <input required type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-1">Department</label>
                    <input required type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-1">Why do you want to join?</label>
                  <textarea required className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 min-h-[100px] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all"></textarea>
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

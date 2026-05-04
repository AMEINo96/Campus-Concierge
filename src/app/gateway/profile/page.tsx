"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Mail, Phone, Users, Home, MapPin, Pencil, GraduationCap, BookOpen, Clock, Calendar, UserCheck, FileCheck, ShieldAlert } from "lucide-react";

export default function GatewayProfilePage() {
  const [activeTab, setActiveTab] = useState("ABOUT");

  const CARD_STYLE = {
    background: "#FFFFFF",
    border: "1px solid #CBD5E1",
    borderRadius: "22px",
    boxShadow: "0 10px 40px rgba(15, 23, 42, 0.05)"
  };

  return (
    <>
      <TopBar title="Profile" showBack={true} backHref="/portal" />
      
      <main className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-4 md:py-6 pb-36 relative z-0">
        
        {/* Soft atmospheric gradient glow behind hero */}
        <div className="absolute top-0 right-0 w-[50vw] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-[-1] -translate-y-10 translate-x-10"></div>
        <div className="absolute top-40 left-0 w-[40vw] h-[300px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none z-[-1] -translate-x-10"></div>
        
        {/* ── HERO SECTION ───────────────────────────────────── */}
        <div className="relative mb-6">
          <div 
            style={CARD_STYLE} 
            className="flex flex-col md:flex-row items-center gap-5 relative overflow-hidden py-6 px-5 md:px-8 md:py-5"
          >
            {/* Thin Navy Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#0B2F6B]"></div>
            
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#E2E8F0] shrink-0 relative z-10 shadow-sm mt-1">
              <img
                src="/images/student-avatar.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left z-10">
              <h1 className="text-xl md:text-[34px] font-extrabold text-[#0B1426] tracking-tight leading-tight mb-0.5 uppercase">AMINA AHMAD</h1>
              <p className="text-[11px] md:text-[14px] text-[#94A3B8] mb-2 font-bold tracking-wide uppercase">Reg: 00000542601</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] text-[#2563EB] text-[10px] md:text-[12px] font-bold shadow-sm">
                 <GraduationCap size={14} className="md:w-4 md:h-4" strokeWidth={2.5} /> <span className="hidden sm:inline">School of Electrical Engineering & Computer Science</span><span className="sm:hidden">SEECS NUST</span>
              </div>
            </div>

            {/* Right Side Stat Blocks */}
            <div className="flex flex-row gap-2 w-full md:w-auto mt-2 md:mt-0 md:ml-auto">
              <div className="flex-1 md:w-[110px] p-2.5 md:p-3 rounded-[16px] bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-center items-center md:items-start transition-all hover:shadow-md">
                 <p className="text-[9px] md:text-[10px] font-extrabold text-[#94A3B8] uppercase tracking-widest mb-0.5">Program</p>
                 <p className="text-[13px] md:text-[15px] font-extrabold text-[#0B1426] leading-tight text-center md:text-left">BS AI</p>
              </div>
              <div className="flex-1 md:w-[110px] p-2.5 md:p-3 rounded-[16px] bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-center items-center md:items-start transition-all hover:shadow-md">
                 <p className="text-[9px] md:text-[10px] font-extrabold text-[#94A3B8] uppercase tracking-widest mb-0.5">Semester</p>
                 <p className="text-[13px] md:text-[15px] font-extrabold text-[#0B1426] leading-tight text-center md:text-left">2nd</p>
              </div>
              <div className="flex-1 md:w-[110px] p-2.5 md:p-3 rounded-[16px] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-[#BFDBFE] shadow-sm flex flex-col justify-center items-center md:items-start transition-all hover:shadow-md">
                 <p className="text-[9px] md:text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-0.5">CGPA</p>
                 <p className="text-[18px] md:text-[22px] font-black text-[#1E3A8A] leading-none tracking-tight text-center md:text-left">3.82</p>
              </div>
            </div>

          </div>

          {/* Edit Profile FAB */}
          <button className="absolute -bottom-3 right-6 md:right-8 w-10 h-10 bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] text-[#0B1426] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.1)] transition-transform hover:-translate-y-1 z-20 active:scale-95">
            <Pencil size={16} strokeWidth={2.5} className="text-[#3B82F6]" />
          </button>
        </div>

        {/* ── TABS ───────────────────────────────────────────── */}
        <div className="flex items-center gap-8 border-b border-[#E2E8F0] mb-5 px-4">
          {["ABOUT", "BIO DATA", "DOCUMENTS"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[12px] font-extrabold tracking-wider uppercase relative transition-colors ${activeTab === tab ? "text-[#0B2F6B]" : "text-[#94A3B8] hover:text-[#0B1426]"}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0B2F6B] rounded-t-full shadow-[0_-2px_8px_rgba(11,47,107,0.3)]"></div>
              )}
            </button>
          ))}
        </div>

        {/* ── MAIN CONTENT ───────────────────────────────────── */}
        {activeTab === "ABOUT" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div style={CARD_STYLE} className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-4 bg-[#3B82F6] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
                  <h2 className="text-[14px] md:text-[15px] font-extrabold text-[#0B1426] uppercase tracking-wider">Contact Information</h2>
                </div>
                
                <div className="flex flex-col gap-0">
                  {/* Row: Phone */}
                  <div className="flex items-center gap-4 py-3 border-b border-[#F1F5F9]">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#EEF4FF] shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0] transition-colors hover:border-[#3B82F6]">
                      <Phone size={14} className="md:w-[15px] md:h-[15px]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-extrabold text-[#0B1426]">92-304-1090934</p>
                      <p className="text-[10px] md:text-[11px] text-[#94A3B8] font-bold mt-0.5 uppercase tracking-wider">Phone</p>
                    </div>
                  </div>

                  {/* Row: Email */}
                  <div className="flex items-center gap-4 py-3 border-b border-[#F1F5F9]">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F3F8FF] shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0] transition-colors hover:border-[#4F46E5]">
                      <Mail size={14} className="md:w-[15px] md:h-[15px]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-extrabold text-[#0B1426] truncate max-w-[200px] sm:max-w-none">amina.ahmad2k7@gmail.com</p>
                      <p className="text-[10px] md:text-[11px] text-[#94A3B8] font-bold mt-0.5 uppercase tracking-wider">Email</p>
                    </div>
                  </div>

                  {/* Row: Emergency Contact */}
                  <div className="flex items-center gap-4 py-3 border-b border-[#F1F5F9]">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#FFF2F4] shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0] transition-colors hover:border-[#E11D48]">
                      <Users size={14} className="md:w-[15px] md:h-[15px]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-extrabold text-[#0B1426] uppercase">MUHAMMAD</p>
                      <p className="text-[10px] md:text-[11px] text-[#94A3B8] font-bold mt-0.5 uppercase tracking-wider">Emergency Contact</p>
                    </div>
                  </div>

                  {/* Row: Present Address */}
                  <div className="flex items-start gap-4 py-3 border-b border-[#F1F5F9]">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F0FDF4] shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0] mt-0.5 transition-colors hover:border-[#10B981]">
                      <Home size={14} className="md:w-[15px] md:h-[15px]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[13px] font-extrabold text-[#0B1426] leading-snug">House 13 Lane J Abu Bakar Block Phase 8 Bahria Town, Rawalpindi</p>
                      <p className="text-[10px] md:text-[11px] text-[#94A3B8] font-bold mt-1 uppercase tracking-wider">Present Address</p>
                    </div>
                  </div>

                  {/* Row: Permanent Address */}
                  <div className="flex items-start gap-4 py-3 pb-1">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#FFF7ED] shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0] mt-0.5 transition-colors hover:border-[#F59E0B]">
                      <MapPin size={14} className="md:w-[15px] md:h-[15px]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[13px] font-extrabold text-[#0B1426] leading-snug">House 13 Lane J Abu Bakar Block Phase 8 Bahria Town, Rawalpindi</p>
                      <p className="text-[10px] md:text-[11px] text-[#94A3B8] font-bold mt-1 uppercase tracking-wider">Permanent Address</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Academic & Documents */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              
              {/* Academic Information */}
              <div style={CARD_STYLE} className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-4 bg-[#10B981] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  <h2 className="text-[14px] md:text-[15px] font-extrabold text-[#0B1426] uppercase tracking-wider">Academic Information</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                  <div className="flex items-center gap-2.5 md:gap-3 p-3 rounded-[16px] bg-white border border-[#E2E8F0] shadow-sm transition-shadow hover:shadow-md">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 border border-[#DBEAFE]">
                        <BookOpen size={13} className="md:w-[14px] md:h-[14px]" strokeWidth={2} />
                     </div>
                     <div>
                       <p className="text-[9px] md:text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Program</p>
                       <p className="text-[12px] md:text-[13px] font-extrabold text-[#0B1426]">BS-AI</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2.5 md:gap-3 p-3 rounded-[16px] bg-white border border-[#E2E8F0] shadow-sm transition-shadow hover:shadow-md">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0 border border-[#D1FAE5]">
                        <Clock size={13} className="md:w-[14px] md:h-[14px]" strokeWidth={2} />
                     </div>
                     <div>
                       <p className="text-[9px] md:text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Semester</p>
                       <p className="text-[12px] md:text-[13px] font-extrabold text-[#0B1426]">2nd</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2.5 md:gap-3 p-3 rounded-[16px] bg-white border border-[#E2E8F0] shadow-sm transition-shadow hover:shadow-md">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FFFBEB] flex items-center justify-center shrink-0 border border-[#FEF3C7]">
                        <Calendar size={13} className="md:w-[14px] md:h-[14px]" strokeWidth={2} />
                     </div>
                     <div>
                       <p className="text-[9px] md:text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Batch</p>
                       <p className="text-[12px] md:text-[13px] font-extrabold text-[#0B1426]">Spring 2026</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2.5 md:gap-3 p-3 rounded-[16px] bg-white border border-[#E2E8F0] shadow-sm transition-shadow hover:shadow-md">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#F5F3FF] flex items-center justify-center shrink-0 border border-[#EDE9FE]">
                        <UserCheck size={13} className="md:w-[14px] md:h-[14px]" strokeWidth={2} />
                     </div>
                     <div>
                       <p className="text-[9px] md:text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Advisor</p>
                       <p className="text-[12px] md:text-[13px] font-extrabold text-[#0B1426]">Dr. Ali Raza</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Document Status */}
              <div style={CARD_STYLE} className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-4 bg-[#F59E0B] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
                    <h2 className="text-[14px] md:text-[15px] font-extrabold text-[#0B1426] uppercase tracking-wider">Document Status</h2>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-extrabold text-[#D97706] bg-[#FEF3C7] px-2.5 py-1 rounded-md border border-[#FDE68A] shadow-sm uppercase tracking-wider">Action Required</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  {/* Vaccine Certificate */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-3.5 rounded-[16px] border border-[#FECACA] bg-gradient-to-r from-[#FEF2F2] to-white shadow-sm gap-3">
                    <div className="flex items-center gap-3 md:gap-3.5">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center border border-[#FCA5A5] shrink-0 shadow-sm">
                        <ShieldAlert size={16} className="md:w-[18px] md:h-[18px]" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[12px] md:text-[13px] font-extrabold text-[#991B1B]">Vaccination Certificate</p>
                        <p className="text-[10px] md:text-[11px] font-bold text-[#EF4444] mt-0.5">Not Uploaded • Required</p>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto px-4 py-1.5 bg-white border border-[#FCA5A5] text-[#EF4444] rounded-full text-[10px] md:text-[11px] font-extrabold hover:bg-[#FEF2F2] transition-colors shadow-sm hover:shadow active:scale-95">
                      Upload
                    </button>
                  </div>

                  {/* Previous Transcripts */}
                  <div className="flex items-center justify-between p-3 md:p-3.5 rounded-[16px] border border-[#E2E8F0] bg-white shadow-sm">
                    <div className="flex items-center gap-3 md:gap-3.5">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#ECFDF5] flex items-center justify-center border border-[#A7F3D0] shrink-0 shadow-sm">
                        <FileCheck size={16} className="md:w-[18px] md:h-[18px]" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[12px] md:text-[13px] font-extrabold text-[#0B1426]">FSc / A-Levels Transcript</p>
                        <p className="text-[10px] md:text-[11px] font-bold text-[#10B981] mt-0.5">Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>
    </>
  );
}

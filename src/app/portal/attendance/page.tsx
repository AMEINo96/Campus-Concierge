"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import { AlertTriangle, CheckCircle2, XCircle, RefreshCcw, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { qalamData, calculateAttendance, Subject } from "@/lib/qalamData";
import PortalBottomNav from "@/components/PortalBottomNav";

export default function AttendanceTrackerPage() {
  const [subjects, setSubjects] = useState<Subject[]>(qalamData);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    // Check for notification triggers
    const newNotifications: string[] = [];
    subjects.forEach((subject) => {
      const { maxAbsencesAllowed } = calculateAttendance(subject);
      if (maxAbsencesAllowed === 3) {
        newNotifications.push(`⚠️ Warning: Only 3 absences left in ${subject.name}`);
      } else if (maxAbsencesAllowed === 1) {
        newNotifications.push(`🚨 Last absence warning for ${subject.name}!`);
      } else if (maxAbsencesAllowed < 0) {
        newNotifications.push(`You have exceeded the attendance limit in ${subject.name}. Contact your advisor.`);
      }
    });
    setNotifications(newNotifications);
  }, [subjects]);

  return (
    <>
      <TopBar title="Attendance Tracker" showBack={true} backHref="/portal" />
      
      <main className="w-full max-w-4xl mx-auto px-4 md:px-6 py-4 md:py-6 pb-36 flex flex-col gap-5 md:gap-6 font-[family-name:var(--font-public-sans)]">
        
        {/* HEADER SECTION */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-1 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-[34px] leading-tight font-bold text-[#0F172A] tracking-tight uppercase">Smart Tracker</h2>
            <p className="text-[13px] md:text-[16px] text-[#64748B] font-medium mt-0.5">75% Attendance Rule Monitor</p>
          </div>
          
          <button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] text-[#64748B] px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl font-bold text-[13px] md:text-sm shadow-sm hover:bg-[#F8FAFC] transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCcw size={16} className={`w-4 h-4 md:w-[18px] md:h-[18px] ${isRefreshing ? "animate-spin" : ""}`} />
            <span>{isRefreshing ? "Refreshing..." : "Pull to Refresh"}</span>
          </button>
        </section>

        {/* NOTIFICATIONS WIDGET */}
        <AnimatePresence>
          {notifications.length > 0 && (
            <motion.div 
              initial={{ height: 0, opacity: 0, marginBottom: 0 }}
              animate={{ height: "auto", opacity: 1, marginBottom: 16 }}
              exit={{ height: 0, opacity: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-red-50 border border-red-100 rounded-[22px] p-4 md:p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider">
                  <Bell size={16} />
                  <span>Urgent Alerts</span>
                </div>
                <div className="flex flex-col gap-2">
                  {notifications.map((note, idx) => (
                    <div key={idx} className="text-red-800 text-sm md:text-[15px] font-medium flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SUBJECTS LIST */}
        <div className="flex flex-col gap-5">
          {subjects.map((subject) => {
            const { percentage, maxAbsencesAllowed, recoveryClasses } = calculateAttendance(subject);
            
            // Color coding for percentage
            let pctColor = "text-red-600 bg-red-50 border-red-100";
            let pctDot = "bg-red-500";
            if (percentage >= 85) {
              pctColor = "text-green-600 bg-green-50 border-green-100";
              pctDot = "bg-green-500";
            } else if (percentage >= 75) {
              pctColor = "text-yellow-600 bg-yellow-50 border-yellow-100";
              pctDot = "bg-yellow-500";
            }

            // Color coding for absences remaining
            let absColor = "text-red-700 bg-red-100/50";
            if (maxAbsencesAllowed >= 5) absColor = "text-green-700 bg-green-100/50";
            else if (maxAbsencesAllowed >= 2) absColor = "text-yellow-700 bg-yellow-100/50";
            else if (maxAbsencesAllowed < 0) absColor = "text-white bg-red-600 animate-pulse";

            return (
              <motion.div 
                key={subject.id}
                layout
                className="bg-white border border-[#E6EEF8] rounded-[22px] md:rounded-[26px] p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] md:text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em]">{subject.code}</span>
                    <h3 className="text-[18px] md:text-2xl font-bold text-[#0F172A]">{subject.name}</h3>
                  </div>
                  
                  <div className={`inline-flex items-center self-start md:self-auto gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border font-bold text-[13px] md:text-base ${pctColor}`}>
                    <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${pctDot}`} />
                    {percentage.toFixed(1)}%
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Status Card */}
                  <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center gap-2 md:gap-3 border ${absColor}`}>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-80">Absence Status</span>
                    
                    {maxAbsencesAllowed > 0 ? (
                      <>
                        <span className="text-3xl md:text-5xl font-black">{maxAbsencesAllowed}</span>
                        <span className="text-[13px] md:text-base font-bold">More classes can be missed</span>
                      </>
                    ) : maxAbsencesAllowed === 0 ? (
                      <>
                        <XCircle size={32} className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                        <span className="text-lg md:text-2xl font-black">⛔ No more absences allowed!</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle size={32} className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                        <span className="text-lg md:text-2xl font-black uppercase">🚨 Below 75%!</span>
                      </>
                    )}
                  </div>

                  {/* Details Card */}
                  <div className="bg-slate-50 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-3 md:gap-4 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="text-[#64748B] text-[13px] md:text-base font-semibold">Attendance</span>
                      <span className="text-[#0F172A] text-[14px] md:text-[18px] font-bold">{subject.attended} / {subject.totalHeld}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 md:h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#3B82F6] h-full rounded-full transition-all duration-1000"
                        style={{ width: `${(subject.attended / subject.totalHeld) * 100}%` }}
                      />
                    </div>

                    <div className="mt-1 md:mt-2 pt-3 md:pt-4 border-t border-slate-200 flex flex-col gap-2">
                      {maxAbsencesAllowed >= 0 ? (
                        <div className="flex items-center gap-2 text-green-700 font-bold text-[13px] md:text-base">
                          <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" />
                          <span>Status: Currently Safe</span>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-red-700 font-bold text-[13px] md:text-base">
                            <AlertTriangle size={16} className="md:w-[18px] md:h-[18px]" />
                            <span>Status: Danger Zone</span>
                          </div>
                          <p className="text-[12px] md:text-sm text-slate-600 font-medium">
                            Attend the next <span className="text-red-600 font-black text-base md:text-lg">{recoveryClasses}</span> classes without missing any to get back to 75%.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <PortalBottomNav />
    </>
  );
}

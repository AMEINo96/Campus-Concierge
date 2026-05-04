import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight, Flame, Activity } from "lucide-react";
import { qalamData, calculateAttendance } from "@/lib/qalamData";

export default function QalamPage() {
  return (
    <>
      <TopBar title="Qalam" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 pb-36 flex flex-col gap-6 md:gap-8">
        
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-[42px] leading-tight font-bold text-[#0F172A] tracking-tight text-center md:text-left">My Courses</h2>
            <p className="text-sm md:text-[18px] text-[#64748B] font-medium mt-1 text-center md:text-left">Official academic records from Qalam.</p>
          </div>
          
          <Link 
            href="/portal/attendance"
            className="flex items-center justify-center gap-2 bg-[#2563EB] text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-[#1D4ED8] transition-all active:scale-95"
          >
            <Activity size={18} />
            <span>Open Smart Tracker</span>
          </Link>
        </section>

        <div className="flex flex-col gap-4 md:gap-5">
          {qalamData.map((subject) => {
            const { percentage } = calculateAttendance(subject);
            
            return (
              <Link
                key={subject.id}
                href={`/portal/qalam/${subject.id}`}
                className="group flex items-center justify-between p-4 md:p-6 rounded-[22px] bg-white border border-[#E6EEF8] shadow-sm transition-all duration-[250ms] ease-in-out hover:bg-[#F8FAFC] hover:border-[#BFDBFE] hover:shadow-md cursor-pointer"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] md:text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em] group-hover:text-[#3B82F6] transition-colors">{subject.code}</span>
                  <h3 className="text-base md:text-[20px] font-bold text-[#0F172A] leading-tight">{subject.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[11px] md:text-[12px] font-bold ${percentage >= 75 ? "text-green-600" : "text-red-600"}`}>
                      {percentage.toFixed(1)}% Attendance
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                  {subject.streak > 0 && (
                    <div className="flex items-center gap-1.5 bg-orange-50 text-orange-600 border border-orange-100 px-3 md:px-4 py-1.5 rounded-full font-bold text-[10px] md:text-[13px] shadow-sm transition-colors group-hover:bg-orange-100/50">
                      <Flame size={14} className="md:w-4 md:h-4" strokeWidth={2.5} />
                      <span>{subject.streak} Streak</span>
                    </div>
                  )}
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-all duration-[250ms] group-hover:bg-[#3B82F6] group-hover:text-white group-hover:translate-x-1.5 group-hover:border-[#3B82F6] shadow-sm">
                    <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" strokeWidth={3} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

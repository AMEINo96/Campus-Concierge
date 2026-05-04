import TopBar from "@/components/TopBar";
import { Clock, Calendar, MapPin, BookOpen } from "lucide-react";

export default function MakeupClassesPage() {
  return (
    <>
      <TopBar title="Make-Up Classes" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-8">
        <section className="mb-4">
          <h2 className="text-[42px] leading-[1.2] font-bold text-[#0F172A] mb-2 tracking-tight">Scheduled Make-Up Classes</h2>
          <p className="text-[18px] text-[#64748B] font-medium">View the details for your upcoming make-up sessions.</p>
        </section>

        <div className="flex flex-col gap-6">
          {/* Make-Up Class Card 1 */}
          <div className="group p-7 rounded-[22px] bg-white border border-[#E6EEF8] shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-[250ms] ease-in-out hover:bg-[#F0F7FF] hover:border-[#BFDBFE] hover:shadow-[0_12px_32px_rgba(59,130,246,0.08)] flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-5">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#3B82F6] uppercase tracking-[0.15em]">
                  CS-201
                </span>
                <h3 className="text-[22px] font-bold text-[#0F172A] flex items-center gap-3">
                  <BookOpen size={22} className="text-[#64748B] group-hover:text-[#3B82F6] transition-colors" />
                  Data Structures
                </h3>
              </div>
              <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[11px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-sm transition-colors group-hover:bg-blue-100/50">
                Upcoming
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <Calendar size={22} />
                </div>
                <div>
                  <p className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider mb-0.5">Date</p>
                  <p className="text-[16px] font-semibold text-[#0F172A]">Friday, Nov 15</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider mb-0.5">Time</p>
                  <p className="text-[16px] font-semibold text-[#0F172A]">2:00 PM - 3:30 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider mb-0.5">Venue</p>
                  <p className="text-[16px] font-semibold text-[#0F172A]">CR-04, Block B</p>
                </div>
              </div>
            </div>
          </div>

          {/* Make-Up Class Card 2 */}
          <div className="group p-7 rounded-[22px] bg-white border border-[#E6EEF8] shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-[250ms] ease-in-out hover:bg-[#F0F7FF] hover:border-[#BFDBFE] hover:shadow-[0_12px_32px_rgba(59,130,246,0.08)] flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-5">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#3B82F6] uppercase tracking-[0.15em]">
                  AI-301
                </span>
                <h3 className="text-[22px] font-bold text-[#0F172A] flex items-center gap-3">
                  <BookOpen size={22} className="text-[#64748B] group-hover:text-[#3B82F6] transition-colors" />
                  Artificial Intelligence
                </h3>
              </div>
              <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[11px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-sm transition-colors group-hover:bg-blue-100/50">
                Upcoming
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <Calendar size={22} />
                </div>
                <div>
                  <p className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider mb-0.5">Date</p>
                  <p className="text-[16px] font-semibold text-[#0F172A]">Monday, Nov 18</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider mb-0.5">Time</p>
                  <p className="text-[16px] font-semibold text-[#0F172A]">10:00 AM - 11:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#64748B] border border-slate-100 transition-colors group-hover:bg-white group-hover:text-[#3B82F6]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider mb-0.5">Venue</p>
                  <p className="text-[16px] font-semibold text-[#0F172A]">Auditorium</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

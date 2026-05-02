import TopBar from "@/components/TopBar";
import { Clock, Calendar, MapPin, BookOpen } from "lucide-react";

export default function MakeupClassesPage() {
  return (
    <>
      <TopBar title="Make-Up Classes" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">Scheduled Make-Up Classes</h2>
          <p className="text-lg text-[#474747]">View the details for your upcoming make-up sessions.</p>
        </section>

        <div className="flex flex-col gap-4">
          {/* Make-Up Class Card 1 */}
          <div className="bento-card flex flex-col gap-4 bg-white">
            <div className="flex justify-between items-start border-b border-[#E2E2E2] pb-4">
              <div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#15A8E3] uppercase tracking-widest block mb-1">
                  CS-201
                </span>
                <h3 className="text-xl font-bold text-[#171717] flex items-center gap-2">
                  <BookOpen size={20} className="text-[#474747]" />
                  Data Structures
                </h3>
              </div>
              <span className="bg-[#15A8E3]/10 text-[#15A8E3] font-[family-name:var(--font-space-grotesk)] text-[12px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                Upcoming
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f9f9f8] flex items-center justify-center text-[#474747]">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#474747] font-semibold">Date</p>
                  <p className="text-[#171717]">Friday, Nov 15</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f9f9f8] flex items-center justify-center text-[#474747]">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#474747] font-semibold">Time</p>
                  <p className="text-[#171717]">2:00 PM - 3:30 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f9f9f8] flex items-center justify-center text-[#474747]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#474747] font-semibold">Venue</p>
                  <p className="text-[#171717]">CR-04, Block B</p>
                </div>
              </div>
            </div>
          </div>

          {/* Make-Up Class Card 2 */}
          <div className="bento-card flex flex-col gap-4 bg-white">
            <div className="flex justify-between items-start border-b border-[#E2E2E2] pb-4">
              <div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#15A8E3] uppercase tracking-widest block mb-1">
                  AI-301
                </span>
                <h3 className="text-xl font-bold text-[#171717] flex items-center gap-2">
                  <BookOpen size={20} className="text-[#474747]" />
                  Artificial Intelligence
                </h3>
              </div>
              <span className="bg-[#15A8E3]/10 text-[#15A8E3] font-[family-name:var(--font-space-grotesk)] text-[12px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                Upcoming
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f9f9f8] flex items-center justify-center text-[#474747]">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#474747] font-semibold">Date</p>
                  <p className="text-[#171717]">Monday, Nov 18</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f9f9f8] flex items-center justify-center text-[#474747]">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#474747] font-semibold">Time</p>
                  <p className="text-[#171717]">10:00 AM - 11:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f9f9f8] flex items-center justify-center text-[#474747]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#474747] font-semibold">Venue</p>
                  <p className="text-[#171717]">Auditorium</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

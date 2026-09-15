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
          <div className="bento-card flex flex-col items-center justify-center py-16 bg-white dark:bg-slate-800 text-center border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Coming Soon</h3>
            <p className="text-slate-500 dark:text-slate-400">Make-up classes will be displayed here for now.</p>
          </div>
        </div>
      </main>
    </>
  );
}

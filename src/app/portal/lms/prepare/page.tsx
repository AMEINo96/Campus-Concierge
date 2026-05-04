import TopBar from "@/components/TopBar";
import { BookOpen, Target, Clock, AlertCircle } from "lucide-react";

export default async function LMSPreparePage({ searchParams }: { searchParams: Promise<{ title?: string, course?: string, date?: string }> }) {
  const resolvedParams = await searchParams;
  const title = resolvedParams?.title || "AI Quiz";
  const course = resolvedParams?.course || "AI-301";
  const date = resolvedParams?.date || "Tomorrow, 10:00 AM";

  return (
    <>
      <TopBar title="Quiz Preparation" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">Study Materials</h2>
          <p className="text-lg text-[#474747]">{title} ({course})</p>
        </section>

        <div className="bento-card flex flex-col gap-6 bg-white">
          <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-[12px]">
            <AlertCircle size={24} className="text-blue-600 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#171717]">Scheduled: {date}</p>
              <p className="text-xs text-[#474747] mt-1">Review the provided materials below. The AI Evaluator has generated practice questions for this topic.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#E6EEF8] rounded-[16px] p-6 hover:border-[#3B82F6] hover:shadow-md transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <BookOpen size={24} className="text-[#3B82F6]" />
              </div>
              <h3 className="text-lg font-bold text-[#171717] mb-1">Lecture Slides</h3>
              <p className="text-[#474747] text-sm mb-4">Chapters 4, 5, and 6 covered in this quiz.</p>
              <button className="text-[#3B82F6] font-semibold text-sm">Download PDF</button>
            </div>

            <div className="border border-[#E6EEF8] rounded-[16px] p-6 hover:border-[#EAB308] hover:shadow-md transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                <Target size={24} className="text-[#EAB308]" />
              </div>
              <h3 className="text-lg font-bold text-[#171717] mb-1">Practice Quiz</h3>
              <p className="text-[#474747] text-sm mb-4">20 generated questions based on the syllabus.</p>
              <button className="text-[#EAB308] font-semibold text-sm">Start Practice</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

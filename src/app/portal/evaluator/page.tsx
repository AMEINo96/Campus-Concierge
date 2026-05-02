import TopBar from "@/components/TopBar";
import { TrendingUp, TrendingDown, Target, Brain, Award, Star, Activity } from "lucide-react";

export default function StudentEvaluatorPage() {
  return (
    <>
      <TopBar title="AI Evaluator" showBack={true} backHref="/portal" />
      <main className="w-full max-w-5xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ec4899] to-[#fbcfe8] flex items-center justify-center shadow-lg p-2 flex-shrink-0">
             <img src="https://lh3.googleusercontent.com/aida/ADBb0uj14Zt2xc9Y5WgNFmlwfwpKJqK3RDQJ45mu_XE3nXN5EJMXMYWKS6QRsdOY_pmzqVUCaJn31qRp0gbfJHu4Lt8OAc4NyudtewgIl2TyiqTOxFRayQG6gSNpAefu52_bPrbSR1I8ChSkavZwx7LiNogXaesXN7iAGRJNOrRDTnmfUDhgsuqs67m_PM22wnjK6LyGOrvqeORVIqgKIZVwxh3vh00jc54NWh9PFNnMLmMs03QMLNB61_-QEfeqVtk6H3rrY45mEhzwtjg" alt="AI Core" className="w-full h-full object-contain drop-shadow-md mix-blend-multiply" />
          </div>
          <div>
            <h1 className="text-[36px] leading-[1.2] font-bold text-[#171717] mb-2 flex items-center gap-3">
              Performance Analysis
              <span className="bg-[#ecfdf5] text-[#10b981] text-xs px-3 py-1 rounded-full border border-[#10b981] font-bold uppercase tracking-widest">Live</span>
            </h1>
            <p className="text-lg text-[#474747]">Based on your attendance, assignments, and quizzes across all courses.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Stats */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] border border-[#bae6fd] rounded-[16px] p-6 shadow-sm relative overflow-hidden">
              <Star className="absolute -right-4 -top-4 w-24 h-24 text-[#bae6fd] opacity-40 rotate-12" />
              <div className="relative z-10">
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#0284c7] uppercase tracking-widest mb-1">Class Standing</p>
                <h3 className="text-3xl font-black text-[#0369a1] mb-2">Top 15%</h3>
                <p className="text-sm text-[#0284c7] font-medium flex items-center gap-1"><TrendingUp size={16}/> Moving up</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fdf2f8] to-[#fce7f3] border border-[#fbcfe8] rounded-[16px] p-6 shadow-sm relative overflow-hidden">
              <Target className="absolute -right-4 -top-4 w-24 h-24 text-[#fbcfe8] opacity-50 rotate-12" />
              <div className="relative z-10">
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#db2777] uppercase tracking-widest mb-1">Predicted GPA</p>
                <h3 className="text-3xl font-black text-[#be185d] mb-2">3.85</h3>
                <p className="text-sm text-[#db2777] font-medium">Estimated for Fall Semester</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border border-[#ddd6fe] rounded-[16px] p-6 shadow-sm sm:col-span-2 relative overflow-hidden">
               <Activity className="absolute -right-4 -bottom-4 w-32 h-32 text-[#ddd6fe] opacity-50" />
               <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#7c3aed] uppercase tracking-widest mb-1">Overall Rating</p>
                    <h3 className="text-[40px] leading-none font-black text-[#5b21b6] mb-2">A-</h3>
                  </div>
                  <div className="bg-white/60 p-4 rounded-xl border border-white mt-4 sm:mt-0 max-w-sm">
                    <p className="text-[#5b21b6] text-sm font-medium">"You are performing exceptionally well in logic-heavy courses. However, theoretical courses need slightly more attention to maintain your GPA."</p>
                  </div>
               </div>
            </div>
          </div>

          {/* AI Insights Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-white border border-[#E2E2E2] rounded-[16px] p-6 shadow-sm h-full flex flex-col">
               <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#171717] uppercase tracking-widest mb-6 flex items-center gap-2">
                 <Brain size={18} className="text-[#15A8E3]" /> Subject Insights
               </h3>
               
               <div className="mb-6">
                 <h4 className="text-sm font-bold text-[#10b981] mb-3 flex items-center gap-2 uppercase tracking-wide"><TrendingUp size={16} /> Strong Subjects</h4>
                 <ul className="space-y-3">
                   <li className="flex justify-between items-center bg-[#ecfdf5] p-3 rounded-lg border border-[#a7f3d0]">
                     <span className="font-semibold text-[#065f46]">Data Structures</span>
                     <span className="text-[#059669] font-bold text-sm">94%</span>
                   </li>
                   <li className="flex justify-between items-center bg-[#ecfdf5] p-3 rounded-lg border border-[#a7f3d0]">
                     <span className="font-semibold text-[#065f46]">Linear Algebra</span>
                     <span className="text-[#059669] font-bold text-sm">91%</span>
                   </li>
                 </ul>
               </div>

               <div>
                 <h4 className="text-sm font-bold text-[#ef4444] mb-3 flex items-center gap-2 uppercase tracking-wide"><TrendingDown size={16} /> Needs Attention</h4>
                 <ul className="space-y-3">
                   <li className="flex justify-between items-center bg-[#fef2f2] p-3 rounded-lg border border-[#fecaca]">
                     <span className="font-semibold text-[#991b1b]">Islamic Studies</span>
                     <span className="text-[#dc2626] font-bold text-sm">76%</span>
                   </li>
                   <li className="flex justify-between items-center bg-[#fef2f2] p-3 rounded-lg border border-[#fecaca]">
                     <span className="font-semibold text-[#991b1b]">Communication</span>
                     <span className="text-[#dc2626] font-bold text-sm">81%</span>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

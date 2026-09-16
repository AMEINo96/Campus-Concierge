"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Flame, AlertTriangle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQalamData } from "@/lib/useBackend";
import { useParams } from "next/navigation";

export default function QalamSubjectDetailsPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);
  const { data, loading, error } = useQalamData();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    assessments: true,
  });

  if (loading) {
    return (
      <>
        <TopBar title="Course Details" showBack={true} backHref="/portal/qalam" />
        <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 text-center text-slate-500">
          Loading course details...
        </main>
      </>
    );
  }

  let course: any = null;
  if (data?.terms) {
    for (const term of data.terms) {
      const found = Object.values(term.courses).find((c: any) => c.name === id);
      if (found) {
        course = found;
        break;
      }
    }
  }

  if (!course) {
    return (
      <>
        <TopBar title="Course Details" showBack={true} backHref="/portal/qalam" />
        <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 text-center text-red-500">
          Course not found.
        </main>
      </>
    );
  }

  const attendance = {
    percentage: course.attendance || 0,
    safeSkipsRemaining: Math.floor((course.attendance / 100) * 4), // mock
  };

  const absolutes = {
    userScore: course.assessments?.[0]?.obtained_marks || 0,
    classAverage: course.assessments?.[0]?.class_average || 0,
    maxScore: course.assessments?.[0]?.max_marks || 100,
  };
  
  const userScorePercent = (absolutes.userScore / Math.max(1, absolutes.maxScore)) * 100;
  const classAvgPercent = (absolutes.classAverage / Math.max(1, absolutes.maxScore)) * 100;
  
  const evaluationCategories = [
    {
      id: "assessments",
      title: "Assessments Overview",
      weight: 100,
      totalObtainedPercentage: userScorePercent,
      colorClass: "bg-[#15A8E3]/10 text-[#004c6a]",
      items: course.assessments?.map((ass: any, i: number) => ({
        title: "Total Evaluations",
        score: ass.obtained_marks,
        total: ass.max_marks,
        average: ass.class_average,
      })) || []
    }
  ];

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <TopBar title={course.name} showBack={true} backHref="/portal/qalam" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6 font-[family-name:var(--font-public-sans)]">
        
        {/* ATTENDANCE BENTO BOX */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden">
          <div className="flex justify-between items-center relative z-10">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xs text-slate-900 uppercase tracking-widest font-bold">
              ATTENDANCE RECORD
            </h2>
            {mockStreak > 2 && (
              <div className="flex items-center gap-1 bg-white border border-slate-200 text-[#ea580c] px-3 py-1 rounded-full font-bold text-sm">
                <Flame size={16} strokeWidth={2.5} />
                <span>{mockStreak} Streak</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex flex-col">
              <span className="text-[40px] leading-[1.2] tracking-tight font-bold text-slate-900">{attendance.percentage.toFixed(1)}%</span>
              <span className="text-base text-slate-500 mt-1">{attendance.safeSkipsRemaining} estimated skips remaining</span>
            </div>
            
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#F1F5F9" strokeWidth="8"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#15A8E3" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * (attendance.percentage / 100))} strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
            </div>
          </div>

          {/* XF Risk Tracker Widget */}
          <div 
            className={`mt-2 rounded-xl p-4 flex items-center gap-3 border ${
              attendance.safeSkipsRemaining >= 3 
                ? "bg-[#15A8E3]/10 border-[#15A8E3]/20" 
                : "bg-[#E4E613]/20 border-[#E4E613]"
            }`}
          >
            {attendance.safeSkipsRemaining < 3 && <AlertTriangle size={20} className="text-[#E4E613]" />}
            <span 
              className={`font-[family-name:var(--font-space-grotesk)] font-bold tracking-wide ${
                attendance.safeSkipsRemaining >= 3 ? "text-[#15A8E3]" : "text-[#85870B]"
              }`}
            >
              {attendance.safeSkipsRemaining >= 3 
                ? `Safe skips remaining: ${attendance.safeSkipsRemaining}` 
                : `Warning: ${attendance.safeSkipsRemaining} skips remaining (XF Risk)`
              }
            </span>
          </div>

          {/* OVERALL ABSOLUTES DIVIDER & SECTION */}
          <div className="border-t border-slate-200 pt-6 mt-2">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs text-slate-900 uppercase tracking-widest font-bold">
                  OVERALL ABSOLUTES
                </h3>
                <span className="text-3xl font-bold text-slate-900 leading-tight block mt-1">
                  {absolutes.userScore.toFixed(2)}%
                </span>
              </div>
              <div className="text-right">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] text-slate-500 uppercase tracking-widest font-bold">
                  Class Average
                </span>
                <span className="text-xl font-bold text-slate-500 leading-tight block mt-1">
                  {absolutes.classAverage.toFixed(2)}%
                </span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="relative w-full h-3 bg-slate-200 rounded-full mt-4">
              {/* User Score Fill */}
              <div 
                className="absolute top-0 left-0 h-full bg-[#15A8E3] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min(absolutes.userScore, 100)}%` }}
              ></div>
              
              {/* Class Average Vertical Tick Marker */}
              <div 
                className="absolute top-[-4px] bottom-[-4px] w-1 bg-slate-700 rounded-full z-10 transition-all duration-500 ease-out"
                style={{ left: `calc(${Math.min(absolutes.classAverage, 100)}% - 2px)` }}
              ></div>
            </div>

            {/* Comparison Text */}
            <div className="mt-4 text-center">
              <span className={`text-sm font-bold tracking-wide ${
                absolutes.userScore >= absolutes.classAverage ? "text-[#10B981]" : "text-[#EF4444]"
              }`}>
                {absolutes.userScore >= absolutes.classAverage ? "+" : ""}
                {(absolutes.userScore - absolutes.classAverage).toFixed(2)}% vs class
              </span>
            </div>
          </div>
        </section>

        {/* EVALUATIONS LIST */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xs text-slate-900 uppercase tracking-widest font-bold mb-2 ml-1">
            EVALUATIONS
          </h2>
          
          {evaluationCategories.map((category) => {
            const isOpen = !!openCategories[category.id];
            
            return (
              <div key={category.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-none">
                {/* Accordion Header */}
                <div 
                  className="p-4 md:p-6 flex items-center justify-between cursor-pointer select-none bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-bold text-slate-900 font-[family-name:var(--font-public-sans)]">{category.title}</h3>
                    <span className={`font-[family-name:var(--font-space-grotesk)] text-xs font-bold px-3 py-1 rounded-full ${category.colorClass}`}>
                      {category.weight}% Weight
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-base font-bold text-slate-900">{category.totalObtainedPercentage.toFixed(2)}%</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-500 flex-shrink-0"
                    >
                      <ChevronDown size={20} strokeWidth={2.5} />
                    </motion.div>
                  </div>
                </div>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-200 bg-white">
                        <div className="flex flex-col">
                          {category.items.map((item: any, index: number) => {
                            const percentage = ((item.score / item.total) * 100).toFixed(2);
                            
                            return (
                              <div key={index} className="flex justify-between items-center p-4 md:px-6 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                                <div className="flex flex-col gap-1">
                                  <span className="font-bold text-slate-900 font-[family-name:var(--font-public-sans)]">{item.title}</span>
                                  <span className="text-sm text-slate-500 font-[family-name:var(--font-space-grotesk)]">
                                    Class Avg: {item.average.toFixed(2)}
                                  </span>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <span className="font-bold text-slate-900 font-[family-name:var(--font-public-sans)]">
                                    {item.score.toFixed(2)} / {item.total.toFixed(1)}
                                  </span>
                                  <span className="font-bold text-[#15A8E3] font-[family-name:var(--font-space-grotesk)]">
                                    {percentage}%
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { FileText, Download, FileArchive, CheckCircle, HelpCircle } from "lucide-react";
import { useLmsData } from "@/lib/useBackend";
import { useParams } from "next/navigation";

export default function LMSSubjectDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const { data, loading, error } = useLmsData();
  const [activeTab, setActiveTab] = useState<string>("All Files");

  const course = data?.courses?.find((c: any) => c.id.toString() === id);
  const activities = data?.activities?.filter((a: any) => a.course_id?.toString() === id) || [];

  const filteredActivities = activeTab === "All Files" 
    ? activities 
    : activities.filter((a: any) => {
        if (activeTab === "Lecture") return a.type === "resource";
        if (activeTab === "Assignment") return a.type === "assignment";
        if (activeTab === "Quiz") return a.type === "quiz";
        return true;
      });

  const tabs = ["All Files", "Lecture", "Assignment", "Quiz"];

  if (loading) {
    return (
      <>
        <TopBar title="Course Files" showBack={true} backHref="/portal/lms" />
        <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 text-center text-slate-500">
          Loading course details...
        </main>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <TopBar title="Course Files" showBack={true} backHref="/portal/lms" />
        <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 text-center text-red-500">
          Course not found.
        </main>
      </>
    );
  }

  return (
    <>
      <TopBar title="Course Files" showBack={true} backHref="/portal/lms" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32">
        <section className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">{course.name}</h2>
          <p className="text-lg text-[#64748B]">{course.shortname}</p>
        </section>

        <div className="flex overflow-x-auto pb-4 mb-6 gap-3 no-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full border text-sm font-semibold transition-all shadow-sm ${
                activeTab === tab 
                  ? "border-[#3B82F6] text-[#3B82F6] bg-[#EFF6FF]" 
                  : "border-[#E2E8F0] text-[#64748B] bg-white/80 backdrop-blur-sm hover:bg-white"
              }`}
            >
              {tab === "Lecture" ? "Lectures & Resources" : tab === "Assignment" ? "Assignments" : tab === "Quiz" ? "Quizzes" : tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity: any, idx: number) => {
              const downloadUrl = activity.type === 'resource' 
                ? (activity.url.includes('?') ? `${activity.url}&redirect=1` : `${activity.url}?redirect=1`)
                : activity.url;
              
              return (
              <a key={idx} href={downloadUrl} target="_blank" rel="noreferrer" download={activity.type === 'resource' ? true : undefined} className="bento-card-light p-5 flex items-center gap-4 cursor-pointer hover:border-[#3B82F6] group">
                <div className="flex-shrink-0 bg-[#F1F5F9] group-hover:bg-[#DBEAFE] w-12 h-12 flex items-center justify-center rounded-xl transition-colors border border-[#E2E8F0]">
                  {activity.type === 'assignment' ? (
                    <FileText size={24} strokeWidth={2} className="text-[#A16207] group-hover:text-yellow-600 transition-colors" />
                  ) : activity.type === 'quiz' ? (
                    <HelpCircle size={24} strokeWidth={2} className="text-[#6D28D9] group-hover:text-purple-600 transition-colors" />
                  ) : (
                    <FileArchive size={24} strokeWidth={2} className="text-[#1E3A8A] group-hover:text-[#3B82F6] transition-colors" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[#0F172A] truncate">{activity.name}</h3>
                  <p className="text-sm text-[#64748B] truncate mt-1">
                    {activity.section ? `${activity.section} • ` : ''}{activity.kind_label}
                  </p>
                </div>
                {activity.type === 'resource' ? (
                  <div className="flex-shrink-0 btn-primary w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md">
                    <Download size={20} strokeWidth={2.5} />
                  </div>
                ) : (
                  <div className="flex-shrink-0 btn-primary px-4 py-2 rounded-lg font-bold text-sm text-white shadow-md">
                    {activity.action_label}
                  </div>
                )}
              </a>
            )})
          ) : (
            <div className="text-center py-12 text-[#64748B]">
              No items found for this category.
            </div>
          )}
        </div>
      </main>
    </>
  );
}

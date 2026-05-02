"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { FileText, Download, FileArchive } from "lucide-react";

type FileType = "Lecture" | "Lab Manual" | "Assignment" | "Other";

interface CourseFile {
  id: string;
  name: string;
  type: FileType;
  uploaded: string;
  size: string;
}

const ALL_FILES: CourseFile[] = [
  { id: "1", name: "Lecture_04_Inheritance.pdf", type: "Lecture", uploaded: "Uploaded 2 days ago", size: "2.4 MB" },
  { id: "2", name: "Lab_02_Java_Swing.docx", type: "Lab Manual", uploaded: "Uploaded 1 week ago", size: "1.1 MB" },
  { id: "3", name: "Assignment_01_Basics.pdf", type: "Assignment", uploaded: "Uploaded 2 weeks ago", size: "850 KB" },
  { id: "4", name: "Project_Starter_Code.zip", type: "Other", uploaded: "Uploaded 1 month ago", size: "15.2 MB" },
];

export default function LMSSubjectDetailsPage() {
  const [activeTab, setActiveTab] = useState<"All Files" | FileType>("All Files");

  const filteredFiles = activeTab === "All Files" 
    ? ALL_FILES 
    : ALL_FILES.filter(f => f.type === activeTab);

  const tabs = ["All Files", "Lecture", "Lab Manual", "Assignment"];

  return (
    <>
      <TopBar title="Course Files" showBack={true} backHref="/portal/lms" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32">
        <section className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">Object-Oriented Programming</h2>
          <p className="text-lg text-[#64748B]">CS201 • Fall Semester</p>
        </section>

        <div className="flex overflow-x-auto pb-4 mb-6 gap-3 no-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full border text-sm font-semibold transition-all shadow-sm ${
                activeTab === tab 
                  ? "border-[#3B82F6] text-[#3B82F6] bg-[#EFF6FF]" 
                  : "border-[#E2E8F0] text-[#64748B] bg-white/80 backdrop-blur-sm hover:bg-white"
              }`}
            >
              {tab === "Lecture" ? "Lectures" : tab === "Lab Manual" ? "Lab Manuals" : tab === "Assignment" ? "Assignments" : tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filteredFiles.length > 0 ? (
            filteredFiles.map(file => (
              <div key={file.id} className="bento-card-light p-5 flex items-center gap-4 cursor-pointer hover:border-[#3B82F6] group">
                <div className="flex-shrink-0 bg-[#F1F5F9] group-hover:bg-[#DBEAFE] w-12 h-12 flex items-center justify-center rounded-xl transition-colors border border-[#E2E8F0]">
                  {file.name.endsWith(".zip") ? (
                    <FileArchive size={24} strokeWidth={2} className="text-[#1E3A8A] group-hover:text-[#3B82F6] transition-colors" />
                  ) : (
                    <FileText size={24} strokeWidth={2} className="text-[#1E3A8A] group-hover:text-[#3B82F6] transition-colors" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[#0F172A] truncate">{file.name}</h3>
                  <p className="text-sm text-[#64748B] truncate mt-1">{file.uploaded} • {file.size}</p>
                </div>
                <button className="flex-shrink-0 btn-primary w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md">
                  <Download size={20} strokeWidth={2.5} />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-[#64748B]">
              No files found for this category.
            </div>
          )}
        </div>
      </main>
    </>
  );
}

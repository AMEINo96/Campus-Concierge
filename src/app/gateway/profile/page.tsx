"use client";

import TopBar from "@/components/TopBar";

export default function GatewayProfilePage() {
  return (
    <>
      <TopBar title="Profile" showBack={true} backHref="/gateway" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#0F172A] dark:text-white mb-2 tracking-tight">Your Profile</h1>
          <p className="text-lg text-[#64748B] dark:text-slate-400">Manage your central student identity.</p>
        </div>

        <div className="bento-card-light dark:bg-slate-800 dark:border-slate-700 p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#1E3A8A]">
            <img
              alt="Profile Avatar"
              className="w-full h-full object-cover"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amein&backgroundColor=b6e3f4"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-1">Amein</h2>
            <p className="text-[#64748B] dark:text-slate-400 mb-4">BS-AI 2A • Computer Science Dept.</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-xs font-bold">Student ID: 123456</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 rounded-full text-xs font-bold">Active Status</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

"use client";

import TopBar from "@/components/TopBar";

export default function GenericServicePage({ params }: { params: { category: string } }) {
  const formattedCategory = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <>
      <TopBar title={`${formattedCategory} Service`} showBack={true} backHref="/s3c/services" />
      <main className="w-full max-w-2xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="text-center mb-6">
          <h2 className="text-4xl font-bold text-[#0F172A] dark:text-white mb-2 tracking-tight">Create Request</h2>
          <p className="text-[#64748B] text-lg">Submit a new service request to S3C support.</p>
        </section>

        <section className="bento-card-light dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-widest">
                Service Category
              </label>
              <select 
                className="w-full bg-[#F8FAFC] dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-[#0F172A] dark:text-white"
                defaultValue={params.category}
              >
                <option value="documents">Documents</option>
                <option value="exams">Exams</option>
                <option value="lost">Lost & Found</option>
                <option value="cards">University Cards</option>
                <option value="fees">Fees</option>
                <option value="custom">Custom Request</option>
                <option value={params.category}>{formattedCategory}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-widest">
                Subject
              </label>
              <input 
                type="text" 
                placeholder="Brief summary of your request" 
                className="w-full bg-[#F8FAFC] dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-[#0F172A] dark:text-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-widest">
                Description
              </label>
              <textarea 
                rows={5}
                placeholder="Provide detailed information..." 
                className="w-full bg-[#F8FAFC] dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-700 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-[#0F172A] dark:text-white"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-widest">
                Urgency Level
              </label>
              <select className="w-full bg-[#F8FAFC] dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-[#0F172A] dark:text-white">
                <option value="low">Low (Normal Priority)</option>
                <option value="medium">Medium (Important)</option>
                <option value="high">High (Urgent)</option>
              </select>
            </div>

            <button type="button" className="bg-[#1E3A8A] hover:bg-[#15A8E3] text-white font-bold w-full mt-2 py-4 px-6 rounded-xl tracking-wide shadow-md transition-colors">
              Submit Request
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

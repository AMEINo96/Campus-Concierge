import TopBar from "@/components/TopBar";
import { UploadCloud, File, AlertCircle } from "lucide-react";

export default function LMSSubmitPage() {
  return (
    <>
      <TopBar title="Submit Assignment" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">Upload Submission</h2>
          <p className="text-lg text-[#474747]">Data Structures Assignment 3 (CS-201)</p>
        </section>

        <div className="bento-card flex flex-col gap-6 bg-white">
          <div className="flex items-start gap-3 p-4 bg-[#E4E613]/10 border border-[#E4E613] rounded-[12px]">
            <AlertCircle size={24} className="text-[#96960d] flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#171717]">Deadline: Tonight, 11:59 PM</p>
              <p className="text-xs text-[#474747] mt-1">Make sure your file is in PDF or ZIP format and does not exceed 25MB.</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-[#bdc8d1] rounded-[16px] p-12 flex flex-col items-center justify-center text-center hover:border-[var(--color-primary)] hover:bg-[#f0f9ff] transition-all cursor-pointer">
            <div className="w-16 h-16 bg-[#f9f9f8] rounded-full flex items-center justify-center mb-4">
              <UploadCloud size={32} className="text-[#474747]" />
            </div>
            <h3 className="text-xl font-bold text-[#171717] mb-2">Drag & Drop your file here</h3>
            <p className="text-[#474747] mb-6">or click to browse from your computer</p>
            <button className="bg-white border border-[#171717] text-[#171717] px-6 py-2 rounded-full font-semibold hover:bg-[#f9f9f8] transition-colors">
              Browse File
            </button>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-[#171717]">
                Comments (Optional)
              </label>
              <textarea 
                rows={3}
                placeholder="Add any comments for your instructor..." 
                className="w-full px-4 py-3 bg-[#f9f9f8] border border-[#bdc8d1] rounded-lg focus:border-[var(--color-primary)] outline-none text-[#171717]"
              ></textarea>
            </div>

            <button type="button" className="w-full mt-4 py-4 px-6 rounded-lg font-bold text-[18px] tracking-wide transition-colors bg-[var(--color-primary)] hover:opacity-90 text-white shadow-lg">
              Submit Assignment
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

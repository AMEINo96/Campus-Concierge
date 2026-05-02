import TopBar from "@/components/TopBar";

export default function NewRequestPage() {
  return (
    <>
      <TopBar title="New Request" showBack={true} backHref="/s3c" />
      <main className="w-full max-w-2xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="text-center mb-6">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">Create Request</h2>
          <p className="text-[#64748B] text-lg">Submit a new service request to S3C support.</p>
        </section>

        <section className="bento-card">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0F172A]">
                Service Category
              </label>
              <select className="input-field w-full px-4 py-3">
                <option>IT Support</option>
                <option>Hostel Maintenance</option>
                <option>Academic Advising</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0F172A]">
                Subject
              </label>
              <input 
                type="text" 
                placeholder="Brief summary of your request" 
                className="input-field w-full px-4 py-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0F172A]">
                Description
              </label>
              <textarea 
                rows={5}
                placeholder="Provide detailed information..." 
                className="input-field w-full px-4 py-3 resize-none"
              ></textarea>
            </div>

            <button type="button" className="btn-primary w-full mt-2 py-4 px-6 text-lg tracking-wide shadow-md">
              Submit Request
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

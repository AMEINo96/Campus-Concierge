import TopBar from "@/components/TopBar";
import { Send, Bot } from "lucide-react";

export default function AIChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar title="NUST AI Assistant" showBack={true} backHref="/s3c" />
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 md:px-6 py-4 md:py-6 pb-24 overflow-hidden">
        
        <div className="flex flex-col gap-6 md:gap-8 overflow-y-auto flex-grow mb-6">
          {/* System Message */}
          <div className="flex gap-3 md:gap-4 items-end">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#0B2F6B] flex items-center justify-center text-white flex-shrink-0 shadow-lg border border-white/10">
              <Bot size={20} className="w-5 h-5 md:w-[22px] md:h-[22px]" strokeWidth={2} />
            </div>
            <div className="bg-white border border-[#E6EEF8] shadow-[0_4px_15px_rgba(15,23,42,0.04)] rounded-[20px] md:rounded-[22px] rounded-bl-sm py-3 px-4 md:py-4 md:px-6 max-w-[85%] md:max-w-[80%] text-[#0F172A] leading-relaxed">
              <p className="text-[14px] md:text-[15px] font-medium">Hello! I am the NUST AI Assistant. How can I help you today?</p>
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex gap-3 md:gap-4 justify-end items-end">
            <div className="bg-[#2563EB] shadow-[0_8px_20px_rgba(37,99,235,0.15)] rounded-[20px] md:rounded-[22px] rounded-br-sm py-3 px-4 md:py-4 md:px-6 max-w-[85%] md:max-w-[80%] text-white font-medium leading-relaxed">
              <p className="text-[14px] md:text-[15px]">What are the library hours today?</p>
            </div>
          </div>
          
          {/* System Message */}
          <div className="flex gap-3 md:gap-4 items-end">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#0B2F6B] flex items-center justify-center text-white flex-shrink-0 shadow-lg border border-white/10">
              <Bot size={20} className="w-5 h-5 md:w-[22px] md:h-[22px]" strokeWidth={2} />
            </div>
            <div className="bg-white border border-[#E6EEF8] shadow-[0_4px_15px_rgba(15,23,42,0.04)] rounded-[20px] md:rounded-[22px] rounded-bl-sm py-3 px-4 md:py-4 md:px-6 max-w-[85%] md:max-w-[80%] text-[#0F172A] leading-relaxed">
              <p className="text-[14px] md:text-[15px] font-medium">The Central Library is open from <span className="text-[#2563EB] font-bold">9:00 AM to 10:00 PM</span> today. Let me know if you need help finding a specific book or reservation!</p>
            </div>
          </div>
        </div>

        {/* Input Area — sits at bottom of viewport; no nav beneath it */}
        <div className="fixed bottom-4 left-0 w-full px-4 md:px-0 z-30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-[#E6EEF8] rounded-[24px] p-1.5 pr-1.5 pl-5 md:p-2 md:pr-2 md:pl-6 flex items-center shadow-[0_20px_50px_rgba(15,23,42,0.1)] focus-within:border-[#3B82F6] focus-within:ring-4 ring-[#3B82F6]/5 transition-all duration-300">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-transparent border-none focus:ring-0 text-[#0F172A] font-medium outline-none placeholder-[#64748B] text-[14px] md:text-[15px]"
              />
              <button className="w-10 h-10 md:w-12 md:h-12 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl md:rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg transition-all hover:scale-105 active:scale-95">
                <Send size={18} className="w-4 h-4 md:w-5 md:h-5 ml-0.5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

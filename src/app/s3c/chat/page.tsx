import TopBar from "@/components/TopBar";
import { Send, Bot } from "lucide-react";

export default function AIChatPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="NUST AI Assistant" showBack={true} backHref="/s3c" />
      <main className="flex-grow flex flex-col max-w-4xl mx-auto w-full px-6 py-6 pb-[140px] md:pb-24">
        
        <div className="flex flex-col gap-6 overflow-y-auto flex-grow mb-6">
          {/* System Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <Bot size={20} />
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-[#E2E8F0] shadow-sm rounded-2xl rounded-tl-sm py-4 px-5 max-w-[85%] text-[#0F172A]">
              <p>Hello! I am the NUST AI Assistant. How can I help you today?</p>
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex gap-4 justify-end">
            <div className="bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] shadow-md rounded-2xl rounded-tr-sm py-4 px-5 max-w-[85%] text-white font-medium">
              <p>What are the library hours today?</p>
            </div>
          </div>
          
          {/* System Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <Bot size={20} />
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-[#E2E8F0] shadow-sm rounded-2xl rounded-tl-sm py-4 px-5 max-w-[85%] text-[#0F172A]">
              <p>The Central Library is open from 9:00 AM to 10:00 PM today. Let me know if you need help finding a specific book!</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="fixed md:sticky bottom-24 md:bottom-6 left-0 w-full px-6 md:px-0">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-xl border border-[#E2E8F0] rounded-full p-2 pl-6 flex items-center shadow-[0_10px_30px_rgba(2,6,23,0.1)] focus-within:ring-4 ring-[#3B82F6]/20 transition-all">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-transparent border-none focus:ring-0 text-[#0F172A] outline-none placeholder-[#64748B]"
              />
              <button className="w-12 h-12 btn-primary rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Send size={20} className="ml-1" />
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

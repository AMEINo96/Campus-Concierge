"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Bell, Menu, X, LayoutDashboard, Home, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
}

export default function TopBar({ title, showBack = false, backHref = "#" }: TopBarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const isPortal = pathname?.startsWith("/portal");
  const isS3C = pathname?.startsWith("/s3c") || pathname === "/inbox" || pathname === "/requests" || pathname === "/profile";

  return (
    <>
      <header className="flex justify-between items-center h-16 w-full px-4 md:px-6 sticky top-0 z-40 bg-[#0A2540] border-b border-[#0F172A] shadow-md dark:shadow-none text-white">
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 hover:bg-white/10 rounded-full transition-colors"
          >
            <Menu size={24} strokeWidth={2} />
          </button>
          
          {showBack && (
            <Link
              href={backHref}
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-white hover:text-[#93C5FD] transition-colors"
            >
              <ArrowLeft size={24} strokeWidth={2} />
            </Link>
          )}
          
          {/* Desktop Title — clean text only, no icon wrapper */}
          <span className="hidden md:inline font-[family-name:var(--font-public-sans)] font-black uppercase text-xl text-white tracking-widest ml-2">
            {title || "CAMPUS HUB"}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {isPortal && (
            <>
              <Link href="/portal" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname === "/portal" ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>Portal</Link>
              <Link href="/portal/lms" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname?.includes("/lms") ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>LMS</Link>
              <Link href="/portal/qalam" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname?.includes("/qalam") ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>Qalam</Link>
            </>
          )}
          {isS3C && (
            <>
              <Link href="/s3c" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname === "/s3c" ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>Home</Link>
              <Link href="/requests" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname === "/requests" ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>Requests</Link>
              <Link href="/inbox" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname === "/inbox" ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>Inbox</Link>
            </>
          )}
          {pathname?.startsWith("/gateway") && (
            <>
              <Link href="/gateway/profile" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname === "/gateway/profile" ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>Profile</Link>
              <Link href="/gateway/settings" className={`px-3 py-2 text-sm font-semibold tracking-wide ${pathname === "/gateway/settings" ? "text-white border-b-2 border-white" : "text-[#93C5FD] hover:text-white transition-colors"}`}>Settings</Link>
            </>
          )}
        </nav>

        {/* Mobile Title (Centered) — clean text only, no icon wrapper */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden flex justify-center">
          <span className="font-[family-name:var(--font-public-sans)] font-bold uppercase text-lg text-white tracking-tight">
            {title || "CAMPUS HUB"}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="text-white hover:text-[#93C5FD] transition-colors flex items-center justify-center w-10 h-10 relative"
            >
              <Bell size={20} strokeWidth={2.5} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0A2540]"></span>
            </button>
            
            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50 text-left"
                >
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/80">
                    <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
                    <span className="text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded-full">3 New</span>
                  </div>
                  <div className="flex flex-col max-h-80 overflow-y-auto">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-700 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">New slides uploaded</p>
                      <p className="text-xs text-slate-500 mt-1">CS-211 • 2 hours ago</p>
                    </div>
                    <div className="p-4 border-b border-slate-100 dark:border-slate-700 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Quiz marks uploaded</p>
                      <p className="text-xs text-slate-500 mt-1">AI-301 • 5 hours ago</p>
                    </div>
                    <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer relative opacity-60">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Your request has been approved</p>
                      <p className="text-xs text-slate-500 mt-1">Hostel Maintenance • 1 day ago</p>
                    </div>
                  </div>
                  <div className="p-3 border-t border-slate-100 dark:border-slate-700 text-center bg-slate-50 dark:bg-slate-800/80">
                    <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Mark all as read</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center overflow-hidden border-2 border-white/30 hidden md:block cursor-pointer hover:border-white transition-colors shrink-0">
            <img
              alt="Profile Avatar"
              className="w-full h-full object-cover"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amein&backgroundColor=b6e3f4"
            />
          </div>
        </div>
      </header>

      {/* Slide-over Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-72 bg-[#F8FAFC] dark:bg-slate-900 z-50 shadow-2xl dark:shadow-none flex flex-col border-r border-[#E2E8F0] dark:border-slate-700"
            >
              <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0] dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E2E8F0] dark:border-slate-600">
                    <img
                      alt="Student Profile Avatar"
                      className="w-full h-full object-cover"
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amein&backgroundColor=b6e3f4"
                    />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">Amein</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-[#F1F5F9] dark:hover:bg-slate-700 rounded-full">
                  <X size={24} className="text-slate-900 dark:text-white" />
                </button>
              </div>

              <div className="flex flex-col p-4 gap-2 flex-grow">
                <span className="text-xs text-[#64748B] dark:text-slate-400 font-bold uppercase tracking-widest mb-2 mt-4 px-2">Navigate</span>
                
                <Link 
                  href="/gateway" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#EFF6FF] dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 hover:text-[#3B82F6] transition-colors font-semibold"
                >
                  <Home size={24} />
                  Gateway Hub
                </Link>

                <Link 
                  href="/portal" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#EFF6FF] dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 hover:text-[#3B82F6] transition-colors font-semibold"
                >
                  <LayoutDashboard size={24} />
                  Student Portal
                </Link>

                <Link 
                  href="/s3c" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#EFF6FF] dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 hover:text-[#3B82F6] transition-colors font-semibold"
                >
                  <Bot size={24} />
                  S3C Services
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

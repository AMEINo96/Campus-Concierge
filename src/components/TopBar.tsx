"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Bell, Menu, X, LayoutDashboard, Home, Bot, GraduationCap, Check, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
}

export default function TopBar({ title, showBack = false, backHref = "#" }: TopBarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, title: "Course materials updated", subtitle: "CS-211 • 2 hours ago", read: false, type: "lms", route: "/portal/lms" },
    { id: 2, title: "Quiz marks released", subtitle: "AI-301 • 5 hours ago", read: false, type: "marks", route: "/portal/qalam" },
    { id: 3, title: "Hackathon 2024", subtitle: "Event • 1 day ago", read: false, type: "event", route: "/portal/announcements/detail?title=Hackathon+2024&date=May+20&description=Join+the+annual+coding+competition." },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleNotificationClick = (notif: any) => {
    if (!notif.read) markAsRead(notif.id);
    setIsNotificationsOpen(false);
    router.push(notif.route);
  };

  const NotificationItem = ({ notif, isMobile = false }: { notif: any, isMobile?: boolean }) => {
    const [swiped, setSwiped] = useState(false);
    let touchStartX = 0;
    
    const handleTouchStart = (e: React.TouchEvent) => { touchStartX = e.touches[0].clientX; };
    const handleTouchMove = (e: React.TouchEvent) => {
      if (touchStartX - e.touches[0].clientX > 40) setSwiped(true);
      if (e.touches[0].clientX - touchStartX > 40) setSwiped(false);
    };

    let timer: NodeJS.Timeout;
    const handlePointerDown = () => { timer = setTimeout(() => setSwiped(true), 500); };
    const handlePointerUp = () => clearTimeout(timer);

    return (
      <div className={`relative overflow-hidden ${isMobile ? "rounded-2xl" : "rounded-xl"} mb-2 last:mb-0 group`}>
        {/* Actions Background */}
        <div className="absolute inset-y-0 right-0 w-24 bg-blue-50 dark:bg-slate-800 flex items-center justify-end px-4">
          <button 
            onClick={(e) => { e.stopPropagation(); markAsRead(notif.id); setSwiped(false); }}
            className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs"
          >
            <Check size={18} className="mb-1" />
            Read
          </button>
        </div>
        
        {/* Foreground Card */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onClick={() => handleNotificationClick(notif)}
          className={`relative flex gap-3 md:gap-4 transition-all duration-300 cursor-pointer 
            ${isMobile ? "p-5 border" : "p-4"}
            ${notif.read ? (isMobile ? "bg-white border-gray-100 opacity-70" : "bg-white dark:bg-slate-900 opacity-70 hover:bg-slate-50 dark:hover:bg-slate-800") : (isMobile ? "bg-white border-blue-100 shadow-sm" : "hover:bg-blue-50/50 dark:hover:bg-slate-800")}
          `}
          style={{ transform: swiped ? "translateX(-80px)" : "translateX(0)" }}
        >
          {/* Unread indicator */}
          <div className={`w-2.5 h-2.5 md:w-2 md:h-2 mt-1.5 rounded-full shrink-0 ${notif.read ? "bg-transparent" : "bg-blue-500 shadow-sm shadow-blue-500/40"}`}></div>
          <div>
            <p className={`text-[14px] md:text-[15px] ${notif.read ? "font-semibold text-slate-700 dark:text-slate-300" : "font-bold text-slate-900 dark:text-white"}`}>{notif.title}</p>
            <p className="text-[12px] md:text-[13px] text-slate-500 mt-1 font-medium">{notif.subtitle}</p>
          </div>

          {/* Desktop Hover Action */}
          {!isMobile && !notif.read && (
            <button 
              onClick={(e) => { e.stopPropagation(); markAsRead(notif.id); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-1.5 bg-white shadow-sm border border-slate-100 rounded-full text-blue-600 hover:bg-blue-50 transition-all"
              title="Mark as read"
            >
              <Check size={14} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>
    );
  };

  const isPortal = pathname?.startsWith("/portal");
  const isS3C = pathname?.startsWith("/s3c") || pathname === "/inbox" || pathname === "/requests" || pathname === "/profile";

  return (
    <>
      <header className="flex justify-between items-center h-[76px] w-full px-4 md:px-8 sticky top-0 z-40 bg-[#0B2F6B] text-white shadow-[0_4px_30px_rgba(11,47,107,0.15)] border-b border-white/5">
        <div className="flex items-center gap-5">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-11 h-11 hover:bg-white/10 rounded-xl transition-all active:scale-95 group"
          >
            <Menu size={24} strokeWidth={2.5} className="group-hover:text-[#FACC15] transition-colors" />
          </button>
          
          {showBack && (
            <Link
              href={backHref}
              className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FACC15] transition-all active:translate-x-[-2px]"
            >
              <ArrowLeft size={24} strokeWidth={2.5} />
            </Link>
          )}
          
          {/* Desktop Title */}
          <div className="hidden md:flex items-center gap-3.5">
            <div className="w-9 h-10 flex items-center justify-center text-[#FACC15] drop-shadow-sm">
               {/* Stand-in for NUST Shield */}
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span className="font-extrabold uppercase text-[16px] tracking-[0.1em] text-white">
              STUDENT PORTAL
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 h-full">
          {isPortal && (
            <>
              <Link href="/portal" className={`relative flex items-center h-full text-[15px] font-bold tracking-wide transition-all ${pathname === "/portal" ? "text-white" : "text-blue-100/70 hover:text-white"}`}>
                Dashboard
                {pathname === "/portal" && <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FACC15] rounded-t-full shadow-[0_-2px_10px_rgba(250,204,21,0.3)]"></motion.div>}
              </Link>
              <Link href="/portal/lms" className={`relative flex items-center h-full text-[15px] font-bold tracking-wide transition-all ${pathname?.includes("/lms") ? "text-white" : "text-blue-100/70 hover:text-white"}`}>
                My LMS
                {pathname?.includes("/lms") && <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FACC15] rounded-t-full shadow-[0_-2px_10px_rgba(250,204,21,0.3)]"></motion.div>}
              </Link>
              <Link href="/portal/qalam" className={`relative flex items-center h-full text-[15px] font-bold tracking-wide transition-all ${pathname?.includes("/qalam") ? "text-white" : "text-blue-100/70 hover:text-white"}`}>
                Qalam
                {pathname?.includes("/qalam") && <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FACC15] rounded-t-full shadow-[0_-2px_10px_rgba(250,204,21,0.3)]"></motion.div>}
              </Link>
            </>
          )}
          {isS3C && (
            <>
              <Link href="/s3c" className={`relative flex items-center h-full text-[15px] font-bold tracking-wide transition-all ${pathname === "/s3c" ? "text-white" : "text-blue-100/70 hover:text-white"}`}>
                Overview
                {pathname === "/s3c" && <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FACC15] rounded-t-full shadow-[0_-2px_10px_rgba(250,204,21,0.3)]"></motion.div>}
              </Link>
              <Link href="/requests" className={`relative flex items-center h-full text-[15px] font-bold tracking-wide transition-all ${pathname === "/requests" ? "text-white" : "text-blue-100/70 hover:text-white"}`}>
                My Requests
                {pathname === "/requests" && <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FACC15] rounded-t-full shadow-[0_-2px_10px_rgba(250,204,21,0.3)]"></motion.div>}
              </Link>
              <Link href="/inbox" className={`relative flex items-center h-full text-[15px] font-bold tracking-wide transition-all ${pathname === "/inbox" ? "text-white" : "text-blue-100/70 hover:text-white"}`}>
                Notifications
                {pathname === "/inbox" && <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FACC15] rounded-t-full shadow-[0_-2px_10px_rgba(250,204,21,0.3)]"></motion.div>}
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-5">
          <div className="relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="text-white hover:text-[#FACC15] transition-all flex items-center justify-center w-11 h-11 relative rounded-xl hover:bg-white/10"
            >
              <Bell size={22} strokeWidth={2.5} />
              {unreadCount > 0 && (
                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0B2F6B] animate-pulse flex items-center justify-center">
                   <span className="hidden">{unreadCount}</span>
                </span>
              )}
            </button>
            
            <AnimatePresence>
              {isNotificationsOpen && (
                <>
                  {/* Desktop Dropdown (hidden on mobile) */}
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="hidden md:block absolute top-14 right-0 w-85 bg-white dark:bg-slate-900 rounded-[22px] shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-100 dark:border-slate-800 overflow-hidden z-50 text-left"
                  >
                    <div className="p-5 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/80">
                      <h3 className="font-black text-[15px] text-slate-900 dark:text-white uppercase tracking-wider">Updates</h3>
                      <div className="flex items-center gap-3">
                        {unreadCount > 0 && (
                          <button onClick={markAllAsRead} className="text-[11px] font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">
                            <CheckCheck size={14} /> Mark All Read
                          </button>
                        )}
                        {unreadCount > 0 && <span className="text-[11px] font-bold text-white bg-[#2563EB] px-2.5 py-0.5 rounded-full shadow-sm">{unreadCount} New</span>}
                      </div>
                    </div>
                    <div className="flex flex-col max-h-96 overflow-y-auto p-2">
                      {notifications.map(notif => (
                        <NotificationItem key={notif.id} notif={notif} />
                      ))}
                    </div>
                    <div className="p-4 border-t border-slate-50 dark:border-slate-800 text-center">
                      <Link href="/inbox" onClick={() => setIsNotificationsOpen(false)} className="text-[13px] font-black text-blue-600 dark:text-blue-400 hover:text-blue-700 uppercase tracking-widest">
                        All Notifications
                      </Link>
                    </div>
                  </motion.div>

                  {/* Mobile Bottom Sheet (hidden on desktop) */}
                  <div className="md:hidden">
                    {/* Backdrop */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsNotificationsOpen(false)}
                      className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-[2px]"
                    />
                    
                    {/* Sheet Content */}
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      className="fixed inset-x-0 bottom-0 z-[110] bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] flex flex-col max-h-[85vh] overflow-hidden"
                    >
                      {/* Drag handle */}
                      <div className="w-full flex justify-center pt-4 pb-2 shrink-0 bg-white" onClick={() => setIsNotificationsOpen(false)}>
                        <div className="w-14 h-1.5 bg-gray-200 rounded-full"></div>
                      </div>
                      
                      {/* Header */}
                      <div className="px-6 pb-4 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
                        <h3 className="font-black text-[20px] text-slate-900 uppercase tracking-wider">Notifications</h3>
                        <div className="flex items-center gap-3">
                            {unreadCount > 0 && (
                              <button onClick={markAllAsRead} className="text-[12px] font-bold text-slate-500 hover:text-blue-600 bg-slate-50 px-2 py-1 rounded-lg transition-colors flex items-center gap-1">
                                <CheckCheck size={14} /> All Read
                              </button>
                            )}
                            {unreadCount > 0 && <span className="text-[12px] font-bold text-white bg-[#2563EB] px-3 py-1 rounded-full shadow-sm">{unreadCount} New</span>}
                            <button onClick={() => setIsNotificationsOpen(false)} className="w-9 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                                <X size={20} strokeWidth={2.5} />
                            </button>
                        </div>
                      </div>
                      
                      {/* Notifications List */}
                      <div className="flex flex-col overflow-y-auto p-5 bg-slate-50 min-h-[300px]">
                        {notifications.map(notif => (
                          <NotificationItem key={notif.id} notif={notif} isMobile={true} />
                        ))}
                      </div>
                      
                      {/* Footer Action */}
                      <div className="p-5 border-t border-gray-100 shrink-0 bg-white">
                        <Link href="/inbox" onClick={() => setIsNotificationsOpen(false)} className="flex items-center justify-center w-full py-4 bg-blue-50 text-[15px] font-black text-[#2563EB] rounded-2xl hover:bg-blue-100 active:scale-[0.98] uppercase tracking-widest transition-all">
                          All Notifications
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
          
          {/* User Avatar */}
          <Link href="/gateway/profile" className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 overflow-hidden hover:border-[#FACC15] transition-all hover:scale-105 active:scale-95 shadow-lg">
            <img src="/images/student-avatar.png" alt="User Avatar" className="w-full h-full object-cover" />
          </Link>
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
              className="fixed inset-0 bg-[#0B2F6B]/30 z-50 backdrop-blur-[6px]"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-[300px] bg-white z-50 shadow-[20px_0_60px_rgba(11,47,107,0.1)] flex flex-col border-r border-slate-100"
            >
              <div className="flex flex-col p-8 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
                <div className="flex items-center justify-between mb-8">
                   <div className="w-10 h-10 flex items-center justify-center text-[#0B2F6B]">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                   </div>
                   <button onClick={() => setIsMenuOpen(false)} className="w-9 h-9 flex items-center justify-center hover:bg-slate-100 rounded-xl transition-colors text-slate-400">
                     <X size={20} strokeWidth={2.5} />
                   </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-xl">
                    <img alt="Avatar" className="w-full h-full object-cover" src="/images/student-avatar.png" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[17px] text-slate-900 leading-tight tracking-tight">Amina Ahmad</span>
                    <span className="text-[11px] text-blue-600 mt-1 font-bold uppercase tracking-[0.15em]">BESE-13C</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-5 flex-grow gap-2">
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.25em] mb-4 mt-4 px-4">Navigation</span>
                
                {[
                  { href: "/gateway", label: "Gateway Hub", icon: Home },
                  { href: "/portal", label: "Student Portal", icon: LayoutDashboard },
                  { href: "/s3c", label: "S3C Services", icon: Bot },
                ].map((item) => {
                  const isActive = (item.href === "/gateway" && pathname === "/gateway") || 
                                 (item.href !== "/gateway" && pathname?.startsWith(item.href));
                  return (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 h-[56px] rounded-[20px] transition-all duration-[250ms] font-bold text-[15px] relative group ${isActive ? "bg-blue-50 text-[#2563EB]" : "hover:bg-slate-50 text-slate-600"}`}
                    >
                      {isActive && <motion.div layoutId="sidebar-active" className="absolute left-1.5 w-1.5 h-6 bg-[#2563EB] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></motion.div>}
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-white shadow-md text-[#2563EB]" : "bg-slate-100/80 text-slate-400 group-hover:bg-white group-hover:shadow-sm"}`}>
                        <item.icon size={20} strokeWidth={2.5} />
                      </div>
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="p-6 mt-auto">
                <div className="p-5 rounded-[24px] bg-slate-50 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1.5">Campus Concierge</p>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                    Digital assistant for a smarter, unified university experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

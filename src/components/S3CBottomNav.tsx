"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, Plus, Inbox, User } from "lucide-react";

export default function S3CBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/s3c", icon: Home },
    { name: "Requests", href: "/requests", icon: ClipboardList },
    { name: "Create", href: "/s3c/request/new", icon: Plus, isButton: true },
    { name: "Inbox", href: "/inbox", icon: Inbox },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-white pb-safe px-4 border-t-2 border-black md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href) && item.href !== "/s3c";
        // special case for /s3c exact match
        const isActuallyActive = item.href === "/s3c" ? pathname === "/s3c" : isActive;
        
        const Icon = item.icon;

        if (item.isButton) {
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center h-full w-20 relative -top-6"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white border-4 border-white shadow-sm hover:scale-105 transition-transform">
                <Icon size={32} strokeWidth={2.5} />
              </div>
            </Link>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center pt-2 px-2 hover:bg-slate-50 transition-colors duration-200 h-full w-16 ${
              isActuallyActive
                ? "text-[var(--color-primary)] border-t-4 border-[var(--color-primary)] pt-1"
                : "text-black"
            }`}
          >
            <Icon
              size={24}
              strokeWidth={isActuallyActive ? 2.5 : 2}
              className="mb-1"
            />
            <span className="font-[family-name:var(--font-public-sans)] text-[9px] font-extrabold uppercase tracking-wider">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

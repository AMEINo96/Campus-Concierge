"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Home, Bot, Activity } from "lucide-react";

export default function PortalBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Portal", href: "/portal", icon: LayoutDashboard },
    { name: "Attendance", href: "/portal/attendance", icon: Activity },
    { name: "Gateway", href: "/gateway", icon: Home },
    { name: "S3C", href: "/s3c", icon: Bot },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-white/80 backdrop-blur-lg pb-safe px-2 border-t border-slate-200 md:hidden">
      {navItems.map((item) => {
        const isActive =
          item.href === "/portal"
            ? pathname === "/portal"
            : pathname.startsWith(item.href);

        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center pt-2 px-1 transition-all duration-200 h-full w-20 ${
              isActive
                ? "text-[#2563EB]"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <div className={`p-2 rounded-xl transition-all ${isActive ? "bg-blue-50" : ""}`}>
              <Icon
                size={isActive ? 24 : 22}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </div>
            <span className={`font-[family-name:var(--font-public-sans)] text-[9px] font-bold uppercase tracking-wider mt-1 ${isActive ? "opacity-100" : "opacity-70"}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

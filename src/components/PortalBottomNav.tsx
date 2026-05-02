"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Home, Bot } from "lucide-react";

export default function PortalBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Portal", href: "/portal", icon: LayoutDashboard },
    { name: "Gateway", href: "/gateway", icon: Home },
    { name: "S3C", href: "/s3c", icon: Bot },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-white pb-safe px-4 border-t-2 border-black md:hidden">
      {navItems.map((item) => {
        const isActive =
          item.href === "/portal"
            ? pathname.startsWith("/portal")
            : pathname.startsWith(item.href);

        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center pt-2 px-4 hover:bg-slate-50 transition-colors duration-200 h-full w-24 ${
              isActive
                ? "text-[var(--color-primary)] border-t-4 border-[var(--color-primary)] pt-1"
                : "text-black"
            }`}
          >
            <Icon
              size={28}
              strokeWidth={isActive ? 2.5 : 2}
              className="mb-1"
            />
            <span className="font-[family-name:var(--font-public-sans)] text-[10px] font-extrabold uppercase tracking-widest">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

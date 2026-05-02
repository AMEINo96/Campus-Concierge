import Link from "next/link";
import { BadgeCheck, Lock, EyeOff } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="w-full flex-grow flex items-center justify-center p-6">
      <div className="w-full max-w-md flex flex-col items-center gap-12 z-10">
        <header className="flex flex-col items-center text-center gap-2">
          <h1 className="text-[40px] leading-[1.2] tracking-tight font-bold text-slate-900 dark:text-white">
            Welcome to Campus Concierge
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300">Sign in with your Qalam ID</p>
        </header>

        <section className="w-full bento-card flex flex-col gap-4">
          <form className="flex flex-col gap-4" action="/gateway" method="GET">
            <div className="flex flex-col gap-1">
              <label
                className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-slate-900 dark:text-white"
                htmlFor="qalam-id"
              >
                Qalam ID
              </label>
              <div className="relative">
                <BadgeCheck
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  size={20}
                  strokeWidth={2}
                />
                <input
                  className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] dark:bg-slate-800 border border-[#E2E8F0] dark:border-slate-600 rounded-lg focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-base text-slate-900 dark:text-white transition-colors placeholder-slate-400 dark:placeholder-slate-500 outline-none"
                  id="qalam-id"
                  name="qalam-id"
                  placeholder="e.g., 345678"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-slate-900 dark:text-white"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  size={20}
                  strokeWidth={2}
                />
                <input
                  className="w-full pl-10 pr-10 py-3 bg-[#F8FAFC] dark:bg-slate-800 border border-[#E2E8F0] dark:border-slate-600 rounded-lg focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-base text-slate-900 dark:text-white transition-colors placeholder-slate-400 dark:placeholder-slate-500 outline-none"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
                  type="button"
                >
                  <EyeOff size={20} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-[-8px]">
              <Link
                className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold text-[#3B82F6] hover:text-[#1E3A8A] dark:hover:text-[#93C5FD] transition-colors"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>

            <Link
              href="/gateway"
              className="w-full mt-2 py-3 px-6 rounded-lg font-semibold text-[18px] tracking-wide transition-colors shadow-sm dark:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#15A8E3] hover:opacity-90 text-white text-center inline-block"
            >
              Sign In
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}

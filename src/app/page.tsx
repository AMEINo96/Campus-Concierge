"use client";

import Link from "next/link";
import { BadgeCheck, Lock, EyeOff, Eye } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-br from-[#0B2F6B] via-[#0E4092] to-[#1455B7] z-10">
      
      {/* Subtle Background Pattern/Waves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.4" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,213.3C672,235,768,245,864,224C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 w-[90%] max-w-[420px] flex flex-col items-center gap-6 md:gap-8 py-8 my-auto">

        {/* Branding Header */}
        <header className="flex flex-col items-center text-center gap-3 w-full">
          {/* NUST Shield Placeholder */}
          <div className="w-20 h-24 mb-2 flex items-center justify-center text-[#FACC15] drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-90"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <h1 className="text-3xl md:text-[36px] leading-tight tracking-tight font-extrabold text-white">
            Campus Concierge
          </h1>
          <p className="text-sm md:text-[16px] text-blue-100 font-medium tracking-wide">
            Your university, simplified.
          </p>
        </header>

        {/* Login Card (Glassmorphism) */}
        <section className="w-full bg-white/95 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] rounded-[28px] p-6 md:p-10 flex flex-col gap-6">

          <div className="text-center mb-2">
            <h2 className="text-lg md:text-[20px] font-bold text-[#0F172A]">Welcome Back</h2>
            <p className="text-xs md:text-[14px] text-slate-500 mt-1">Sign in with your Qalam ID</p>
          </div>

          <form className="flex flex-col gap-5" action="/gateway" method="GET">

            <div className="flex flex-col gap-2">
              <label
                className="text-[12px] tracking-wider font-bold uppercase text-slate-600"
                htmlFor="qalam-id"
              >
                Qalam ID
              </label>
              <div className="relative group">
                <BadgeCheck
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0B2F6B] transition-colors"
                  size={20}
                  strokeWidth={2}
                />
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0B2F6B] focus:ring-1 focus:ring-[#0B2F6B] text-[15px] font-medium text-slate-900 transition-all placeholder-slate-400 outline-none"
                  id="qalam-id"
                  name="qalam-id"
                  placeholder="e.g., 345678"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-[12px] tracking-wider font-bold uppercase text-slate-600"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0B2F6B] transition-colors"
                  size={20}
                  strokeWidth={2}
                />
                <input
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0B2F6B] focus:ring-1 focus:ring-[#0B2F6B] text-[15px] font-medium text-slate-900 transition-all placeholder-slate-400 outline-none"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  aria-label="Toggle password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0B2F6B] transition-colors focus:outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={20} strokeWidth={2} /> : <EyeOff size={20} strokeWidth={2} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-[-4px]">
              <Link
                className="text-[13px] font-bold text-[#0B2F6B] hover:text-[#FACC15] transition-colors"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-xl font-bold text-[16px] tracking-wide transition-all shadow-lg bg-gradient-to-r from-[#0B2F6B] to-[#1455B7] hover:from-[#1455B7] hover:to-[#0B2F6B] text-white active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Sign In
            </button>
          </form>
        </section>

      </div>

      {/* Footer Branding */}
      <div className="relative z-10 pt-8 pb-4">
        <p className="text-[12px] font-medium text-white/50 tracking-wider">
          Powered by S3C NUST
        </p>
      </div>

    </main>
  );
}

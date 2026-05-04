"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import { Dumbbell, Waves, CreditCard } from "lucide-react";

export default function SportsComplexPage() {
  return (
    <>
      <TopBar title="Sports Complex" showBack={true} backHref="/s3c/services" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">Sports Complex</h1>
          <p className="text-lg text-[#64748B]">Manage your sports registrations and facility access.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bento-card-light p-8 flex flex-col items-center justify-center text-center group hover:border-[#8B5CF6] hover:bg-[#F5F3FF] transition-all">
            <div className="w-20 h-20 rounded-full bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center mb-6 transition-colors shadow-sm">
              <Dumbbell size={40} strokeWidth={2} className="text-purple-600 group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Gym Registration</h2>
            <p className="text-sm text-[#64748B]">Apply for semester or annual gym membership.</p>
          </button>

          <button className="bento-card-light p-8 flex flex-col items-center justify-center text-center group hover:border-[#06B6D4] hover:bg-[#ECFEFF] transition-all">
            <div className="w-20 h-20 rounded-full bg-cyan-100 group-hover:bg-cyan-200 flex items-center justify-center mb-6 transition-colors shadow-sm">
              <Waves size={40} strokeWidth={2} className="text-cyan-600 group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Swimming Pool</h2>
            <p className="text-sm text-[#64748B]">Register for designated swimming pool time slots.</p>
          </button>

          <button className="bento-card-light p-8 flex flex-col items-center justify-center text-center group hover:border-[#10B981] hover:bg-[#ECFDF5] transition-all">
            <div className="w-20 h-20 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center mb-6 transition-colors shadow-sm">
              <CreditCard size={40} strokeWidth={2} className="text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Pay Sports Fees</h2>
            <p className="text-sm text-[#64748B]">Clear dues and pay for facility bookings securely.</p>
          </button>
        </div>
      </main>
    </>
  );
}

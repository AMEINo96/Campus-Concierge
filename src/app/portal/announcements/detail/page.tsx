import TopBar from "@/components/TopBar";
import { Star, Gift, Bell, Calendar, Info } from "lucide-react";
import Link from "next/link";

export default async function AnnouncementDetailPage({ searchParams }: { searchParams: Promise<{ title?: string, date?: string, desc?: string, icon?: string }> }) {
  const resolvedParams = await searchParams;
  
  // Extract parameters or use safe fallbacks
  const title = resolvedParams?.title || "Announcement Details";
  const date = resolvedParams?.date || "Recently Updated";
  const desc = resolvedParams?.desc || "No additional details were provided for this announcement. Please contact the administration if you need more information.";
  const iconName = resolvedParams?.icon || "info";

  // Map string icon names to actual Lucide components
  const getIcon = () => {
    switch (iconName) {
      case "star": return Star;
      case "gift": return Gift;
      case "bell": return Bell;
      case "calendar": return Calendar;
      default: return Info;
    }
  };
  
  const Icon = getIcon();

  // Pick colors based on the icon for thematic styling
  const getColorScheme = () => {
    if (iconName === "star") return { bg: "bg-[#FFFBEB]", iconColor: "text-[#F59E0B]", border: "border-[#FEF3C7]" };
    if (iconName === "gift") return { bg: "bg-[#EFF6FF]", iconColor: "text-[#3B82F6]", border: "border-[#DBEAFE]" };
    if (iconName === "calendar") return { bg: "bg-emerald-50", iconColor: "text-emerald-600", border: "border-emerald-100" };
    if (iconName === "bell") return { bg: "bg-purple-50", iconColor: "text-purple-600", border: "border-purple-100" };
    return { bg: "bg-slate-50", iconColor: "text-slate-600", border: "border-slate-200" };
  };

  const scheme = getColorScheme();

  return (
    <>
      <TopBar title="Announcement Details" showBack={true} backHref="/portal" />
      <main className="w-full max-w-3xl mx-auto px-6 py-12 pb-32">
        <div className={`w-full rounded-3xl overflow-hidden shadow-sm border ${scheme.border} bg-white`}>
          
          {/* Header section */}
          <div className={`px-8 py-10 ${scheme.bg} flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b ${scheme.border}`}>
            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <Icon size={36} className={scheme.iconColor} />
            </div>
            <div className="text-center sm:text-left pt-2">
              <h1 className="text-3xl font-bold text-[#0F172A] mb-2">{title}</h1>
              <div className="inline-block px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">{date}</span>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-8 md:p-12">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-wider">Details</h3>
            <p className="text-lg text-[#475569] leading-relaxed whitespace-pre-wrap">
              {desc}
            </p>
          </div>
          
          {/* Footer actions */}
          <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-center sm:justify-end">
            <Link 
              href="/portal/announcements" 
              className="px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-[#0F172A] font-bold rounded-xl transition-colors shadow-sm"
            >
              View All Announcements
            </Link>
          </div>
          
        </div>
      </main>
    </>
  );
}

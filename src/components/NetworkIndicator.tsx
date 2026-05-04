"use client";

import { useState, useEffect } from "react";
import { WifiOff, Wifi } from "lucide-react";

export default function NetworkIndicator() {
  const [isOffline, setIsOffline] = useState(false);
  const [showRestored, setShowRestored] = useState(false);

  useEffect(() => {
    function handleOnline() {
      setIsOffline(false);
      setShowRestored(true);
      setTimeout(() => setShowRestored(false), 3500);
    }

    function handleOffline() {
      setIsOffline(true);
      setShowRestored(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initial check
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOffline(true);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline && !showRestored) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-center py-3 px-4 shadow-md transition-all duration-300 ${
        isOffline ? "bg-[#EF4444] text-white" : "bg-[#10B981] text-white"
      }`}
    >
      <div className="flex items-center gap-2.5 max-w-[1280px] w-full justify-center">
        {isOffline ? (
          <>
            <WifiOff size={18} className="animate-pulse" />
            <span className="text-[14px] font-bold tracking-wide">You're offline — showing cached data</span>
          </>
        ) : (
          <>
            <Wifi size={18} />
            <span className="text-[14px] font-bold tracking-wide">Connection restored. Your data has been synced.</span>
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Wifi, Battery, Search } from "lucide-react";

export function MenuBar({
  activeApp,
  onSpotlight,
}: {
  activeApp: string | null;
  onSpotlight: () => void;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-[1000] flex h-[25px] items-center justify-between bg-black/50 px-3 backdrop-blur-2xl">
      {/* Left */}
      <div className="flex items-center gap-4">
        <span className="text-[13px] font-medium text-white/90"></span>
        <span className="text-[13px] font-bold text-white/90">
          {activeApp ?? "Finder"}
        </span>
        <div className="flex items-center gap-3 text-[13px] text-white/60">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Window</span>
          <span>Help</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2.5">
        <button onClick={onSpotlight} className="text-white/70 hover:text-white/90">
          <Search className="h-3.5 w-3.5" />
        </button>
        <Wifi className="h-3.5 w-3.5 text-white/70" />
        <Battery className="h-3.5 w-3.5 text-white/70" />
        <span className="text-[12px] text-white/70">{time}</span>
      </div>
    </div>
  );
}

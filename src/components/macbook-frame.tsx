"use client";

import { useRef, useEffect, useState } from "react";
import { MacOSDesktop } from "@/components/macos-desktop";

export function MacBookFrame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.55);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const screenWidth = containerWidth - 24;
      setScale(Math.min(screenWidth / 1440, 0.75));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const screenHeight = 900 * scale;
  const screenWidth = 1440 * scale;

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-5xl px-4"
    >
      <div className="mx-auto">
        {/* Screen / Lid */}
        <div
          className="mx-auto overflow-hidden rounded-xl border border-[#444] bg-[#0a0a0a] shadow-2xl shadow-black/50"
          style={{
            padding: "10px 10px 6px 10px",
            width: screenWidth + 20,
          }}
        >
          {/* Webcam notch */}
          <div className="mx-auto mb-1.5 h-1.5 w-3 rounded-full bg-[#1a1a1a]" />

          {/* Screen area */}
          <div
            className="overflow-hidden rounded-[4px]"
            style={{ width: screenWidth, height: screenHeight }}
          >
            <div
              style={{
                width: 1440,
                height: 900,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <MacOSDesktop />
            </div>
          </div>
        </div>

        {/* Hinge */}
        <div
          className="mx-auto h-[4px] rounded-b-sm bg-gradient-to-b from-[#555] to-[#333]"
          style={{ width: screenWidth + 20 }}
        />

        {/* Base / Keyboard deck */}
        <div
          className="mx-auto h-3 rounded-b-xl bg-gradient-to-b from-[#444] to-[#2a2a2a] shadow-lg"
          style={{
            width: screenWidth + 60,
            clipPath: "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>
    </div>
  );
}

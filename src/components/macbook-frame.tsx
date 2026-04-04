"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MacOSDesktop } from "@/components/macos-desktop";

export function MacBookFrame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.55);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(6), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 150 });

  // Compute scale based on container width
  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      // Leave some padding for the bezel
      const screenWidth = containerWidth - 24; // 12px bezel on each side
      setScale(Math.min(screenWidth / 1440, 0.75));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    rotateY.set(x * 3);
    rotateX.set(6 - y * 3);
  };

  const handleMouseLeave = () => {
    rotateX.set(6);
    rotateY.set(0);
  };

  const screenHeight = 900 * scale;
  const screenWidth = 1440 * scale;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="mx-auto w-full max-w-5xl px-4"
      style={{ perspective: "1800px" }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="mx-auto"
      >
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

          {/* Screen area — renders the desktop at 1440x900, scaled down */}
          <div
            className="overflow-hidden rounded-[4px]"
            style={{
              width: screenWidth,
              height: screenHeight,
            }}
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
      </motion.div>
    </div>
  );
}

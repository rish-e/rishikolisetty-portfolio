"use client";

import { useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PASSWORD = "rishi";

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const handleSubmit = () => {
    if (password.toLowerCase() === PASSWORD) {
      setUnlocking(true);
      setTimeout(onUnlock, 600);
    } else {
      setShake(true);
      setPassword("");
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <AnimatePresence>
      {!unlocking ? (
        <motion.div
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[2000] flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          }}
        >
          {/* macOS Stickies-style note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute top-8 left-8 z-10 w-52 overflow-hidden rounded-md shadow-xl"
            style={{ transform: "rotate(-2deg)" }}
          >
            {/* Stickies title bar */}
            <div className="flex items-center gap-1.5 bg-[#f7db4f] px-3 py-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#e8c53a]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#e8c53a]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#e8c53a]" />
            </div>
            {/* Stickies body */}
            <div className="bg-[#fdefa6] px-4 py-3">
              <p className="text-[13px] leading-snug text-[#5a4a00]">
                password:
              </p>
              <p className="mt-1 font-mono text-lg font-bold text-[#3d3200]">
                {PASSWORD}
              </p>
              <p className="mt-3 text-[11px] text-[#8a7a30] italic">
                don&apos;t tell anyone ;)
              </p>
            </div>
          </motion.div>

          {/* Lock screen content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Avatar */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-3xl font-bold text-white shadow-xl">
              RK
            </div>

            {/* Name */}
            <h1 className="text-xl font-semibold text-white">
              Rishi Kolisetty
            </h1>

            {/* Password input */}
            <motion.div
              animate={shake ? { x: [0, -12, 12, -8, 8, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter Password"
                autoFocus
                className="w-56 rounded-full bg-white/10 px-5 py-2.5 text-center text-sm text-white placeholder:text-white/30 outline-none backdrop-blur-sm focus:bg-white/15 focus:ring-1 focus:ring-white/20"
              />
            </motion.div>

            <p className="text-xs text-white/30">
              hint: check the sticky note
            </p>
          </motion.div>

          {/* Time display at top */}
          <LockClock />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function LockClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useState(() => {
    const now = new Date();
    setTime(
      now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
    setDate(
      now.toLocaleDateString("en-US", {
        timeZone: "Asia/Kolkata",
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    );
  });

  return (
    <div className="absolute top-16 text-center">
      <p className="text-6xl font-thin tracking-tight text-white">{time}</p>
      <p className="mt-1 text-lg text-white/60">{date}</p>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Folder SVG
function FolderIcon() {
  return (
    <svg viewBox="0 0 80 64" className="h-16 w-20">
      <defs>
        <linearGradient id="ef" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="100%" stopColor="#34AADC" />
        </linearGradient>
        <linearGradient id="eb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4AB8E8" />
          <stop offset="100%" stopColor="#2A9AC7" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="76" height="52" rx="4" fill="url(#eb)" />
      <path d="M2 10 L2 6 Q2 2 6 2 L30 2 Q34 2 36 6 L38 10 Z" fill="url(#eb)" />
      <rect x="2" y="16" width="76" height="46" rx="4" fill="url(#ef)" />
    </svg>
  );
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="bg-black py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-widest text-white/40">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            What I&apos;ve done
          </motion.h2>

          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-2 text-sm text-white/40">
            Click a folder to open it
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-6">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-28 flex-col items-center gap-1 rounded-lg p-3 transition-colors hover:bg-white/5"
                >
                  <FolderIcon />
                  <span className="text-center text-[11px] text-[#ccc]">{exp.title}</span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 w-72 overflow-hidden rounded-xl border border-[#3a3a3a] bg-[#1a1a1a]"
                    >
                      <div className="flex items-center gap-2 border-b border-[#333] bg-[#2d2d2d] px-3 py-2">
                        <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <div className="h-2 w-2 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[13px] font-semibold text-white">{exp.title}</h4>
                          <span className="text-[11px] text-[#666]">{exp.period}</span>
                        </div>
                        <p className="mt-0.5 text-[12px] text-[#888]">{exp.org}</p>
                        <p className="mt-2 text-[12px] leading-relaxed text-[#aaa]">{exp.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section id="about" className="bg-black py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-widest text-white/40">
            About
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            A bit about me
          </motion.h2>

          {/* Finder-style window */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-10 overflow-hidden rounded-xl border border-[#3a3a3a]">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-[#3a3a3a] bg-[#2d2d2d] px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/50">About — Finder</span>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-44 shrink-0 border-r border-[#3a3a3a] bg-[#1e1e1e] p-4">
                <div className="space-y-2">
                  {["Bio", "Location", "Status"].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-md px-3 py-1.5 text-[13px] ${i === 0 ? "bg-[#3a3a3a] text-white" : "text-[#aaa]"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-[#1a1a1a] p-6">
                <p className="text-[15px] leading-relaxed text-[#ccc]">
                  I&apos;m an engineer and entrepreneur based in Bangalore, India.
                  I build across AI, fintech, and developer tools — but I&apos;m
                  equally deep in financial markets, algorithmic trading, and
                  subscription business models.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[#ccc]">
                  I trade options and derivatives, build AI-driven sentiment
                  analysis tools, design subscription platforms with Stripe and
                  Razorpay, and ship software daily. Currently learning Spanish
                  on the side.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-[#252525] px-4 py-2.5">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-[#ccc]">Bangalore, India</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#252525] px-4 py-2.5">
                    <Clock className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-[#ccc]">Shipping daily</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#252525] px-4 py-2.5">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-[#ccc]">5 products</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MacBookFrame } from "@/components/macbook-frame";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black pt-16 pb-12">
      {/* Subtle gradient behind laptop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MacBookFrame />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          This is my desktop.{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Explore it.
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/50">
          Click apps in the dock, drag windows around, type commands in Terminal.
          Or scroll down to learn more about me.
        </p>

        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8 inline-flex flex-col items-center gap-1 text-white/30 hover:text-white/50"
        >
          <span className="text-xs">scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}

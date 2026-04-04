"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const thoughts = [
  { title: "On AI", text: "AI doesn't replace engineers — it replaces engineers who don't use AI." },
  { title: "On shipping", text: "Ship MVPs, not pitch decks. The market will tell you what to build next." },
  { title: "On pricing", text: "Price on value, not on what competitors charge. If you compete on price, you lose on price." },
  { title: "On learning", text: "The best way to learn is to build something real. Tutorials are where curiosity goes to die." },
  { title: "On open source", text: "Open-source the engine, monetize the cloud. That's the playbook." },
  { title: "On TypeScript", text: "TypeScript isn't optional. It's the difference between shipping and debugging." },
];

export function ThoughtsSection() {
  return (
    <section id="thoughts" className="bg-black py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-widest text-white/40">
            Thoughts
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Hot takes
          </motion.h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {thoughts.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-lg shadow-lg"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 0.8}deg)` }}
              >
                {/* Notes-style header */}
                <div className="bg-[#f5c518] px-4 py-1.5">
                  <span className="text-[11px] font-semibold text-[#8a6d00]">{t.title}</span>
                </div>
                <div className="bg-[#fdefa6] px-4 py-4">
                  <p className="text-[14px] leading-relaxed text-[#3d3200]">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

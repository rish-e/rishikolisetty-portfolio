"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const iconColors: Record<string, string> = {
  RenderKit: "from-orange-500 to-red-500",
  Autopilot: "from-blue-500 to-cyan-500",
  Scout: "from-green-500 to-emerald-500",
  ShipClip: "from-purple-500 to-pink-500",
  DebuggAI: "from-yellow-500 to-orange-500",
};

const iconEmojis: Record<string, string> = {
  RenderKit: "🖼️",
  Autopilot: "🤖",
  Scout: "📊",
  ShipClip: "🎬",
  DebuggAI: "🔍",
};

const statusColors = {
  live: "text-green-400 bg-green-500/10",
  building: "text-blue-400 bg-blue-500/10",
  beta: "text-yellow-400 bg-yellow-500/10",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-black py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-widest text-white/40">
            Projects
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            What I&apos;ve built
          </motion.h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="group overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#161616] p-5 transition-colors hover:border-[#444]"
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl shadow",
                    iconColors[project.title] ?? "from-gray-500 to-gray-600"
                  )}>
                    {iconEmojis[project.title] ?? "📦"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[15px] font-semibold text-white">{project.title}</h3>
                      <span className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-medium", statusColors[project.status])}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#888]">{project.tagline}</p>
                  </div>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-[#aaa]">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-[#252525] px-2 py-0.5 text-[11px] text-[#888]">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

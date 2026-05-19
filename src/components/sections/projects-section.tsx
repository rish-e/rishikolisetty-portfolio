"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Star, Search, ExternalLink, Lock, ChevronLeft, Play } from "lucide-react";

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
  BackendMax: "from-teal-500 to-cyan-600",
  CodeMax: "from-indigo-500 to-purple-600",
  TokenPilot: "from-amber-500 to-yellow-400",
  SiteViz: "from-orange-400 to-amber-500",
  ClaudeETA: "from-slate-500 to-gray-600",
  Streak: "from-red-500 to-orange-500",
  SentimentBot: "from-emerald-500 to-green-600",
};

const iconEmojis: Record<string, string> = {
  RenderKit: "🖼️",
  Autopilot: "🤖",
  Scout: "📊",
  ShipClip: "🎬",
  DebuggAI: "🔍",
  BackendMax: "🩺",
  CodeMax: "🔗",
  TokenPilot: "⚡",
  SiteViz: "🏗️",
  ClaudeETA: "⏱️",
  Streak: "🔥",
  SentimentBot: "📈",
};

const statusColors = {
  live: "text-green-400",
  building: "text-blue-400",
  beta: "text-yellow-400",
};

const statusLabels = {
  live: "Live",
  building: "In Development",
  beta: "Beta",
};

const categories = [
  { id: "all", label: "Discover", icon: Star },
  { id: "ai", label: "AI & ML" },
  { id: "fintech", label: "Fintech" },
  { id: "devtools", label: "Dev Tools" },
  { id: "creator", label: "Creator" },
];

const projectCategories: Record<string, string> = {
  RenderKit: "devtools",
  Autopilot: "ai",
  Scout: "fintech",
  ShipClip: "creator",
  DebuggAI: "ai",
  BackendMax: "devtools",
  CodeMax: "devtools",
  TokenPilot: "devtools",
  SiteViz: "ai",
  ClaudeETA: "devtools",
  Streak: "creator",
  SentimentBot: "fintech",
};

function getCategoryLabel(title: string) {
  const cat = projectCategories[title];
  return categories.find((c) => c.id === cat)?.label ?? "General";
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="shrink-0 text-[12px] text-[#555]">{label}</span>
      <span className="text-right text-[12px] text-[#999]">{value}</span>
    </div>
  );
}

export function ProjectsSection() {
  const [activeCat, setActiveCat] = useState("all");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = activeCat === "all"
    ? projects
    : projects.filter((p) => projectCategories[p.title] === activeCat);

  const selectedProject = projects.find((p) => p.title === selected);

  return (
    <section id="projects" className="bg-black py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* App Store window */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="overflow-hidden rounded-xl border border-[#3a3a3a]">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-[#3a3a3a] bg-[#2d2d2d] px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/50">App Store — Rishi&apos;s Apps</span>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-40 shrink-0 border-r border-[#3a3a3a] bg-[#1e1e1e] p-3">
                <div className="mb-2 flex items-center gap-2 rounded-md bg-[#333] px-2.5 py-1.5">
                  <Search className="h-3 w-3 text-[#888]" />
                  <span className="text-[11px] text-[#888]">Search</span>
                </div>
                <div className="space-y-0.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCat(cat.id); setSelected(null); }}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-lg px-3 py-[5px] text-[13px]",
                        activeCat === cat.id
                          ? "bg-[#3a3a3a] text-white"
                          : "text-[#409CFF] hover:bg-[#2a2a2a]"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-[#1a1a1a]">
                <AnimatePresence mode="wait">
                  {selectedProject ? (
                    /* Detail view */
                    <motion.div
                      key={`detail-${selectedProject.title}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Back nav */}
                      <div className="flex items-center border-b border-[#242424] px-4 py-2">
                        <button
                          onClick={() => setSelected(null)}
                          className="flex items-center gap-0.5 text-[12px] text-[#409CFF] hover:text-[#5AC8FA]"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                          Apps
                        </button>
                      </div>

                      {/* Scrollable body */}
                      <div className="max-h-[480px] overflow-y-auto">

                        {/* App header */}
                        <div className="flex items-start gap-4 px-5 pb-4 pt-5">
                          <div className={cn(
                            "flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br text-3xl shadow-lg",
                            iconColors[selectedProject.title]
                          )}>
                            {iconEmojis[selectedProject.title]}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-[17px] font-bold leading-tight text-white">{selectedProject.title}</h3>
                            <p className="mt-0.5 text-[12px] text-[#777]">{selectedProject.tagline}</p>
                            <p className="mt-0.5 text-[11px] text-[#444]">Rishi Kolisetty</p>
                            <div className="mt-3">
                              {selectedProject.isPrivate ? (
                                <span className="flex w-fit items-center gap-1.5 rounded-full bg-[#252525] px-4 py-1.5 text-[12px] font-semibold text-[#555]">
                                  <Lock className="h-3 w-3" />
                                  Oops, this seems to be private!
                                </span>
                              ) : selectedProject.href ? (
                                <a
                                  href={selectedProject.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex w-fit items-center gap-1.5 rounded-full bg-[#409CFF] px-5 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#5AC8FA]"
                                >
                                  View <ExternalLink className="h-3 w-3" />
                                </a>
                              ) : (
                                <span className="flex w-fit items-center rounded-full bg-[#2a2a2a] px-5 py-1.5 text-[12px] font-semibold text-[#666]">
                                  Coming Soon
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="shrink-0">
                            <span className={cn("text-[10px] font-semibold uppercase tracking-widest", statusColors[selectedProject.status])}>
                              {statusLabels[selectedProject.status]}
                            </span>
                          </div>
                        </div>

                        {/* Video preview */}
                        <div className="border-t border-[#242424] px-5 py-4">
                          <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/20">Preview</p>
                          {selectedProject.video ? (
                            <video
                              src={selectedProject.video}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full rounded-xl object-cover"
                              style={{ aspectRatio: "16/9" }}
                            />
                          ) : (
                            <div
                              className="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-[#0d0d0d] text-white/15"
                              style={{ aspectRatio: "16/9" }}
                            >
                              <Play className="h-7 w-7" />
                              <span className="text-[11px]">Preview coming soon</span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <div className="border-t border-[#242424] px-5 py-4">
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/20">Description</p>
                          <p className="text-[13px] leading-relaxed text-[#bbb]">{selectedProject.description}</p>
                        </div>

                        {/* Information */}
                        <div className="border-t border-[#242424] px-5 py-4">
                          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/20">Information</p>
                          <div className="space-y-2.5">
                            <InfoRow label="Developer" value="Rishi Kolisetty" />
                            <InfoRow label="Category" value={getCategoryLabel(selectedProject.title)} />
                            <InfoRow label="Built with" value={selectedProject.tech.join(", ")} />
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ) : (
                    /* List view */
                    <motion.div
                      key="list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Featured banner */}
                      <div className="bg-gradient-to-br from-[#1a1a3e] via-[#2d1b4e] to-[#1a1a2e] px-6 py-6">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">Featured Developer</p>
                        <h2 className="mt-1 text-xl font-bold text-white">Rishi&apos;s Apps</h2>
                        <p className="mt-1 text-[13px] text-white/50">AI, fintech, and developer tools</p>
                      </div>

                      {/* App list */}
                      <div className="max-h-[380px] overflow-y-auto divide-y divide-[#2a2a2a]">
                        {filtered.map((project) => (
                          <button
                            key={project.title}
                            onClick={() => setSelected(project.title)}
                            className="flex w-full items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-white/[0.02]"
                          >
                            <div className={cn(
                              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl shadow",
                              iconColors[project.title]
                            )}>
                              {iconEmojis[project.title]}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[13px] font-medium text-white">{project.title}</p>
                              <p className="text-[11px] text-[#888]">{project.tagline}</p>
                            </div>
                            <div className="shrink-0">
                              {project.href || project.isPrivate ? (
                                <span className="rounded-full bg-[#333] px-5 py-1 text-[12px] font-semibold text-[#409CFF]">
                                  Get
                                </span>
                              ) : (
                                <span className="rounded-full bg-[#252525] px-4 py-1 text-[11px] text-[#666]">
                                  Soon
                                </span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

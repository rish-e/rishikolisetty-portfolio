"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Star, Paintbrush, Briefcase, Play, Code2, Grid3X3, RefreshCw, Search, ChevronLeft, ExternalLink, Lock } from "lucide-react";
import { projects } from "@/lib/data";

const categories = [
  { id: "discover", name: "Discover", icon: Star },
  { id: "create", name: "Create", icon: Paintbrush },
  { id: "work", name: "Work", icon: Briefcase },
  { id: "play", name: "Play", icon: Play },
  { id: "develop", name: "Develop", icon: Code2 },
  { id: "categories", name: "Categories", icon: Grid3X3 },
  { id: "updates", name: "Updates", icon: RefreshCw },
];

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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="shrink-0 text-[11px] text-[#555]">{label}</span>
      <span className="text-right text-[11px] text-[#999]">{value}</span>
    </div>
  );
}

export function AppStoreApp() {
  const [activeCat, setActiveCat] = useState("discover");
  const [selected, setSelected] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.title === selected);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="relative w-44 shrink-0 overflow-auto border-r border-[#3a3a3a] bg-[#1e1e1e]/80">
        {/* Search */}
        <div className="px-3 py-2.5">
          <div className="flex items-center gap-2 rounded-md bg-[#333] px-2.5 py-1.5">
            <Search className="h-3 w-3 text-[#888]" />
            <span className="text-[12px] text-[#888]">Search</span>
          </div>
        </div>

        <div className="space-y-0.5 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCat(cat.id); setSelected(null); }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-[6px] text-[13px]",
                activeCat === cat.id
                  ? "bg-[#3a3a3a] text-white"
                  : "text-[#409CFF] hover:bg-[#2a2a2a]"
              )}
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Profile at bottom */}
        <div className="absolute bottom-0 left-0 w-44 border-t border-[#3a3a3a] p-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-[10px] font-bold text-white">RK</div>
            <span className="text-[12px] text-[#ccc]">Rishi Kolisetty</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto bg-[#1a1a1a]">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            /* Detail view */
            <motion.div
              key={`detail-${selectedProject.title}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.18 }}
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

              {/* App header */}
              <div className="flex items-start gap-4 px-5 pb-4 pt-5">
                <div className={cn(
                  "flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br text-3xl shadow-lg",
                  iconColors[selectedProject.title] ?? "from-gray-500 to-gray-600"
                )}>
                  {iconEmojis[selectedProject.title] ?? "📦"}
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
              <div className="border-t border-[#242424] px-5 py-4 pb-8">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/20">Information</p>
                <div className="space-y-2.5">
                  <InfoRow label="Developer" value="Rishi Kolisetty" />
                  <InfoRow label="Built with" value={selectedProject.tech.join(", ")} />
                </div>
              </div>
            </motion.div>
          ) : (
            /* Discover view */
            <motion.div
              key="discover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {/* Featured hero card */}
              <div className="m-4 overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a3e] via-[#2d1b4e] to-[#1a1a2e] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                  Featured Developer
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  Rishi&apos;s Apps
                </h2>
                <p className="mt-1 text-[13px] text-white/50">
                  Products built at the intersection of AI, fintech, and developer tools
                </p>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-3 px-4">
                <div className="rounded-xl bg-[#252525] p-4">
                  <p className="text-[10px] font-semibold uppercase text-blue-400">Get Started</p>
                  <p className="mt-1 text-[15px] font-semibold text-white">AI-Powered Tools</p>
                  <p className="mt-0.5 text-[12px] text-[#888]">Build faster with intelligent automation</p>
                </div>
                <div className="rounded-xl bg-[#252525] p-4">
                  <p className="text-[10px] font-semibold uppercase text-blue-400">Developer</p>
                  <p className="mt-1 text-[15px] font-semibold text-white">Open Source</p>
                  <p className="mt-0.5 text-[12px] text-[#888]">Engines and tools, free to use</p>
                </div>
              </div>

              {/* App listing */}
              <div className="mt-4 px-4 pb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold text-white">Apps I&apos;ve Built</h3>
                  <span className="text-[13px] text-[#409CFF]">See All</span>
                </div>

                <div className="mt-3 divide-y divide-[#2a2a2a]">
                  {projects.map((project) => (
                    <button
                      key={project.title}
                      onClick={() => setSelected(project.title)}
                      className="flex w-full items-center gap-3 py-3 text-left transition-colors hover:opacity-80"
                    >
                      <div className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl shadow",
                        iconColors[project.title] ?? "from-gray-500 to-gray-600"
                      )}>
                        {iconEmojis[project.title] ?? "📦"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-medium text-[#e8e8e8]">{project.title}</p>
                        <p className="text-[11px] text-[#888]">{project.tagline}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#333] px-5 py-1 text-[12px] font-semibold text-[#409CFF]">
                        Get
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

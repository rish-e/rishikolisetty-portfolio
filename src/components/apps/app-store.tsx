"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Star, Gamepad2, Paintbrush, Briefcase, Play, Code2, Grid3X3, RefreshCw, Search } from "lucide-react";
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
};

const iconEmojis: Record<string, string> = {
  RenderKit: "🖼️",
  Autopilot: "🤖",
  Scout: "📊",
  ShipClip: "🎬",
  DebuggAI: "🔍",
};

export function AppStoreApp() {
  const [activeCat, setActiveCat] = useState("discover");

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-44 shrink-0 overflow-auto border-r border-[#3a3a3a] bg-[#1e1e1e]/80">
        {/* Search */}
        <div className="px-3 py-2.5">
          <div className="flex items-center gap-2 rounded-md bg-[#333] px-2.5 py-1.5">
            <Search className="h-3 w-3 text-[#888]" />
            <span className="text-[12px] text-[#888]">Search</span>
          </div>
        </div>

        <div className="px-2 space-y-0.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
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
        <div className="mt-4 px-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-white">Apps I&apos;ve Built</h3>
            <span className="text-[13px] text-[#409CFF]">See All</span>
          </div>

          <div className="mt-3 divide-y divide-[#2a2a2a]">
            {projects.map((project) => (
              <div key={project.title} className="flex items-center gap-3 py-3">
                {/* Icon */}
                <div className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl shadow",
                  iconColors[project.title] ?? "from-gray-500 to-gray-600"
                )}>
                  {iconEmojis[project.title] ?? "📦"}
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-[#e8e8e8]">{project.title}</p>
                  <p className="text-[11px] text-[#888]">{project.tagline}</p>
                </div>

                {/* Get button */}
                <button className="shrink-0 rounded-full bg-[#333] px-5 py-1 text-[12px] font-semibold text-[#409CFF] hover:bg-[#3a3a3a]">
                  Get
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

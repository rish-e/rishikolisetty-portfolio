"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Clock, AppWindow, Monitor, FileText, Download, Globe, Share2, ChevronLeft, ChevronRight, FolderClosed } from "lucide-react";
import { experiences, education, achievements } from "@/lib/data";

type Folder = "resume" | "experience" | "education" | "achievements";

const sidebar = [
  {
    label: "Favourites",
    items: [
      { id: "recents" as const, name: "Recents", icon: Clock },
      { id: "applications" as const, name: "Applications", icon: AppWindow },
      { id: "desktop" as const, name: "Desktop", icon: Monitor },
      { id: "documents" as const, name: "Documents", icon: FileText },
      { id: "downloads" as const, name: "Downloads", icon: Download },
    ],
  },
  {
    label: "iCloud",
    items: [
      { id: "icloud" as const, name: "iCloud Drive", icon: Globe },
      { id: "shared" as const, name: "Shared", icon: Share2 },
    ],
  },
];

function FolderIcon() {
  return (
    <svg viewBox="0 0 80 64" className="h-16 w-20">
      <defs>
        <linearGradient id="ff" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5AC8FA" /><stop offset="100%" stopColor="#34AADC" /></linearGradient>
        <linearGradient id="fb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4AB8E8" /><stop offset="100%" stopColor="#2A9AC7" /></linearGradient>
      </defs>
      <rect x="2" y="6" width="76" height="52" rx="4" fill="url(#fb)" />
      <path d="M2 10 L2 6 Q2 2 6 2 L30 2 Q34 2 36 6 L38 10 Z" fill="url(#fb)" />
      <rect x="2" y="16" width="76" height="46" rx="4" fill="url(#ff)" />
    </svg>
  );
}

function ResumeContent() {
  return (
    <div className="space-y-4 p-5">
      <div className="rounded-xl bg-[#252525] p-5">
        <h2 className="text-base font-semibold text-[#e8e8e8]">Rishi Kolisetty</h2>
        <p className="text-[13px] text-[#888]">Entrepreneur &middot; Builder &middot; Bangalore, India</p>
        <p className="mt-2 text-[13px] leading-relaxed text-[#aaa]">
          Business, finance, and tech-focused builder. Operating across startups, AI, fintech, marketplaces, and scalable platforms. Managing global teams and shipping products.
        </p>
      </div>
      <div className="rounded-xl bg-[#252525] p-5">
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#888]">Core Skills</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["C++", "Java", "HTML", "Options Trading", "MACD/EMA", "Stripe", "Razorpay", "AI Tools", "Team Leadership", "Supply Chain", "Business Strategy"].map((s) => (
            <span key={s} className="rounded-md bg-[#333] px-2.5 py-1 text-[11px] text-[#ccc]">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="space-y-3 p-5">
      {experiences.map((exp, i) => (
        <div key={i} className="rounded-xl bg-[#252525] p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-[13px] font-medium text-[#e8e8e8]">{exp.title}</h4>
            <span className="text-[11px] text-[#666]">{exp.period}</span>
          </div>
          <p className="text-[12px] text-[#888]">{exp.org}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-[#aaa]">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

function EducationContent() {
  return (
    <div className="p-5">
      <div className="rounded-xl bg-[#252525] p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-[13px] font-medium text-[#e8e8e8]">{education.institution}</h4>
          <span className="text-[11px] text-[#666]">{education.period}</span>
        </div>
        <p className="mt-1 text-[12px] text-[#888]">{education.subjects}</p>
      </div>
    </div>
  );
}

function AchievementsContent() {
  return (
    <div className="space-y-2 p-5">
      {achievements.map((a) => (
        <div key={a.title} className="flex gap-3 rounded-xl bg-[#252525] p-4">
          <span className="text-xl">{a.emoji}</span>
          <div>
            <p className="text-[13px] font-medium text-[#e8e8e8]">{a.title}</p>
            <p className="text-[12px] text-[#888]">{a.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type FolderKey = "resume" | "experience" | "education" | "achievements";
const folders: { id: FolderKey; label: string }[] = [
  { id: "resume", label: "Resume" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
];

const contentMap: Record<FolderKey, () => React.ReactNode> = {
  resume: ResumeContent,
  experience: ExperienceContent,
  education: EducationContent,
  achievements: AchievementsContent,
};

export function FinderApp() {
  const [activeFolder, setActiveFolder] = useState<string>("desktop");
  const [activeFile, setActiveFile] = useState<FolderKey | null>(null);

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-44 shrink-0 overflow-auto border-r border-[#3a3a3a] bg-[#1e1e1e]/80 pt-1">
          {sidebar.map((section) => (
            <div key={section.label} className="mb-1">
              <p className="px-5 py-1 text-[11px] font-semibold text-[#888]">{section.label}</p>
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveFolder(item.id); setActiveFile(null); }}
                  className={cn(
                    "flex w-full items-center gap-2 px-5 py-[3px] text-[13px]",
                    activeFolder === item.id ? "bg-[#3a3a3a] text-white" : "text-[#ccc] hover:bg-[#2a2a2a]"
                  )}
                >
                  <item.icon className="h-4 w-4 text-[#409CFF]" />
                  {item.name}
                </button>
              ))}
            </div>
          ))}
          <div className="mb-1">
            <p className="px-5 py-1 text-[11px] font-semibold text-[#888]">Tags</p>
            {[{ color: "bg-red-500", label: "Red" }, { color: "bg-blue-500", label: "Blue" }, { color: "bg-green-500", label: "Green" }].map((t) => (
              <div key={t.label} className="flex items-center gap-2 px-5 py-[3px] text-[12px] text-[#aaa]">
                <div className={`h-2.5 w-2.5 rounded-full ${t.color}`} /> {t.label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-[#1a1a1a]">
          {activeFile ? (
            <div>
              <button onClick={() => setActiveFile(null)} className="flex items-center gap-1 px-4 py-2 text-[12px] text-[#409CFF]">
                <ChevronLeft className="h-3 w-3" /> Back
              </button>
              {(() => { const C = contentMap[activeFile]; return <C />; })()}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-x-2 gap-y-4 p-6 sm:grid-cols-5 lg:grid-cols-6">
              {folders.map((f) => (
                <button key={f.id} onDoubleClick={() => setActiveFile(f.id)} className="flex w-full flex-col items-center gap-1 rounded-lg p-2 hover:bg-white/5">
                  <FolderIcon />
                  <span className="text-center text-[11px] text-[#ccc]">{f.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 border-t border-[#3a3a3a] bg-[#1e1e1e] px-4 py-1.5 text-[11px] text-[#888]">
        <Monitor className="h-3 w-3" />
        <span>rishi_kolisetty</span>
        <ChevronRight className="h-2.5 w-2.5 text-[#555]" />
        <span>Desktop</span>
      </div>
    </div>
  );
}

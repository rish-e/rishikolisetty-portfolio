"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Wifi, Clock, AppWindow, Monitor, FileText, Download, Globe, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";

type FolderItem = { name: string; type: "folder" | "file"; content?: React.ReactNode };

type SidebarSection = { label: string; items: { id: string; name: string; icon: React.ComponentType<{ className?: string }> }[] };

const sidebar: SidebarSection[] = [
  {
    label: "Favourites",
    items: [
      { id: "recents", name: "Recents", icon: Clock },
      { id: "applications", name: "Applications", icon: AppWindow },
      { id: "desktop", name: "Desktop", icon: Monitor },
      { id: "documents", name: "Documents", icon: FileText },
      { id: "downloads", name: "Downloads", icon: Download },
    ],
  },
  {
    label: "iCloud",
    items: [
      { id: "icloud", name: "iCloud Drive", icon: Globe },
      { id: "shared", name: "Shared", icon: Share2 },
    ],
  },
];

// Folder icon SVG
function FolderIcon() {
  return (
    <svg viewBox="0 0 80 64" className="h-16 w-20">
      <defs>
        <linearGradient id="folder-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="100%" stopColor="#34AADC" />
        </linearGradient>
        <linearGradient id="folder-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4AB8E8" />
          <stop offset="100%" stopColor="#2A9AC7" />
        </linearGradient>
      </defs>
      {/* Back */}
      <rect x="2" y="6" width="76" height="52" rx="4" fill="url(#folder-back)" />
      {/* Tab */}
      <path d="M2 10 L2 6 Q2 2 6 2 L30 2 Q34 2 36 6 L38 10 Z" fill="url(#folder-back)" />
      {/* Front */}
      <rect x="2" y="16" width="76" height="46" rx="4" fill="url(#folder-front)" />
    </svg>
  );
}

// Desktop folders — portfolio content
const desktopFolders: Record<string, FolderItem[]> = {
  desktop: [
    { name: "Resume", type: "folder" },
    { name: "Experience", type: "folder" },
    { name: "Education", type: "folder" },
    { name: "Achievements", type: "folder" },
    { name: "Projects", type: "folder" },
    { name: "Skills", type: "folder" },
  ],
  recents: [
    { name: "Resume", type: "file", content: (
      <div className="space-y-4 p-5">
        <h2 className="text-base font-semibold text-[#e8e8e8]">Rishi Kolisetty</h2>
        <p className="text-[13px] text-[#888]">Engineer &middot; Builder &middot; India</p>
        <p className="text-[13px] leading-relaxed text-[#aaa]">Full-stack engineer building products across AI, fintech, and developer tools. Ships fast, learns faster.</p>
        <div className="flex flex-wrap gap-1.5">
          {["TypeScript", "Python", "React", "Next.js", "Node.js", "Claude API", "Vercel"].map((s) => (
            <span key={s} className="rounded bg-[#333] px-2 py-0.5 text-[11px] text-[#ccc]">{s}</span>
          ))}
        </div>
      </div>
    )},
  ],
  documents: [
    { name: "Resume.pdf", type: "file", content: (
      <div className="space-y-4 p-5">
        <h2 className="text-base font-semibold text-[#e8e8e8]">Resume</h2>
        <p className="text-[13px] leading-relaxed text-[#aaa]">Full-stack engineer building products across AI, fintech, and developer tools.</p>
        <h3 className="text-[11px] font-semibold uppercase text-[#888]">Core Skills</h3>
        <div className="flex flex-wrap gap-1.5">
          {["TypeScript", "Python", "React", "Next.js", "Node.js", "Claude API", "MCP", "Vercel", "Supabase"].map((s) => (
            <span key={s} className="rounded bg-[#333] px-2 py-0.5 text-[11px] text-[#ccc]">{s}</span>
          ))}
        </div>
      </div>
    )},
    { name: "Cover Letter.txt", type: "file" },
  ],
  applications: [
    { name: "RenderKit", type: "folder" },
    { name: "Autopilot", type: "folder" },
    { name: "Scout", type: "folder" },
    { name: "ShipClip", type: "folder" },
    { name: "DebuggAI", type: "folder" },
  ],
  downloads: [
    { name: "Experience", type: "file", content: (
      <div className="space-y-3 p-5">
        {experiences.map((exp, i) => (
          <div key={i} className="rounded-lg bg-[#2a2a2a] p-3">
            <div className="flex justify-between"><span className="text-[13px] font-medium text-[#e8e8e8]">{exp.title}</span><span className="text-[11px] text-[#666]">{exp.period}</span></div>
            <p className="text-[12px] text-[#888]">{exp.org}</p>
            <p className="mt-1 text-[12px] text-[#aaa]">{exp.description}</p>
          </div>
        ))}
      </div>
    )},
  ],
  icloud: [
    { name: "Achievements", type: "folder" },
    { name: "Goals 2025.txt", type: "file" },
  ],
  shared: [],
};

export function FinderApp() {
  const [activeFolder, setActiveFolder] = useState("desktop");
  const [selectedFile, setSelectedFile] = useState<FolderItem | null>(null);
  const [path, setPath] = useState<string[]>(["rishi_kolisetty", "Desktop"]);

  const items = desktopFolders[activeFolder] ?? [];
  const activeSidebarName = sidebar.flatMap(s => s.items).find(i => i.id === activeFolder)?.name ?? "Desktop";

  const handleFolderClick = (id: string, name: string) => {
    setActiveFolder(id);
    setSelectedFile(null);
    setPath(["rishi_kolisetty", name]);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-44 shrink-0 overflow-auto border-r border-[#3a3a3a] bg-[#1e1e1e]/80 pt-1">
          {sidebar.map((section) => (
            <div key={section.label} className="mb-1">
              <p className="px-5 py-1 text-[11px] font-semibold text-[#888]">{section.label}</p>
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleFolderClick(item.id, item.name)}
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
            <div className="flex items-center gap-2 px-5 py-[3px] text-[12px] text-[#aaa]">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" /> Red
            </div>
            <div className="flex items-center gap-2 px-5 py-[3px] text-[12px] text-[#aaa]">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Blue
            </div>
            <div className="flex items-center gap-2 px-5 py-[3px] text-[12px] text-[#aaa]">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" /> Green
            </div>
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 overflow-auto bg-[#1a1a1a]">
          {selectedFile?.content ? (
            <div>
              <button onClick={() => setSelectedFile(null)} className="flex items-center gap-1 px-4 py-2 text-[12px] text-[#409CFF] hover:text-[#5AC8FA]">
                <ChevronLeft className="h-3 w-3" /> Back
              </button>
              {selectedFile.content}
            </div>
          ) : (
            /* Icon Grid */
            <div className="grid grid-cols-4 gap-x-2 gap-y-4 p-6 sm:grid-cols-5 lg:grid-cols-6">
              {items.map((item) => (
                <button
                  key={item.name}
                  onDoubleClick={() => item.content && setSelectedFile(item)}
                  className="flex flex-col items-center gap-1 rounded-lg p-2 hover:bg-white/5"
                >
                  {item.type === "folder" ? (
                    <FolderIcon />
                  ) : (
                    <div className="flex h-16 w-14 items-center justify-center rounded border border-[#444] bg-[#2a2a2a]">
                      <FileText className="h-6 w-6 text-[#888]" />
                    </div>
                  )}
                  <span className="max-w-[90px] truncate text-center text-[11px] text-[#ccc]">
                    {item.name}
                  </span>
                </button>
              ))}
              {items.length === 0 && (
                <p className="col-span-full py-12 text-center text-[13px] text-[#666]">This folder is empty</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom path bar */}
      <div className="flex items-center gap-1 border-t border-[#3a3a3a] bg-[#1e1e1e] px-4 py-1.5 text-[11px] text-[#888]">
        <Monitor className="h-3 w-3" />
        {path.map((p, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-2.5 w-2.5 text-[#555]" />}
            <span>{p}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

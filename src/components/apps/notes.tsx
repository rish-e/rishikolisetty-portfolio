"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

type Note = {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: React.ReactNode;
};

const notes: Note[] = [
  {
    id: "building-next",
    title: "What I'm building next",
    date: "Apr 3, 2025",
    preview: "Upcoming priorities for Q2...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">What I&apos;m building next</h1>
        <p className="text-sm text-[#999]">Upcoming priorities for Q2 2025</p>
        <ul className="list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#ccc]">
          <li><strong className="text-[#e8e8e8]">DebuggAI v1.0</strong> — Ship the MVP with Code QA + Intent Verification. Open-source the CLI and engine.</li>
          <li><strong className="text-[#e8e8e8]">RenderKit launch</strong> — Supabase integration, Razorpay billing, custom landing page. Go live.</li>
          <li><strong className="text-[#e8e8e8]">Scout live trading</strong> — Move from paper trading to live. Add risk management layer.</li>
          <li><strong className="text-[#e8e8e8]">Autopilot Phase 2</strong> — Persistent browser profiles, playbooks, custom MCP server wrapper.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "hot-takes",
    title: "Hot takes",
    date: "Mar 15, 2025",
    preview: "Things I believe about tech...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">Hot takes</h1>
        <div className="space-y-4 text-[15px] leading-relaxed text-[#ccc]">
          <p>&ldquo;AI doesn&apos;t replace engineers — it replaces engineers who don&apos;t use AI.&rdquo;</p>
          <p>&ldquo;Ship MVPs, not pitch decks. The market will tell you what to build next.&rdquo;</p>
          <p>&ldquo;Price on value, not on what competitors charge. If you compete on price, you lose on price.&rdquo;</p>
          <p>&ldquo;The best way to learn is to build something real. Tutorials are where curiosity goes to die.&rdquo;</p>
          <p>&ldquo;TypeScript isn&apos;t optional. It&apos;s the difference between shipping and debugging.&rdquo;</p>
          <p>&ldquo;Open-source the engine, monetize the cloud. That&apos;s the playbook.&rdquo;</p>
        </div>
      </div>
    ),
  },
  {
    id: "goals",
    title: "Goals for 2025",
    date: "Jan 1, 2025",
    preview: "Launch 2 products to paying users...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">Goals for 2025</h1>
        <ul className="space-y-2 text-[15px] leading-relaxed text-[#ccc]">
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Launch 2 products to paying users</li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Build a sustainable revenue stream from SaaS</li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Contribute meaningfully to open source</li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Go deep on quantitative trading strategies</li>
          <li className="flex items-center gap-2"><span className="text-green-500">&#9745;</span> <span>Ship every single day</span></li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Meet more builders and founders</li>
        </ul>
      </div>
    ),
  },
];

export function NotesApp() {
  const [active, setActive] = useState(notes[0].id);
  const activeNote = notes.find((n) => n.id === active)!;

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-60 shrink-0 border-r border-[#333] bg-[#1e1e1e]">
        {/* Search */}
        <div className="border-b border-[#333] px-3 py-2">
          <div className="flex items-center gap-2 rounded-md bg-[#333] px-2.5 py-1.5">
            <Search className="h-3 w-3 text-[#888]" />
            <span className="text-xs text-[#888]">Search</span>
          </div>
        </div>

        {/* Notes list */}
        <div className="p-1.5">
          {notes.map((note) => (
            <button
              key={note.id}
              onClick={() => setActive(note.id)}
              className={cn(
                "w-full rounded-lg px-3 py-2.5 text-left transition-colors",
                active === note.id
                  ? "bg-[#f0c000]/20"
                  : "hover:bg-[#2a2a2a]"
              )}
            >
              <p className="text-[13px] font-semibold text-[#e8e8e8] truncate">{note.title}</p>
              <div className="mt-0.5 flex items-baseline gap-2">
                <span className="text-[11px] text-[#888]">{note.date}</span>
                <span className="text-[11px] text-[#666] truncate">{note.preview}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-auto bg-[#1a1a1a] p-8">
        {activeNote.content}
      </div>
    </div>
  );
}

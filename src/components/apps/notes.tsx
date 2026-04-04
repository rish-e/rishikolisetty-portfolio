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
    id: "welcome",
    title: "Welcome — How to explore",
    date: "Start here",
    preview: "Hey! Here's how this works...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">Welcome to my desktop</h1>
        <p className="text-[15px] text-[#ccc]">This is my portfolio, built as a macOS desktop. Click the apps in the dock at the bottom to explore.</p>
        <div className="space-y-2 text-[14px] text-[#ccc]">
          <p><strong className="text-[#e8e8e8]">📁 Finder</strong> — Resume, experience, education, achievements</p>
          <p><strong className="text-[#e8e8e8]">🛍️ App Store</strong> — Projects I&apos;ve built</p>
          <p><strong className="text-[#e8e8e8]">⌨️ Terminal</strong> — Interactive command line (type <code className="rounded bg-[#333] px-1.5 py-0.5 text-[13px] text-green-400">help</code>)</p>
          <p><strong className="text-[#e8e8e8]">🌐 Chrome</strong> — My profiles on GitHub, LinkedIn, X, Instagram</p>
          <p><strong className="text-[#e8e8e8]">📝 Notes</strong> — My plans, hot takes, and goals (you&apos;re here!)</p>
          <p><strong className="text-[#e8e8e8]">⚙️ Settings</strong> — My tech stack</p>
          <p><strong className="text-[#e8e8e8]">✉️ Mail</strong> — Contact me</p>
        </div>
        <p className="text-[13px] text-[#888]">Tip: Press <kbd className="rounded bg-[#333] px-1.5 py-0.5 text-[12px]">⌘K</kbd> to search anything. Try the Konami code for a surprise.</p>
      </div>
    ),
  },
  {
    id: "ideas",
    title: "Ideas I'm exploring",
    date: "Apr 2025",
    preview: "B2B AI platform, Unicred, Artisan marketplace...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">Ideas I&apos;m exploring</h1>
        <ul className="list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#ccc]">
          <li><strong className="text-[#e8e8e8]">B2B Enterprise AI Platform</strong> — Onboarding, training, support, and workflow optimization. Multimodal guidance with platform-aware UI assistance, personalization, and enterprise integrations.</li>
          <li><strong className="text-[#e8e8e8]">Unicred</strong> — Centralized credit wallet for AI tools. Users buy credits, spend across partner platforms. Dynamic conversion rates, 5-10% margin. Facilitator model for regulatory simplicity.</li>
          <li><strong className="text-[#e8e8e8]">Artisan Marketplace</strong> — Platform connecting Indian artists and artisans to global buyers in Europe and North America. Thesis: commercial viability drives cultural preservation.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "building-next",
    title: "What I'm shipping",
    date: "Apr 3, 2025",
    preview: "Luami, DebuggAI, Scout, RenderKit...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">What I&apos;m shipping</h1>
        <ul className="list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#ccc]">
          <li><strong className="text-[#e8e8e8]">Luami</strong> — Scaling the nightwear brand. Managing 5-person global team and 3 Indian manufacturers.</li>
          <li><strong className="text-[#e8e8e8]">DebuggAI v1.0</strong> — Ship the MVP with Code QA + Intent Verification. Open-source the CLI and engine.</li>
          <li><strong className="text-[#e8e8e8]">Scout live trading</strong> — Move from paper trading to live. Add risk management layer.</li>
          <li><strong className="text-[#e8e8e8]">RenderKit launch</strong> — Supabase integration, Razorpay billing, custom landing page.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "hot-takes",
    title: "Hot takes",
    date: "Mar 15, 2025",
    preview: "Things I believe...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">Hot takes</h1>
        <div className="space-y-4 text-[15px] leading-relaxed text-[#ccc]">
          <p>&ldquo;AI doesn&apos;t replace entrepreneurs — it replaces ones who don&apos;t use it.&rdquo;</p>
          <p>&ldquo;Ship MVPs, not pitch decks. The market tells you what to build next.&rdquo;</p>
          <p>&ldquo;Every indicator tells a story. MACD shows momentum, EMA confirms trend. The market always has the last word.&rdquo;</p>
          <p>&ldquo;Price on value, not competition. Race to the bottom = bottom.&rdquo;</p>
          <p>&ldquo;Open-source the engine, monetize the cloud.&rdquo;</p>
          <p>&ldquo;Consistency beats intensity. In the gym, in code, in business.&rdquo;</p>
        </div>
      </div>
    ),
  },
  {
    id: "goals",
    title: "Goals for 2025",
    date: "Jan 1, 2025",
    preview: "Scale Luami, launch products...",
    content: (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#e8e8e8]">Goals for 2025</h1>
        <ul className="space-y-2 text-[15px] leading-relaxed text-[#ccc]">
          <li className="flex items-center gap-2"><span className="text-green-500">&#9745;</span> Scale Luami to international sales</li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Launch 2 tech products to paying users</li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Go deep on options and derivatives trading</li>
          <li className="flex items-center gap-2"><span className="text-green-500">&#9745;</span> Ship every single day</li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Attend more global tech conferences</li>
          <li className="flex items-center gap-2"><span className="text-[#999]">&#9744;</span> Get conversational in Spanish</li>
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

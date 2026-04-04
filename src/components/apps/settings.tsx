"use client";

import { useState } from "react";
import { Code2, Globe, Server, Brain, Cloud, Wrench, ChevronLeft, TrendingUp, CreditCard, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type Pane = { id: string; label: string; icon: React.ComponentType<{ className?: string }>; color: string; items: string[] };

const panes: Pane[] = [
  { id: "languages", label: "Languages", icon: Code2, color: "bg-orange-500", items: ["TypeScript", "Python", "JavaScript", "Bash", "SQL", "Java", "C++", "HTML"] },
  { id: "frontend", label: "Frontend", icon: Globe, color: "bg-blue-500", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"] },
  { id: "backend", label: "Backend", icon: Server, color: "bg-green-500", items: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets"] },
  { id: "ai", label: "AI & ML", icon: Brain, color: "bg-purple-500", items: ["Claude API", "Google AI Studio", "MCP", "AI SDK", "Prompt Engineering", "Sentiment Analysis"] },
  { id: "trading", label: "Finance & Trading", icon: TrendingUp, color: "bg-emerald-500", items: ["Options & Derivatives", "MACD / EMA", "TC2000", "MarketWatch", "Algorithmic Trading"] },
  { id: "business", label: "Business & Payments", icon: CreditCard, color: "bg-pink-500", items: ["Stripe", "Razorpay", "Subscription Models", "SaaS Economics", "Supply Chain"] },
  { id: "leadership", label: "Leadership", icon: Users, color: "bg-yellow-500", items: ["Team Management", "Global Operations", "Client Acquisition", "Negotiations", "Event Organization"] },
  { id: "infra", label: "Infrastructure", icon: Cloud, color: "bg-cyan-500", items: ["Vercel", "Supabase", "Cloudflare", "Docker", "GitHub Actions"] },
  { id: "tools", label: "Tools", icon: Wrench, color: "bg-gray-500", items: ["FFmpeg", "Puppeteer", "Playwright", "Git", "Claude Code"] },
];

export function SettingsApp() {
  const [selected, setSelected] = useState<string | null>(null);
  const activePane = panes.find((p) => p.id === selected);

  return (
    <div className="flex h-full">
      <div className="w-56 shrink-0 border-r border-[#333] bg-[#252525] overflow-auto">
        <div className="border-b border-[#333] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white">RK</div>
            <div>
              <p className="text-sm font-medium text-[#e8e8e8]">Rishi Kolisetty</p>
              <p className="text-[11px] text-[#888]">Bangalore, India</p>
            </div>
          </div>
        </div>
        <div className="p-2 space-y-0.5">
          {panes.map((pane) => (
            <button key={pane.id} onClick={() => setSelected(pane.id)} className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors", selected === pane.id ? "bg-[#3a3a3a]" : "hover:bg-[#2a2a2a]")}>
              <div className={cn("flex h-6 w-6 items-center justify-center rounded-md", pane.color)}><pane.icon className="h-3.5 w-3.5 text-white" /></div>
              <span className="text-[13px] text-[#e8e8e8]">{pane.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-[#1a1a1a]">
        {activePane ? (
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", activePane.color)}><activePane.icon className="h-4 w-4 text-white" /></div>
              <h3 className="text-lg font-semibold text-[#e8e8e8]">{activePane.label}</h3>
            </div>
            <div className="rounded-xl bg-[#252525] overflow-hidden divide-y divide-[#333]">
              {activePane.items.map((item) => (
                <div key={item} className="flex items-center justify-between px-4 py-3">
                  <span className="text-[13px] text-[#e8e8e8]">{item}</span>
                  <div className="flex h-[22px] w-[40px] items-center rounded-full bg-[#34c759] px-0.5">
                    <div className="ml-auto h-[18px] w-[18px] rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-[13px] text-[#666]">Select a category</div>
        )}
      </div>
    </div>
  );
}

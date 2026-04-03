"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

// ── Command Definitions ──────────────────────────────────────────────

type Line = { text: string; className?: string };

const FORTUNES = [
  "Ship MVPs, not pitch decks.",
  "The best way to learn a framework is to build something real with it.",
  "Price on value, not on what competitors charge.",
  "AI doesn't replace engineers — it replaces engineers who don't use AI.",
  "If your side project doesn't embarrass you, you shipped too late.",
  "TypeScript is not optional. It's a lifestyle.",
  "The terminal is my IDE. (Okay, sometimes VS Code.)",
  "Build for the problem, not for the tech stack.",
  "Open source the engine. Monetize the cloud.",
  "Two types of startups: those who ship, and those who pivot.",
];

const NEOFETCH: Line[] = [
  { text: "        ██████████        ", className: "text-blue-400" },
  { text: "      ██          ██      ", className: "text-blue-400" },
  { text: "    ██    ██████    ██    rishi@india", className: "text-blue-400" },
  { text: "    ██  ██      ██  ██    -----------", className: "text-blue-400" },
  { text: "    ██  ██      ██  ██    OS: Engineer v24.0", className: "text-cyan-400" },
  { text: "    ██  ██      ██  ██    Host: India", className: "text-cyan-400" },
  { text: "    ██    ██████    ██    Kernel: TypeScript + Python", className: "text-cyan-400" },
  { text: "      ██          ██      Shell: Next.js / Express / FastAPI", className: "text-green-400" },
  { text: "        ██████████        Resolution: 5 projects @ 1080p", className: "text-green-400" },
  { text: "                          DE: Vercel + Supabase", className: "text-green-400" },
  { text: "                          WM: Framer Motion", className: "text-yellow-400" },
  { text: "                          Theme: Dark [always]", className: "text-yellow-400" },
  { text: "                          Terminal: zsh + Claude Code", className: "text-yellow-400" },
  { text: "                          CPU: Caffeinated @ 3.2GHz", className: "text-purple-400" },
  { text: "                          Uptime: shipping since 2024", className: "text-purple-400" },
  { text: "" },
  { text: "  ███████████████████████████████████", className: "text-muted-foreground" },
];

function getHelpOutput(): Line[] {
  return [
    { text: "" },
    { text: "Available commands:", className: "text-green-400" },
    { text: "" },
    { text: "  whoami       — about me" },
    { text: "  projects     — list what I'm building" },
    { text: "  cat <name>   — project details (e.g. cat scout)" },
    { text: "  skills       — tech stack" },
    { text: "  contact      — how to reach me" },
    { text: "  fortune      — random hot take" },
    { text: "  neofetch     — system info" },
    { text: "  clear        — clear terminal" },
    { text: "" },
    { text: "  ↓ scroll     — see the full site below" },
    { text: "" },
  ];
}

function getWhoamiOutput(): Line[] {
  return [
    { text: "" },
    { text: "Rishi Kolisetty", className: "text-green-400 font-bold" },
    { text: "" },
    { text: "  Engineer based in India." },
    { text: "  Building products at the intersection of AI," },
    { text: "  fintech, and developer tools." },
    { text: "" },
    { text: "  I ship fast, learn faster, and care about craft." },
    { text: "  When I'm not writing code, I'm studying markets" },
    { text: "  or pushing AI to do things it wasn't supposed to." },
    { text: "" },
  ];
}

function getProjectsOutput(): Line[] {
  const lines: Line[] = [{ text: "" }];
  projects.forEach((p) => {
    const statusColor =
      p.status === "live"
        ? "text-green-400"
        : p.status === "beta"
          ? "text-yellow-400"
          : "text-blue-400";
    lines.push({
      text: `  ${p.title.padEnd(14)} ${p.status.padEnd(10)} ${p.tagline}`,
      className: statusColor,
    });
  });
  lines.push({ text: "" });
  lines.push({ text: '  Use "cat <name>" for details.', className: "text-muted-foreground" });
  lines.push({ text: "" });
  return lines;
}

function getCatOutput(name: string): Line[] {
  const project = projects.find(
    (p) => p.title.toLowerCase() === name.toLowerCase()
  );
  if (!project) {
    return [{ text: `  cat: ${name}: No such project`, className: "text-red-400" }];
  }
  return [
    { text: "" },
    { text: `  ${project.title}`, className: "text-green-400 font-bold" },
    { text: `  ${project.tagline}`, className: "text-muted-foreground" },
    { text: "" },
    { text: `  ${project.description}` },
    { text: "" },
    { text: `  Stack: ${project.tech.join(" · ")}`, className: "text-cyan-400" },
    { text: `  Status: ${project.status}` },
    { text: "" },
  ];
}

function getSkillsOutput(): Line[] {
  return [
    { text: "" },
    { text: "  Languages    TypeScript · Python · JavaScript · Bash", className: "text-cyan-400" },
    { text: "  Frontend     React · Next.js · Tailwind CSS", className: "text-blue-400" },
    { text: "  Backend      Node.js · Express · FastAPI", className: "text-green-400" },
    { text: "  AI / ML      Claude API · LLMs · MCP · AI SDK", className: "text-purple-400" },
    { text: "  Infra        Vercel · Supabase · Cloudflare · Docker", className: "text-yellow-400" },
    { text: "  Tools        FFmpeg · Puppeteer · Playwright · Git", className: "text-orange-400" },
    { text: "" },
  ];
}

function getContactOutput(): Line[] {
  return [
    { text: "" },
    { text: "  GitHub       github.com/rishikolisetty", className: "text-cyan-400" },
    { text: "  LinkedIn     linkedin.com/in/rishikolisetty", className: "text-blue-400" },
    { text: "  Twitter/X    twitter.com/rishikolisetty", className: "text-sky-400" },
    { text: "  Email        rishi@example.com", className: "text-green-400" },
    { text: "" },
  ];
}

function processCommand(input: string): { lines: Line[]; clear?: boolean } {
  const trimmed = input.trim().toLowerCase();
  const [cmd, ...args] = trimmed.split(/\s+/);

  switch (cmd) {
    case "help":
      return { lines: getHelpOutput() };
    case "whoami":
      return { lines: getWhoamiOutput() };
    case "projects":
    case "ls":
      return { lines: getProjectsOutput() };
    case "cat":
      return { lines: getCatOutput(args.join(" ")) };
    case "skills":
      return { lines: getSkillsOutput() };
    case "contact":
      return { lines: getContactOutput() };
    case "fortune":
      return {
        lines: [
          { text: "" },
          { text: `  "${FORTUNES[Math.floor(Math.random() * FORTUNES.length)]}"`, className: "text-yellow-400 italic" },
          { text: "" },
        ],
      };
    case "neofetch":
      return { lines: [{ text: "" }, ...NEOFETCH, { text: "" }] };
    case "clear":
      return { lines: [], clear: true };
    case "sudo":
      if (args.join(" ") === "hire rishi") {
        return {
          lines: [
            { text: "" },
            { text: "  ✓ Request accepted.", className: "text-green-400 font-bold" },
            { text: "  Sending offer letter... just kidding." },
            { text: "  But seriously, let's talk → rishi@example.com", className: "text-cyan-400" },
            { text: "" },
          ],
        };
      }
      return { lines: [{ text: `  sudo: nice try.`, className: "text-red-400" }] };
    case "rm":
      if (trimmed.includes("-rf")) {
        return {
          lines: [
            { text: "" },
            { text: "  🔥 Deleting everything...", className: "text-red-400" },
            { text: "  Just kidding. I'm not that reckless.", className: "text-muted-foreground" },
            { text: "  (Most of the time.)" },
            { text: "" },
          ],
        };
      }
      return { lines: [{ text: `  command not found: ${cmd}`, className: "text-red-400" }] };
    case "":
      return { lines: [] };
    default:
      return {
        lines: [
          { text: `  command not found: ${cmd}`, className: "text-red-400" },
          { text: '  Type "help" for available commands.', className: "text-muted-foreground" },
        ],
      };
  }
}

// ── Intro Sequence ───────────────────────────────────────────────────

const INTRO_LINES: Line[] = [
  { text: "" },
  { text: "  Welcome to rishi.dev", className: "text-green-400 font-bold" },
  { text: "" },
  { text: "  I'm Rishi — engineer, builder, based in India." },
  { text: "  I build things with AI, for developers, and sometimes for fun." },
  { text: "" },
  { text: '  Type "help" for commands, or scroll down to explore.', className: "text-muted-foreground" },
  { text: "" },
];

// ── Terminal Component ───────────────────────────────────────────────

export function Terminal() {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [introComplete, setIntroComplete] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-type intro
  useEffect(() => {
    let cancelled = false;
    let timeout: NodeJS.Timeout;

    const typeIntro = async () => {
      for (let i = 0; i < INTRO_LINES.length; i++) {
        if (cancelled) return;
        await new Promise<void>((resolve) => {
          timeout = setTimeout(() => {
            setHistory((prev) => [...prev, INTRO_LINES[i]]);
            resolve();
          }, 80 + Math.random() * 40);
        });
      }
      if (!cancelled) setIntroComplete(true);
    };

    // Small delay before starting
    timeout = setTimeout(() => typeIntro(), 500);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(() => {
    if (!introComplete) return;

    const prompt: Line = {
      text: `rishi_kolisetty@MacBookAir ~ % ${input}`,
      className: "text-white/80",
    };

    const result = processCommand(input);

    if (result.clear) {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, prompt, ...result.lines]);
    }

    if (input.trim()) {
      setCommandHistory((prev) => [input, ...prev]);
    }
    setInput("");
    setHistoryIndex(-1);
  }, [input, introComplete]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      className="h-full w-full bg-[#0a0a0a]"
      onClick={focusInput}
    >
      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto p-4"
      >
        {/* History */}
        {history.map((line, i) => (
          <div key={i} className={`font-mono text-sm leading-relaxed ${line.className ?? "text-foreground"}`}>
            {line.text || "\u00A0"}
          </div>
        ))}

        {/* Input line */}
        {introComplete && (
          <div className="flex items-center font-mono text-sm">
            <span className="text-white/80">rishi_kolisetty@MacBookAir ~ %&nbsp;</span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-foreground caret-green-400 outline-none"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </div>
        )}

        {/* Blinking cursor during intro */}
        {!introComplete && (
          <span className="inline-block h-4 w-2 animate-pulse bg-green-400 font-mono" />
        )}
      </div>
    </div>
  );
}

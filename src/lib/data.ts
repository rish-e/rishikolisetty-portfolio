export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  status: "live" | "building" | "beta";
  href?: string;
};

export const projects: Project[] = [
  {
    title: "RenderKit",
    tagline: "Dynamic Image Generation API",
    description:
      "Puppeteer-based API for generating dynamic OG images and screenshots with templating. 5 built-in templates, LRU caching, API key auth, and rate limiting.",
    tech: ["Node.js", "Puppeteer", "Express", "TypeScript"],
    status: "building",
    href: "https://github.com/rish-e/RenderKit",
  },
  {
    title: "Autopilot",
    tagline: "Autonomous Development Agent",
    description:
      "Fully autonomous Claude Code agent that handles deployments, service configuration, and credential management. Smart permissions with a guardian safety net.",
    tech: ["Bash", "MCP", "Playwright", "macOS Keychain"],
    status: "building",
    href: "https://github.com/rish-e/autopilot",
  },
  {
    title: "Scout",
    tagline: "Options Scalping Signal Bot",
    description:
      "Signal bot that detects high-probability options entries using moving averages and Bollinger Bands, then sends alerts to Telegram with charts and confidence scoring.",
    tech: ["Python", "Alpaca API", "Telegram", "matplotlib"],
    status: "beta",
    href: "https://github.com/rish-e/scout",
  },
  {
    title: "ShipClip",
    tagline: "AI Video Editor for Creators",
    description:
      "Browser-based video finisher for talking-head creators. Upload raw footage, get silence removed and captions burned in. Client-side FFmpeg processing.",
    tech: ["JavaScript", "FFmpeg.wasm", "Deepgram", "Vercel"],
    status: "live",
    href: "https://github.com/rish-e/ShipClip",
  },
  {
    title: "DebuggAI",
    tagline: "Universal AI Code QA Tool",
    description:
      "Verification layer for AI-generated software. Tackles the 1.7x bug rate in AI code with deep analysis, intent verification, and creative QA.",
    tech: ["Python", "TypeScript", "MCP", "Apache 2.0"],
    status: "building",
    href: "https://github.com/rish-e/debuggai",
  },
];

export type Experience = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    title: "Founder & Engineer",
    org: "Independent",
    period: "2024 — Present",
    description:
      "Building SaaS products and developer tools across AI, fintech, and creator tools. Shipping code daily.",
  },
];

export const socialLinks = {
  github: "https://github.com/rishikolisetty",
  linkedin: "https://linkedin.com/in/rishikolisetty",
  twitter: "https://twitter.com/rishikolisetty",
  email: "mailto:rishi@example.com",
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  status: "live" | "building" | "beta";
  href?: string;
  isPrivate?: boolean;
  video?: string;
};

export const projects: Project[] = [
  {
    title: "Autopilot",
    tagline: "Autonomous Development Agent",
    description:
      "A fully autonomous coding agent that handles deployments, configures external services, and manages credentials on your behalf — with a built-in safety layer that can't be overridden.",
    tech: ["Bash", "MCP", "Playwright", "macOS Keychain"],
    status: "building",
    href: "https://github.com/rish-e/Autopilot",
  },
  {
    title: "BackendMax",
    tagline: "AI-Powered Backend Diagnostic MCP",
    description:
      "An MCP server that audits your backend as you build. It reads your codebase, understands what you're making, and flags issues before they cause problems in production.",
    tech: ["TypeScript", "MCP", "Node.js"],
    status: "live",
    href: "https://github.com/rish-e/BackendMax",
  },
  {
    title: "CodeMax",
    tagline: "Full-Stack Analysis MCP Server",
    description:
      "An MCP server for full-stack projects. It looks at your frontend and backend together, catching issues that only show up when both sides are considered at once.",
    tech: ["TypeScript", "MCP", "Node.js"],
    status: "live",
    href: "https://github.com/rish-e/CodeMax",
  },
  {
    title: "TokenPilot",
    tagline: "Token Optimizer for Claude Code",
    description:
      "A Claude Code extension that cuts down token usage automatically. It keeps your context lean so you spend less and get more out of each session.",
    tech: ["Rust", "MCP", "Bash", "Python"],
    status: "live",
    href: "https://github.com/rish-e/tokenpilot",
  },
  {
    title: "DebuggAI",
    tagline: "Universal AI Code QA Tool",
    description:
      "A QA layer for AI-written code. It reviews generated code for bugs and missed edge cases before they make it to production.",
    tech: ["Python", "TypeScript", "MCP"],
    status: "building",
    href: "https://github.com/rish-e/debuggai",
  },
  {
    title: "ShipClip",
    tagline: "AI Video Editor for Creators",
    description:
      "Upload raw footage, get a finished video. Built for creators who record talking-head content and want a fast path from recording to publish.",
    tech: ["JavaScript", "FFmpeg.wasm", "Deepgram", "Vercel"],
    status: "live",
    href: "https://shipclip.vercel.app",
  },
  {
    title: "SiteViz",
    tagline: "Construction OS for India",
    description:
      "A visibility platform for construction projects. It gives managers a clear, real-time picture of what's happening across their job sites.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    status: "building",
    href: "https://siteviz.vercel.app",
  },
  {
    title: "Scout",
    tagline: "Options Scalping Signal Bot",
    description:
      "A signal bot for options trading. It watches the market and sends alerts when specific conditions are met, delivered straight to Telegram.",
    tech: ["Python", "Alpaca API", "Telegram"],
    status: "beta",
    isPrivate: true,
  },
  {
    title: "RenderKit",
    tagline: "Dynamic Image Generation API",
    description:
      "An API that generates images on-demand. Useful for social cards, OG images, and any visual content that needs to be created programmatically.",
    tech: ["Node.js", "Express", "TypeScript"],
    status: "building",
    isPrivate: true,
  },
  {
    title: "Streak",
    tagline: "Habit & Streak Tracker",
    description:
      "A habit tracker focused on keeping streaks going. Simple interface, daily logging, and a clear view of your progress over time.",
    tech: ["React", "Next.js", "TypeScript", "Vercel"],
    status: "live",
    href: "https://streak-c3xp.vercel.app",
  },
  {
    title: "ClaudeETA",
    tagline: "ETA Estimator for Claude Code",
    description:
      "A Claude Code hook that shows you how long a task will take before it runs. No more guessing whether something will finish in seconds or minutes.",
    tech: ["Bash", "Python", "Claude API"],
    status: "live",
    href: "https://github.com/rish-e/claude-eta",
  },
  {
    title: "SentimentBot",
    tagline: "Sentiment-Based Trading Bot",
    description:
      "A trading bot that reads market sentiment to drive buy and sell decisions. Built as an early experiment in signal-based automated trading.",
    tech: ["Python", "Alpaca API", "NLP", "pandas"],
    status: "beta",
    isPrivate: true,
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
    title: "Founder",
    org: "RealGH — Ghana",
    period: "2026 — Present",
    description:
      "Founded an initiative to uplift Ghanaian artisans through upskilling, digital infrastructure, and new distribution channels. Built all software including the Accra Arts Centre website and a public awareness platform. Delivered on-ground workshops directly to artisans. Facilitated a formal partnership with Ghana's Ministry of Arts and Culture. Produced pitch decks, financial models, and operational documents for the initiative.",
  },
  {
    title: "Founder & Team Lead",
    org: "Luami",
    period: "2025 — Present",
    description:
      "Premium nightwear brand focused on international-standard pajama coord sets. Managing a 5-member global team across India, Austria, Mexico, Italy, and Argentina. Coordinating 3 manufacturers in India. Overseeing $2,300+ in finances, product development, branding, and supply chain.",
  },
  {
    title: "Operations & Finance Lead",
    org: "Aurizion.com",
    period: "2024 — Jan 2025",
    description:
      "Managed company budget of $1,500. Oversaw financial planning, resource allocation, and expense tracking. Secured 2 partnerships (marketing + tech) with revenue-sharing agreements.",
  },
  {
    title: "Sales Contractor",
    org: "Thomas & Niyogi",
    period: "Jun — Sep 2024",
    description:
      "Generated leads and conversions via LinkedIn outreach. Engaged 250+ American clients, 40 UAE clients, and converted multiple including 15+ CXOs. Built structured outbound system for client acquisition.",
  },
  {
    title: "Founder",
    org: "Riko Clothing Line",
    period: "2024 — Present",
    description:
      "Built a team of 5 designers across India. Managed manufacturer relationships in India and Bangladesh. Coordinated tech development with 2 developers. Scalable fashion brand with global ambitions.",
  },
  {
    title: "Tech Club Team Lead",
    org: "Christ Junior College",
    period: "2022 — 2024",
    description:
      "Organized large inter-high school tech events in Bengaluru. Managed 50+ students. Focus areas: coding (Java, C++, HTML), event operations, and team leadership.",
  },
];

export const education = {
  institution: "Christ Junior College",
  period: "Jun 2022 — Apr 2024",
  subjects: "Physics, Chemistry, Mathematics, Computer Science",
};

export const achievements = [
  { emoji: "🏆", title: "4x Model United Nations Awards", desc: "2023 — recognized across multiple MUN conferences" },
  { emoji: "🎓", title: "Shortlisted for Harvard India MUN", desc: "2023 — selected for prestigious international conference" },
  { emoji: "🥈", title: "2nd Place — Product Launch Competition", desc: "Pitched a REM sleep enhancement device using color spectrum technology" },
  { emoji: "🎮", title: "Roblox Game Developer", desc: "Built and launched games with full teams (3D modeler, scripters, animator). Generated 150,000+ in-game currency (~$525+)" },
  { emoji: "💰", title: "Fundraising Campaign", desc: "Raised ₹10,000 through communication, outreach, and donor engagement" },
  { emoji: "🌍", title: "GITEX Global Attendee", desc: "Attended the world's largest tech conference. Connected with CXOs and founders" },
];

export const currentIdeas = [
  { title: "B2B Enterprise AI Platform", desc: "Onboarding, training, support, and workflow optimization with multimodal guidance and enterprise integrations." },
  { title: "Unicred", desc: "Centralized credit wallet for AI tools. Users buy credits, spend across partner platforms. Dynamic conversion rates, 5-10% margin." },
  { title: "Artisan Marketplace", desc: "Platform connecting Indian artists and artisans to global buyers in Europe and North America. Commercial viability drives cultural preservation." },
];

export const socialLinks = {
  github: "https://github.com/rish-e",
  linkedin: "https://linkedin.com/in/rishikolisetty",
  twitter: "https://twitter.com/rishikolisetty",
  email: "mailto:rishi.kolisetty@gmail.com",
};

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
  email: "mailto:rishi@example.com",
};

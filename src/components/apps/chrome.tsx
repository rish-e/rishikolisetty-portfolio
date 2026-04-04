"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, Plus, ArrowLeft, ArrowRight, RotateCw, Lock, Star } from "lucide-react";
import { socialLinks } from "@/lib/data";

// ── Favicon SVGs ─────────────────────────────────────────────────

function GithubFav() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="white">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedinFav() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="#0A66C2">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146Zm4.943 12.248V6.169H2.542v7.225h2.401Zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016Zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4Z" />
    </svg>
  );
}

function XFav() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="white">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
    </svg>
  );
}

function InstagramFav() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4">
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FD5" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="100%" stopColor="#C837AB" />
        </linearGradient>
      </defs>
      <rect width="16" height="16" rx="4" fill="url(#ig)" />
      <circle cx="8" cy="8" r="3.2" fill="none" stroke="white" strokeWidth="1.2" />
      <circle cx="11.8" cy="4.2" r="0.9" fill="white" />
    </svg>
  );
}

function EmailFav() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4">
      <rect width="16" height="16" rx="3" fill="#4285F4" />
      <rect x="2" y="4" width="12" height="8" rx="1" fill="white" />
      <path d="M2 5.5 L8 9.5 L14 5.5" stroke="#4285F4" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ── GitHub-style Profile ─────────────────────────────────────────

function GitHubProfile() {
  return (
    <div className="min-h-full bg-[#0d1117]">
      <div className="border-b border-[#30363d] bg-[#161b22] px-6 py-3">
        <div className="flex items-center gap-4 text-[14px] text-[#e6edf3]">
          <GithubFav />
          <span className="font-semibold">rishikolisetty</span>
        </div>
      </div>
      <div className="flex gap-8 p-6">
        {/* Left: avatar + info */}
        <div className="w-64 shrink-0">
          <div className="h-48 w-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white">RK</div>
          <h2 className="mt-4 text-[20px] font-semibold text-[#e6edf3]">Rishi Kolisetty</h2>
          <p className="text-[14px] text-[#9198a1]">rishikolisetty</p>
          <p className="mt-3 text-[14px] text-[#e6edf3]">Engineer building at the intersection of AI, fintech, and developer tools.</p>
          <div className="mt-3 flex items-center gap-1 text-[13px] text-[#9198a1]">
            <span>📍</span> India
          </div>
          <button className="mt-3 w-full rounded-md border border-[#30363d] bg-[#21262d] px-4 py-1.5 text-[13px] font-medium text-[#e6edf3] hover:bg-[#30363d]">Follow</button>
          <div className="mt-3 flex gap-2 text-[13px] text-[#9198a1]">
            <span><strong className="text-[#e6edf3]">5</strong> repositories</span>
          </div>
        </div>
        {/* Right: repos */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
            <span className="text-[14px] font-medium text-[#e6edf3]">Popular repositories</span>
          </div>
          {[
            { name: "debuggai", desc: "Universal AI code QA tool", lang: "Python", stars: "⭐" },
            { name: "renderkit", desc: "Dynamic image generation API", lang: "TypeScript", stars: "⭐" },
            { name: "scout", desc: "Options scalping signal bot", lang: "Python", stars: "" },
            { name: "autopilot", desc: "Autonomous development agent", lang: "Bash", stars: "" },
          ].map((repo) => (
            <div key={repo.name} className="rounded-md border border-[#30363d] p-4">
              <p className="text-[14px] font-semibold text-[#58a6ff]">{repo.name}</p>
              <p className="mt-1 text-[12px] text-[#9198a1]">{repo.desc}</p>
              <div className="mt-2 flex items-center gap-3 text-[12px] text-[#9198a1]">
                <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-yellow-400 inline-block" />{repo.lang}</span>
                {repo.stars && <span>{repo.stars}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── LinkedIn-style Profile ───────────────────────────────────────

function LinkedInProfile() {
  return (
    <div className="min-h-full bg-[#1b1f23]">
      <div className="border-b border-[#38434f] bg-[#1b1f23] px-6 py-2">
        <div className="flex items-center gap-3">
          <LinkedinFav />
          <span className="text-[13px] text-[#e6e9ec]">linkedin.com/in/rishikolisetty</span>
        </div>
      </div>
      <div className="mx-auto max-w-2xl p-4">
        {/* Banner */}
        <div className="h-28 rounded-t-lg bg-gradient-to-r from-[#004182] to-[#0077B5]" />
        <div className="rounded-b-lg border border-[#38434f] bg-[#1d2226] p-5">
          <div className="-mt-14 flex items-end gap-4">
            <div className="h-24 w-24 rounded-full border-4 border-[#1d2226] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">RK</div>
          </div>
          <h2 className="mt-3 text-[20px] font-semibold text-[#e6e9ec]">Rishi Kolisetty</h2>
          <p className="text-[14px] text-[#b0b7bf]">Engineer & Builder | AI, Fintech, Developer Tools</p>
          <p className="mt-1 text-[13px] text-[#8b929a]">India &middot; 500+ connections</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-full bg-[#0a66c2] px-5 py-1.5 text-[13px] font-semibold text-white">Connect</button>
            <button className="rounded-full border border-[#0a66c2] px-5 py-1.5 text-[13px] font-semibold text-[#0a66c2]">Message</button>
          </div>
        </div>
        <div className="mt-2 rounded-lg border border-[#38434f] bg-[#1d2226] p-5">
          <h3 className="text-[16px] font-semibold text-[#e6e9ec]">About</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-[#b0b7bf]">Full-stack engineer building products across AI, fintech, and developer tools. Passionate about shipping fast, learning faster, and building software that solves real problems. Currently working on DebuggAI, RenderKit, Scout, and more.</p>
        </div>
      </div>
    </div>
  );
}

// ── X/Twitter-style Profile ──────────────────────────────────────

function TwitterProfile() {
  return (
    <div className="min-h-full bg-black">
      <div className="border-b border-[#2f3336] px-6 py-2">
        <span className="text-[15px] font-bold text-[#e7e9ea]">Rishi Kolisetty</span>
        <p className="text-[13px] text-[#71767b]">42 posts</p>
      </div>
      <div className="h-32 bg-gradient-to-r from-[#1d1d3a] to-[#2d1b4e]" />
      <div className="px-4">
        <div className="-mt-12 flex items-end justify-between">
          <div className="h-24 w-24 rounded-full border-4 border-black bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">RK</div>
          <button className="rounded-full border border-[#536471] px-4 py-1.5 text-[14px] font-bold text-[#e7e9ea]">Follow</button>
        </div>
        <h2 className="mt-2 text-[20px] font-bold text-[#e7e9ea]">Rishi Kolisetty</h2>
        <p className="text-[15px] text-[#71767b]">@rishikolisetty</p>
        <p className="mt-2 text-[15px] text-[#e7e9ea]">Building things with AI. Shipping daily. Hot takes about tech, markets, and startups. 🇮🇳</p>
        <div className="mt-2 flex items-center gap-3 text-[14px] text-[#71767b]">
          <span>📍 India</span>
          <span>📅 Joined 2024</span>
        </div>
        <div className="mt-2 flex gap-4 text-[14px]">
          <span className="text-[#71767b]"><strong className="text-[#e7e9ea]">128</strong> Following</span>
          <span className="text-[#71767b]"><strong className="text-[#e7e9ea]">256</strong> Followers</span>
        </div>
      </div>
      <div className="mt-4 border-t border-[#2f3336]">
        <div className="flex">
          <div className="flex-1 border-b-2 border-[#1d9bf0] py-3 text-center text-[14px] font-bold text-[#e7e9ea]">Posts</div>
          <div className="flex-1 py-3 text-center text-[14px] text-[#71767b]">Replies</div>
          <div className="flex-1 py-3 text-center text-[14px] text-[#71767b]">Likes</div>
        </div>
        <div className="border-t border-[#2f3336] p-4">
          <div className="flex gap-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">RK</div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-[#e7e9ea]">Rishi Kolisetty</span>
                <span className="text-[14px] text-[#71767b]">@rishikolisetty &middot; 2h</span>
              </div>
              <p className="mt-1 text-[15px] text-[#e7e9ea]">Just shipped DebuggAI v0.9 — universal AI code QA tool. Open-source engine under Apache 2.0. The 1.7x bug rate in AI code is a real problem and we&apos;re fixing it. 🔍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Instagram-style Profile ──────────────────────────────────────

function InstagramProfile() {
  return (
    <div className="min-h-full bg-black">
      <div className="border-b border-[#262626] px-6 py-3">
        <span className="text-[14px] font-semibold text-white">rishikolisetty</span>
      </div>
      <div className="mx-auto max-w-xl px-6 py-6">
        <div className="flex items-center gap-8">
          <div className="h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-2xl font-bold text-white">RK</div>
          </div>
          <div className="flex gap-6 text-center">
            <div><p className="text-[16px] font-semibold text-white">12</p><p className="text-[13px] text-[#a8a8a8]">posts</p></div>
            <div><p className="text-[16px] font-semibold text-white">384</p><p className="text-[13px] text-[#a8a8a8]">followers</p></div>
            <div><p className="text-[16px] font-semibold text-white">256</p><p className="text-[13px] text-[#a8a8a8]">following</p></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[14px] font-semibold text-white">Rishi Kolisetty</p>
          <p className="text-[14px] text-[#a8a8a8]">Engineer & Builder</p>
          <p className="mt-1 text-[14px] text-white">Building AI-powered products from India 🇮🇳</p>
          <p className="text-[14px] text-white">Shipping code daily | 5 products</p>
        </div>
        <button className="mt-4 w-full rounded-lg bg-[#363636] py-1.5 text-[13px] font-semibold text-white">Follow</button>
        {/* Grid placeholder */}
        <div className="mt-6 grid grid-cols-3 gap-0.5">
          {[
            "bg-gradient-to-br from-blue-900 to-purple-900",
            "bg-gradient-to-br from-green-900 to-teal-900",
            "bg-gradient-to-br from-orange-900 to-red-900",
            "bg-gradient-to-br from-purple-900 to-pink-900",
            "bg-gradient-to-br from-cyan-900 to-blue-900",
            "bg-gradient-to-br from-yellow-900 to-orange-900",
          ].map((bg, i) => (
            <div key={i} className={`aspect-square ${bg} flex items-center justify-center text-2xl`}>
              {["🤖", "📊", "🎬", "🔍", "🖼️", "🚀"][i]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Email ────────────────────────────────────────────────────────

function EmailPage() {
  return (
    <div className="flex min-h-full items-center justify-center bg-[#0e0e0e] p-8">
      <div className="rounded-xl border border-[#333] bg-[#161616] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl">📧</div>
        <h2 className="mt-4 text-lg font-bold text-white">Get in Touch</h2>
        <p className="mt-2 text-[14px] text-[#888]">Want to chat? Send me an email.</p>
        <a href="mailto:rishi@example.com" className="mt-4 inline-block rounded-full bg-blue-500 px-6 py-2 text-[13px] font-medium text-white hover:bg-blue-600">
          rishi@example.com
        </a>
      </div>
    </div>
  );
}

// ── Tabs ─────────────────────────────────────────────────────────

type Tab = { id: string; label: string; url: string; favicon: React.ComponentType; content: React.ComponentType };

const tabs: Tab[] = [
  { id: "github", label: "GitHub", url: socialLinks.github, favicon: GithubFav, content: GitHubProfile },
  { id: "linkedin", label: "LinkedIn", url: socialLinks.linkedin, favicon: LinkedinFav, content: LinkedInProfile },
  { id: "twitter", label: "X (Twitter)", url: socialLinks.twitter, favicon: XFav, content: TwitterProfile },
  { id: "instagram", label: "Instagram", url: "https://instagram.com/rishikolisetty", favicon: InstagramFav, content: InstagramProfile },
  { id: "email", label: "Email", url: socialLinks.email, favicon: EmailFav, content: EmailPage },
];

// ── Chrome App ───────────────────────────────────────────────────

export function ChromeApp() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === activeTab)!;
  const Content = current.content;

  return (
    <div className="flex h-full flex-col bg-[#202124]">
      {/* Tab bar */}
      <div className="flex items-end bg-[#35363A] pl-2 pt-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 rounded-t-lg px-3 py-1.5 text-[12px] max-w-[160px]",
              activeTab === tab.id
                ? "bg-[#202124] text-[#e8e8e8]"
                : "bg-[#2b2b2f] text-[#999] hover:bg-[#2d2d31]"
            )}
          >
            <tab.favicon />
            <span className="truncate">{tab.label}</span>
            {activeTab === tab.id && (
              <X className="ml-auto h-3 w-3 shrink-0 text-[#888] hover:text-white" />
            )}
          </button>
        ))}
        <div className="flex items-center px-2 py-1.5 text-[#888]">
          <Plus className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* URL bar */}
      <div className="flex items-center gap-2 border-b border-[#3a3a3a] bg-[#202124] px-3 py-1.5">
        <div className="flex items-center gap-1.5 text-[#888]">
          <ArrowLeft className="h-3.5 w-3.5" />
          <ArrowRight className="h-3.5 w-3.5" />
          <RotateCw className="h-3.5 w-3.5" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-full bg-[#35363A] px-3 py-1">
          <Lock className="h-3 w-3 text-[#888]" />
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#ccc] hover:text-white hover:underline"
          >
            {current.url}
          </a>
        </div>
        <Star className="h-3.5 w-3.5 text-[#888]" />
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-auto">
        <Content />
      </div>
    </div>
  );
}

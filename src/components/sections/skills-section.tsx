"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Server, Brain, Cloud, Wrench, TrendingUp, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const categories = [
  { label: "Languages", icon: Code2, color: "bg-orange-500", items: ["TypeScript", "Python", "JavaScript", "Bash", "SQL"] },
  { label: "Frontend", icon: Globe, color: "bg-blue-500", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend", icon: Server, color: "bg-green-500", items: ["Node.js", "Express", "FastAPI", "REST APIs"] },
  { label: "AI & ML", icon: Brain, color: "bg-purple-500", items: ["Claude API", "Google AI Studio", "MCP", "AI SDK", "Prompt Engineering"] },
  { label: "Finance & Trading", icon: TrendingUp, color: "bg-emerald-500", items: ["Options & Derivatives", "MACD / EMA", "Sentiment Analysis", "TC2000", "MarketWatch"] },
  { label: "Business & Payments", icon: CreditCard, color: "bg-pink-500", items: ["Stripe", "Razorpay", "Subscription Models", "SaaS Economics"] },
  { label: "Infrastructure", icon: Cloud, color: "bg-cyan-500", items: ["Vercel", "Supabase", "Cloudflare", "Docker"] },
  { label: "Tools", icon: Wrench, color: "bg-gray-500", items: ["FFmpeg", "Puppeteer", "Playwright", "Git", "Claude Code"] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-black py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-widest text-white/40">
            Skills
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Tech stack & expertise
          </motion.h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <motion.div
                key={cat.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", cat.color)}>
                    <cat.icon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-[13px] font-semibold text-white">{cat.label}</h3>
                </div>
                <div className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center justify-between">
                      <span className="text-[12px] text-[#aaa]">{item}</span>
                      <div className="flex h-[18px] w-[32px] items-center rounded-full bg-[#34c759] px-0.5">
                        <div className="ml-auto h-[14px] w-[14px] rounded-full bg-white shadow-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

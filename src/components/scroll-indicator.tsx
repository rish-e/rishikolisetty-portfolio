"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Desktop" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "thoughts", label: "Thoughts" },
  { id: "contact", label: "Contact" },
];

export function ScrollIndicator() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide at very top
      setVisible(window.scrollY > 100);

      // Determine active section
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-4 top-1/2 z-40 -translate-y-1/2 hidden md:flex flex-col items-end gap-3"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-2"
        >
          <span
            className={cn(
              "text-[10px] transition-opacity",
              active === section.id
                ? "text-white/60 opacity-100"
                : "text-white/30 opacity-0 group-hover:opacity-100"
            )}
          >
            {section.label}
          </span>
          <div
            className={cn(
              "rounded-full transition-all",
              active === section.id
                ? "h-2.5 w-2.5 bg-white/70"
                : "h-1.5 w-1.5 bg-white/20 group-hover:bg-white/40"
            )}
          />
        </a>
      ))}
    </motion.div>
  );
}

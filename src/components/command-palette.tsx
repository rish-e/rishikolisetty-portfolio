"use client";

import { useEffect, useRef } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { apps } from "@/lib/desktop/app-registry";
import { projects } from "@/lib/data";
import { Search, Zap } from "lucide-react";

export function CommandPalette({
  open,
  onOpenChange,
  onOpenApp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenApp?: (id: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Global Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  // Auto-focus input when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const launch = (id: string) => {
    onOpenChange(false);
    onOpenApp?.(id);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-[2000] bg-black/40 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          {/* Command palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-[28%] z-[2001] w-full max-w-lg -translate-x-1/2"
          >
            <CommandPrimitive
              className="overflow-hidden rounded-xl border border-[#444] bg-[#1e1e1e] shadow-2xl"
              loop
            >
              {/* Search input */}
              <div className="flex items-center gap-2 border-b border-[#333] px-4 py-3">
                <Search className="h-4 w-4 text-[#888]" />
                <CommandPrimitive.Input
                  ref={inputRef}
                  placeholder="Search apps, projects..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-[#666] outline-none"
                />
              </div>

              <CommandPrimitive.List className="max-h-72 overflow-y-auto p-2">
                <CommandPrimitive.Empty className="py-6 text-center text-sm text-[#666]">
                  No results found.
                </CommandPrimitive.Empty>

                <CommandPrimitive.Group
                  heading="Apps"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[#888]"
                >
                  {apps.map((app) => (
                    <CommandPrimitive.Item
                      key={app.id}
                      value={app.name}
                      onSelect={() => launch(app.id)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#ccc] data-[selected=true]:bg-[#333] data-[selected=true]:text-white"
                    >
                      <app.icon className="h-5 w-5" />
                      {app.name}
                    </CommandPrimitive.Item>
                  ))}
                </CommandPrimitive.Group>

                <CommandPrimitive.Group
                  heading="Projects"
                  className="mt-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[#888]"
                >
                  {projects.map((p) => (
                    <CommandPrimitive.Item
                      key={p.title}
                      value={`${p.title} ${p.tagline}`}
                      onSelect={() => launch("appstore")}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#ccc] data-[selected=true]:bg-[#333] data-[selected=true]:text-white"
                    >
                      <Zap className="h-4 w-4 text-[#888]" />
                      <span>{p.title}</span>
                      <span className="text-xs text-[#666]">{p.tagline}</span>
                    </CommandPrimitive.Item>
                  ))}
                </CommandPrimitive.Group>
              </CommandPrimitive.List>
            </CommandPrimitive>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useKonami } from "@/hooks/use-konami";

export function KonamiOverlay() {
  const triggered = useKonami();

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none absolute inset-0 z-[200] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="rounded-2xl border border-green-500/30 bg-[#0a0a0a]/95 px-10 py-8 text-center shadow-2xl backdrop-blur-sm"
          >
            <p className="text-4xl">🎮</p>
            <p className="mt-3 font-mono text-lg font-bold text-green-400">
              Achievement Unlocked!
            </p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              You found the Konami code.
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground/60">
              You&apos;re definitely a tech person.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

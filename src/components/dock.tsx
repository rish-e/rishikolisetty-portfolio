"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { apps, type AppDefinition } from "@/lib/desktop/app-registry";

function DockIcon({
  app,
  mouseX,
  isOpen,
  onOpen,
}: {
  app: AppDefinition;
  mouseX: MotionValue<number>;
  isOpen: boolean;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 200;
    return Math.abs(val - (rect.left + rect.width / 2));
  });

  const size = useSpring(
    useTransform(distance, [0, 100, 200], [64, 48, 44]),
    { damping: 20, stiffness: 300, mass: 0.5 }
  );

  const iconSize = useSpring(
    useTransform(distance, [0, 100, 200], [30, 22, 20]),
    { damping: 20, stiffness: 300, mass: 0.5 }
  );

  return (
    <button onClick={onOpen} aria-label={`Open ${app.name}`} className="relative">
      {/* Tooltip */}
      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#2a2a2a] px-2.5 py-1 text-xs font-medium text-white/80 shadow-md"
        >
          {app.name}
        </motion.span>
      )}

      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="overflow-hidden"
      >
        <app.icon className="h-full w-full" />
      </motion.div>

      {/* Open indicator dot */}
      {isOpen && (
        <div className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/60" />
      )}
    </button>
  );
}

export function Dock({
  openAppIds,
  onOpenApp,
}: {
  openAppIds: string[];
  onOpenApp: (id: string) => void;
}) {
  const mouseX = useMotionValue(-1000);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(-1000)}
      className="absolute bottom-3 left-1/2 z-[900] -translate-x-1/2"
    >
      <div className="flex items-end gap-1 rounded-2xl border border-white/20 bg-white/10 px-2.5 py-1.5 backdrop-blur-2xl">
        {apps.map((app) => (
          <DockIcon
            key={app.id}
            app={app}
            mouseX={mouseX}
            isOpen={openAppIds.includes(app.id)}
            onOpen={() => onOpenApp(app.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}

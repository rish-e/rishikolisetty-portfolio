"use client";

import { useRef, useCallback, type PointerEvent as ReactPointerEvent } from "react";
import { motion } from "framer-motion";
import type { WindowState } from "@/hooks/use-window-manager";
import { cn } from "@/lib/utils";

type WindowProps = {
  state: WindowState;
  focused: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onMove: (position: { x: number; y: number }) => void;
  onResize: (size: { width: number; height: number }) => void;
};

export function Window({
  state,
  focused,
  children,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
  onResize,
}: WindowProps) {
  const dragStartRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const resizeStartRef = useRef<{ w: number; h: number; px: number; py: number } | null>(null);

  if (state.minimized) return null;

  const isMax = state.maximized;
  const left = isMax ? 0 : state.position.x;
  const top = isMax ? 25 : state.position.y;
  const width = isMax ? "100vw" : state.size.width;
  const height = isMax ? "calc(100vh - 25px - 76px)" : state.size.height;

  // ── Title bar drag ──────────────────────────────
  const onTitlePointerDown = (e: ReactPointerEvent) => {
    if (isMax) return;
    e.preventDefault();
    onFocus();
    dragStartRef.current = {
      x: state.position.x,
      y: state.position.y,
      px: e.clientX,
      py: e.clientY,
    };

    const onPointerMove = (ev: globalThis.PointerEvent) => {
      if (!dragStartRef.current) return;
      const dx = ev.clientX - dragStartRef.current.px;
      const dy = ev.clientY - dragStartRef.current.py;
      onMove({
        x: dragStartRef.current.x + dx,
        y: Math.max(25, dragStartRef.current.y + dy), // don't go above menu bar
      });
    };

    const onPointerUp = () => {
      dragStartRef.current = null;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  // ── Resize handle ──────────────────────────────
  const onResizePointerDown = (e: ReactPointerEvent) => {
    if (isMax) return;
    e.preventDefault();
    e.stopPropagation();
    onFocus();
    resizeStartRef.current = {
      w: state.size.width,
      h: state.size.height,
      px: e.clientX,
      py: e.clientY,
    };

    const onPointerMove = (ev: globalThis.PointerEvent) => {
      if (!resizeStartRef.current) return;
      const dw = ev.clientX - resizeStartRef.current.px;
      const dh = ev.clientY - resizeStartRef.current.py;
      onResize({
        width: Math.max(300, resizeStartRef.current.w + dw),
        height: Math.max(200, resizeStartRef.current.h + dh),
      });
    };

    const onPointerUp = () => {
      resizeStartRef.current = null;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      onPointerDown={onFocus}
      style={{
        zIndex: state.zIndex,
        position: "absolute",
        left,
        top,
        width,
        height,
      }}
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border",
        focused
          ? "border-[#555] shadow-2xl shadow-black/60"
          : "border-[#444] shadow-lg shadow-black/40 opacity-[0.97]"
      )}
    >
      {/* Title bar */}
      <div
        onPointerDown={onTitlePointerDown}
        className={cn(
          "group flex h-[52px] shrink-0 items-center border-b px-4",
          isMax ? "cursor-default" : "cursor-grab active:cursor-grabbing",
          focused
            ? "border-[#3a3a3a] bg-[#2d2d2d]"
            : "border-[#333] bg-[#282828]"
        )}
      >
        {/* Traffic lights — large hit area, visible dot */}
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="flex h-7 w-7 items-center justify-center rounded-full"
          >
            <div className={cn("flex h-3.5 w-3.5 items-center justify-center rounded-full transition-colors", focused ? "bg-[#ff5f57]" : "bg-[#555]")}>
              <span className="hidden text-[9px] leading-none text-black/70 group-hover:inline">&#x2715;</span>
            </div>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="flex h-7 w-7 items-center justify-center rounded-full"
          >
            <div className={cn("flex h-3.5 w-3.5 items-center justify-center rounded-full transition-colors", focused ? "bg-[#febc2e]" : "bg-[#555]")}>
              <span className="hidden text-[9px] leading-none text-black/70 group-hover:inline">&#x2212;</span>
            </div>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            className="flex h-7 w-7 items-center justify-center rounded-full"
          >
            <div className={cn("flex h-3.5 w-3.5 items-center justify-center rounded-full transition-colors", focused ? "bg-[#28c840]" : "bg-[#555]")}>
              <span className="hidden text-[9px] leading-none text-black/70 group-hover:inline">&#x2795;</span>
            </div>
          </button>
        </div>

        {/* Title */}
        <span className="flex-1 text-center text-xs font-medium text-white/70 select-none">
          {state.title}
        </span>

        {/* Spacer */}
        <div className="w-14" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-[#1e1e1e]">
        {children}
      </div>

      {/* Resize handle — bottom-right corner */}
      {!isMax && (
        <div
          onPointerDown={onResizePointerDown}
          className="absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize"
          style={{ zIndex: 10 }}
        >
          {/* Small grip lines */}
          <svg viewBox="0 0 16 16" className="h-full w-full text-white/20">
            <line x1="14" y1="4" x2="4" y2="14" stroke="currentColor" strokeWidth="1" />
            <line x1="14" y1="8" x2="8" y2="14" stroke="currentColor" strokeWidth="1" />
            <line x1="14" y1="12" x2="12" y2="14" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      )}
    </motion.div>
  );
}

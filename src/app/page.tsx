"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { LockScreen } from "@/components/desktop/lock-screen";
import { MenuBar } from "@/components/desktop/menu-bar";
import { Window } from "@/components/desktop/window";
import { Dock } from "@/components/dock";
import { CommandPalette } from "@/components/command-palette";
import { KonamiOverlay } from "@/components/konami-overlay";
import { DesktopIcons } from "@/components/desktop/desktop-icons";
import { useWindowManager } from "@/hooks/use-window-manager";
import { apps, getApp } from "@/lib/desktop/app-registry";

// App components
import { FinderApp } from "@/components/apps/finder";
import { AppStoreApp } from "@/components/apps/app-store";
import { TerminalApp } from "@/components/apps/terminal-app";
import { MessagesApp } from "@/components/apps/messages";
import { NotesApp } from "@/components/apps/notes";
import { SettingsApp } from "@/components/apps/settings";
import { MailApp } from "@/components/apps/mail";
import { ChromeApp } from "@/components/apps/chrome";

const appComponents: Record<string, React.ComponentType> = {
  finder: FinderApp,
  appstore: AppStoreApp,
  terminal: TerminalApp,
  chrome: ChromeApp,
  messages: MessagesApp,
  notes: NotesApp,
  settings: SettingsApp,
  mail: MailApp,
};

export default function Home() {
  const [locked, setLocked] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);

  const wm = useWindowManager();

  const handleOpenApp = useCallback(
    (id: string) => {
      const app = getApp(id);
      if (!app) return;
      wm.openWindow(app.id, app.name, app.defaultSize);
    },
    [wm]
  );

  // Active app name for menu bar
  const focusedWindow = wm.windows.find((w) => w.id === wm.focusedId);
  const activeAppName = focusedWindow
    ? getApp(focusedWindow.id)?.name ?? null
    : null;

  const openAppIds = wm.windows.filter((w) => !w.minimized).map((w) => w.id);

  return (
    <>
      {/* Desktop (always mounted) */}
      <div
        className="fixed inset-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #0a0a0a 0%, #111827 30%, #1e1b4b 60%, #0f172a 100%)",
        }}
      >
        <MenuBar activeApp={activeAppName} onSpotlight={() => setCmdOpen(true)} />
        <DesktopIcons onOpenFinder={() => handleOpenApp("finder")} />

        {/* Windows */}
        <AnimatePresence>
          {wm.windows.map((win) => {
            const AppComponent = appComponents[win.id];
            if (!AppComponent) return null;
            return (
              <Window
                key={win.id}
                state={win}
                focused={wm.focusedId === win.id}
                onClose={() => wm.closeWindow(win.id)}
                onMinimize={() => wm.minimizeWindow(win.id)}
                onMaximize={() => wm.maximizeWindow(win.id)}
                onFocus={() => wm.focusWindow(win.id)}
                onMove={(pos) => wm.moveWindow(win.id, pos)}
                onResize={(size) => wm.resizeWindow(win.id, size)}
              >
                <AppComponent />
              </Window>
            );
          })}
        </AnimatePresence>

        <Dock openAppIds={openAppIds} onOpenApp={handleOpenApp} />
      </div>

      {/* Lock screen overlay */}
      {locked && <LockScreen onUnlock={() => setLocked(false)} />}

      {/* Command palette */}
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} onOpenApp={handleOpenApp} />
      <KonamiOverlay />
    </>
  );
}

import {
  FinderIcon,
  AppStoreIcon,
  TerminalIcon,
  MessagesIcon,
  NotesIcon,
  SettingsIcon,
  MailIcon,
  ChromeIcon,
} from "@/components/desktop/app-icons";
import type { ComponentType } from "react";

export type AppDefinition = {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  defaultSize: { width: number; height: number };
};

export const apps: AppDefinition[] = [
  { id: "finder", name: "Finder", icon: FinderIcon, defaultSize: { width: 700, height: 500 } },
  { id: "appstore", name: "App Store", icon: AppStoreIcon, defaultSize: { width: 750, height: 500 } },
  { id: "terminal", name: "rishi_kolisetty — -zsh — 80×24", icon: TerminalIcon, defaultSize: { width: 650, height: 420 } },
  { id: "chrome", name: "Google Chrome", icon: ChromeIcon, defaultSize: { width: 800, height: 520 } },
  { id: "messages", name: "Messages", icon: MessagesIcon, defaultSize: { width: 650, height: 480 } },
  { id: "notes", name: "Notes", icon: NotesIcon, defaultSize: { width: 550, height: 450 } },
  { id: "settings", name: "System Settings", icon: SettingsIcon, defaultSize: { width: 650, height: 450 } },
  { id: "mail", name: "Mail", icon: MailIcon, defaultSize: { width: 600, height: 400 } },
];

export function getApp(id: string) {
  return apps.find((a) => a.id === id);
}

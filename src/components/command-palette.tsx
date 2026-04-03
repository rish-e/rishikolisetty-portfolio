"use client";

import { useEffect } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { apps } from "@/lib/desktop/app-registry";
import { projects } from "@/lib/data";
import { Zap } from "lucide-react";

export function CommandPalette({
  open,
  onOpenChange,
  onOpenApp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenApp?: (id: string) => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  const launch = (id: string) => {
    onOpenChange(false);
    onOpenApp?.(id);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search apps, projects..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Apps">
          {apps.map((app) => (
            <CommandItem
              key={app.id}
              onSelect={() => launch(app.id)}
              className="gap-3"
            >
              <app.icon className="h-4 w-4 text-muted-foreground" />
              {app.name}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Projects">
          {projects.map((p) => (
            <CommandItem
              key={p.title}
              onSelect={() => launch("appstore")}
              className="gap-3"
            >
              <Zap className="h-4 w-4 text-muted-foreground" />
              <div>
                <span>{p.title}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {p.tagline}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

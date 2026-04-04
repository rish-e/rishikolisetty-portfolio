"use client";

// Desktop folder/file icons — aligned to right side like real macOS

type DesktopItem = {
  name: string;
  type: "folder" | "file";
  finderId?: string; // which Finder folder to open
};

const desktopItems: DesktopItem[] = [
  { name: "Resume", type: "folder", finderId: "documents" },
  { name: "Projects", type: "folder", finderId: "applications" },
  { name: "Documents", type: "folder", finderId: "documents" },
  { name: "Claude", type: "folder", finderId: "applications" },
  { name: "Business_Research", type: "folder", finderId: "downloads" },
  { name: "Python", type: "folder", finderId: "desktop" },
  { name: "Screenshots", type: "folder", finderId: "recents" },
];

function FolderSvg() {
  return (
    <svg viewBox="0 0 80 64" className="h-14 w-16">
      <defs>
        <linearGradient id="df" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="100%" stopColor="#34AADC" />
        </linearGradient>
        <linearGradient id="db" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4AB8E8" />
          <stop offset="100%" stopColor="#2A9AC7" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="76" height="52" rx="4" fill="url(#db)" />
      <path d="M2 10 L2 6 Q2 2 6 2 L30 2 Q34 2 36 6 L38 10 Z" fill="url(#db)" />
      <rect x="2" y="16" width="76" height="46" rx="4" fill="url(#df)" />
    </svg>
  );
}

export function DesktopIcons({
  onOpenFinder,
}: {
  onOpenFinder: (folderId: string) => void;
}) {
  return (
    <div className="absolute top-8 right-3 z-[5] flex flex-col items-end gap-1 pt-1">
      {desktopItems.map((item) => (
        <button
          key={item.name}
          onDoubleClick={() => item.finderId && onOpenFinder(item.finderId)}
          className="flex w-20 flex-col items-center gap-0.5 rounded-md p-1.5 hover:bg-white/10"
        >
          <FolderSvg />
          <span className="max-w-[80px] truncate text-center text-[11px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
}

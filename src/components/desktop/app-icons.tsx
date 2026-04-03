"use client";

// Faithful macOS-style app icons using detailed inline SVGs

export function FinderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <linearGradient id="finder-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6DC5FB" />
          <stop offset="100%" stopColor="#47A4F5" />
        </linearGradient>
        <clipPath id="squircle">
          <rect width="120" height="120" rx="26" />
        </clipPath>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#finder-bg)" />
      {/* Face */}
      <rect x="30" y="16" width="60" height="88" rx="6" fill="white" opacity="0.95" />
      <line x1="60" y1="16" x2="60" y2="104" stroke="#47A4F5" strokeWidth="1.5" opacity="0.3" />
      {/* Eyes */}
      <ellipse cx="46" cy="52" rx="5" ry="7" fill="#333" />
      <ellipse cx="74" cy="52" rx="5" ry="7" fill="#333" />
      {/* Smile */}
      <path d="M42 72 Q60 88 78 72" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <linearGradient id="appstore-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2196F3" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#appstore-bg)" />
      {/* Stylized A from crossing lines */}
      <g stroke="white" strokeWidth="6" strokeLinecap="round" fill="none">
        <line x1="36" y1="88" x2="60" y2="28" />
        <line x1="60" y1="28" x2="84" y2="88" />
        <line x1="28" y1="72" x2="92" y2="72" />
      </g>
    </svg>
  );
}

export function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <rect width="120" height="120" rx="26" fill="#0C0C0C" />
      {/* Top bar */}
      <rect x="0" y="0" width="120" height="26" rx="26" fill="#2D2D2D" />
      <rect x="0" y="13" width="120" height="13" fill="#2D2D2D" />
      {/* Traffic lights */}
      <circle cx="22" cy="14" r="4.5" fill="#FF5F57" />
      <circle cx="36" cy="14" r="4.5" fill="#FEBC2E" />
      <circle cx="50" cy="14" r="4.5" fill="#28C840" />
      {/* Prompt */}
      <g stroke="#00E676" strokeWidth="5" strokeLinecap="round" fill="none">
        <polyline points="26,52 44,66 26,80" />
      </g>
      <line x1="52" y1="80" x2="80" y2="80" stroke="#00E676" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function MessagesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <linearGradient id="messages-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5EF38C" />
          <stop offset="100%" stopColor="#26C842" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#messages-bg)" />
      {/* Chat bubble */}
      <path
        d="M30 36 h60 a8 8 0 0 1 8 8 v28 a8 8 0 0 1 -8 8 H52 L38 92 V80 H30 a8 8 0 0 1 -8 -8 V44 a8 8 0 0 1 8 -8 z"
        fill="white"
        opacity="0.95"
      />
    </svg>
  );
}

export function NotesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <linearGradient id="notes-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF3B0" />
          <stop offset="100%" stopColor="#F7DC6F" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#notes-bg)" />
      {/* Notepad top strip */}
      <rect x="0" y="0" width="120" height="32" rx="26" fill="#F5C518" />
      <rect x="0" y="18" width="120" height="14" fill="#F5C518" />
      {/* Lines */}
      <line x1="24" y1="50" x2="96" y2="50" stroke="#D4A813" strokeWidth="1.5" opacity="0.4" />
      <line x1="24" y1="64" x2="96" y2="64" stroke="#D4A813" strokeWidth="1.5" opacity="0.4" />
      <line x1="24" y1="78" x2="80" y2="78" stroke="#D4A813" strokeWidth="1.5" opacity="0.4" />
      <line x1="24" y1="92" x2="64" y2="92" stroke="#D4A813" strokeWidth="1.5" opacity="0.4" />
      {/* Text hint */}
      <text x="24" y="49" fill="#8B6914" fontSize="10" fontWeight="600" opacity="0.6">Notes</text>
    </svg>
  );
}

export function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <linearGradient id="settings-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7E7E7E" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#settings-bg)" />
      {/* Gear */}
      <g transform="translate(60,60)">
        <circle r="16" fill="none" stroke="white" strokeWidth="6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="-4"
            y="-32"
            width="8"
            height="14"
            rx="3"
            fill="white"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <linearGradient id="mail-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#1E88E5" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#mail-bg)" />
      {/* Envelope body */}
      <rect x="18" y="36" width="84" height="52" rx="6" fill="white" opacity="0.95" />
      {/* Envelope flap */}
      <path d="M18 42 L60 68 L102 42" stroke="#1E88E5" strokeWidth="3" fill="none" opacity="0.6" />
      {/* Read indicator */}
      <circle cx="94" cy="30" r="8" fill="#FF3B30" />
    </svg>
  );
}

export function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <rect width="120" height="120" rx="26" fill="#DEE1E6" />
      {/* Outer colored ring */}
      <path d="M60 16 A44 44 0 0 1 98.1 82 L60 60 Z" fill="#EA4335" />
      <path d="M98.1 82 A44 44 0 0 1 21.9 82 L60 60 Z" fill="#34A853" />
      <path d="M21.9 82 A44 44 0 0 1 60 16 L60 60 Z" fill="#FBBC04" />
      {/* White inner ring */}
      <circle cx="60" cy="60" r="22" fill="white" />
      {/* Blue center */}
      <circle cx="60" cy="60" r="17" fill="#4285F4" />
    </svg>
  );
}

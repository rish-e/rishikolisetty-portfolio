# rishikolisetty-portfolio

A personal portfolio built as an interactive macOS desktop experience. Visitors unlock the Mac, explore apps, drag windows, and discover everything about me through a familiar OS metaphor.

**Live:** [rishikolisetty-portfolio.vercel.app](https://rishikolisetty-portfolio.vercel.app)

## Features

- **Lock Screen** with password puzzle (or skip as guest)
- **8 Interactive Apps** — Finder, App Store, Terminal, Chrome, Messages, Notes, Settings, Mail
- **Draggable & Resizable Windows** with macOS traffic light buttons
- **macOS Dock** with magnification physics on hover
- **Cmd+K Spotlight Search** across apps and projects
- **Interactive Terminal** — type `help`, `projects`, `neofetch`, `sudo hire rishi`
- **Chrome Browser** — tabs with GitHub, LinkedIn, X, Instagram profiles
- **AI Chat** (Messages) — Claude-powered conversational AI with full persona
- **Konami Code** easter egg
- **Desktop Folders** linking to Finder content

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui + custom macOS components
- **Animations:** Framer Motion
- **AI Chat:** Vercel AI SDK v6 + Anthropic Claude
- **Smooth Scroll:** Lenis
- **Deployment:** Vercel

## Getting Started

```bash
git clone https://github.com/rish-e/rishikolisetty-portfolio.git
cd rishikolisetty-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### AI Chat (optional)

To enable the Messages app AI chat, add your Anthropic API key:

```bash
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env.local
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Main orchestrator
│   ├── layout.tsx               # Root layout
│   └── api/chat/route.ts        # AI chat endpoint
├── components/
│   ├── apps/                    # 8 macOS app components
│   ├── desktop/                 # Lock screen, menu bar, window chrome, icons
│   ├── dock.tsx                 # Dock with magnification
│   ├── command-palette.tsx      # Cmd+K search
│   └── hero/terminal.tsx        # Interactive terminal engine
├── hooks/
│   ├── use-window-manager.ts    # Window state (open/close/drag/resize/focus)
│   └── use-konami.ts            # Easter egg detection
└── lib/
    ├── data.ts                  # Projects, experience, social links
    ├── ai/system-prompt.ts      # AI Rishi persona
    └── desktop/app-registry.ts  # App definitions
```

## Deployment

Deployed on Vercel. Push to `main` to auto-deploy.

```bash
vercel deploy --prod
```

## License

MIT

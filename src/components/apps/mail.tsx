"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function MailApp() {
  const [to] = useState("rishi.kolisetty@gmail.com");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#252525] px-4 py-2">
        <span className="text-xs text-white/40">New Message</span>
        <button
          onClick={handleSend}
          disabled={!subject.trim() || !body.trim()}
          className="flex items-center gap-1.5 rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white transition-opacity hover:bg-blue-600 disabled:opacity-30"
        >
          <Send className="h-3 w-3" />
          Send
        </button>
      </div>

      {/* Fields */}
      <div className="space-y-0 border-b border-white/10">
        <div className="flex items-center border-b border-white/5 px-4 py-2.5">
          <span className="w-16 text-xs text-white/40">To:</span>
          <span className="text-sm text-white/70">{to}</span>
        </div>
        <div className="flex items-center px-4 py-2.5">
          <span className="w-16 text-xs text-white/40">Subject:</span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/20 outline-none"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-4">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your message..."
          className="h-full w-full resize-none bg-transparent text-sm leading-relaxed text-white/80 placeholder:text-white/20 outline-none"
        />
      </div>

      {/* Sent confirmation */}
      {sent && (
        <div className="border-t border-white/10 bg-green-500/10 px-4 py-2 text-center text-xs text-green-400">
          Mail app opened! Send from there.
        </div>
      )}
    </div>
  );
}

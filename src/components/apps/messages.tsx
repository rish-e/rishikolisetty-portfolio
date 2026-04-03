"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const transport = new DefaultChatTransport({ api: "/api/chat" });

const suggestions = [
  "What are you building?",
  "Tell me about yourself",
  "What's your tech stack?",
];

export function MessagesApp() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({ transport });

  const isLoading = status === "submitted" || status === "streaming";

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-56 shrink-0 border-r border-white/10 bg-[#252525]">
        <div className="border-b border-white/10 px-4 py-3">
          <p className="text-xs font-semibold text-white/40">Messages</p>
        </div>
        <div className="m-2 rounded-lg bg-blue-500/20 p-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
              RK
            </div>
            <div>
              <p className="text-sm font-medium text-white">AI Rishi</p>
              <p className="text-[10px] text-white/40">Ask me anything</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-[10px] font-bold text-white">
            RK
          </div>
          <span className="text-sm font-medium text-white">AI Rishi</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-3">
              <p className="text-xs text-white/30">Start a conversation</p>
              <div className="flex flex-col gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="rounded-full bg-white/10 px-4 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/15"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-white/80"
                )}
              >
                {msg.parts.map((part, i) =>
                  part.type === "text" ? <span key={i}>{part.text}</span> : null
                )}
              </div>
            </div>
          ))}

          {status === "submitted" && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-white/10 px-3.5 py-2">
                <Loader2 className="h-4 w-4 animate-spin text-white/40" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
          className="border-t border-white/10 px-4 py-3"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="iMessage"
              disabled={isLoading}
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white transition-opacity disabled:opacity-30"
            >
              <Send className="h-3 w-3" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

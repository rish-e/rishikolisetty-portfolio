"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ContactSection() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    window.open(
      `mailto:rishi@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-black py-28">
      <div className="mx-auto max-w-xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-center font-mono text-xs uppercase tracking-widest text-white/40">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-2 text-center text-3xl font-bold text-white sm:text-4xl">
            Get in touch
          </motion.h2>

          {/* Mail compose window */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-10 overflow-hidden rounded-xl border border-[#3a3a3a]">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-[#3a3a3a] bg-[#2d2d2d] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-white/50">New Message</span>
              <button
                onClick={handleSend}
                disabled={!subject.trim() || !body.trim()}
                className="flex items-center gap-1.5 rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600 disabled:opacity-30"
              >
                <Send className="h-3 w-3" /> Send
              </button>
            </div>

            {/* Fields */}
            <div className="bg-[#1a1a1a]">
              <div className="flex items-center border-b border-[#2a2a2a] px-4 py-2.5">
                <span className="w-16 text-[13px] text-white/40">To:</span>
                <span className="text-[13px] text-white/70">rishi@example.com</span>
              </div>
              <div className="flex items-center border-b border-[#2a2a2a] px-4 py-2.5">
                <span className="w-16 text-[13px] text-white/40">Subject:</span>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's on your mind?"
                  className="flex-1 bg-transparent text-[13px] text-white placeholder:text-white/20 outline-none"
                />
              </div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write your message..."
                rows={6}
                className="w-full resize-none bg-transparent px-4 py-3 text-[13px] text-white/80 placeholder:text-white/20 outline-none"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

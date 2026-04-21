"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
 role: "user" | "assistant";
 content: string;
};

const STARTERS = [
 "I feel stuck and don't know why.",
 "How do I stop -",
 "What is Blueprint Theory in plain -",
 "I keep repeating the same patterns in relationships.",
];

export default function AskBabbal() {
 const [open, setOpen] = useState(false);
 const [messages, setMessages] = useState<Message[]>([]);
 const [input, setInput] = useState("");
 const [loading, setLoading] = useState(false);
 const [started, setStarted] = useState(false);
 const bottomRef = useRef<HTMLDivElement>(null);
 const inputRef = useRef<HTMLTextAreaElement>(null);

 useEffect(() => {
 if (open &&!started) {
 setMessages([
 {
 role: "assistant",
 content:
 "I'm a fellow traveller, not a guru. I've thought carefully about the grammar underneath life — loops, rent, coherence, emergence. Ask me anything. I'll give you plain, honest thought.",
 },
 ]);
 setStarted(true);
 }
 }, [open, started]);

 useEffect(() => {
 bottomRef.current?.scrollIntoView({ behavior: "smooth" });
 }, [messages, loading]);

 useEffect(() => {
 if (open) {
 setTimeout(() => inputRef.current?.focus(), 300);
 }
 }, [open]);

 const send = async (text?: string) => {
 const userText = (text ?? input).trim();
 if (!userText || loading) return;

 const newMessages: Message[] = [
...messages,
 { role: "user", content: userText },
 ];
 setMessages(newMessages);
 setInput("");
 setLoading(true);

 // Placeholder for streaming response
 setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

 try {
 const res = await fetch("/api/chat", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
 messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
 }),
 });

 if (!res.ok ||!res.body) {
 throw new Error("Request failed");
 }

 const reader = res.body.getReader();
 const decoder = new TextDecoder();
 let accumulated = "";

 while (true) {
 const { done, value } = await reader.read();
 if (done) break;
 accumulated += decoder.decode(value, { stream: true });
 setMessages((prev) => {
 const updated = [...prev];
 updated[updated.length - 1] = {
 role: "assistant",
 content: accumulated,
 };
 return updated;
 });
 }
 } catch {
 setMessages((prev) => {
 const updated = [...prev];
 updated[updated.length - 1] = {
 role: "assistant",
 content:
 "Something interrupted the connection. Try again — the loop continues.",
 };
 return updated;
 });
 } finally {
 setLoading(false);
 }
 };

 const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
 if (e.key === "Enter" &&!e.shiftKey) {
 e.preventDefault();
 send();
 }
 };

 return (
 <>
 {/* ── FLOATING BUTTON ── */}
 <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
 <AnimatePresence>
 {!open && (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: 10 }}
 transition={{ delay: 1, duration: 0.5 }}
 className="bg-[#07070f] border border-[#00e5ff]/20 px-4 py-2 text-[#6b6b8a] text-xs font-mono tracking-widest pointer-events-none"
 >
 Got a question about your -
 </motion.div>
 )}
 </AnimatePresence>

 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={() => setOpen(!open)}
 className="relative flex items-center gap-3 px-6 py-4 bg-black border border-[#00e5ff]/50 text-[#00e5ff] text-sm tracking-[0.15em] uppercase font-mono transition-all duration-300 hover:bg-[#00e5ff]/10"
 style={{ boxShadow: "0 0 30px rgba(0,229,255,0.15), 0 0 60px rgba(0,229,255,0.05)" }}
 >
 {/* Pulse ring */}
 <span className="relative flex w-2 h-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-30" />
 <span className="relative inline-flex rounded-full w-2 h-2 bg-[#00e5ff]" />
 </span>
 {open ? "Close" : "Ask Your Question"}
 </motion.button>
 </div>

 {/* ── CHAT PANEL ── */}
 <AnimatePresence>
 {open && (
 <motion.div
 initial={{ opacity: 0, y: 30, scale: 0.97 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 exit={{ opacity: 0, y: 20, scale: 0.97 }}
 transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
 className="fixed bottom-24 right-6 z-50 w-[min(440px,calc(100vw-24px))] flex flex-col bg-[#07070f] border border-[#1a1a2e] overflow-hidden"
 style={{
 height: "min(580px, calc(100vh - 140px))",
 boxShadow: "0 0 60px rgba(0,229,255,0.08), 0 25px 50px rgba(0,0,0,0.8)",
 }}
 >
 {/* Header */}
 <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a2e] bg-black">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 border border-[#00e5ff]/30 flex items-center justify-center">
 <span className="text-[#00e5ff] text-xs font-light">BK</span>
 </div>
 <div>
 <p className="text-white text-sm font-light tracking-wider">Babbal Khehra</p>
 <p className="text-[#00e5ff] text-[10px] font-mono tracking-[0.3em] opacity-60">
 Blueprint Theory · Fellow Traveller
 </p>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] opacity-60" />
 <span className="text-[#6b6b8a] text-[10px] font-mono tracking-widest">LIVE</span>
 </div>
 </div>

 {/* Messages */}
 <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5 scrollbar-thin">
 {messages.map((msg, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.3 }}
 className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
 >
 <div
 className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
 msg.role === "user"
 ? "bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#e8e8f0] ml-auto"
 : "bg-[#0e0e1a] border border-[#1a1a2e] text-[#9090aa]"
 }`}
 >
 {msg.content === "" && loading ? (
 <span className="flex gap-1 items-center h-4">
 <motion.span
 animate={{ opacity: [0.2, 1, 0.2] }}
 transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
 className="w-1 h-1 rounded-full bg-[#00e5ff]"
 />
 <motion.span
 animate={{ opacity: [0.2, 1, 0.2] }}
 transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
 className="w-1 h-1 rounded-full bg-[#00e5ff]"
 />
 <motion.span
 animate={{ opacity: [0.2, 1, 0.2] }}
 transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
 className="w-1 h-1 rounded-full bg-[#00e5ff]"
 />
 </span>
 ) : (
 msg.content
 )}
 </div>
 </motion.div>
 ))}

 {/* Starter prompts — show only at the start */}
 {messages.length === 1 &&!loading && (
 <div className="space-y-2 pt-2">
 <p className="text-[#6b6b8a] text-[10px] font-mono tracking-[0.3em] uppercase">
 Or start here
 </p>
 {STARTERS.map((s) => (
 <button
 key={s}
 onClick={() => send(s)}
 className="block w-full text-left px-3 py-2 border border-[#1a1a2e] text-[#6b6b8a] text-xs hover:border-[#00e5ff]/30 hover:text-[#e8e8f0] hover:bg-[#00e5ff]/5 transition-all duration-200"
 >
 {s}
 </button>
 ))}
 </div>
 )}

 <div ref={bottomRef} />
 </div>

 {/* Input */}
 <div className="border-t border-[#1a1a2e] p-4 bg-black">
 <div className="flex gap-3 items-end">
 <textarea
 ref={inputRef}
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={handleKey}
 placeholder="Ask anything..."
 disabled={loading}
 rows={1}
 className="flex-1 bg-[#07070f] border border-[#1a1a2e] text-[#e8e8f0] text-sm placeholder-[#6b6b8a]/40 px-4 py-3 resize-none focus:outline-none focus:border-[#00e5ff]/30 transition-colors duration-300 font-mono leading-relaxed"
 style={{ maxHeight: "120px", overflowY: "auto" }}
 onInput={(e) => {
 const el = e.currentTarget;
 el.style.height = "auto";
 el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
 }}
 />
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={() => send()}
 disabled={loading ||!input.trim()}
 className="flex-shrink-0 w-11 h-11 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] disabled:opacity-30 hover:bg-[#00e5ff]/10 transition-all duration-200"
 >
 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
 </svg>
 </motion.button>
 </div>
 <p className="text-[#6b6b8a]/40 text-[10px] font-mono mt-2 text-center tracking-widest">
 Enter ↵ to send · Shift+Enter for new line
 </p>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
}

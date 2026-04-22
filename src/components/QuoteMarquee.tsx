"use client";

import { motion } from "framer-motion";

const marqueeQuotes = [
 "Build for people. Not just screens.",
 "Brand gets attention. Proof gets trust.",
 "Community is strategy.",
 "AI is a tool. Vision is the work.",
 "Every system starts with a story.",
 "Visibility is earned, not announced.",
 "The best websites feel inevitable.",
 "Presence is designed, not stumbled into.",
 "Ideas without execution are just daydreams.",
 "Digital is the new town square.",
];

const doubled = [...marqueeQuotes, ...marqueeQuotes];

export default function QuoteMarquee() {
 return (
 <div className="relative py-6 overflow-hidden border-y border-[#1a1a2e] bg-[#07070f]">
 <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070f] to-transparent z-10 pointer-events-none" />
 <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070f] to-transparent z-10 pointer-events-none" />

 <motion.div
 className="flex gap-16 whitespace-nowrap"
 animate={{ x: ["0%", "-50%"] }}
 transition={{ duration: 45, ease: "linear", repeat: Infinity }}
 >
 {doubled.map((quote, i) => (
 <span key={i} className="flex items-center flex-shrink-0">
 <span className="text-[#6b6b8a] text-sm font-mono tracking-[0.15em]">{quote}</span>
 </span>
 ))}
 </motion.div>
 </div>
 );
}

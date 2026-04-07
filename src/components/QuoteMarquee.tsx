"use client";

import { motion } from "framer-motion";

const marqueeQuotes = [
  "Things last because they loop.",
  "Motion comes first. Story comes later.",
  "None of this is mystic. It is mechanics with heart.",
  "Even presence is rented.",
  "Spin is the skeleton key of persistence.",
  "Map what you can touch. Label what you cannot.",
  "Existence is the track. Beginnings are the paint.",
  "Coherence without a face is enough.",
  "The world holds its shape by moving.",
  "Origin is an inside label. The world is bigger than inside.",
];

const doubled = [...marqueeQuotes, ...marqueeQuotes];

export default function QuoteMarquee() {
  return (
    <div className="relative py-6 overflow-hidden border-y border-[#1a1a2e] bg-[#07070f]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070f] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((quote, i) => (
          <span key={i} className="flex items-center gap-12 flex-shrink-0">
            <span className="text-[#6b6b8a] text-sm font-mono tracking-[0.15em]">
              {quote}
            </span>
            <span className="text-[#00e5ff]/30 text-xs">◈</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

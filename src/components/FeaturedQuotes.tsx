"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "It did not make life easy. It made it legible. It showed me what to stop forcing and what to feed.",
    context: "Blueprint Theory — Author's Note",
    size: "large",
  },
  {
    text: "The future is not a fresh coin toss. It is a biased continuation.",
    context: "Blueprint Theory — On Loops",
    size: "medium",
  },
  {
    text: "A friendship survives because both people keep paying rent in time, attention, and repair.",
    context: "Blueprint Theory — On Coherence",
    size: "medium",
  },
  {
    text: "Once you see the grammar, you will start noticing it everywhere — and once you notice it everywhere, you will move with less friction and more fit.",
    context: "Blueprint Theory — Author's Note",
    size: "large",
  },
  {
    text: "Ask less about the first push. Ask more about ongoing maintenance.",
    context: "Blueprint Theory — The Origin Illusion",
    size: "small",
  },
  {
    text: "You and I were born mid-spin.",
    context: "Blueprint Theory — Opening Line",
    size: "small",
  },
];

export default function FeaturedQuotes() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00e5ff]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
            Blueprint Theory
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
            The Grammar,<br />
            <span className="text-gradient-cyan">in plain sight.</span>
          </h2>
        </motion.div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/20 transition-all duration-500 overflow-hidden ${
                q.size === "large" ? "md:col-span-2" : ""
              }`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/0 to-transparent group-hover:via-[#00e5ff]/30 transition-all duration-700" />

              {/* Quote mark */}
              <div className="text-[#00e5ff]/10 text-6xl font-serif leading-none mb-4 group-hover:text-[#00e5ff]/20 transition-colors duration-500 select-none">
                &ldquo;
              </div>

              <blockquote
                className={`text-white font-light leading-relaxed mb-6 ${
                  q.size === "large"
                    ? "text-2xl md:text-3xl"
                    : q.size === "medium"
                    ? "text-xl"
                    : "text-lg"
                }`}
              >
                {q.text}
              </blockquote>

              <p className="text-[#00e5ff]/40 text-xs font-mono tracking-[0.3em] uppercase">
                — {q.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="/vault"
            className="inline-flex items-center gap-3 text-[#6b6b8a] text-sm tracking-[0.2em] uppercase font-mono hover:text-[#00e5ff] transition-colors duration-300"
          >
            Read the full theory in the books →
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />
    </section>
  );
}

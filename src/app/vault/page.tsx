"use client";

import { motion } from "framer-motion";
import PhotoSlot from "@/components/PhotoSlot";

const books = [
  {
    id: 1,
    title: "Alive",
    subtitle: "A Story of Survival and Awakening",
    description:
      "A visceral journey through the corridors of existence. Alive strips away everything comfortable and asks a single question: when you have nothing left, who are you? A narrative that challenges your relationship with survival, identity, and the will to endure.",
    genre: "Fiction · Philosophy",
    year: "2025",
    amazonUrl: "https://amzn.asia/d/01UfATi7",
    accent: "#00e5ff",
    gradient: "from-[#00e5ff]/8 to-transparent",
    border: "border-[#00e5ff]/20",
    hoverBorder: "hover:border-[#00e5ff]/50",
    roman: "I",
    coverImage: "/images/alive-cover.png" as string | null,
  },
  {
    id: 2,
    title: "Ego & Enlightenment",
    subtitle: "The Architecture of the Self",
    description:
      "What if the ego is not your enemy, but your most misunderstood ally? This book dismantles the war between self and soul, weaving philosophy, psychology, and lived experience into a new framework for understanding consciousness and identity.",
    genre: "Philosophy · Self-Discovery",
    year: "2025",
    amazonUrl: "https://amzn.asia/d/0bXshqi8",
    accent: "#00b8cc",
    gradient: "from-[#00b8cc]/8 to-transparent",
    border: "border-[#00b8cc]/20",
    hoverBorder: "hover:border-[#00b8cc]/50",
    roman: "II",
    coverImage: "/images/ego-enlightenment-cover.png" as string | null,
  },
];

export default function VaultPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00e5ff]/4 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-4 opacity-70"
          >
            The Vault
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6"
          >
            The Books
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#6b6b8a] text-lg max-w-xl leading-relaxed"
          >
            Two works. Each one a universe. Written to disturb, illuminate, and transform.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

      {/* Books */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {books.map((book, i) => (
            <motion.article
              key={book.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-10 md:p-14 border ${book.border} ${book.hoverBorder} bg-gradient-to-br ${book.gradient} bg-[#07070f] transition-all duration-500 overflow-hidden`}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: `${book.accent}08` }}
              />

              {/* Roman numeral watermark */}
              <div
                className="absolute right-10 top-1/2 -translate-y-1/2 text-[10rem] font-light leading-none select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                style={{ color: book.accent }}
              >
                {book.roman}
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 items-start">
                {/* Book cover */}
                <div className="flex-shrink-0">
                  <PhotoSlot
                    src={book.coverImage}
                    alt={book.title}
                    label="Book cover"
                    variant="book"
                    className="w-28 h-40 md:w-36 md:h-52"
                  />
                </div>
                <div>
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="text-xs tracking-[0.3em] uppercase font-mono opacity-70"
                      style={{ color: book.accent }}
                    >
                      {book.genre}
                    </span>
                    <span className="text-[#1a1a2e] text-xs">·</span>
                    <span className="text-[#6b6b8a] text-xs font-mono">{book.year}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight mb-2">
                    {book.title}
                  </h2>
                  <p
                    className="text-sm tracking-widest uppercase mb-8 opacity-60"
                    style={{ color: book.accent }}
                  >
                    {book.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#6b6b8a] text-base leading-relaxed max-w-2xl">
                    {book.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-start md:items-end gap-4 pt-2">
                  <motion.a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.2em] uppercase font-mono transition-all duration-300"
                    style={{
                      border: `1px solid ${book.accent}50`,
                      color: book.accent,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = `${book.accent}15`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${book.accent}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = `transparent`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${book.accent}50`;
                    }}
                  >
                    Buy on Amazon
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Blueprint Theory — Full Summary */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00e5ff]/3 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-4 opacity-60">
              The Philosophy Behind the Work
            </p>
            <h2 className="text-white text-4xl md:text-6xl font-light tracking-tight mb-6">
              Blueprint Theory
            </h2>
            <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto leading-relaxed">
              A lens that shows how forms keep their shape, how they fail, and why the same few moves repeat from atoms to cities to a single breath in your chest.
            </p>
          </motion.div>

          {/* One-breath summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16 p-10 border border-[#00e5ff]/15 bg-black relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-5 opacity-60">
              The Blueprint in One Breath
            </p>
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
              Things endure because they loop. Motion precedes story. Spin, cycle, and feedback keep motion going. Resonance lets separate motions line up so effects grow. Coherence is a pattern that survives by paying rent — energy in, waste out. Frames and scales decide what is even visible. Many small parts lock together and new properties appear. Time has a measurable arrow and a lived texture. Break a symmetry and a specific form is selected. <span className="text-[#00e5ff]">Consciousness is a loop that learns. Ethics is fit across a wider web.</span>
            </p>
          </motion.div>

          {/* Core concepts grid */}
          {[
            {
              group: "Motion & Loops",
              color: "#00e5ff",
              concepts: [
                { name: "Loop", definition: "A process whose output feeds part of its next input. Loops create continuity, allow learning, and make stability possible. Your habits are loops. Your relationships are loops. Your thought patterns are loops." },
                { name: "Feedback", definition: "Negative feedback resists deviation and stabilises. Positive feedback amplifies. Neither is inherently good or bad — it depends on what you want to stabilise or grow. Anxiety is a positive feedback loop. So is momentum." },
                { name: "Spin", definition: "A sustained rotational tendency. Where you see enduring form — where something holds together across minutes or eons — you will almost always find a turn, a cycle, an oscillation. Spin is the skeleton key of persistence." },
              ],
            },
            {
              group: "Structure & Cost",
              color: "#00b8cc",
              concepts: [
                { name: "Coherence", definition: "How well a pattern holds under noise and stress. Coherent patterns can act, persist, and propagate. Coherence is graded and costly — it is not permanence. It must be earned and maintained." },
                { name: "Rent", definition: "The ongoing energy cost to maintain order. Nothing holds its form for free. A friendship survives because both people keep paying rent in time, attention, and repair. Stop paying and the pattern dissolves." },
                { name: "Attractors", definition: "States that a system repeatedly settles into. Your moods, patterns, and relationships have attractors. They explain why you keep ending up here. Attractors shift only when the underlying parameters change — not by willpower alone." },
              ],
            },
            {
              group: "Scale & Emergence",
              color: "#0096aa",
              concepts: [
                { name: "Frame", definition: "The boundary and resolution you choose changes what is even visible. Change the frame, change the question, change the answer. Most suffering comes from the wrong frame — zoomed too close, or looking at the wrong scale." },
                { name: "Emergence", definition: "New properties appear at larger scales that no single part possesses. You cannot understand a friendship by studying one person. You cannot understand a habit by studying one moment. The whole behaves differently than its parts." },
                { name: "Phase Transition", definition: "A system crosses a threshold and tips into a new configuration. Life rarely changes linearly — it holds, then shifts. Small nudges at the right moment decide large outcomes. Knowing you are near a threshold changes what you do." },
              ],
            },
            {
              group: "Time & Mind",
              color: "#00e5ff",
              concepts: [
                { name: "Time: Arrow & Texture", definition: "Time has two faces. The arrow is irreversible — entropy increases, the past cannot be undone. Texture is how time feels — memory folds the past into the present, prediction folds the future in. Most suffering lives in the texture, not the arrow." },
                { name: "Consciousness", definition: "A loop that models its own state and options well enough to flexibly redirect itself. Self-awareness is not mystical — it is a feedback mechanism that adds degrees of freedom. To become more conscious is to model your own loop more accurately." },
                { name: "Origin Illusion", definition: "'Beginning' and 'ending' are inside labels. They belong to things within loops, not to the loop itself. Ask less about first causes and more about ongoing maintenance. What maintains this pattern now? That question can be answered." },
              ],
            },
          ].map((section, si) => (
            <motion.div
              key={section.group}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1, duration: 0.8 }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: section.color, boxShadow: `0 0 8px ${section.color}` }} />
                <p className="text-xs tracking-[0.4em] uppercase font-mono" style={{ color: section.color, opacity: 0.7 }}>
                  {section.group}
                </p>
                <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-10" style={{ color: section.color }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.concepts.map((c, ci) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.1 + ci * 0.07, duration: 0.6 }}
                    className="group p-6 border border-[#1a1a2e] bg-black hover:border-[#00e5ff]/20 transition-all duration-400"
                  >
                    <p className="text-white text-base font-light tracking-wide mb-3 group-hover:text-[#00e5ff] transition-colors duration-300">
                      {c.name}
                    </p>
                    <p className="text-[#6b6b8a] text-sm leading-relaxed">
                      {c.definition}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Closing quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-[#00e5ff]/20 text-6xl font-serif leading-none mb-4">&ldquo;</p>
            <p className="text-white text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
              It did not make life easy. It made it legible. It showed me what to stop forcing and what to feed.
            </p>
            <p className="text-[#00e5ff]/50 text-xs font-mono tracking-[0.3em] uppercase mt-6">
              — Blueprint Theory, Author&apos;s Note
            </p>
          </motion.div>
        </div>

        {/* Keep old CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto text-center mt-20"
        >
          <a
            href="/about"
            className="inline-flex items-center gap-3 text-[#00e5ff] text-sm tracking-[0.2em] uppercase border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-1 transition-colors duration-300"
          >
            Learn more about Blueprint Theory →
          </a>
        </motion.div>
      </section>
    </div>
  );
}

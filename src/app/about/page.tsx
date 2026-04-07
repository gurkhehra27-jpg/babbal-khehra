"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PhotoSlot from "@/components/PhotoSlot";

const milestones = [
  { year: "2025", event: "Published Alive — debut novel" },
  { year: "2025", event: "Published Ego & Enlightenment" },
  { year: "2025", event: "Launched Blueprint Theory framework" },
  { year: "2025", event: "Founded The Lab — AI art & music" },
  { year: "2025", event: "Engaged in local politics — building genuine representation for young people" },
  { year: "2026", event: "babbalkhehra.com — the universe, unified" },
];

const beliefs = [
  {
    title: "The Self is Architecture",
    body: "You are not born into who you are. You build it. Every thought, every choice, every story you tell yourself is a brick in the structure of your identity.",
  },
  {
    title: "Ego is Not the Enemy",
    body: "The ego has been misread. It is not a wall between you and enlightenment — it is the door. Walk through it consciously.",
  },
  {
    title: "Art as Philosophy",
    body: "Every story, film, and piece of music I create is a philosophical argument. Form is content. Aesthetics are ethics.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#00e5ff]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-4 opacity-70"
          >
            A Fellow Traveller
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8"
          >
            Babbal<br />
            <span className="text-gradient-cyan">Khehra</span>
          </motion.h1>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

      {/* Bio */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          {/* Left — identity card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Author photo */}
            <div className="relative w-full max-w-[280px]">
              <div className="absolute -inset-2 bg-[#00e5ff]/5 blur-xl" />
              <div className="absolute -inset-0.5 border border-[#00e5ff]/15" />
              <PhotoSlot
                src={null}
                alt="Babbal Khehra"
                label="Your portrait here"
                variant="portrait"
                className="w-full aspect-[3/4]"
              />
            </div>

            {/* Tags */}
            <div className="space-y-3">
              {["Author", "Philosopher", "AI Artist", "Political Activist", "Visionary"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="text-[#00e5ff] opacity-40 text-xs">◈</span>
                  <span className="text-[#6b6b8a] tracking-widest uppercase text-xs font-mono">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
                I am not a guru. I am not a teacher. I am a{" "}
                <span className="text-[#00e5ff]">fellow traveller</span> — someone who got
                lost, found a compass in philosophy, and built a map from scratch.
              </p>
              <p className="text-[#6b6b8a] text-base leading-relaxed mt-6">
                My name is Babbal Khehra. I write books that ask uncomfortable questions.
                I make films and music that exist at the edge of consciousness and code.
                And I live by a framework I call{" "}
                <span className="text-[#e8e8f0]">Blueprint Theory</span> — the idea that
                you are not a finished product. You are an ongoing design.
              </p>
              <p className="text-[#6b6b8a] text-base leading-relaxed mt-4">
                <span className="text-[#e8e8f0]">Alive</span> was the raw material — a story
                about what happens when everything is stripped away and you are left with
                nothing but the question of survival. It taught me that identity is not what
                you hold onto. It is what emerges when you let go.
              </p>
              <p className="text-[#6b6b8a] text-base leading-relaxed mt-4">
                <span className="text-[#e8e8f0]">Ego & Enlightenment</span> was the answer —
                or at least, the beginning of one. A philosophical map through the territory
                that most self-help books are afraid to enter: the ego, not as enemy, but as
                the very instrument of your becoming.
              </p>
              <p className="text-[#6b6b8a] text-base leading-relaxed mt-4">
                I believe art is philosophy made tangible. I believe consciousness is the
                frontier. And I believe we are all, always, in the process of building
                ourselves.
              </p>
              <p className="text-[#6b6b8a] text-base leading-relaxed mt-4">
                I am also actively engaged in{" "}
                <span className="text-[#e8e8f0]">local politics</span> — because a better
                future requires more than just talk. It demands genuine representation for
                young people and their unique needs. By bridging the gap between
                philosophical insight and political action, I am committed to building a
                community where the next generation isn't just heard, but is actively{" "}
                <span className="text-[#00e5ff]">shaping the blueprint of our tomorrow.</span>
              </p>
              <p className="text-[#e8e8f0] text-base leading-relaxed mt-4 font-light">
                Welcome to the blueprint.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              Core Beliefs
            </p>
            <h2 className="text-white text-4xl font-light tracking-tight">
              What I Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="p-8 border border-[#1a1a2e] hover:border-[#00e5ff]/20 transition-colors duration-500"
              >
                <div className="text-[#00e5ff] text-xs font-mono mb-4 opacity-40">0{i + 1}</div>
                <h3 className="text-white text-xl font-light tracking-tight mb-4">
                  {belief.title}
                </h3>
                <p className="text-[#6b6b8a] text-sm leading-relaxed">{belief.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              The Journey
            </p>
            <h2 className="text-white text-4xl font-light tracking-tight">Milestones</h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/30 via-[#00e5ff]/10 to-transparent hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-8"
                >
                  <div className="relative flex-shrink-0 w-[60px] md:w-[60px] text-right">
                    <span className="text-[#00e5ff] text-xs font-mono opacity-70">{m.year}</span>
                    <div className="absolute right-[-21px] top-[6px] w-2 h-2 rounded-full bg-[#00e5ff] opacity-40 hidden md:block" style={{ boxShadow: "0 0 8px #00e5ff" }} />
                  </div>
                  <div className="flex-1 pt-0 md:pl-8">
                    <p className="text-[#e8e8f0] text-base">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5ff]/3 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-6 opacity-60">
            Start Here
          </p>
          <h3 className="text-white text-3xl md:text-4xl font-light tracking-tight mb-6">
            Ready to enter the universe?
          </h3>
          <p className="text-[#6b6b8a] text-base mb-10">
            Start with the books. Or wander into the lab. Either way — you are already on the blueprint.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/vault"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#00e5ff]/40 text-[#00e5ff] text-sm tracking-[0.2em] uppercase hover:bg-[#00e5ff]/10 transition-all duration-300"
            >
              Enter the Vault →
            </Link>
            <Link
              href="/lab"
              className="inline-flex items-center gap-3 px-8 py-4 text-[#6b6b8a] text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
            >
              Visit the Lab
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

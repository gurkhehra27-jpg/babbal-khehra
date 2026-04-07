"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "all" | "film" | "music";

const works = [
  {
    id: 1,
    title: "Consciousness Rendered",
    category: "film" as Category,
    type: "AI Film",
    description:
      "A short film exploring the fragmentation of the self through AI-generated imagery. What does it look like when a mind watches itself dissolve?",
    duration: "4:32",
    year: "2025",
    status: "Available",
  },
  {
    id: 2,
    title: "The Man I Built Today",
    category: "music" as Category,
    type: "Original Music",
    description:
      "Blueprint Theory in sound. A meditation on identity, construction, and the daily act of becoming who you choose to be.",
    duration: "Album · 2025",
    year: "2025",
    status: "Available",
  },
  {
    id: 3,
    title: "The Blueprint Sessions",
    category: "film" as Category,
    type: "AI Film Series",
    description:
      "A three-part visual essay on identity, architecture, and the act of becoming. Each episode explores a pillar of Blueprint Theory.",
    duration: "3-part series",
    year: "2025",
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Ego, Dissolving",
    category: "music" as Category,
    type: "Spoken Word + Score",
    description:
      "Excerpts from Ego & Enlightenment performed over an original score. Philosophy as sound. Identity as frequency.",
    duration: "12:44",
    year: "2025",
    status: "Available",
  },
];

const filterLabels: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "film", label: "AI Film" },
  { key: "music", label: "Music" },
];

const platforms = [
  {
    name: "Spotify",
    handle: "Babbal Khehra",
    description: "Stream The Man I Built Today and all releases",
    href: "https://open.spotify.com/artist/7aKTbZVRNMdWvIPOfS0fgS",
    color: "#1DB954",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@BabbalKhehra",
    description: "Films, essays, and visual experiments",
    href: "https://www.youtube.com/channel/UC9QYIH2FUVSc2Rm45fLllAA",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@babbal_khehra",
    description: "Short-form philosophy and behind the scenes",
    href: "https://www.tiktok.com/@babbal_khehra",
    color: "#00e5ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
      </svg>
    ),
  },
];

export default function LabPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? works : works.filter((w) => w.category === active);

  return (
    <div className="bg-black min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#00e5ff]/4 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-4 opacity-70"
          >
            The Lab
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6"
          >
            Experiments in<br />
            <span className="text-gradient-cyan">Art & AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#6b6b8a] text-lg max-w-xl leading-relaxed"
          >
            Where philosophy meets technology. Music, AI films, and visual experiments
            that exist at the edge of consciousness and code.
          </motion.p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

      {/* ── SPOTIFY EMBED ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              Now Playing
            </p>
            <h2 className="text-white text-3xl font-light tracking-tight">Music</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border border-[#1a1a2e] overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(0,229,255,0.05)" }}
          >
            <iframe
              src="https://open.spotify.com/embed/artist/7aKTbZVRNMdWvIPOfS0fgS?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: "none", display: "block" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── YOUTUBE EMBED ── */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              Visual Work
            </p>
            <h2 className="text-white text-3xl font-light tracking-tight">YouTube</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border border-[#1a1a2e] overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(0,229,255,0.05)" }}
          >
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed?listType=playlist&list=UU9QYIH2FUVSc2Rm45fLllAA&rel=0&modestbranding=1"
                title="Babbal Khehra — YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>
          </motion.div>

          <motion.a
            href="https://www.youtube.com/channel/UC9QYIH2FUVSc2Rm45fLllAA"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-4 text-[#6b6b8a] text-xs font-mono tracking-[0.2em] uppercase hover:text-[#00e5ff] transition-colors duration-300"
          >
            View full channel →
          </motion.a>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/10 to-transparent my-8" />

      {/* ── FILTER + WORKS ── */}
      <section className="pt-8 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              The Archive
            </p>
            <h2 className="text-white text-3xl font-light tracking-tight">All Works</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-1 border border-[#1a1a2e] w-fit p-1 mb-10"
          >
            {filterLabels.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-6 py-2 text-xs tracking-[0.2em] uppercase font-mono transition-all duration-300 ${
                  active === f.key
                    ? "bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30"
                    : "text-[#6b6b8a] hover:text-white border border-transparent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((work, i) => (
              <motion.article
                key={work.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="group relative p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/0 to-transparent group-hover:via-[#00e5ff]/40 transition-all duration-500" />
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#1a1a2e] flex items-center justify-center group-hover:border-[#00e5ff]/30 transition-colors duration-300">
                      {work.category === "film" ? (
                        <svg className="w-4 h-4 text-[#00e5ff] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-[#00e5ff] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[#00e5ff] text-xs tracking-[0.3em] uppercase font-mono opacity-60">
                      {work.type}
                    </span>
                  </div>
                  <span className={`text-xs tracking-[0.2em] uppercase font-mono px-3 py-1 border ${work.status === "Available" ? "border-[#00e5ff]/20 text-[#00e5ff]/60" : "border-[#6b6b8a]/20 text-[#6b6b8a]"}`}>
                    {work.status}
                  </span>
                </div>
                <h3 className="text-white text-2xl font-light tracking-tight mb-3 group-hover:text-[#00e5ff] transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-[#6b6b8a] text-sm leading-relaxed mb-6">{work.description}</p>
                <div className="flex items-center justify-between text-xs font-mono text-[#6b6b8a]">
                  <span>{work.duration}</span>
                  <span>{work.year}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── PLATFORM LINKS ── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              Find Me On
            </p>
            <h2 className="text-white text-3xl font-light tracking-tight">All Platforms</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-start gap-5 p-7 border border-[#1a1a2e] bg-black hover:border-[#00e5ff]/20 transition-all duration-400 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/0 to-transparent group-hover:via-[#00e5ff]/30 transition-all duration-500" />
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center border transition-colors duration-300"
                  style={{ borderColor: `${p.color}25`, color: p.color }}
                >
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-base font-light tracking-wide mb-1 group-hover:text-[#00e5ff] transition-colors duration-300">
                    {p.name}
                  </p>
                  <p className="text-[#6b6b8a] text-xs font-mono mb-2">{p.handle}</p>
                  <p className="text-[#6b6b8a] text-xs leading-relaxed">{p.description}</p>
                </div>
                <svg className="w-4 h-4 text-[#6b6b8a] group-hover:text-[#00e5ff] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

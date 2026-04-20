"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const presenceMoments = [
  {
    src: "/images/presence/community-christmas-logan.jpeg",
    imageClassName: "object-center",
    caption:
      "At a community Christmas gathering in Logan with local leaders, elected representatives, and residents â€” reflecting the relationships, presence, and public engagement that shape real community life.",
  },
  {
    src: "/images/presence/parliament-leaders.jpg",
    imageClassName: "object-center",
    caption: "At Parliament with leaders engaged in public life and representation.",
  },
  {
    src: "/images/presence/logan-development-conversation.jpeg",
    imageClassName: "object-top",
    caption:
      "In conversation at a Logan community event, discussing local development, opportunity, and the issues that shape everyday public life.",
  },
];

const personalDimensions = [
  {
    src: "/images/personal/moon-photo.jpeg",
    imageClassName: "object-contain bg-[#05050a]",
    caption:
      "Astrology is one of the lenses that deepens how I think about timing, patterns, personality, and human nature.",
  },
  {
    src: "/images/personal/stars-portrait.png",
    imageClassName: "object-cover object-[center_70%]",
    caption:
      "I am still drawn to the deeper questions of identity, symbolism, and the patterns people search for in the sky and in themselves.",
  },
  {
    src: "/images/personal/telescope-setup.png",
    imageClassName: "object-cover object-center",
    caption:
      "Curiosity also becomes practice. Sometimes it looks like long nights, a telescope, and the discipline of learning the sky for yourself.",
  },
];

const milestones = [
  { year: "2018+", event: "Built a career across sales, student services, and community-facing roles" },
  { year: "2020+", event: "Deepened community engagement in Logan â€” events, civic spaces, public life" },
  { year: "2024", event: "Entered local politics â€” committed to genuine representation" },
  { year: "2025", event: "Published Alive â€” debut novel" },
  { year: "2025", event: "Published Ego & Enlightenment" },
  { year: "2025", event: "Sharpened a voice around psychology, communication, and human connection" },
  { year: "2025", event: "Built babbalkhehra.com â€” full-stack personal brand site" },
  { year: "2026", event: "Quantum Seer â€” AI prediction platform in development" },
];

const beliefs = [
  {
    num: "01",
    title: "Trust is built in person first",
    body: "Technology amplifies presence â€” it does not replace it. The trust that matters is earned in real rooms, real conversations, and real follow-through. Digital systems scale what already exists.",
  },
  {
    num: "02",
    title: "Stronger communities need internal voices",
    body: "You cannot build a stronger society purely from the outside. Real change requires showing up in leadership spaces, policy conversations, and the rooms where opportunity is shaped.",
  },
  {
    num: "03",
    title: "Proof moves faster than promise",
    body: "Don't describe what you can do. Build it. Ship it. Show it. Credibility is earned through consistent execution â€” not announcements, not pitches, not positioning.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* â”€â”€ HEADER â”€â”€ */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-[#00e5ff]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00e5ff] text-[11px] tracking-[0.55em] uppercase font-mono mb-4 opacity-70"
          >
            Community-Facing Digital Creator
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[80px] font-light tracking-tight text-white leading-[0.95] mb-8"
          >
            Babbal<br />
            <span className="text-gradient-cyan">Khehra</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[#6b6b8a] text-lg max-w-lg leading-relaxed"
          >
            Community builder. Digital creator. Author. Marketing, psychology, and human connection.
          </motion.p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

      {/* â”€â”€ MANIFESTO STRIP â”€â”€ */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-[#00e5ff]/3 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <p className="text-white text-2xl md:text-3xl font-light leading-relaxed">
            The books, the websites, and the public work all come from the same place:{" "}
            <span className="text-[#6b6b8a]">
              a belief that attention, trust, psychology, and genuine human connection are what actually move things forward.
            </span>
          </p>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/10 to-transparent" />

      {/* â”€â”€ BIO â€” editorial split â”€â”€ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-16">

          {/* Left â€” portrait + identity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Portrait */}
            <div className="relative w-full max-w-[300px]">
              <div className="absolute -inset-px border border-[#00e5ff]/10" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#00e5ff]/20" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#00e5ff]/20" />
              <div className="absolute -inset-3 bg-[#00e5ff]/3 blur-2xl" />
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/about-main-portrait-office.png"
                  alt="Babbal Khehra"
                  fill
                  className="object-cover object-[center_25%] grayscale contrast-110 brightness-90"
                />
                <div
                  className="absolute inset-0 opacity-[0.12] mix-blend-screen pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.15' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2.5">
              {[
                "Community Builder",
                "Digital Creator",
                "AI Operator",
                "Author",
                "Civic Engagement",
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-3 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#00e5ff]/40 flex-shrink-0" />
                  <span className="text-[#6b6b8a] tracking-widest uppercase text-[11px] font-mono">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right â€” bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-6 pt-2"
          >
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
              I come from a humble background, and I care about people, opportunity, and what it really takes to build trust, influence, and meaningful connection.
            </p>

            <p className="text-[#6b6b8a] text-base leading-relaxed">
              Coming to Australia shaped how I see the world. It strengthened my belief in what open, fair societies make possible and the responsibility that comes with that. My background across sales, international student services, and community-facing environments taught me early that{" "}
              <span className="text-[#e8e8f0]">trust, communication, and presence</span>{" "}
              are the things that actually create momentum. Not credentials. Not positioning. Presence.
            </p>

            <p className="text-[#6b6b8a] text-base leading-relaxed">
              Over time, I came to a clear conviction: strong communities, strong brands, and strong movements are built on the same foundations. You have to understand people. You have to understand what drives attention, what builds trust, and what makes someone say yes to an idea, a message, or a vision.
            </p>

            <p className="text-[#6b6b8a] text-base leading-relaxed">
              My books,{" "}
              <span className="text-[#e8e8f0]">Alive</span> and{" "}
              <span className="text-[#e8e8f0]">Ego & Enlightenment</span>, explore identity, resilience, and what it means to build yourself with intention. My digital work builds platforms, systems, and presence that communicate at scale. My community work closes the loop by showing up in person, in public, and in the conversations that matter.
            </p>

            <p className="text-[#e8e8f0] text-base leading-relaxed font-light border-l-2 border-[#00e5ff]/30 pl-5 mt-8">
              Different forms. One obsession: people, meaning, and connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ PUBLIC PRESENCE â”€â”€ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              Public Presence
            </p>
            <h2 className="text-white text-4xl font-light tracking-tight mb-6">
              Showing up where it counts.
            </h2>
            <p className="text-[#6b6b8a] text-base leading-relaxed max-w-2xl">
              I stay close to community, leadership, and the conversations shaping public life.
              These moments reflect engagement, visibility, and a commitment to showing up where
              people, policy, and opportunity meet.
            </p>
          </motion.div>

          {/* Curated photo grid â€” swap src values when photos are ready */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {presenceMoments.map((moment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                {/* Image slot */}
                <div className="relative aspect-[4/3] overflow-hidden border border-[#1a1a2e] group-hover:border-[#00e5ff]/20 transition-colors duration-500">
                  {moment.src ? (
                    <Image
                      src={moment.src}
                      alt={moment.caption}
                      fill
                      className={`object-cover ${moment.imageClassName} group-hover:scale-[1.04] transition-transform duration-700`}
                    />
                  ) : (
                    /* Placeholder â€” replace moment.src with "/images/presence/01.jpg" etc. */
                    <div className="w-full h-full bg-[#07070f] flex flex-col items-center justify-center relative">
                      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#00e5ff]/15" />
                      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#00e5ff]/15" />
                      <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#00e5ff]/15" />
                      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#00e5ff]/15" />
                      <span className="text-[#00e5ff]/20 text-[10px] font-mono tracking-[0.35em] uppercase select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  {/* Dark overlay on hover for image slots */}
                  {moment.src && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                  )}
                </div>

                {/* Caption */}
                <p className="text-[#6b6b8a] text-[11px] font-mono leading-relaxed mt-3 px-0.5">
                  {moment.caption}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-14 pt-10 border-t border-[#1a1a2e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <p className="text-[#6b6b8a] text-sm leading-relaxed max-w-md">
              For more moments across community, public life, and digital work, visit Instagram.
            </p>
            <a
              href="https://www.instagram.com/babbal_khehra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 border border-[#00e5ff]/30 text-[#00e5ff] text-[11px] tracking-[0.25em] uppercase font-mono hover:bg-[#00e5ff]/8 transition-all duration-300 flex-shrink-0"
            >
              View Instagram
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ WHAT I STAND FOR â”€â”€ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              Beyond the Public
            </p>
            <h2 className="text-white text-4xl font-light tracking-tight mb-6">
              The interests and ideas behind the visible work.
            </h2>
            <p className="text-[#6b6b8a] text-base leading-relaxed max-w-2xl">
              Not everything that shapes me is public-facing. Some of it is reflective,
              symbolic, personal, and rooted in the patterns I keep returning to over time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {personalDimensions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-[#1a1a2e] group-hover:border-[#00e5ff]/20 transition-colors duration-500">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className={`object-cover ${item.imageClassName} group-hover:scale-[1.04] transition-transform duration-700`}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#07070f] flex flex-col items-center justify-center relative">
                      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#00e5ff]/15" />
                      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#00e5ff]/15" />
                      <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#00e5ff]/15" />
                      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#00e5ff]/15" />
                      <span className="text-[#00e5ff]/20 text-[10px] font-mono tracking-[0.35em] uppercase select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  {item.src && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                  )}
                </div>

                <p className="text-[#6b6b8a] text-[11px] font-mono leading-relaxed mt-3 px-0.5">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              Principles
            </p>
            <h2 className="text-white text-4xl font-light tracking-tight">
              What I Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a2e]">
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
                className="bg-[#07070f] p-9"
              >
                <div className="text-[#00e5ff] text-[11px] font-mono opacity-25 tracking-[0.4em] mb-7">
                  {belief.num}
                </div>
                <h3 className="text-white text-xl font-light tracking-tight mb-4">
                  {belief.title}
                </h3>
                <p className="text-[#6b6b8a] text-sm leading-relaxed">{belief.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ TIMELINE â”€â”€ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
              The Journey
            </p>
            <h2 className="text-white text-4xl font-light tracking-tight">Milestones</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[56px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/25 via-[#00e5ff]/08 to-transparent hidden md:block" />

            <div className="space-y-7">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="flex items-start gap-8"
                >
                  <div className="relative flex-shrink-0 w-[56px] text-right">
                    <span className="text-[#00e5ff] text-[11px] font-mono opacity-60">{m.year}</span>
                    <div
                      className="absolute right-[-21px] top-[7px] w-2 h-2 rounded-full bg-[#00e5ff] opacity-35 hidden md:block"
                      style={{ boxShadow: "0 0 6px #00e5ff" }}
                    />
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-[#e8e8f0] text-base font-light">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5ff]/3 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-6 opacity-60">
            Start Here
          </p>
          <h3 className="text-white text-3xl md:text-4xl font-light tracking-tight mb-6">
            See the work. Read the books.<br />
            <span className="text-gradient-cyan">Decide for yourself.</span>
          </h3>
          <p className="text-[#6b6b8a] text-base mb-10 leading-relaxed">
            The Lab has the digital proof. The Vault has the writing. Either way â€” you&apos;re already here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lab"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#00e5ff]/40 text-[#00e5ff] text-sm tracking-[0.2em] uppercase hover:bg-[#00e5ff]/10 transition-all duration-300 glow-box-cyan"
            >
              The Lab â†’
            </Link>
            <Link
              href="/vault"
              className="inline-flex items-center gap-3 px-8 py-4 text-[#6b6b8a] text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
            >
              The Vault
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { posts } from "@/data/posts";
import QuoteMarquee from "@/components/QuoteMarquee";
import FeaturedQuotes from "@/components/FeaturedQuotes";
import PhotoSlot from "@/components/PhotoSlot";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const pillars = [
  {
    title: "The Vault",
    description: "Two books that challenge the soul — Alive and Ego & Enlightenment.",
    href: "/vault",
    icon: "◈",
  },
  {
    title: "The Lab",
    description: "AI films and music that push the edge of art and consciousness.",
    href: "/lab",
    icon: "◎",
  },
  {
    title: "Blueprint Theory",
    description: "A philosophy of self-architecture — building meaning from the inside out.",
    href: "/about",
    icon: "◇",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="bg-black">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden star-bg"
      >
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00e5ff]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00e5ff]/3 blur-[100px] pointer-events-none" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16"
        >
          {/* Author photo */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full bg-[#00e5ff]/8 blur-xl" />
              <div className="absolute -inset-1 border border-[#00e5ff]/20 rounded-full" />
              <PhotoSlot
                src="/images/photoformainpage.png"
                alt="Babbal Khehra"
                label="Your photo here"
                variant="portrait"
                className="w-52 h-64 md:w-64 md:h-80 rounded-none"
              />
            </div>
          </motion.div>

          {/* Text — left aligned when beside photo */}
          <div className="text-center md:text-left">
          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-8 opacity-80"
          >
            Est. 2025 · Blueprint Theory
          </motion.p>

          {/* Main headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-8xl font-light tracking-tight leading-none mb-6"
          >
            <span className="text-white block">Author.</span>
            <span className="text-white block">Philosopher.</span>
            <span className="text-gradient-cyan block glow-cyan">Visionary.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[#6b6b8a] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-8 mb-12"
          >
            Two books that redefine consciousness.{" "}
            <span className="text-[#e8e8f0]">Alive</span> and{" "}
            <span className="text-[#e8e8f0]">Ego & Enlightenment</span> — and a theory
            that asks you to architect your own existence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/vault"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#00e5ff]/40 text-[#00e5ff] text-sm tracking-[0.2em] uppercase hover:bg-[#00e5ff]/10 transition-all duration-300 glow-box-cyan"
            >
              Explore the Vault
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 text-[#6b6b8a] text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
            >
              My Story
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[#6b6b8a] text-xs tracking-[0.3em] uppercase font-mono">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-[#00e5ff]/40 to-transparent"
            />
          </motion.div>
          </div>{/* end text div */}
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <QuoteMarquee />

      {/* ── PILLARS ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono text-center mb-16 opacity-60"
          >
            The Universe of Babbal Khehra
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={pillar.href}
                  className="group block p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 hover:bg-[#07070f]/80 transition-all duration-500 glow-box-cyan-hover"
                >
                  <div className="text-[#00e5ff] text-3xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-white text-xl font-light tracking-widest uppercase mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#6b6b8a] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#00e5ff] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Enter <span>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED QUOTES ── */}
      <FeaturedQuotes />

      {/* ── QUOTE / PHILOSOPHY ── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#00e5ff]/3 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <span className="text-[#00e5ff]/30 text-7xl font-serif leading-none">&ldquo;</span>
          <p className="text-white text-2xl md:text-3xl font-light leading-relaxed -mt-6">
            The blueprint is not a plan. It is the act of{" "}
            <span className="text-gradient-cyan">becoming aware</span> that you are the architect.
          </p>
          <p className="mt-6 text-[#6b6b8a] text-sm tracking-[0.3em] uppercase font-mono">
            — Blueprint Theory
          </p>
        </motion.div>
      </section>

      {/* ── BOOKS PREVIEW ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
                The Work
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
                Two books.<br />
                <span className="text-gradient-cyan">One truth.</span>
              </h2>
            </div>
            <Link
              href="/vault"
              className="self-end md:self-start text-[#00e5ff] text-sm tracking-[0.2em] uppercase border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-1 transition-colors duration-300"
            >
              View all →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Alive",
                subtitle: "A story of survival and awakening",
                tag: "Fiction · Philosophy",
                color: "from-[#00e5ff]/10",
              },
              {
                title: "Ego & Enlightenment",
                subtitle: "The architecture of the self",
                tag: "Philosophy · Self-Discovery",
                color: "from-[#00b8cc]/10",
              },
            ].map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/vault"
                  className={`group block relative p-10 border border-[#1a1a2e] bg-gradient-to-br ${book.color} to-[#07070f] hover:border-[#00e5ff]/40 transition-all duration-500 overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/5 rounded-full blur-2xl group-hover:bg-[#00e5ff]/10 transition-all duration-500" />
                  <p className="text-[#00e5ff] text-xs tracking-[0.3em] uppercase font-mono mb-4 opacity-60">
                    {book.tag}
                  </p>
                  <h3 className="text-white text-3xl font-light tracking-tight mb-2">
                    {book.title}
                  </h3>
                  <p className="text-[#6b6b8a] text-sm">{book.subtitle}</p>
                  <div className="mt-8 flex items-center gap-2 text-[#00e5ff] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Read more →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── BLOG TEASER ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
                Thought Space
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
                Latest Essays
              </h2>
            </div>
            <Link
              href="/blog"
              className="self-end md:self-start text-[#00e5ff] text-sm tracking-[0.2em] uppercase border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-1 transition-colors duration-300"
            >
              All essays →
            </Link>
          </motion.div>

          <div className="space-y-4">
            {posts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-6 p-6 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 transition-all duration-400"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#00e5ff] text-xs font-mono tracking-widest opacity-60">
                        {post.category}
                      </span>
                      <span className="text-[#1a1a2e] text-xs">·</span>
                      <span className="text-[#6b6b8a] text-xs font-mono">{post.date}</span>
                    </div>
                    <h3 className="text-white text-lg font-light group-hover:text-[#00e5ff] transition-colors duration-300 truncate">
                      {post.title}
                    </h3>
                    <p className="text-[#6b6b8a] text-sm mt-1 line-clamp-1">{post.excerpt}</p>
                  </div>
                  <span className="text-[#6b6b8a] group-hover:text-[#00e5ff] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

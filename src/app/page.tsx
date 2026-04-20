"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { posts } from "@/data/posts";
import QuoteMarquee from "@/components/QuoteMarquee";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div className="bg-black">

      {/* ── HERO — cinematic split ── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden star-bg">
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[600px] rounded-full bg-[#00e5ff]/4 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#00e5ff]/3 blur-[100px] pointer-events-none" />

        {/* Photo — bleeds in from right, film-poster style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
          style={{ y: photoY }}
          className="absolute inset-y-0 right-0 w-[55%] md:w-[48%] hidden md:block"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/photoformainpage.png"
              alt="Babbal Khehra"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Left gradient — photo dissolves into black */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.88) 18%, rgba(0,0,0,0.35) 55%, transparent 100%)",
              }}
            />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black to-transparent" />
          </div>
        </motion.div>

        {/* Text content — left */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-center"
        >
          <div className="max-w-xl pt-28 pb-24">
            {/* Headline — name */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[64px] md:text-[88px] font-light tracking-tight leading-[0.92] mb-6"
            >
              <span className="text-white block">Babbal</span>
              <span className="text-gradient-cyan glow-cyan block">Khehra</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#00e5ff] text-[11px] tracking-[0.55em] uppercase font-mono mb-10 opacity-70"
            >
              Community-Facing Digital Creator
            </motion.p>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-[#6b6b8a] text-lg leading-relaxed mb-12 max-w-[420px]"
            >
              I use websites, AI, storytelling, and public-facing media to build{" "}
              <span className="text-[#e8e8f0]">visibility, trust, and opportunity.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/lab"
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#00e5ff]/40 text-[#00e5ff] text-sm tracking-[0.2em] uppercase hover:bg-[#00e5ff]/10 transition-all duration-300 glow-box-cyan"
              >
                See the Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 text-[#6b6b8a] text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
              >
                My Story
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-6 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[#00e5ff]/40 to-transparent"
          />
          <span className="text-[#6b6b8a] text-[10px] tracking-[0.4em] uppercase font-mono">Scroll</span>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <QuoteMarquee />

      {/* ── WHAT I BUILD ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-4 opacity-60">
              What I Build
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
              Three disciplines.<br />
              <span className="text-gradient-cyan">One direction.</span>
            </h2>
          </motion.div>

          {/* Gap-as-border grid — architectural, no cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a2e]">
            {[
              {
                num: "01",
                title: "Digital Systems",
                desc: "Websites, AI tools, and content infrastructure that generate visibility and build lasting online presence.",
                href: "/lab",
                tag: "Websites · AI · Workflow",
              },
              {
                num: "02",
                title: "Storytelling",
                desc: "Books, essays, and editorial content that frames ideas with clarity, conviction, and staying power.",
                href: "/vault",
                tag: "Books · Essays · Narrative",
              },
              {
                num: "03",
                title: "Community Presence",
                desc: "Engagement across community, civic, and leadership spaces — building the kind of trust and visibility that creates real opportunity.",
                href: "/about",
                tag: "Public Work · Credibility",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  className="group block bg-[#07070f] p-10 h-full hover:bg-[#0b0b16] transition-colors duration-500"
                >
                  <div className="text-[#00e5ff] text-[11px] font-mono tracking-[0.45em] mb-8 opacity-25">
                    {item.num}
                  </div>
                  <h3 className="text-white text-2xl font-light tracking-tight mb-4 group-hover:text-[#00e5ff] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#6b6b8a] text-sm leading-relaxed mb-10">
                    {item.desc}
                  </p>
                  <div className="space-y-3">
                    <p className="text-[#00e5ff]/25 text-[11px] font-mono tracking-[0.2em]">{item.tag}</p>
                    <div className="flex items-center gap-2 text-[#00e5ff] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#07070f]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#00e5ff]/3 blur-[130px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="flex items-start gap-10 md:gap-16">
            <div className="hidden md:block w-px h-40 bg-gradient-to-b from-[#00e5ff]/50 to-transparent flex-shrink-0 mt-1" />
            <div>
              <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-8 opacity-60">
                The Mission
              </p>
              <p className="text-white text-3xl md:text-4xl lg:text-[52px] font-light leading-[1.15] tracking-tight">
                Brand gets attention.{" "}
                <span className="text-[#6b6b8a]">Proof gets trust.</span>{" "}
                I build both.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── PROOF OF WORK ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-4 opacity-60">
                Proof of Work
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
                Real work.<br />
                <span className="text-gradient-cyan">Real results.</span>
              </h2>
            </div>
            <Link
              href="/lab"
              className="hidden md:inline-flex items-center gap-2 text-[#00e5ff] text-sm tracking-[0.2em] uppercase border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-1 transition-colors duration-300"
            >
              Full portfolio →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "Digital",
                title: "Full-stack websites built with Next.js, AI, and design systems",
                detail: "Including this site — designed, built, and deployed from scratch, end to end.",
              },
              {
                label: "AI",
                title: "AI-assisted content systems and editorial workflows",
                detail: "Using Claude to build scalable storytelling and content infrastructure.",
              },
              {
                label: "Community",
                title: "Community engagement, civic leadership, and public-facing presence",
                detail: "Showing up where people, policy, and opportunity meet — and building systems around it.",
              },
              {
                label: "Published",
                title: "Two books written, published, and in market",
                detail: "Alive and Ego & Enlightenment — philosophy that moves people.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group flex gap-6 p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/20 transition-colors duration-500"
              >
                <div className="text-[#00e5ff] text-[11px] font-mono tracking-[0.35em] uppercase opacity-35 flex-shrink-0 pt-0.5 w-20">
                  {item.label}
                </div>
                <div className="flex-1">
                  <p className="text-white text-base font-light leading-snug mb-2">{item.title}</p>
                  <p className="text-[#6b6b8a] text-sm leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 md:hidden"
          >
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 text-[#00e5ff] text-sm tracking-[0.2em] uppercase border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-1 transition-colors duration-300"
            >
              Full portfolio →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BOOKS — secondary, clean ── */}
      <section className="py-24 px-6">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a1a2e] to-transparent" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start justify-between mb-12"
          >
            <div>
              <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
                Published Work
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight">
                Two books.<br />
                <span className="text-gradient-cyan">One truth.</span>
              </h2>
            </div>
            <Link
              href="/vault"
              className="self-start text-[#00e5ff] text-sm tracking-[0.2em] uppercase border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-1 transition-colors duration-300"
            >
              View all →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Alive",
                subtitle: "A story of survival and awakening",
                tag: "Fiction · Philosophy",
              },
              {
                title: "Ego & Enlightenment",
                subtitle: "The architecture of the self",
                tag: "Philosophy · Self-Discovery",
              },
            ].map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <Link
                  href="/vault"
                  className="group flex items-center gap-6 p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 transition-all duration-500"
                >
                  <div className="w-1.5 h-14 bg-[#00e5ff]/20 group-hover:bg-[#00e5ff]/50 transition-colors duration-300 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#00e5ff] text-[11px] tracking-[0.3em] uppercase font-mono mb-1.5 opacity-50">
                      {book.tag}
                    </p>
                    <h3 className="text-white text-xl font-light tracking-tight group-hover:text-[#00e5ff] transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-[#6b6b8a] text-sm mt-0.5">{book.subtitle}</p>
                  </div>
                  <span className="text-[#6b6b8a] group-hover:text-[#00e5ff] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
                Thought Space
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight">
                Latest Essays
              </h2>
            </div>
            <Link
              href="/blog"
              className="self-start text-[#00e5ff] text-sm tracking-[0.2em] uppercase border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-1 transition-colors duration-300"
            >
              All essays →
            </Link>
          </motion.div>

          <div className="space-y-3">
            {posts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-6 p-6 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[#00e5ff] text-[11px] font-mono tracking-widest opacity-60">
                        {post.category}
                      </span>
                      <span className="text-[#1a1a2e]">·</span>
                      <span className="text-[#6b6b8a] text-[11px] font-mono">{post.date}</span>
                    </div>
                    <h3 className="text-white text-lg font-light group-hover:text-[#00e5ff] transition-colors duration-300 truncate">
                      {post.title}
                    </h3>
                    <p className="text-[#6b6b8a] text-sm mt-0.5 line-clamp-1">{post.excerpt}</p>
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

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

      {/* â”€â”€ HERO â”€â”€ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden star-bg">
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[600px] rounded-full bg-[#00e5ff]/4 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#00e5ff]/3 blur-[100px] pointer-events-none" />

        {/* â”€â”€ Mobile: full-bleed editorial poster â”€â”€ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
          style={{ y: photoY }}
          className="absolute inset-0 block md:hidden"
        >
          <Image
            src="/images/photoformainpage.png"
            alt="Babbal Khehra"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Bottom dissolve â€” text area is pure black */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.62) 50%, rgba(0,0,0,0.90) 68%, #000000 82%)" }} />
          {/* Left + right edge vignette */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.45) 100%)" }} />
          {/* Top darkening â€” merges with nav */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 22%)" }} />
        </motion.div>

        {/* Desktop: portrait becomes part of the whole hero plane */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
          style={{ y: photoY }}
          className="absolute inset-0 hidden md:block pointer-events-none"
        >
          <div className="absolute inset-y-0 right-[-4%] w-[74%]">
            <Image
              src="/images/photoformainpage.png"
              alt="Babbal Khehra"
              fill
              className="object-cover object-top"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 10%, rgba(0,0,0,0.16) 18%, rgba(0,0,0,0.42) 28%, rgba(0,0,0,0.74) 40%, rgba(0,0,0,0.94) 52%, black 62%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 10%, rgba(0,0,0,0.16) 18%, rgba(0,0,0,0.42) 28%, rgba(0,0,0,0.74) 40%, rgba(0,0,0,0.94) 52%, black 62%, black 100%)",
              }}
              priority
            />
          </div>
          {/* Global dimming keeps the portrait inside the atmosphere */}
          <div className="absolute inset-0 bg-black/26" />
          {/* Soft centre haze replaces the visible vertical band */}
          <div
            className="absolute inset-y-0 right-[34%] w-[34%]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.10) 28%, transparent 72%)",
              filter: "blur(36px)",
            }}
          />
          {/* Top dissolve merges with the nav and upper background */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.38) 20%, transparent 46%)" }} />
          {/* Bottom dissolve deepens the poster effect */}
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black via-black/70 to-transparent" />
          {/* Far-right vignette avoids a cut-off edge at the viewport */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 12%, transparent 24%)" }} />
        </motion.div>

        {/* Text â€” bottom-anchored on mobile, centered on desktop */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-start md:items-center"
        >
          {/*
            Mobile: pt-[50vh] pushes text into the lower half so the photo is
            visible in the upper half â€” editorial poster composition.
            Desktop: pt-28 keeps the existing vertically-centered layout.
          */}
          <div className="max-w-xl pt-[50vh] md:pt-28 pb-16 md:pb-24">

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[72px] md:text-[88px] font-light tracking-tight leading-[0.92] mb-5 md:mb-6"
            >
              <span className="text-white block">Babbal</span>
              <span className="text-gradient-cyan glow-cyan block">Khehra</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#00e5ff] text-[11px] tracking-[0.32em] md:tracking-[0.55em] uppercase font-mono mb-7 md:mb-10 opacity-70"
            >
              Community-Facing Digital Creator
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-[#6b6b8a] text-base md:text-lg leading-relaxed mb-9 md:mb-12"
            >
              I use websites, AI, storytelling, and public-facing media to build{" "}
              <span className="text-[#e8e8f0]">visibility, trust, and opportunity.</span>
            </motion.p>

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
                <span className="group-hover:translate-x-1 transition-transform duration-300">â†’</span>
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

        {/* Scroll indicator â€” hide on mobile so it doesn't crowd the text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-6 hidden sm:flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[#00e5ff]/40 to-transparent"
          />
          <span className="text-[#6b6b8a] text-[10px] tracking-[0.4em] uppercase font-mono">Scroll</span>
        </motion.div>
      </section>

      {/* â”€â”€ MARQUEE â”€â”€ */}
      <QuoteMarquee />

      {/* â”€â”€ WHAT I BUILD â”€â”€ */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20"
          >
            <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-4 opacity-60">
              What I Build
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
              Three disciplines.<br />
              <span className="text-gradient-cyan">One direction.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a2e]">
            {[
              {
                num: "01",
                title: "Digital Systems",
                desc: "Websites, AI tools, and content infrastructure that generate visibility and build lasting online presence.",
                href: "/lab",
                tag: "Websites Â· AI Â· Workflow",
              },
              {
                num: "02",
                title: "Storytelling",
                desc: "Books, essays, and editorial content that frames ideas with clarity, conviction, and staying power.",
                href: "/vault",
                tag: "Books Â· Essays Â· Narrative",
              },
              {
                num: "03",
                title: "Community Presence",
                desc: "Engagement across community, civic, and leadership spaces â€” building the kind of trust and visibility that creates real opportunity.",
                href: "/about",
                tag: "Public Work Â· Credibility",
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
                  className="group block bg-[#07070f] p-6 md:p-10 h-full hover:bg-[#0b0b16] transition-colors duration-500"
                >
                  <div className="text-[#00e5ff] text-[11px] font-mono tracking-[0.45em] mb-6 md:mb-8 opacity-25">
                    {item.num}
                  </div>
                  <h3 className="text-white text-2xl font-light tracking-tight mb-3 md:mb-4 group-hover:text-[#00e5ff] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#6b6b8a] text-sm leading-relaxed mb-8 md:mb-10">
                    {item.desc}
                  </p>
                  <div className="space-y-3">
                    <p className="text-[#00e5ff]/25 text-[11px] font-mono tracking-[0.2em]">{item.tag}</p>
                    <div className="flex items-center gap-2 text-[#00e5ff] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore <span>â†’</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ MANIFESTO â”€â”€ */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
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
            {/* Desktop: vertical cyan line */}
            <div className="hidden md:block w-px h-40 bg-gradient-to-b from-[#00e5ff]/50 to-transparent flex-shrink-0 mt-1" />

            <div>
              {/* Mobile: horizontal accent â€” gives the same editorial structure */}
              <div className="block md:hidden w-10 h-px bg-gradient-to-r from-[#00e5ff]/60 to-transparent mb-8" />

              <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-8 opacity-60">
                The Mission
              </p>

              {/*
                Split into explicit lines on mobile so each statement lands as
                its own beat â€” more manifesto, less run-on paragraph.
              */}
              <p className="text-white text-[30px] md:text-4xl lg:text-[52px] font-light leading-[1.18] tracking-tight">
                <span className="block">Brand gets attention.</span>
                <span className="text-[#6b6b8a] block">Proof gets trust.</span>
                <span className="block">I build both.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* â”€â”€ PROOF OF WORK â”€â”€ */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between mb-10 md:mb-16"
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
              Full portfolio â†’
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                label: "Digital",
                title: "Full-stack websites built with Next.js, AI, and design systems",
                detail: "Including this site â€” designed, built, and deployed from scratch, end to end.",
              },
              {
                label: "AI",
                title: "AI-assisted content systems and editorial workflows",
                detail: "Using Claude to build scalable storytelling and content infrastructure.",
              },
              {
                label: "Community",
                title: "Community engagement, civic leadership, and public-facing presence",
                detail: "Showing up where people, policy, and opportunity meet â€” and building systems around it.",
              },
              {
                label: "Published",
                title: "Two books written, published, and in market",
                detail: "Alive and Ego & Enlightenment â€” philosophy that moves people.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group flex gap-4 md:gap-6 p-5 md:p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/20 transition-colors duration-500"
              >
                <div className="text-[#00e5ff] text-[11px] font-mono tracking-[0.35em] uppercase opacity-35 flex-shrink-0 pt-0.5 w-16 md:w-20">
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
              Full portfolio â†’
            </Link>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ BOOKS â”€â”€ */}
      <section className="py-16 md:py-24 px-6">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a1a2e] to-transparent" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start justify-between mb-10 md:mb-12"
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
              View all â†’
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                title: "Alive",
                subtitle: "A story of survival and awakening",
                tag: "Fiction Â· Philosophy",
              },
              {
                title: "Ego & Enlightenment",
                subtitle: "The architecture of the self",
                tag: "Philosophy Â· Self-Discovery",
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
                  className="group flex items-center gap-6 p-6 md:p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 transition-all duration-500"
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
                    â†’
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ BLOG TEASER â”€â”€ */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8 md:mb-12"
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
              All essays â†’
            </Link>
          </motion.div>

          <div className="space-y-2 md:space-y-3">
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
                  className="group flex items-start justify-between gap-4 md:gap-6 p-5 md:p-6 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[#00e5ff] text-[11px] font-mono tracking-widest opacity-60">
                        {post.category}
                      </span>
                      {/* Date hidden on mobile â€” reduces noise in a tight row */}
                      <span className="hidden sm:inline text-[#1a1a2e]">Â·</span>
                      <span className="hidden sm:inline text-[#6b6b8a] text-[11px] font-mono">{post.date}</span>
                    </div>
                    {/* line-clamp-2 instead of truncate â€” titles read properly on narrow screens */}
                    <h3 className="text-white text-base md:text-lg font-light group-hover:text-[#00e5ff] transition-colors duration-300 leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    {/* Excerpt hidden on mobile â€” too much at small size */}
                    <p className="hidden sm:block text-[#6b6b8a] text-sm mt-1 line-clamp-1">{post.excerpt}</p>
                  </div>
                  <span className="text-[#6b6b8a] group-hover:text-[#00e5ff] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1">
                    â†’
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

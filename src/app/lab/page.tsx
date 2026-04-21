"use client";

import { motion } from "framer-motion";

const projects = [
 {
 id: 1,
 num: "01",
 category: "Website · Brand",
 title: "babbalkhehra.com",
 subtitle: "This site as a product",
 description:
 "A full-stack personal brand platform designed and built from scratch. Cinematic hero layout, editorial design system, responsive across all devices, AI-integrated chat, and SEO-structured content architecture.",
 stack: ["Next.js 16", "Tailwind CSS 4", "TypeScript", "Framer Motion", "OpenAI API"],
 outcome: "Live · Optimised · Ongoing",
 featured: true,
 },
 {
 id: 2,
 num: "02",
 category: "AI · Full-Stack",
 title: "Quantum Seer",
 subtitle: "AI-powered prediction platform",
 description:
 "Community-driven prediction newsroom with Oracle voting, weekly prediction cycles, SuperAdmin controls, a billboard monetisation system, and retro-futurist design language. Built with a complete Supabase schema, RLS policies, and realtime data.",
 stack: ["Next.js 16", "Supabase", "TypeScript", "Framer Motion"],
 outcome: "In Development",
 featured: false,
 },
 {
 id: 3,
 num: "03",
 category: "AI · Integration",
 title: "AskBabbal",
 subtitle: "AI-powered personal assistant",
 description:
 "A Claude-powered AI chat built directly into this site. Responds to questions about Babbal's work, philosophy, approach, and projects. Custom system prompt, edge-deployed, streaming responses.",
 stack: ["OpenAI API", "Next.js API Routes", "TypeScript"],
 outcome: "Live on this site",
 featured: false,
 },
 {
 id: 4,
 num: "04",
 category: "AI · Content",
 title: "AI Editorial System",
 subtitle: "Scalable content infrastructure",
 description:
 "Claude-powered editorial workflows for producing essays, blog posts, and long-form content at scale. Template-driven, brand-consistent, and built to maintain voice across high output volume.",
 stack: ["Claude API", "Custom Prompts", "Editorial Templates"],
 outcome: "Active",
 featured: false,
 },
 {
 id: 5,
 num: "05",
 category: "Community · Strategy",
 title: "Community Visibility",
 subtitle: "Digital strategy for real-world impact",
 description:
 "Digital presence strategy for community and civic engagement. Building the online infrastructure that supports visibility and credibility — social presence, content systems, discoverability, and editorial framing.",
 stack: ["Digital Strategy", "Content Systems", "SEO", "Social"],
 outcome: "Active",
 featured: false,
 },
];

const capabilities = [
 {
 area: "Design",
 items: ["Typography systems", "Motion & animation", "UI hierarchy", "Brand identity"],
 },
 {
 area: "Build",
 items: ["Next.js · React", "Supabase · API", "TypeScript", "Responsive + performant"],
 },
 {
 area: "AI",
 items: ["Content workflows", "Chat integration", "Automation", "Prompt engineering"],
 },
 {
 area: "Strategy",
 items: ["SEO & visibility", "Community reach", "Brand positioning", "Digital systems"],
 },
];

const platforms = [
 {
 name: "Spotify",
 handle: "Babbal Khehra",
 description: "Stream The Man I Built Today and all releases",
 href: "https://open.spotify.com/artist/7aKTbZVRNMdWvIPOfS0fgS",
 icon: (
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
 <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
 </svg>
 ),
 },
 {
 name: "YouTube",
 handle: "@BabbalKhehra",
 description: "Visual work, essays, and behind-the-scenes",
 href: "https://www.youtube.com/channel/UC9QYIH2FUVSc2Rm45fLllAA",
 icon: (
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
 </svg>
 ),
 },
 {
 name: "TikTok",
 handle: "@babbal_khehra",
 description: "Short-form content and creative process",
 href: "https://www.tiktok.com/@babbal_khehra",
 icon: (
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
 <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0.54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z" />
 </svg>
 ),
 },
];

export default function LabPage() {
 const featured = projects[0];
 const rest = projects.slice(1);

 return (
 <div className="bg-black min-h-screen">

 {/* ── HEADER ── */}
 <section className="pt-40 pb-20 px-6 relative overflow-hidden">
 <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-[#00e5ff]/4 blur-[120px] rounded-full pointer-events-none" />
 <div className="max-w-6xl mx-auto relative">
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="text-[#00e5ff] text-[11px] tracking-[0.55em] uppercase font-mono mb-4 opacity-70"
 >
 The Lab
 </motion.p>
 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6"
 >
 Digital Proof.<br />
 <span className="text-gradient-cyan">Real Work.</span>
 </motion.h1>
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.25 }}
 className="text-[#6b6b8a] text-lg max-w-lg leading-relaxed"
 >
 Websites, AI systems, content infrastructure, and digital storytelling — built from scratch, shipped for real.
 </motion.p>
 </div>
 </section>

 <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

 {/* ── FEATURED PROJECT — babbalkhehra.com ── */}
 <section className="py-20 px-6">
 <div className="max-w-6xl mx-auto">
 <motion.p
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-8 opacity-60"
 >
 Featured Project
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
 className="relative p-10 md:p-14 border border-[#1a1a2e] bg-[#07070f] overflow-hidden group hover:border-[#00e5ff]/25 transition-colors duration-500"
 style={{ boxShadow: "0 0 60px rgba(0,229,255,0.04)" }}
 >
 {/* Top accent line */}
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/40 to-transparent" />
 {/* Corner marks */}
 <div className="absolute top-5 right-5 w-10 h-10 border-t border-r border-[#00e5ff]/15" />
 <div className="absolute bottom-5 left-5 w-10 h-10 border-b border-l border-[#00e5ff]/15" />
 {/* Glow */}
 <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#00e5ff]/3 blur-[80px] rounded-full -translate-y-1/2 pointer-events-none" />

 <div className="relative">
 <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
 <div className="flex items-center gap-4">
 <span className="text-[#00e5ff] text-[11px] font-mono tracking-[0.4em] opacity-30">{featured.num}</span>
 <span className="text-[#00e5ff] text-[11px] font-mono tracking-[0.25em] uppercase opacity-60 border border-[#00e5ff]/20 px-3 py-1">
 {featured.category}
 </span>
 </div>
 <span className="text-[#00e5ff] text-[11px] font-mono tracking-[0.2em] uppercase opacity-60 border border-[#00e5ff]/20 px-3 py-1">
 {featured.outcome}
 </span>
 </div>

 <h2 className="text-white text-3xl md:text-5xl font-light tracking-tight mb-2">
 {featured.title}
 </h2>
 <p className="text-[#00e5ff]/50 text-sm font-mono tracking-[0.2em] uppercase mb-8">
 {featured.subtitle}
 </p>
 <p className="text-[#6b6b8a] text-base leading-relaxed max-w-2xl mb-10">
 {featured.description}
 </p>

 <div className="flex flex-wrap gap-2 mb-10">
 {featured.stack.map((s) => (
 <span
 key={s}
 className="text-[#6b6b8a] text-[11px] font-mono tracking-[0.15em] border border-[#1a1a2e] px-3 py-1.5"
 >
 {s}
 </span>
 ))}
 </div>

 <div className="flex items-center gap-2 text-[#00e5ff] text-xs tracking-[0.25em] uppercase">
 <span className="w-8 h-px bg-[#00e5ff]/40" />
 You&apos;re looking at it
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ── CASE STUDIES GRID ── */}
 <section className="pb-20 px-6">
 <div className="max-w-6xl mx-auto">
 <motion.p
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-8 opacity-60"
 >
 More Work
 </motion.p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {rest.map((project, i) => (
 <motion.div
 key={project.id}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
 className="group relative p-9 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/25 transition-all duration-500 overflow-hidden"
 >
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/0 group-hover:via-[#00e5ff]/30 to-transparent transition-all duration-500" />

 <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
 <div className="flex items-center gap-3">
 <span className="text-[#00e5ff] text-[11px] font-mono tracking-[0.4em] opacity-25">{project.num}</span>
 <span className="text-[#00e5ff] text-[11px] font-mono tracking-[0.2em] uppercase opacity-50">
 {project.category}
 </span>
 </div>
 <span
 className={`text-[11px] font-mono tracking-[0.15em] uppercase px-3 py-1 border ${
 project.outcome === "Live on this site" || project.outcome === "Active"
 ? "border-[#00e5ff]/20 text-[#00e5ff]/50"
 : "border-[#6b6b8a]/20 text-[#6b6b8a]"
 }`}
 >
 {project.outcome}
 </span>
 </div>

 <h3 className="text-white text-2xl font-light tracking-tight mb-1 group-hover:text-[#00e5ff] transition-colors duration-300">
 {project.title}
 </h3>
 <p className="text-[#00e5ff]/40 text-[11px] font-mono tracking-[0.2em] uppercase mb-5">
 {project.subtitle}
 </p>
 <p className="text-[#6b6b8a] text-sm leading-relaxed mb-7">
 {project.description}
 </p>

 <div className="flex flex-wrap gap-2">
 {project.stack.map((s) => (
 <span
 key={s}
 className="text-[#6b6b8a] text-[11px] font-mono tracking-[0.1em] border border-[#1a1a2e] px-2.5 py-1"
 >
 {s}
 </span>
 ))}
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/10 to-transparent" />

 {/* ── CAPABILITIES ── */}
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
 <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
 Capabilities
 </p>
 <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight">
 What I bring to every project.
 </h2>
 </motion.div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a2e]">
 {capabilities.map((cap, i) => (
 <motion.div
 key={cap.area}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.7 }}
 className="bg-[#07070f] p-8"
 >
 <p className="text-[#00e5ff] text-[11px] font-mono tracking-[0.35em] uppercase mb-5 opacity-60">
 {cap.area}
 </p>
 <ul className="space-y-2.5">
 {cap.items.map((item) => (
 <li key={item} className="text-[#6b6b8a] text-sm leading-relaxed flex items-center gap-2">
 <span className="w-1 h-1 rounded-full bg-[#00e5ff]/30 flex-shrink-0" />
 {item}
 </li>
 ))}
 </ul>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* ── PLATFORM LINKS — credibility signals ── */}
 <section className="py-20 px-6">
 <div className="max-w-6xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mb-10"
 >
 <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono mb-3 opacity-60">
 Also On
 </p>
 <h2 className="text-white text-2xl font-light tracking-tight">Platforms</h2>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
 {platforms.map((p, i) => (
 <motion.a
 key={p.name}
 href={p.href}
 target="_blank"
 rel="noopener noreferrer"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.08, duration: 0.6 }}
 className="group flex items-center gap-5 p-6 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/20 transition-all duration-300"
 >
 <div className="text-[#6b6b8a] group-hover:text-[#00e5ff] transition-colors duration-300 flex-shrink-0">
 {p.icon}
 </div>
 <div className="flex-1 min-w-0">
 <p className="text-white text-sm font-light group-hover:text-[#00e5ff] transition-colors duration-300">
 {p.name}
 </p>
 <p className="text-[#6b6b8a] text-xs font-mono">{p.handle}</p>
 </div>
 <svg className="w-3.5 h-3.5 text-[#6b6b8a] group-hover:text-[#00e5ff] transition-colors duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
 </svg>
 </motion.a>
 ))}
 </div>
 </div>
 </section>

 {/* ── MUSIC EMBED — small, credibility ── */}
 <section className="pb-24 px-6">
 <div className="max-w-6xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 className="mb-6"
 >
 <p className="text-[#00e5ff] text-[11px] tracking-[0.5em] uppercase font-mono opacity-60">
 Music — The Man I Built Today
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7, delay: 0.1 }}
 className="border border-[#1a1a2e] overflow-hidden"
 >
 <iframe
 src="-"
 width="100%"
 height="152"
 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
 loading="lazy"
 style={{ border: "none", display: "block" }}
 />
 </motion.div>
 </div>
 </section>

 </div>
 );
}

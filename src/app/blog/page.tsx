"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { posts, categories } from "@/data/posts";
import BlogVisual from "@/components/BlogVisual";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const featured = posts.filter((p) => p.featured);

  return (
    <div className="bg-black min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[350px] bg-[#00e5ff]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-4 opacity-70"
          >
            Thought Space
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6"
          >
            The Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#6b6b8a] text-lg max-w-xl leading-relaxed"
          >
            Essays on consciousness, identity, philosophy, and the art of building a self.
          </motion.p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

      {/* ── FEATURED ── */}
      {featured.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-8 opacity-60">
              Featured
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block relative border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/40 transition-all duration-500 overflow-hidden"
                  >
                    {/* Image area */}
                    <div className="relative w-full h-52 bg-[#0e0e1a] overflow-hidden">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                      ) : (
                        <BlogVisual category={post.category} title={post.title} className="absolute inset-0" />
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs tracking-[0.2em] uppercase font-mono text-[#00e5ff] border border-[#00e5ff]/30 bg-black/60 backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-[#6b6b8a] text-xs font-mono mb-3">
                        {post.date} · {post.readTime}
                      </p>
                      <h2 className="text-white text-2xl font-light tracking-tight mb-2 group-hover:text-[#00e5ff] transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-[#00e5ff]/60 text-sm mb-4 italic">{post.subtitle}</p>
                      <p className="text-[#6b6b8a] text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-[#00e5ff] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read more →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SEARCH + FILTER ── */}
      <section className="py-8 px-6 sticky top-[73px] z-30 bg-black/90 backdrop-blur-md border-b border-[#1a1a2e]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b8a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search essays..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#07070f] border border-[#1a1a2e] text-white text-sm placeholder-[#6b6b8a]/50 focus:outline-none focus:border-[#00e5ff]/40 transition-colors duration-300 font-mono"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6b8a] hover:text-white transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-[0.2em] uppercase font-mono border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-[#00e5ff]/50 text-[#00e5ff] bg-[#00e5ff]/8"
                    : "border-[#1a1a2e] text-[#6b6b8a] hover:border-[#00e5ff]/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL POSTS ── */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#6b6b8a] text-xs font-mono mb-10">
            {filtered.length} {filtered.length === 1 ? "essay" : "essays"}
            {activeCategory !== "All" && ` in ${activeCategory}`}
            {search && ` matching "${search}"`}
          </p>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <div className="space-y-4">
                {filtered.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 hover:bg-[#07070f] transition-all duration-400 overflow-hidden"
                    >
                      {/* Image thumbnail */}
                      <div className="relative w-full md:w-48 h-36 flex-shrink-0 bg-[#0e0e1a] overflow-hidden">
                        {post.coverImage ? (
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          />
                        ) : (
                          <BlogVisual category={post.category} title={post.title} className="absolute inset-0" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#07070f]/60 hidden md:block" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-[#00e5ff] text-xs tracking-[0.3em] uppercase font-mono opacity-70">
                              {post.category}
                            </span>
                            <span className="text-[#1a1a2e]">·</span>
                            <span className="text-[#6b6b8a] text-xs font-mono">{post.readTime}</span>
                          </div>
                          <h3 className="text-white text-xl font-light tracking-tight mb-1 group-hover:text-[#00e5ff] transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-[#00e5ff]/50 text-sm italic mb-3">{post.subtitle}</p>
                          <p className="text-[#6b6b8a] text-sm leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-[#6b6b8a] text-xs font-mono">{post.date}</p>
                          <div className="flex gap-2 flex-wrap">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] tracking-widest uppercase text-[#6b6b8a]/60 font-mono"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center"
              >
                <p className="text-[#6b6b8a] text-sm font-mono mb-2">No essays found.</p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="text-[#00e5ff] text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
                >
                  Clear filters →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

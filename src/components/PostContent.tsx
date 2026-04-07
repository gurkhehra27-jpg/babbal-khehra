"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Post } from "@/data/posts";

export default function PostContent({
  post,
  related,
}: {
  post: Post;
  related: Post[];
}) {
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* ── ARTICLE BODY ── */}
      <article className="px-6 py-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Excerpt callout */}
          <blockquote className="border-l-2 border-[#00e5ff]/40 pl-6 py-2 mb-10">
            <p className="text-[#e8e8f0] text-lg md:text-xl font-light leading-relaxed italic">
              {post.excerpt}
            </p>
          </blockquote>

          {/* Body paragraphs */}
          {paragraphs.map((para, i) => {
            const isNumberedList = /^\d+\./.test(para.trim());
            if (isNumberedList) {
              const items = para
                .split("\n")
                .filter((l) => /^\d+\./.test(l.trim()));
              return (
                <ol key={i} className="space-y-3 pl-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex gap-4 text-[#6b6b8a] text-base leading-relaxed">
                      <span className="text-[#00e5ff] font-mono text-sm mt-0.5 flex-shrink-0">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{item.replace(/^\d+\.\s*/, "")}</span>
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} className="text-[#9090aa] text-base md:text-lg leading-relaxed">
                {para}
              </p>
            );
          })}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-2 mt-16 pt-10 border-t border-[#1a1a2e]"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs tracking-[0.2em] uppercase font-mono text-[#6b6b8a] border border-[#1a1a2e] hover:border-[#00e5ff]/30 hover:text-[#00e5ff] transition-colors duration-300 cursor-default"
            >
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* Author bio strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 p-8 border border-[#1a1a2e] bg-[#07070f] flex flex-col sm:flex-row gap-6 items-start"
        >
          <div className="w-14 h-14 border border-[#1a1a2e] bg-black flex items-center justify-center flex-shrink-0">
            <span className="text-[#00e5ff]/30 text-lg font-light">BK</span>
          </div>
          <div>
            <p className="text-white text-sm font-light tracking-widest uppercase mb-1">
              Babbal Khehra
            </p>
            <p className="text-[#6b6b8a] text-xs font-mono mb-3 tracking-widest">
              Author · Philosopher · Fellow Traveller
            </p>
            <p className="text-[#6b6b8a] text-sm leading-relaxed">
              Author of <em className="text-[#e8e8f0]">Alive</em> and{" "}
              <em className="text-[#e8e8f0]">Ego & Enlightenment</em>. Architect of Blueprint
              Theory. Writing at the intersection of consciousness, identity, and the art of
              becoming.
            </p>
          </div>
        </motion.div>
      </article>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="py-16 px-6 border-t border-[#1a1a2e]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00e5ff] text-xs tracking-[0.5em] uppercase font-mono mb-10 opacity-60">
              Continue Reading
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group block p-6 border border-[#1a1a2e] bg-[#07070f] hover:border-[#00e5ff]/30 transition-all duration-400"
                >
                  <p className="text-[#00e5ff] text-xs font-mono mb-3 opacity-60">
                    {rel.category} · {rel.readTime}
                  </p>
                  <h4 className="text-white text-lg font-light group-hover:text-[#00e5ff] transition-colors duration-300 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-[#6b6b8a] text-sm line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK ── */}
      <div className="py-12 px-6 text-center border-t border-[#1a1a2e]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-[#6b6b8a] text-sm tracking-[0.2em] uppercase font-mono hover:text-[#00e5ff] transition-colors duration-300"
        >
          ← All Essays
        </Link>
      </div>
    </>
  );
}

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
    genre: "Fiction / Philosophy",
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
 "What if the ego is not your enemy, but your most misunderstood teacher? This book dismantles the war between self and soul, weaving philosophy, psychology, and lived experience into a new framework for understanding consciousness and identity.",
    genre: "Philosophy / Self-Discovery",
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
                    <span className="text-[#1a1a2e] text-xs">/</span>
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
 </div>
 );
}

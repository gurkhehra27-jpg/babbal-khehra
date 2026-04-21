"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
 return (
 <footer className="border-t border-[#1a1a2e] bg-black">
 <div className="max-w-6xl mx-auto px-6 py-12">
 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
 <div className="flex flex-col items-center md:items-start gap-1">
 <span className="text-[#00e5ff] text-xs tracking-[0.4em] uppercase font-mono opacity-60">
 Babbal Khehra
 </span>
 <span className="text-[#6b6b8a] text-xs tracking-widest">
 Author · Marketing · Psychology
 </span>
 </div>

 <nav className="flex items-center gap-8">
 {[
 { href: "/vault", label: "The Vault" },
 { href: "/lab", label: "The Lab" },
 { href: "/blog", label: "Blog" },
 { href: "/about", label: "About" },
 ].map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="text-xs tracking-[0.2em] uppercase text-[#6b6b8a] hover:text-[#00e5ff] transition-colors duration-300"
 >
 {link.label}
 </Link>
 ))}
 </nav>

 <div className="flex items-center gap-4">
 <motion.a href="https://www.instagram.com/ego_and_enlightenment_book" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="text-[#6b6b8a] hover:text-[#00e5ff] transition-colors duration-300" aria-label="Instagram">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
 </svg>
 </motion.a>
 <motion.a href="https://open.spotify.com/artist/7aKTbZVRNMdWvIPOfS0fgS" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="text-[#6b6b8a] hover:text-[#1DB954] transition-colors duration-300" aria-label="Spotify">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
 </svg>
 </motion.a>
 <motion.a href="https://www.youtube.com/channel/UC9QYIH2FUVSc2Rm45fLllAA" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="text-[#6b6b8a] hover:text-[#FF0000] transition-colors duration-300" aria-label="YouTube">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
 </svg>
 </motion.a>
 <motion.a href="https://www.tiktok.com/@babbal_khehra" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="text-[#6b6b8a] hover:text-[#00e5ff] transition-colors duration-300" aria-label="TikTok">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0.54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z" />
 </svg>
 </motion.a>
 </div>
 </div>

 <div className="mt-8 pt-6 border-t border-[#0e0e1a] flex flex-col md:flex-row items-center justify-between gap-2">
 <p className="text-[#6b6b8a] text-xs">
 © {new Date().getFullYear()} Babbal Khehra. All rights reserved.
 </p>
 <p className="text-[#6b6b8a] text-xs font-mono">
 Human Connection · Est. 2025
 </p>
 </div>
 </div>
 </footer>
 );
}
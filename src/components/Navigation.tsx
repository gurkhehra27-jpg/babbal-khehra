"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
 { href: "/", label: "Home" },
 { href: "/vault", label: "The Vault" },
 { href: "/lab", label: "The Lab" },
 { href: "/blog", label: "Blog" },
 { href: "/about", label: "About" },
];

export default function Navigation() {
 const pathname = usePathname();
 const [scrolled, setScrolled] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 20);
 window.addEventListener("scroll", onScroll);
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <>
 <motion.nav
 initial={{ y: -80, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.7, ease: "easeOut" }}
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
 scrolled
 ? "bg-[#07131b]/88 backdrop-blur-md border-b border-[#67f0ff]/15 shadow-[0_10px_30px_rgba(0,0,0,0.18)]" : "bg-transparent"
 }`}
 >
 <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
 {/* Logo */}
 <Link href="/" className="group flex flex-col leading-none">
 <span className="text-[#67f0ff] text-xs tracking-[0.3em] uppercase font-mono opacity-80 group-hover:opacity-100 transition-opacity">
 Babbal
 </span>
 <span className="text-white text-lg font-semibold tracking-widest uppercase">
 Khehra
 </span>
 </Link>

 {/* Desktop links */}
 <div className="hidden md:flex items-center gap-10">
 {links.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className={`relative text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
 pathname === link.href
 ? "text-[#67f0ff]" : "text-[#9aa8ba] hover:text-white"
 }`}
 >
 {link.label}
 {pathname === link.href && (
 <motion.span
 layoutId="nav-underline"
 className="absolute -bottom-1 left-0 right-0 h-px bg-[#67f0ff]"
 style={{ boxShadow: "0 0 8px rgba(103, 240, 255, 0.7)" }}
 />
 )}
 </Link>
 ))}
 </div>

 {/* Mobile hamburger */}
 <button
 className="md:hidden flex flex-col gap-1.5 p-2"
 onClick={() => setMenuOpen(!menuOpen)}
 aria-label="Toggle menu"
 >
 <motion.span
 animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
 className="block w-6 h-px bg-[#67f0ff]"
 />
 <motion.span
 animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
 className="block w-6 h-px bg-[#67f0ff]"
 />
 <motion.span
 animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
 className="block w-6 h-px bg-[#67f0ff]"
 />
 </button>
 </div>
 </motion.nav>

 {/* Mobile menu */}
 <AnimatePresence>
 {menuOpen && (
 <motion.div
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.3 }}
 className="fixed inset-0 z-40 bg-[#07131b]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
 >
 {links.map((link, i) => (
 <motion.div
 key={link.href}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: i * 0.08 }}
 >
 <Link
 href={link.href}
 onClick={() => setMenuOpen(false)}
 className={`text-3xl font-light tracking-[0.3em] uppercase transition-colors ${
 pathname === link.href ? "text-[#67f0ff] glow-cyan" : "text-white"
 }`}
 >
 {link.label}
 </Link>
 </motion.div>
 ))}
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
}

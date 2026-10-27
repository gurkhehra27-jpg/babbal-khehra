"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { posts } from "@/data/posts";
import { blueprintQuotes } from "@/data/quotes";
import { books } from "@/data/books";

// -----------------------------------------------------------------------------
// BABBAL TV - an always-on, full-screen loop of essays, quotes, and books.
// Open /tv on a TV browser, or cast the tab. Remote: left/right skip, OK pauses.
// New posts, quotes, and books show up here automatically from src/data.
// -----------------------------------------------------------------------------

type PostScene = { kind: "post"; id: string; title: string; excerpt: string; category: string; meta: string; image: string };
type QuoteScene = { kind: "quote"; id: string; text: string; context: string };
type BookScene = { kind: "book"; id: string; title: string; subtitle: string; description: string; genre: string; image: string };
type Scene = PostScene | QuoteScene | BookScene;

const DURATION: Record<Scene["kind"], number> = { post: 16000, quote: 12000, book: 15000 };
const HUD_TIMEOUT = 4000;
const BOOK_SIZES = "(min-width: 768px) 30vw, 60vw";
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

function buildScenes(): Scene[] {
 const postScenes: PostScene[] = posts
 .filter((p) => p.coverImage)
 .map((p) => ({
 kind: "post",
 id: p.slug,
 title: p.title,
 excerpt: p.excerpt,
 category: p.category,
 meta: `${p.date} · ${p.readTime}`,
 image: p.coverImage as string,
 }));

 const quoteScenes: QuoteScene[] = blueprintQuotes.map((q, i) => ({
 kind: "quote",
 id: `quote-${i}`,
 text: q.text,
 context: q.context,
 }));

 const bookScenes: BookScene[] = books
 .filter((b) => b.coverImage)
 .map((b) => ({
 kind: "book",
 id: `book-${b.id}`,
 title: b.title,
 subtitle: b.subtitle,
 description: b.description,
 genre: `${b.genre} · ${b.year}`,
 image: b.coverImage as string,
 }));

 // A quote after every second essay, a book after every fifth.
 const scenes: Scene[] = [];
 postScenes.forEach((post, i) => {
 scenes.push(post);
 if (i % 2 === 1 && quoteScenes.length) scenes.push(quoteScenes[Math.floor(i / 2) % quoteScenes.length]);
 if (i % 5 === 4 && bookScenes.length) scenes.push(bookScenes[Math.floor(i / 5) % bookScenes.length]);
 });
 return scenes.length ? scenes : [...quoteScenes, ...bookScenes];
}

const SCENES = buildScenes();

const subscribeNoop = () => () => {};

function toggleFullscreen() {
 if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
 else document.documentElement.requestFullscreen?.().catch(() => {});
}

export default function TvPage() {
 const isClient = useSyncExternalStore(subscribeNoop, () => true, () => false);
 const reduceMotion = !!useReducedMotion();
 const [index, setIndex] = useState(0);
 const [paused, setPaused] = useState(false);
 const [hudVisible, setHudVisible] = useState(true);
 const [clock, setClock] = useState<{ time: string; date: string } | null>(null);

 const elapsed = useRef(0);
 const barRef = useRef<HTMLDivElement>(null);
 const hudTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
 const pausedRef = useRef(paused);
 const indexRef = useRef(index);

 useEffect(() => {
 pausedRef.current = paused;
 }, [paused]);

 useEffect(() => {
 indexRef.current = index;
 }, [index]);

 const go = useCallback((delta: number) => {
 elapsed.current = 0;
 setIndex((i) => (i + delta + SCENES.length) % SCENES.length);
 }, []);

 const showHud = useCallback(() => {
 setHudVisible(true);
 clearTimeout(hudTimer.current);
 hudTimer.current = setTimeout(() => setHudVisible(false), HUD_TIMEOUT);
 }, []);

 // Hide the controls hint a few seconds after opening.
 useEffect(() => {
 hudTimer.current = setTimeout(() => setHudVisible(false), HUD_TIMEOUT);
 return () => clearTimeout(hudTimer.current);
 }, []);

 // Playback clock: advances the progress bar and moves to the next scene.
 useEffect(() => {
 if (!SCENES.length) return;
 let raf = 0;
 let last = performance.now();
 const tick = (now: number) => {
 const dt = Math.min(now - last, 250);
 last = now;
 if (!pausedRef.current) {
 const duration = DURATION[SCENES[indexRef.current].kind];
 elapsed.current += dt;
 if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(1, elapsed.current / duration)})`;
 if (elapsed.current >= duration) go(1);
 }
 raf = requestAnimationFrame(tick);
 };
 raf = requestAnimationFrame(tick);
 return () => cancelAnimationFrame(raf);
 }, [go]);

 // Wall clock in the corner.
 useEffect(() => {
 const timeFmt = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });
 const dateFmt = new Intl.DateTimeFormat(undefined, { weekday: "long", day: "numeric", month: "long" });
 const update = () => {
 const now = new Date();
 setClock({ time: timeFmt.format(now), date: dateFmt.format(now) });
 };
 const first = setTimeout(update, 0);
 const id = setInterval(update, 1000);
 return () => {
 clearTimeout(first);
 clearInterval(id);
 };
 }, []);

 // TV remote and keyboard.
 useEffect(() => {
 const onKey = (e: KeyboardEvent) => {
 showHud();
 switch (e.key) {
 case "ArrowRight":
 case "MediaTrackNext":
 case "MediaFastForward":
 e.preventDefault();
 go(1);
 break;
 case "ArrowLeft":
 case "MediaTrackPrevious":
 case "MediaRewind":
 e.preventDefault();
 go(-1);
 break;
 case "Enter":
 case " ":
 case "MediaPlayPause":
 e.preventDefault();
 setPaused((p) => !p);
 break;
 case "MediaPlay":
 setPaused(false);
 break;
 case "MediaPause":
 setPaused(true);
 break;
 case "f":
 case "F":
 e.preventDefault();
 toggleFullscreen();
 break;
 }
 };
 window.addEventListener("keydown", onKey);
 return () => window.removeEventListener("keydown", onKey);
 }, [go, showHud]);

 // Lock page scroll and keep the screen awake while TV mode is open.
 useEffect(() => {
 const root = document.documentElement;
 const prevOverflow = root.style.overflow;
 root.style.overflow = "hidden";

 let lock: WakeLockSentinel | null = null;
 let cancelled = false;
 const requestLock = async () => {
 if (!("wakeLock" in navigator) || document.visibilityState !== "visible") return;
 try {
 lock = await navigator.wakeLock.request("screen");
 if (cancelled) lock.release().catch(() => {});
 } catch {
 // Not allowed or not supported; the TV's own sleep settings apply.
 }
 };
 const onVisibility = () => {
 if (document.visibilityState === "visible") requestLock();
 };
 requestLock();
 document.addEventListener("visibilitychange", onVisibility);

 return () => {
 cancelled = true;
 root.style.overflow = prevOverflow;
 document.removeEventListener("visibilitychange", onVisibility);
 lock?.release().catch(() => {});
 };
 }, []);

 const onClick = (e: React.MouseEvent) => {
 const x = e.clientX / window.innerWidth;
 if (x < 0.25) go(-1);
 else if (x > 0.75) go(1);
 else setPaused((p) => !p);
 };

 if (!isClient || !SCENES.length) return null;

 const scene = SCENES[index];
 const next = SCENES[(index + 1) % SCENES.length];

 return createPortal(
 <div
 role="region"
 aria-roledescription="slideshow"
 aria-label="Babbal TV"
 onMouseMove={showHud}
 onClick={onClick}
 onDoubleClick={toggleFullscreen}
 className={`fixed inset-0 z-[100] overflow-hidden bg-[#061018] text-[#e8e8f0] select-none ${hudVisible ? "" : "cursor-none"}`}
 >
 <AnimatePresence>
 <motion.div
 key={`${scene.id}-${index}`}
 className="absolute inset-0"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 1.2, ease: "easeInOut" }}
 >
 {scene.kind === "post" && <PostSlide scene={scene} zoomIn={index % 2 === 0} reduceMotion={reduceMotion} />}
 {scene.kind === "quote" && <QuoteSlide scene={scene} reduceMotion={reduceMotion} />}
 {scene.kind === "book" && <BookSlide scene={scene} />}
 </motion.div>
 </AnimatePresence>

 {/* Warm the next image so the crossfade never shows an empty frame. */}
 {next.kind !== "quote" && (
 <div className="absolute inset-0 opacity-0 pointer-events-none" aria-hidden="true">
 <Image src={next.image} alt="" fill sizes={next.kind === "book" ? BOOK_SIZES : "100vw"} />
 </div>
 )}

 {/* HUD */}
 <div className="pointer-events-none absolute inset-0">
 <div className="absolute top-0 inset-x-0 flex items-start justify-between px-[4vw] pt-[4vh]">
 <Link
 href="/"
 tabIndex={-1}
 onClick={(e) => e.stopPropagation()}
 className="pointer-events-auto font-mono uppercase tracking-[0.4em] text-white/70 text-[clamp(10px,0.95vw,17px)]"
 >
 Babbal Khehra <span className="text-[#00e5ff]">TV</span>
 </Link>
 {clock && (
 <div className="text-right">
 <p className="text-white/90 font-light tabular-nums leading-none text-[clamp(22px,2.6vw,52px)]">{clock.time}</p>
 <p className="mt-[0.8vh] font-mono uppercase tracking-[0.25em] text-white/50 text-[clamp(9px,0.8vw,15px)]">{clock.date}</p>
 </div>
 )}
 </div>

 <AnimatePresence>
 {paused && (
 <motion.div
 key="paused"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="absolute top-[4vh] inset-x-0 flex justify-center"
 >
 <p className="font-mono uppercase tracking-[0.4em] text-[#00e5ff] bg-black/50 border border-[#00e5ff]/30 rounded-full px-5 py-2 text-[clamp(10px,0.9vw,16px)]">
 Paused
 </p>
 </motion.div>
 )}
 </AnimatePresence>

 <AnimatePresence>
 {hudVisible && (
 <motion.div
 key="hint"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="absolute bottom-[4.5vh] inset-x-0 flex justify-center px-4"
 >
 <p className="font-mono uppercase tracking-[0.25em] text-white/60 bg-black/40 border border-white/10 rounded-full px-5 py-2 text-center text-[clamp(9px,0.85vw,15px)]">
 {String(index + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")}
 <span className="md:hidden"> · Tap sides to skip</span>
 <span className="hidden md:inline"> · ← → Skip · OK Pause · F Full screen</span>
 </p>
 </motion.div>
 )}
 </AnimatePresence>

 <div className="absolute bottom-0 inset-x-0 h-[3px] bg-white/5">
 <div ref={barRef} className="h-full origin-left bg-[#00e5ff]/60" style={{ transform: "scaleX(0)" }} />
 </div>
 </div>
 </div>,
 document.body
 );
}

function PostSlide({ scene, zoomIn, reduceMotion }: { scene: PostScene; zoomIn: boolean; reduceMotion: boolean }) {
 return (
 <>
 <motion.div
 className="absolute inset-0"
 initial={reduceMotion ? false : { scale: zoomIn ? 1 : 1.1, x: zoomIn ? "0%" : "-1.5%" }}
 animate={reduceMotion ? undefined : { scale: zoomIn ? 1.1 : 1, x: zoomIn ? "-1.5%" : "0%" }}
 transition={{ duration: DURATION.post / 1000 + 2, ease: "linear" }}
 >
 <Image src={scene.image} alt="" fill sizes="100vw" fetchPriority="high" className="object-cover" />
 </motion.div>
 <div className="absolute inset-0 bg-gradient-to-t from-[#03080c] via-[#03080c]/70 to-transparent" />
 <div className="absolute inset-0 bg-gradient-to-r from-[#03080c]/85 via-[#03080c]/30 to-transparent" />

 <div className="absolute inset-x-0 bottom-0 px-[6vw] pb-[11vh]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6, duration: 1, ease: EASE_OUT }}
 className="max-w-[min(1100px,84vw)]"
 >
 <p className="font-mono uppercase text-[#00e5ff]/80 tracking-[0.4em] mb-[2vh] text-[clamp(11px,1vw,18px)]">
 {scene.category} · Essay
 </p>
 <h2 className="text-white font-light tracking-tight leading-[1.05] mb-[2.5vh] text-[clamp(30px,4.4vw,88px)]">{scene.title}</h2>
 <p className="text-[#c9d6de] font-light leading-relaxed max-w-[min(900px,76vw)] mb-[3vh] text-[clamp(15px,1.6vw,30px)]">
 {scene.excerpt}
 </p>
 <p className="font-mono uppercase text-[#8aa0ad] tracking-[0.2em] text-[clamp(10px,0.9vw,16px)]">
 {scene.meta} · babbalkhehra.com/blog
 </p>
 </motion.div>
 </div>
 </>
 );
}

function QuoteSlide({ scene, reduceMotion }: { scene: QuoteScene; reduceMotion: boolean }) {
 return (
 <div className="absolute inset-0 flex items-center justify-center px-[8vw]">
 <motion.div
 aria-hidden="true"
 className="absolute -left-[25vw] -bottom-[40vh] w-[90vw] h-[90vw] rounded-full bg-[radial-gradient(circle,rgba(0,218,242,0.16),transparent_62%)]"
 animate={reduceMotion ? undefined : { x: ["0vw", "8vw", "0vw"], y: ["0vh", "-6vh", "0vh"] }}
 transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
 />
 <motion.div
 aria-hidden="true"
 className="absolute -right-[20vw] -top-[35vh] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(92,196,178,0.13),transparent_62%)]"
 animate={reduceMotion ? undefined : { x: ["0vw", "-6vw", "0vw"], y: ["0vh", "5vh", "0vh"] }}
 transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
 />

 <motion.figure
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.5, duration: 1.4, ease: EASE_OUT }}
 className="relative max-w-[min(1300px,84vw)] text-center"
 >
 <div aria-hidden="true" className="font-serif text-[#00e5ff]/20 leading-none -mb-[2vh] text-[clamp(60px,9vw,180px)]">
 &ldquo;
 </div>
 <blockquote className="text-white font-light tracking-tight leading-[1.18] text-[clamp(26px,4vw,80px)]">{scene.text}</blockquote>
 <figcaption className="mt-[5vh] font-mono uppercase text-[#00e5ff]/60 tracking-[0.35em] text-[clamp(10px,1vw,18px)]">
 — {scene.context}
 </figcaption>
 </motion.figure>
 </div>
 );
}

function BookSlide({ scene }: { scene: BookScene }) {
 return (
 <div className="absolute inset-0">
 <div className="absolute inset-0 opacity-25 scale-110 blur-2xl" aria-hidden="true">
 <Image src={scene.image} alt="" fill sizes={BOOK_SIZES} className="object-cover" />
 </div>
 <div className="absolute inset-0 bg-[#061018]/70" />

 <div className="relative h-full flex flex-col md:flex-row items-center justify-center gap-[5vh] md:gap-[6vw] px-[8vw]">
 <motion.div
 initial={{ opacity: 0, x: -30, rotate: -2 }}
 animate={{ opacity: 1, x: 0, rotate: 0 }}
 transition={{ delay: 0.4, duration: 1.2, ease: EASE_OUT }}
 className="relative shrink-0 w-[44vw] md:w-[min(26vw,46vh)] aspect-[2/3] shadow-[0_0_80px_rgba(0,229,255,0.18)]"
 >
 <Image src={scene.image} alt={`${scene.title} book cover`} fill sizes={BOOK_SIZES} className="object-cover" />
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8, duration: 1, ease: EASE_OUT }}
 className="text-center md:text-left max-w-full md:max-w-[min(760px,46vw)]"
 >
 <p className="font-mono uppercase text-[#00e5ff]/80 tracking-[0.4em] mb-[2vh] text-[clamp(11px,1vw,18px)]">
 From the Vault · {scene.genre}
 </p>
 <h2 className="text-white font-light tracking-tight leading-[1.05] text-[clamp(32px,4.8vw,96px)]">{scene.title}</h2>
 <p className="text-[#9fe9f2] font-light mt-[1.5vh] mb-[3vh] text-[clamp(16px,1.8vw,34px)]">{scene.subtitle}</p>
 <p className="hidden md:block text-[#c9d6de] font-light leading-relaxed mb-[3vh] text-[clamp(14px,1.4vw,26px)]">
 {scene.description}
 </p>
 <p className="font-mono uppercase text-[#8aa0ad] tracking-[0.2em] text-[clamp(10px,0.9vw,16px)]">
 Available on Amazon · babbalkhehra.com/vault
 </p>
 </motion.div>
 </div>
 </div>
 );
}

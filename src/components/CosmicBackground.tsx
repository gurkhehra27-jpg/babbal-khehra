"use client";

import { useEffect, useRef } from "react";

export default function CosmicBackground() {
 const canvasRef = useRef<HTMLCanvasElement>(null);

 useEffect(() => {
 const canvas = canvasRef.current;
 if (!canvas) return;
 const ctx = canvas.getContext("2d");
 if (!ctx) return;

 let animFrame: number;
 let w = window.innerWidth;
 let h = window.innerHeight;

 const resize = () => {
 w = window.innerWidth;
 h = window.innerHeight;
 canvas.width = w;
 canvas.height = h;
 };
 resize();
 window.addEventListener("resize", resize);

 // ── Stars — sparse, fine, restrained ──
 // 180 stars max. Tiny (0.2-1.1px). Dim (skewed toward very faint).
 // 15% tinted cyan, 85% cold blue-white. Very slow twinkle.
 const STAR_COUNT = 180;
 const stars = Array.from({ length: STAR_COUNT }, () => ({
 x: Math.random() * w,
 y: Math.random() * h,
 r: Math.random() * 0.9 + 0.2,
 // Power distribution: most stars very dim, a few slightly brighter
 baseOpacity: Math.pow(Math.random(), 2.2) * 0.38 + 0.04,
 twinkleSpeed: Math.random() * 0.005 + 0.0015,
 twinkleOffset: Math.random() * Math.PI * 2,
 isCyan: Math.random() < 0.14,
 }));

 // ── Atmospheric glow pools — bleed in from screen edges ──
 // Positioned off-screen so glow "leaks" into the frame from corners/edges.
 // Very low alpha. Breathe at different phases (120° offset = 2.094 rad).
 // rgb strings, base alpha, radius relative to viewport.
 const buildGlows = () => [
 {
 // Primary: bottom-left corner, warm cyan
 x: w * -0.08,
 y: h * 1.1,
 r: Math.max(w, h) * 1.05,
 rgb: "0,218,242",
 baseAlpha: 0.052,
 phase: 0,
 },
 {
 // Secondary: top-right corner, cooler teal
 x: w * 1.08,
 y: h * -0.06,
 r: Math.max(w, h) * 0.88,
 rgb: "0,190,212",
 baseAlpha: 0.038,
 phase: 2.094,
 },
 {
 // Tertiary: bottom-center, deep undertone
 x: w * 0.5,
 y: h * 1.15,
 r: Math.max(w, h) * 1.2,
 rgb: "0,148,195",
 baseAlpha: 0.026,
 phase: 4.189,
 },
 ];

 let glows = buildGlows();

 // Rebuild glow positions on resize so they stay correctly edge-anchored
 const onResize = () => {
 resize();
 glows = buildGlows();
 };
 window.removeEventListener("resize", resize);
 window.addEventListener("resize", onResize);

 let t = 0;

 const draw = () => {
 // Crisp full-black base — no alpha accumulation, no trails
 ctx.fillStyle = "#000000";
 ctx.fillRect(0, 0, w, h);

 // ── Atmospheric glow pools ──
 glows.forEach((g) => {
 // Breathe: 0.72–1.0 amplitude, very slow (full cycle ≈ 4+ minutes)
 const breathe = 0.72 + 0.28 * Math.sin(t * 0.00032 + g.phase);
 const alpha = g.baseAlpha * breathe;

 const gr = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
 gr.addColorStop(0, `rgba(${g.rgb}, ${alpha})`);
 gr.addColorStop(0.42, `rgba(${g.rgb}, ${(alpha * 0.32).toFixed(4)})`);
 gr.addColorStop(1, `rgba(${g.rgb}, 0)`);

 ctx.fillStyle = gr;
 ctx.fillRect(0, 0, w, h);
 });

 // ── Stars ──
 stars.forEach((star) => {
 const tw = 0.84 + 0.16 * Math.sin(t * star.twinkleSpeed + star.twinkleOffset);
 ctx.globalAlpha = star.baseOpacity * tw;
 // Slightly desaturated tones — more editorial, less "space game"
 ctx.fillStyle = star.isCyan ? "#a2e6f0" : "#d2e4ec";
 ctx.beginPath();
 ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
 ctx.fill();
 });

 ctx.globalAlpha = 1;
 t++;
 animFrame = requestAnimationFrame(draw);
 };

 draw();

 return () => {
 cancelAnimationFrame(animFrame);
 window.removeEventListener("resize", onResize);
 };
 }, []);

 return (
 <>
 {/* Base atmosphere canvas */}
 <canvas
 ref={canvasRef}
 className="fixed inset-0 w-full h-full pointer-events-none z-0"
 aria-hidden="true"
 />

 {/* Film grain — adds texture, makes the background feel analogue and expensive */}
 <div
 className="fixed inset-0 pointer-events-none z-[2] bg-grain"
 aria-hidden="true"
 />

 {/* Vignette — darkens edges, focuses the eye, premium framing */}
 <div
 className="fixed inset-0 pointer-events-none z-[3] bg-vignette"
 aria-hidden="true"
 />
 </>
 );
}

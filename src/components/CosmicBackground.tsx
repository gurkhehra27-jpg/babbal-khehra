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

 const STAR_COUNT = 120;
 const stars = Array.from({ length: STAR_COUNT }, () => ({
 x: Math.random() * w,
 y: Math.random() * h,
 r: Math.random() * 0.85 + 0.2,
 baseOpacity: Math.pow(Math.random(), 2.4) * 0.3 + 0.035,
 twinkleSpeed: Math.random() * 0.004 + 0.001,
 twinkleOffset: Math.random() * Math.PI * 2,
 isCyan: Math.random() < 0.14,
 }));

 const buildGlows = () => [
 {
 x: w * -0.08,
 y: h * 1.08,
 r: Math.max(w, h) * 1.05,
 rgb: "0,218,242",
 baseAlpha: 0.078,
 phase: 0,
 },
 {
 x: w * 1.08,
 y: h * -0.06,
 r: Math.max(w, h) * 0.9,
 rgb: "92,196,178",
 baseAlpha: 0.058,
 phase: 2.094,
 },
 {
 x: w * 0.48,
 y: h * 1.16,
 r: Math.max(w, h) * 1.15,
 rgb: "33,126,165",
 baseAlpha: 0.042,
 phase: 4.189,
 },
 ];

 let glows = buildGlows();

 const onResize = () => {
 resize();
 glows = buildGlows();
 };
 window.addEventListener("resize", onResize);

 let t = 0;

 const draw = () => {
 ctx.fillStyle = "#061018";
 ctx.fillRect(0, 0, w, h);

 glows.forEach((g) => {
 const breathe = 0.76 + 0.24 * Math.sin(t * 0.00032 + g.phase);
 const alpha = g.baseAlpha * breathe;
 const gr = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
 gr.addColorStop(0, `rgba(${g.rgb}, ${alpha})`);
 gr.addColorStop(0.42, `rgba(${g.rgb}, ${(alpha * 0.34).toFixed(4)})`);
 gr.addColorStop(1, `rgba(${g.rgb}, 0)`);
 ctx.fillStyle = gr;
 ctx.fillRect(0, 0, w, h);
 });

 stars.forEach((star) => {
 const tw = 0.86 + 0.14 * Math.sin(t * star.twinkleSpeed + star.twinkleOffset);
 ctx.globalAlpha = star.baseOpacity * tw;
 ctx.fillStyle = star.isCyan ? "#b6f3ef" : "#e0edf0";
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
 <canvas
 ref={canvasRef}
 className="fixed inset-0 w-full h-full pointer-events-none z-0"
 aria-hidden="true"
 />

 <div
 className="fixed inset-0 pointer-events-none z-[2] bg-grain"
 aria-hidden="true"
 />

 <div
 className="fixed inset-0 pointer-events-none z-[3] bg-vignette"
 aria-hidden="true"
 />
 </>
 );
}

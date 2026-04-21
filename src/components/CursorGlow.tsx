"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
 const glowRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 // Skip on touch / coarse-pointer devices (tablets, phones)
 if (window.matchMedia("(pointer: coarse)").matches) return;

 const el = glowRef.current;
 if (!el) return;

 // Start centered, invisible — reveals smoothly on first mouse move
 let targetX = window.innerWidth / 2;
 let targetY = window.innerHeight / 2;
 let x = targetX;
 let y = targetY;
 let rafId: number;
 let hasMovedOnce = false;

 const onMouseMove = (e: MouseEvent) => {
 targetX = e.clientX;
 targetY = e.clientY;

 if (!hasMovedOnce) {
 hasMovedOnce = true;
 el.style.opacity = "1";
 }
 };

 const tick = () => {
 // Lerp — slow, lazy following for atmospheric feel
 x += (targetX - x) * 0.055;
 y += (targetY - y) * 0.055;

 // translate() keeps it on the compositor — no layout thrash
 el.style.transform = `translate(${x}px, ${y}px)`;

 rafId = requestAnimationFrame(tick);
 };

 // Hidden until first mouse move to avoid visible jump on load
 el.style.opacity = "0";
 el.style.transition = "opacity 1s ease";

 window.addEventListener("mousemove", onMouseMove, { passive: true });
 tick();

 return () => {
 window.removeEventListener("mousemove", onMouseMove);
 cancelAnimationFrame(rafId);
 };
 }, []);

 return (
 <div
 ref={glowRef}
 aria-hidden="true"
 className="fixed pointer-events-none z-[1]"
 style={{
 // Offset by half so translate(cursorX, cursorY) centers the glow on the cursor
 top: "-375px",
 left: "-375px",
 width: "750px",
 height: "750px",
 borderRadius: "50%",
 background:
 "radial-gradient(circle, rgba(0,218,242,0.055) 0%, rgba(0,195,220,0.025) 40%, transparent 70%)",
 willChange: "transform",
 }}
 />
 );
}

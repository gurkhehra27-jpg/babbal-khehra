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

    // ── Stars ──
    const STAR_COUNT = 400;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.012 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
      cyan: Math.random() < 0.25,
    }));

    // ── Nebula orbs ──
    const orbs = [
      { x: w * 0.15, y: h * 0.12, r: 320, color: "rgba(0,229,255,0.07)", speed: 0.00008 },
      { x: w * 0.82, y: h * 0.28, r: 260, color: "rgba(0,184,204,0.06)", speed: 0.00012 },
      { x: w * 0.5,  y: h * 0.55, r: 400, color: "rgba(0,229,255,0.05)", speed: 0.00006 },
      { x: w * 0.72, y: h * 0.75, r: 280, color: "rgba(0,100,180,0.07)", speed: 0.00010 },
      { x: w * 0.25, y: h * 0.85, r: 220, color: "rgba(0,229,255,0.06)", speed: 0.00009 },
    ];
    let orbAngles = orbs.map(() => Math.random() * Math.PI * 2);

    // ── Shooting stars ──
    type Shooter = {
      x: number; y: number; len: number;
      speed: number; angle: number; opacity: number;
      life: number; maxLife: number; active: boolean;
    };
    const shooters: Shooter[] = Array.from({ length: 6 }, () => ({
      x: 0, y: 0, len: 0, speed: 0, angle: 0,
      opacity: 0, life: 0, maxLife: 0, active: false,
    }));

    const spawnShooter = (s: Shooter) => {
      s.x = Math.random() * w;
      s.y = Math.random() * h * 0.5;
      s.len = Math.random() * 120 + 60;
      s.speed = Math.random() * 6 + 4;
      s.angle = (Math.random() * 20 + 20) * (Math.PI / 180);
      s.opacity = 0;
      s.maxLife = Math.random() * 60 + 40;
      s.life = 0;
      s.active = true;
    };

    // Stagger initial spawns
    shooters.forEach((s, i) => {
      setTimeout(() => spawnShooter(s), i * 3000 + Math.random() * 4000);
    });

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // ── Nebula orbs ──
      orbs.forEach((orb, i) => {
        orbAngles[i] += orb.speed;
        const ox = orb.x + Math.sin(orbAngles[i]) * 60;
        const oy = orb.y + Math.cos(orbAngles[i] * 0.7) * 40;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Stars ──
      stars.forEach((star) => {
        const twinkle = Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset);
        const alpha = star.opacity * (0.7 + 0.3 * twinkle);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = star.cyan
          ? `rgba(0,229,255,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      // ── Shooting stars ──
      shooters.forEach((s) => {
        if (!s.active) return;
        s.life++;
        const progress = s.life / s.maxLife;
        s.opacity = progress < 0.2
          ? progress / 0.2
          : progress > 0.7
          ? 1 - (progress - 0.7) / 0.3
          : 1;

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.6, `rgba(0,229,255,${s.opacity * 0.6})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Glow dot at head
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.fill();

        if (s.life >= s.maxLife) {
          s.active = false;
          setTimeout(() => spawnShooter(s), Math.random() * 6000 + 2000);
        }
      });

      t++;
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}

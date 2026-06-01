"use client";

import { useEffect, useRef, useState } from "react";
import {
  HeroBadge,
  HeroCtas,
  HeroStats,
  HeroSubtitle,
  ScrollCue,
  HERO_SHELL,
} from "@/components/hero-parts";

// Home hero — design 3 (typewriter) + design 5 (constellation canvas), combined.
const PHRASES = [
  "shaping tomorrow",
  "building the future",
  "redefining Web3",
  "changing the game",
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function Hero() {
  const reduced = usePrefersReducedMotion();

  /* ── Constellation background (design 5) + cursor interaction ── */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(2, window.devicePixelRatio || 1);
    let w = 0;
    let h = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const COUNT = 64;
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }));

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    const LINK = 130;
    const MOUSE_LINK = 170;

    const draw = (move: boolean) => {
      ctx.clearRect(0, 0, w, h);
      if (move) {
        for (const p of pts) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        }
      }
      // particle-to-particle links
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const ax = pts[i].x * w;
          const ay = pts[i].y * h;
          const bx = pts[j].x * w;
          const by = pts[j].y * h;
          const d = Math.hypot(ax - bx, ay - by);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(200,149,108,${(1 - d / LINK) * 0.26})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }
      // cursor links + dots
      for (const p of pts) {
        const px = p.x * w;
        const py = p.y * h;
        const dm = Math.hypot(px - mouse.x, py - mouse.y);
        if (dm < MOUSE_LINK) {
          ctx.strokeStyle = `rgba(228,180,142,${(1 - dm / MOUSE_LINK) * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(228,180,142,0.7)";
        ctx.beginPath();
        ctx.arc(px, py, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (reduced) {
      draw(false); // single static frame
    } else {
      const tick = () => {
        draw(true);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [reduced]);

  /* ── Typewriter headline (design 3) ── */
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(PHRASES[0]);
      return;
    }
    const full = PHRASES[idx];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === full) delay = 1700;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % PHRASES.length);
      } else {
        setText(full.substring(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx, reduced]);

  return (
    <header className={HERO_SHELL}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 760px 520px at 50% 42%, rgba(12,10,9,0.55), transparent 72%), radial-gradient(ellipse 900px 600px at 50% 30%, rgba(200,149,108,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[920px]">
        <div className="mb-8">
          <HeroBadge />
        </div>
        <h1 className="mb-7 min-h-[2.2em] font-serif text-[clamp(40px,6.5vw,76px)] font-normal leading-[1.08] tracking-[-0.02em]">
          Meaningful conversations with the builders{" "}
          <span className="italic text-espresso">
            {text}
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[2px] animate-pulse bg-espresso align-middle" />
          </span>
        </h1>
        <HeroSubtitle className="mb-10" />
        <HeroCtas className="mb-16" />
        <HeroStats />
      </div>
      <ScrollCue />
    </header>
  );
}

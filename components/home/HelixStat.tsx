"use client";

import { useEffect, useRef, useState } from "react";

// Why Us lead card: a slowly moving DNA helix (fills the empty space on large screens)
// and the "22 years in genomics" number, which counts up from 0 when it scrolls into view.
// The helix is pure SVG + CSS ("helix" in app/globals.css). With "reduce motion" on,
// the helix stays still and the number simply shows 22.

const YEARS = 22;
const PERIOD = 160; // height of one full twist
const AMP = 62; // how wide the helix is
const CX = 100; // centre line
const RUNG_GAP = 20;

// One strand, drawn from -PERIOD to 4 * PERIOD so it can scroll up by one period seamlessly
function strand(phase: number) {
  let d = "";
  for (let y = -PERIOD; y <= PERIOD * 4; y += 4) {
    const x = CX + AMP * Math.sin((2 * Math.PI * y) / PERIOD + phase);
    d += `${y === -PERIOD ? "M" : "L"}${x.toFixed(1)} ${y}`;
  }
  return d;
}

// Numbers are rounded so the server and the browser produce exactly the same values
// (unrounded Math.sin results can differ in the last digit and cause a hydration warning).
const r2 = (n: number) => Math.round(n * 100) / 100;

const rungs = Array.from({ length: Math.round((PERIOD * 5) / RUNG_GAP) }, (_, i) => {
  const y = -PERIOD + i * RUNG_GAP + RUNG_GAP / 2;
  const a = (2 * Math.PI * y) / PERIOD;
  const depth = (Math.cos(a) + 1) / 2; // 1 = front, 0 = back
  return {
    y,
    x1: r2(CX + AMP * Math.sin(a)),
    x2: r2(CX - AMP * Math.sin(a)),
    line: r2(0.08 + depth * 0.12),
    front: r2(0.35 + depth * 0.65),
    back: r2(0.25 + (1 - depth) * 0.6),
  };
});

function Helix() {
  return (
    <div data-loop className="helix pointer-events-none relative -mx-8 min-h-56 flex-1 overflow-hidden" aria-hidden>
      <svg
        viewBox={`0 0 200 ${PERIOD * 3}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      >
        <g className="helix-scroll">
          {rungs.map((r) => (
            <g key={r.y}>
              <line x1={r.x1} x2={r.x2} y1={r.y} y2={r.y} stroke="white" strokeOpacity={r.line} strokeWidth="1.5" />
              <circle cx={r.x1} cy={r.y} r="2.6" fill="#f2a93b" opacity={r.front} />
              <circle cx={r.x2} cy={r.y} r="2.6" fill="white" opacity={r.back} />
            </g>
          ))}
          <path d={strand(0)} fill="none" stroke="#f2a93b" strokeWidth="2" strokeOpacity="0.75" />
          <path d={strand(Math.PI)} fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.35" />
        </g>
      </svg>
    </div>
  );
}

function CountUp() {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(YEARS);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    let frame = 0;
    setValue(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1600);
          setValue(Math.round(YEARS * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span ref={ref} className="block font-display text-8xl leading-none font-semibold text-gold tabular-nums md:text-9xl">
      <span className="sr-only">22</span>
      <span aria-hidden>
        {value}
      </span>
    </span>
  );
}

export default function HelixStat() {
  return (
    <>
      <div className="hidden flex-1 flex-col lg:flex">
        <Helix />
      </div>
      <p className="relative mt-10 border-t border-white/15 pt-6 lg:mt-0">
        <CountUp />
        <span className="mt-3 block text-sm text-white/65">years in genomics</span>
      </p>
    </>
  );
}

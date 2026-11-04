"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { activePromo, isPromoRunning, promoFromPrice, buy2Rows } from "@/lib/promo";
import { getProduct } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

// Promo popup (text and prices in lib/promo.ts; styles under "Promo popup" in globals.css).
// - Opens a few seconds after the page loads, only while the promo is running.
// - Shows once per visit: after it is closed it stays closed while the visitor clicks around,
//   and shows again next time they open the site in a new tab or window (sessionStorage).
// - Close with ×, Esc, or a click outside. Not shown on the sample reports and legal pages.

const DELAY_MS = 2500;
const SKIP_PATHS = ["/sample-reports", "/terms", "/refund-policy", "/disclaimer"];
const PRODUCTS = [
  { id: "origene", tag: "For you" },
  { id: "littlegeneius", tag: "For your child" },
];

const storageKey = (id: string) => `mgrc-promo-closed:${id}`;

function Sparkle({ className, style }: { className: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" className={`promo-twinkle absolute ${className}`} style={style} aria-hidden>
      <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z" fill="#F3D99A" />
    </svg>
  );
}

function Helix({ className, style }: { className: string; style?: React.CSSProperties }) {
  const rungs = [40, 75, 110, 190, 225, 260, 340, 375, 410, 490, 525, 560];
  return (
    <svg viewBox="0 0 120 600" className={`promo-float pointer-events-none absolute ${className}`} style={style} aria-hidden>
      <g fill="none" stroke="#C9A55C" strokeWidth="2">
        <path d="M60 0 C120 50 120 100 60 150 S0 250 60 300 S120 400 60 450 S0 550 60 600" />
        <path d="M60 0 C0 50 0 100 60 150 S120 250 60 300 S0 400 60 450 S120 550 60 600" />
      </g>
      <g stroke="#C9A55C" strokeWidth="1.2" opacity="0.7">
        {rungs.map((y, i) => (
          <line key={y} x1={i % 3 === 1 ? 12 : 22} y1={y} x2={i % 3 === 1 ? 108 : 98} y2={y} />
        ))}
      </g>
    </svg>
  );
}

export default function PromoPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<Element | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    if (activePromo) {
      try {
        sessionStorage.setItem(storageKey(activePromo.id), "1");
      } catch {}
    }
    (lastFocus.current as HTMLElement | null)?.focus?.();
  }, []);

  // Decide whether to open (once per visit, after a short delay)
  useEffect(() => {
    if (!activePromo || !isPromoRunning()) return;
    if (SKIP_PATHS.some((p) => pathname.startsWith(p))) return;
    try {
      if (sessionStorage.getItem(storageKey(activePromo.id))) return;
    } catch {}
    const t = setTimeout(() => {
      lastFocus.current = document.activeElement;
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  // While open: Esc closes, page behind doesn't scroll, focus starts on the close button
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, close]);

  if (!open || !activePromo) return null;
  const p = activePromo;
  const titleWords = p.popup.title.split(" ");
  const lastWord = titleWords.pop();

  return (
    <div
      className="promo-backdrop fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/60 p-4"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className="promo-pop relative my-auto w-full max-w-[600px] overflow-hidden rounded-[22px] bg-[radial-gradient(120%_80%_at_50%_0%,#2e2618_0%,#171513_55%,#0e0d0c_100%)] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(201,165,92,0.18)] sm:p-3.5"
      >
        {/* Background decoration */}
        <div className="promo-glow pointer-events-none absolute top-[4%] left-1/2 -ml-[260px] h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(217,180,106,0.32)_0%,rgba(217,180,106,0.08)_45%,rgba(217,180,106,0)_70%)]" aria-hidden />
        <svg viewBox="0 0 760 760" className="promo-ring pointer-events-none absolute -top-10 -left-20 w-[760px] opacity-[0.18]" aria-hidden>
          <circle cx="380" cy="380" r="340" fill="none" stroke="#C9A55C" strokeWidth="1" strokeDasharray="2 10" />
          <circle cx="380" cy="380" r="300" fill="none" stroke="#C9A55C" strokeWidth="0.6" />
        </svg>
        <Helix className="top-5 -left-9 w-[70px] opacity-40 sm:top-10 sm:-left-11 sm:w-[120px]" style={{ ["--r" as string]: "14deg" }} />
        <Helix className="top-[45%] -right-9 w-[70px] opacity-40 sm:top-16 sm:-right-11 sm:w-[120px]" style={{ ["--r" as string]: "-14deg", animationDelay: "-3.5s" }} />
        <Sparkle className="top-9 left-10 w-3.5 sm:top-[70px] sm:left-[92px] sm:w-[18px]" />
        <Sparkle className="top-24 left-[70px] w-2.5 sm:top-[130px] sm:left-[150px] sm:w-3" style={{ animationDelay: ".8s" }} />
        <Sparkle className="top-[70px] right-16 w-4 sm:top-24 sm:right-[110px] sm:w-5" style={{ animationDelay: "1.4s" }} />
        <Sparkle className="top-48 right-[70px] hidden w-3 sm:block" style={{ animationDelay: ".4s" }} />
        <Sparkle className="bottom-24 left-8 w-3 sm:bottom-[120px] sm:left-[70px] sm:w-3.5" style={{ animationDelay: "1.9s" }} />
        <Sparkle className="right-8 bottom-32 w-3 sm:right-[84px] sm:bottom-[150px] sm:w-4" style={{ animationDelay: "1.1s" }} />

        <div className="relative flex flex-col items-center gap-3 rounded-[14px] border border-[#C9A55C] px-4 pt-7 pb-5 text-center sm:gap-4 sm:px-10 sm:pt-9 sm:pb-7">
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close promotion"
            className="absolute top-2 right-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#3a3733] bg-[#1f1d1b] text-lg text-[#e9e4da] transition-colors hover:border-[#C9A55C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:top-3.5 sm:right-3.5"
          >
            <FiX aria-hidden />
          </button>

          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#C9A55C] uppercase sm:text-[13px]">{p.popup.eyebrow}</p>
          <div id="promo-title">
            <p className="font-display text-[40px] leading-none font-bold text-white sm:text-[54px]">
              {titleWords.join(" ")} <span className="promo-shine">{lastWord}</span>
            </p>
            <p className="font-display text-[26px] font-semibold tracking-wide text-[#f2ede4] sm:text-[34px]">{p.popup.subtitle}</p>
          </div>

          <div className="mt-1 grid w-full gap-3 text-left sm:grid-cols-2 sm:gap-4">
            {PRODUCTS.map(({ id, tag }, i) => {
              const product = getProduct(id);
              const from = promoFromPrice(id);
              const buy2 = buy2Rows(id)[0];
              if (!product || !from) return null;
              const normalFrom = `RM${Math.min(...product.packages.map((pkg) => Number(pkg.price.replace(/[^\d]/g, ""))))}`;
              return (
                <div
                  key={id}
                  className="promo-up flex flex-col gap-1.5 rounded-[14px] bg-white p-4 text-ink shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:p-[18px]"
                  style={{ animationDelay: `${350 + i * 150}ms` }}
                >
                  <span className="self-start rounded-md bg-[#C9A55C] px-2.5 py-1 text-[11px] font-bold tracking-wider text-ink uppercase">{tag}</span>
                  <p className="font-display text-[26px] leading-tight font-semibold">{product.name}</p>
                  {product.coverage && <p className="text-xs text-gray-600">{product.coverage}</p>}
                  <div className="mt-1 flex items-end justify-between gap-3">
                    <p className="flex flex-col">
                      <span className="text-[11px] font-semibold tracking-wide text-gray-600 uppercase">Single from</span>
                      <span className="text-2xl font-bold">{from}</span>
                      <s className="text-[13px] text-gray-600"><span className="sr-only">Was </span>{normalFrom}</s>
                    </p>
                    {buy2 && (
                      <p className="flex flex-col items-end">
                        <span className="text-[11px] font-semibold tracking-wide text-gray-600 uppercase">Buy 2 from</span>
                        <span className="text-2xl font-bold">{buy2.price}</span>
                        <s className="text-[13px] text-gray-600"><span className="sr-only">Was </span>{buy2.was}</s>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-1 font-display text-xl text-[#e9e4da] italic sm:text-[22px]">{p.popup.line}</p>

          <a
            href={whatsappLink(`Hi MGRC, I'd like to claim the ${p.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="promo-pulse inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-gold text-[17px] font-semibold text-ink hover:bg-[#e39a2a]"
          >
            <FaWhatsapp aria-hidden />
            Claim via WhatsApp
          </a>
          <Link href="/products/#pricing" onClick={close} className="p-1.5 text-sm text-[#e9e4da] underline underline-offset-4 hover:text-gold">
            See all promo prices
          </Link>
          <p className="text-[11px] tracking-[0.12em] text-[#b8b1a5] uppercase sm:text-[13px]">Offer ends {p.endLabel}</p>
        </div>
      </div>
    </div>
  );
}

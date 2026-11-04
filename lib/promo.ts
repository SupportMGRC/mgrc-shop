// ─────────────────────────────────────────────────────────────────────────────
// PROMOTIONS — the only file to edit for a promo.
//
// Normal prices stay in lib/products.ts. While a promo is running, the site shows:
//   • the promo bar at the top of every page
//   • the popup (once per visitor)
//   • slashed prices (normal price crossed out + promo price) for the packages listed below
//   • "Buy 2 (same report)" prices, if any
//
// It switches ON and OFF by itself at `start` and `end` (Malaysia time, +08:00), in the
// visitor's browser — no upload needed at midnight. Upload early and it waits for `start`.
// After it ends, the next build leaves it out of the site completely.
//
// New promo: change the values below (keep the same shape), then build and upload.
// No promo: set `export const promo: Promo | null = null;`
// ─────────────────────────────────────────────────────────────────────────────

import { getProduct, type Package } from "./products";

type Tier = Package["tier"];

export type Promo = {
  id: string; // change it for each new promo, so visitors who closed the last popup see the new one
  name: string; // e.g. "Grand Launch Promo"
  start: string; // "YYYY-MM-DDTHH:mm:ss+08:00"
  end: string; // the moment it stops, e.g. 1 Dec 00:00 = end of 30 Nov
  endLabel: string; // shown to customers, e.g. "30 November 2026"
  // Promo price per product id and package. Products / packages not listed keep their normal price.
  prices: Record<string, Partial<Record<Tier, string>>>;
  // "Buy 2" = two of the same report. The crossed-out price is 2 × the normal price.
  buy2: Record<string, Partial<Record<Tier, string>>>;
  bar: string; // text in the promo bar
  popup: {
    eyebrow: string;
    title: string; // last word is shown in shining gold
    subtitle: string;
    line: string; // short line under the product cards
  };
};

export const promo: Promo | null = {
  id: "grand-launch-2026",
  name: "Grand Launch Promo",
  start: "2026-11-01T00:00:00+08:00",
  end: "2026-12-01T00:00:00+08:00",
  endLabel: "30 November 2026",
  prices: {
    origene: { Essential: "RM1800", Premium: "RM2050" },
    littlegeneius: { Essential: "RM1500", Premium: "RM1600" },
  },
  buy2: {
    origene: { Essential: "RM2800", Premium: "RM3300" },
    littlegeneius: { Essential: "RM2400", Premium: "RM2600" },
  },
  bar: "ORIGENE® from RM1800 · LittleGENEius from RM1500 · Buy 2 special prices",
  popup: {
    eyebrow: "The MGRC Store is live",
    title: "Grand Launch",
    subtitle: "Special Promotion",
    line: "Your DNA has a story. Read it today.",
  },
};

// ── Helpers used by the components (no need to edit below) ─────────────────

const rm = (price: string) => Number(price.replace(/[^\d]/g, ""));

// The promo, if it hasn't ended by the time the site is built. (Whether it has
// *started* is checked in the visitor's browser, so an early upload works.)
export const activePromo: Promo | null = promo && Date.now() < Date.parse(promo.end) ? promo : null;

export function promoPrice(productId: string, tier: Tier): string | null {
  return activePromo?.prices[productId]?.[tier] ?? null;
}

export type Buy2Row = { tier: Tier; includes: string; price: string; was: string; save: string };

export function buy2Rows(productId: string): Buy2Row[] {
  const product = getProduct(productId);
  const prices = activePromo?.buy2[productId];
  if (!product || !prices) return [];
  return product.packages.flatMap((pkg) => {
    const price = prices[pkg.tier];
    if (!price) return [];
    const was = rm(pkg.price) * 2;
    return [{ tier: pkg.tier, includes: pkg.includes, price, was: `RM${was}`, save: `RM${was - rm(price)}` }];
  });
}

export function hasPromo(productId: string) {
  return !!activePromo && (!!activePromo.prices[productId] || !!activePromo.buy2[productId]);
}

// Lowest promo price for "From RM…"
export function promoFromPrice(productId: string): string | null {
  const prices = Object.values(activePromo?.prices[productId] ?? {}).filter(Boolean) as string[];
  return prices.length ? `RM${Math.min(...prices.map(rm))}` : null;
}

// Runs in <head> before the page shows: adds class "promo-on" to <html> while the promo is
// running, so promo prices show and normal ones hide with no flicker (see "Promo" in globals.css).
export const promoScript = activePromo
  ? `(function(){try{var n=Date.now();if(n>=${Date.parse(activePromo.start)}&&n<${Date.parse(activePromo.end)})document.documentElement.classList.add('promo-on')}catch(e){}})();`
  : "";

export function isPromoRunning() {
  if (!activePromo) return false;
  const now = Date.now();
  return now >= Date.parse(activePromo.start) && now < Date.parse(activePromo.end);
}

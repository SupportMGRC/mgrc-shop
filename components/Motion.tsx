"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Site-wide scroll animations (styles in app/globals.css, "Motion" section).
//
// - Every section on a page (except the first, which has its own entrance) fades up
//   as it scrolls into view. Lists marked data-stagger animate their items one by one.
// - Tick lists (data-ticks) draw their ticks, data-loop elements (helix, gold glow)
//   only animate while on screen, and images sharpen from a soft blur as they load.
//
// It only runs when <html> has the "motion" class, which the small script in
// app/layout.tsx adds unless the visitor has "reduce motion" turned on. Content is
// never hidden without it, so the site still works if JavaScript fails.

const STAGGER_MS = 90;
const MAX_STAGGER = 5;

function revealTargets(main: HTMLElement): HTMLElement[] {
  const targets = new Set<HTMLElement>();
  const sections = Array.from(main.querySelectorAll<HTMLElement>("section"));

  sections.forEach((section, i) => {
    if (i === 0 || section.closest("[data-no-reveal]")) return; // hero / page title has its own entrance
    const inner = section.firstElementChild as HTMLElement | null;
    if (!inner) return;
    for (const child of Array.from(inner.children) as HTMLElement[]) {
      if (child.matches("[data-stagger]")) continue; // its items animate instead
      if (child.querySelector("[data-stagger]")) {
        // Animate the wrapper's other children, and let the list stagger
        for (const sub of Array.from(child.children) as HTMLElement[]) {
          if (!sub.matches("[data-stagger]") && !sub.querySelector("[data-stagger]")) targets.add(sub);
        }
        continue;
      }
      targets.add(child);
    }
  });

  main.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => targets.add(el));
  main.querySelectorAll<HTMLElement>("[data-stagger]").forEach((list) => {
    for (const item of Array.from(list.children) as HTMLElement[]) {
      if (!item.hasAttribute("data-no-reveal")) {
        item.dataset.staggerItem = "";
        targets.add(item);
      }
    }
  });
  return Array.from(targets);
}

export default function Motion() {
  const pathname = usePathname();

  // Mark that the motion script is running. If the page took longer than 4 seconds to
  // start (e.g. first load in `npm run dev`), the layout script will have switched
  // animations off as a safety net — switch them back on now.
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) root.classList.add("motion");
    root.classList.add("motion-ready");
  }, []);

  // Reveal on scroll — re-scanned on every page change
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;
    const main = document.querySelector("main");
    if (!main) return;

    const targets = revealTargets(main);
    targets.forEach((el) => el.setAttribute("data-anim", ""));

    const reveal = new IntersectionObserver(
      (entries) => {
        const shown = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
        // Items that appear together animate one after another
        shown.forEach((el, i) => {
          el.style.setProperty("--d", `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`);
          el.classList.add("is-in");
          el.parentElement?.closest("[data-stagger]")?.classList.add("is-in");
          if (el.parentElement?.matches("[data-stagger]")) el.parentElement.classList.add("is-in");
          reveal.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    targets.forEach((el) => reveal.observe(el));

    // Tick lists draw when they come into view
    const ticks = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            ticks.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll("[data-ticks]").forEach((el) => ticks.observe(el));

    return () => {
      reveal.disconnect();
      ticks.disconnect();
    };
  }, [pathname]);

  // Looping animations (helix, gold glow) only play while on screen
  useEffect(() => {
    const loops = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle("is-playing", e.isIntersecting);
    });
    document.querySelectorAll("[data-loop]").forEach((el) => loops.observe(el));
    return () => loops.disconnect();
  }, [pathname]);

  // Blur-up: images that are still loading start soft and sharpen when ready
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return;
    const track = (img: HTMLImageElement) => {
      if (img.complete || img.dataset.blurDone !== undefined) return;
      img.dataset.blurDone = "";
      img.classList.add("img-loading");
      const done = () => img.classList.remove("img-loading");
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    };
    document.querySelectorAll("img").forEach(track);
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (n instanceof HTMLImageElement) track(n);
          else if (n instanceof HTMLElement) n.querySelectorAll("img").forEach(track);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return null;
}

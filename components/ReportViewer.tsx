"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiX, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { reportPageSrc, type SampleReport } from "@/lib/reports";

// View-only sample report viewer.
// Pages are images (no PDF is published). Right-click, long-press, dragging and
// Ctrl+S / Ctrl+P are blocked while it is open, and report pages never print.
// This stops casual saving; it cannot stop screenshots.

const block = (e: React.SyntheticEvent) => e.preventDefault();

export default function ReportViewer({
  report,
  langIndex,
  onLangChange,
  onClose,
}: {
  report: SampleReport;
  langIndex: number;
  onLangChange: (i: number) => void;
  onClose: () => void;
}) {
  const edition = report.editions[langIndex];
  const [page, setPage] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const [progress, setProgress] = useState(0); // 0–1, how far through the report
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll, focus the dialog, handle Esc and block save/print shortcuts
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add("report-viewer-open");
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      const key = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (key === "s" || key === "p")) e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("report-viewer-open");
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  // Track which page is on screen for the page counter
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    root.scrollTop = 0;
    setProgress(0);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setPage(Number((entry.target as HTMLElement).dataset.page));
        }
      },
      { root, rootMargin: "-45% 0px -45% 0px" }
    );
    root.querySelectorAll("[data-page]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [langIndex, edition.pages]);

  const changeLang = useCallback(
    (i: number) => {
      setPage(1);
      onLangChange(i);
    },
    [onLangChange]
  );

  const pages = Array.from({ length: edition.pages }, (_, i) => i + 1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${report.name} sample report`}
      className="report-viewer fixed inset-0 z-[60] flex flex-col bg-night-deep text-white"
      onContextMenu={block}
      onDragStart={block}
    >
      {/* Top bar */}
      <div className="relative flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3">
        {/* Reading progress: gold line that fills as you scroll through the report */}
        <span
          className="absolute -bottom-px left-0 h-[3px] bg-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-xl font-semibold sm:text-2xl">{report.name}</p>
          <p className="text-xs text-white/60" aria-live="polite">
            Sample report · page {page} of {edition.pages}
          </p>
        </div>

        {report.editions.length > 1 && (
          <div className="flex rounded-full bg-white/10 p-1 text-sm" role="group" aria-label="Report language">
            {report.editions.map((ed, i) => (
              <button
                key={ed.lang}
                type="button"
                onClick={() => changeLang(i)}
                aria-pressed={i === langIndex}
                className={`rounded-full px-3 py-1.5 font-semibold transition-colors ${
                  i === langIndex ? "bg-gold text-ink" : "text-white/75 hover:text-white"
                }`}
              >
                {ed.label}
              </button>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setZoomed(!zoomed)}
          className="hidden rounded-full p-2.5 text-xl text-white/75 hover:bg-white/10 hover:text-white md:block"
          aria-label={zoomed ? "Zoom out" : "Zoom in"}
        >
          {zoomed ? <FiZoomOut /> : <FiZoomIn />}
        </button>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="rounded-full p-2.5 text-2xl text-white/75 hover:bg-white/10 hover:text-white"
          aria-label="Close sample report"
        >
          <FiX />
        </button>
      </div>

      {/* Pages */}
      <div
        ref={scrollRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          const max = el.scrollHeight - el.clientHeight;
          setProgress(max > 0 ? el.scrollTop / max : 0);
        }}
        className="flex-1 overflow-y-auto overscroll-contain px-3 py-6 sm:px-6"
      >
        <div className={`mx-auto space-y-4 transition-[max-width] ${zoomed ? "max-w-5xl" : "max-w-3xl"}`}>
          {pages.map((n) => (
            <div
              key={`${edition.lang}-${n}`}
              data-page={n}
              className="report-page report-page-in relative select-none overflow-hidden rounded-sm bg-white shadow-2xl"
            >
              <Image
                src={reportPageSrc(report.id, edition.lang, n)}
                alt={`${report.name} sample report, page ${n}`}
                width={1100}
                height={1556}
                loading={n <= 2 ? "eager" : "lazy"}
                draggable={false}
                className="pointer-events-none block h-auto w-full"
              />
              {/* Transparent cover so right-click / long-press never reaches the image */}
              <div className="absolute inset-0" aria-hidden />
            </div>
          ))}
        </div>
      </div>

      {/* Shown instead of the report if someone prints the page */}
      <div className="report-print-notice hidden">
        <p>Sample reports can be viewed on our website only.</p>
      </div>
    </div>
  );
}

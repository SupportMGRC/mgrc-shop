"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { FiEye } from "react-icons/fi";
import ReportViewer from "@/components/ReportViewer";
import type { SampleReport } from "@/lib/reports";

// One sample report on the Sample Reports page: cover, details and "View" buttons
export default function ReportCard({ report }: { report: SampleReport }) {
  const [open, setOpen] = useState<number | null>(null); // index of the language being viewed
  const close = useCallback(() => setOpen(null), []);
  const pages = report.editions[0].pages;

  return (
    <article
      id={report.id}
      className="grid scroll-mt-28 overflow-hidden rounded-3xl border border-gray-200 sm:grid-cols-[220px_1fr] md:grid-cols-[280px_1fr]"
    >
      <button
        type="button"
        onClick={() => setOpen(0)}
        className="group flex items-center justify-center bg-night p-8"
        aria-label={`View ${report.name} sample report`}
      >
        <Image
          src={report.cover}
          alt={`${report.name} sample report cover`}
          width={480}
          height={679}
          className="w-36 rounded-sm shadow-2xl transition-transform group-hover:-rotate-2 md:w-44"
        />
      </button>

      <div className="p-8">
        <h2 className="font-display text-4xl font-semibold text-ink">{report.name}</h2>
        <p className="mt-1 text-sm text-gray-500">{pages}-page preview</p>
        <p className="mt-4 max-w-xl leading-relaxed text-gray-700">{report.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {report.editions.map((ed, i) => (
            <button
              key={ed.lang}
              type="button"
              onClick={() => setOpen(i)}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#e39a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <FiEye aria-hidden />
              View sample{report.editions.length > 1 ? ` (${ed.label})` : ""}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Selected pages with example results. Your full report is personalised to your DNA.
        </p>
      </div>

      {open !== null &&
        createPortal(
          <ReportViewer report={report} langIndex={open} onLangChange={setOpen} onClose={close} />,
          document.body
        )}
    </article>
  );
}

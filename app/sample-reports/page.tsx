import type { Metadata } from "next";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/home/CtaBand";
import { sampleReports } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Sample Reports | MGRC Shop",
  description: "See what an MGRC genetic test report looks like before you order.",
};

export default function SampleReportsPage() {
  return (
    <>
      <PageHeader
        title="Sample Reports"
        intro="See what your report will look like before you order. These are real report layouts with example results, marked “Sample Report”."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-4">
          {sampleReports.map((report) => (
            <article
              key={report.id}
              id={report.id}
              className="grid scroll-mt-28 overflow-hidden rounded-3xl border border-gray-200 sm:grid-cols-[220px_1fr] md:grid-cols-[280px_1fr]"
            >
              <a
                href={report.files[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-night p-8"
                aria-label={`Open ${report.name} sample report`}
              >
                <Image
                  src={report.cover}
                  alt={`${report.name} sample report cover`}
                  width={480}
                  height={679}
                  className="w-36 rounded-sm shadow-2xl transition-transform hover:-rotate-2 md:w-44"
                />
              </a>

              <div className="p-8">
                <h2 className="font-display text-4xl font-semibold text-ink">{report.name}</h2>
                <p className="mt-1 text-sm text-gray-500">{report.pages} pages</p>
                <p className="mt-4 max-w-xl leading-relaxed text-gray-700">{report.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {report.files.map((file) => (
                    <a
                      key={file.href}
                      href={file.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#e39a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <FiFileText aria-hidden />
                      View {file.label} report
                      <span className="text-xs opacity-70">({file.sizeMb} MB)</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

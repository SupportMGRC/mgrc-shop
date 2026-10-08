// Sample reports, shown in a view-only viewer (no PDF is published).
//
// To add or update a report:
//   1. Put the PDF in report-sources/ named <id>-<lang>.pdf, e.g. origene-en.pdf
//      (that folder is ignored by Git and never uploaded)
//   2. Run: python scripts/build-report-pages.py
//      This writes the page images to public/images/reports/<id>/<lang>/
//   3. Update the entry below (page count, languages).
// Descriptions are drafts — confirm wording with Genomics before launch.

export type ReportEdition = {
  lang: string; // folder name: public/images/reports/<id>/<lang>/
  label: string; // button text
  pages: number;
};

export type SampleReport = {
  id: string;
  name: string;
  description: string;
  cover: string;
  editions: ReportEdition[];
};

export const sampleReports: SampleReport[] = [
  {
    id: "origene",
    name: "ORIGENE®",
    description:
      "Genetic screening for your predisposition to a wide range of health conditions and traits, with a risk summary and guidance on each result.",
    cover: "/images/reports/origene-cover.jpg",
    editions: [
      { lang: "en", label: "English", pages: 21 },
      { lang: "zh", label: "中文", pages: 21 },
    ],
  },
  {
    id: "littlegeneius",
    name: "LittleGENEius",
    description:
      "Genetic screening for children covering personality, emotional intelligence, learning and sports potential, childhood conditions and nutrition, with a guide for parents.",
    cover: "/images/reports/littlegeneius-cover.jpg",
    editions: [
      { lang: "en", label: "English", pages: 15 },
      { lang: "zh", label: "中文", pages: 15 },
    ],
  },
  {
    id: "dtect-pgx",
    name: "Dtect® PGx",
    description:
      "Pharmacogenomic report showing how your genes may affect your response to commonly prescribed medicines, to discuss with your doctor or pharmacist.",
    cover: "/images/reports/dtect-pgx-cover.jpg",
    editions: [{ lang: "en", label: "English", pages: 20 }],
  },
];

export function reportPageSrc(id: string, lang: string, page: number) {
  return `/images/reports/${id}/${lang}/${String(page).padStart(2, "0")}.webp`;
}

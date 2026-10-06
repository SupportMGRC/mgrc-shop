// Sample report list. To add a report: put the PDF in public/reports/,
// a cover image in public/images/reports/, then add an entry below.
// Descriptions are drafts — confirm wording with Genomics before launch.

export type SampleReport = {
  id: string;
  name: string;
  description: string;
  pages: number;
  cover: string;
  files: { label: string; href: string; sizeMb: number }[];
};

export const sampleReports: SampleReport[] = [
  {
    id: "origene",
    name: "ORIGENE®",
    description:
      "Genetic screening for your predisposition to a wide range of health conditions and traits, with a risk summary and guidance on each result.",
    pages: 324,
    cover: "/images/reports/origene-cover.jpg",
    files: [
      { label: "English", href: "/reports/origene-sample-report-en.pdf", sizeMb: 7.7 },
      { label: "中文", href: "/reports/origene-sample-report-zh.pdf", sizeMb: 9.5 },
    ],
  },
  {
    id: "littlegeneius",
    name: "LittleGENEius",
    description:
      "Genetic screening for children covering personality, emotional intelligence, learning and sports potential, childhood conditions and nutrition, with a guide for parents.",
    pages: 39,
    cover: "/images/reports/littlegeneius-cover.jpg",
    files: [
      { label: "English", href: "/reports/littlegeneius-sample-report-en.pdf", sizeMb: 3.5 },
      { label: "中文", href: "/reports/littlegeneius-sample-report-zh.pdf", sizeMb: 11.2 },
    ],
  },
  {
    id: "dtect-pgx",
    name: "Dtect® PGx",
    description:
      "Pharmacogenetic report showing how your genes may affect your response to commonly prescribed medicines, to discuss with your doctor or pharmacist.",
    pages: 30,
    cover: "/images/reports/dtect-pgx-cover.jpg",
    files: [
      { label: "English", href: "/reports/dtect-pgx-sample-report-en.pdf", sizeMb: 2.6 },
    ],
  },
];

// Central product list — used on the homepage, Our Products page and each product page.
// TODO: replace all wording and prices with content approved by Genomics.

export type Product = {
  id: string; // also the web address: /products/<id>/
  name: string;
  tagline: string;
  description: string;
  forWho: string;
  highlights: string[]; // 3 short points for the cards
  includes: string[]; // full list for the product page
  sampleType: string;
  turnaround: string;
  languages: string;
  price: string | null; // e.g. "RM 1,200" — null shows "Ask us for price"
  image: string; // report cover (used when no photo yet)
  photo: string | null; // TODO: product/kit photo, e.g. "/images/photos/origene-kit.jpg" (~1200×900)
  gallery: (string | null)[]; // TODO: 3 extra photos for the product page
  sampleReportId: string;
};

export const products: Product[] = [
  {
    id: "origene",
    name: "ORIGENE®",
    tagline: "A complete look at your genetic health",
    description:
      "ORIGENE screens your DNA for genetic predispositions to a wide range of health conditions and traits. Your report shows how your genetic risk compares with the general population, with guidance you can discuss with your doctor.",
    forWho: "Adults who want to understand their genetic risks and traits",
    highlights: ["Health condition risks", "Personal traits", "Guidance for each result"],
    includes: [
      "Genetic risk summary for health conditions",
      "Results for personal traits",
      "Risk factors, typical symptoms and recommended actions for each condition",
      "A clear explanation of what genetic screening can and cannot tell you",
    ],
    sampleType: "Saliva or cheek swab",
    turnaround: "About 15–20 working days",
    languages: "English, 中文",
    price: null,
    image: "/images/reports/origene-cover.jpg",
    photo: null,
    gallery: [null, null, null],
    sampleReportId: "origene",
  },
  {
    id: "littlegeneius",
    name: "LittleGENEius",
    tagline: "Discover your child's natural strengths",
    description:
      "LittleGENEius helps parents understand their child's natural tendencies, from personality and learning style to sports potential and nutrition, with practical tips to support them at home and in school.",
    forWho: "Parents who want to support their child's growth",
    highlights: ["Personality and EQ", "Learning and sports potential", "Nutrition and childhood health"],
    includes: [
      "Top 3 genetic strengths certificate",
      "Personality traits and emotional intelligence (EQ)",
      "Intelligence and academic potential",
      "Sports potential",
      "Childhood health conditions",
      "Nutrition and metabolism",
      "A parent's guide with practical tips",
    ],
    sampleType: "Cheek swab or saliva",
    turnaround: "About 15–20 working days",
    languages: "English, 中文",
    price: null,
    image: "/images/reports/littlegeneius-cover.jpg",
    photo: null,
    gallery: [null, null, null],
    sampleReportId: "littlegeneius",
  },
  {
    id: "dtect-pgx",
    name: "Dtect® PGx",
    tagline: "How your genes affect your medicines",
    description:
      "Dtect PGx is a pharmacogenetic test. It shows how your genes may affect the way your body responds to commonly prescribed medicines, so you and your doctor can make better-informed treatment choices.",
    forWho: "Anyone on long-term medication or planning treatment with their doctor",
    highlights: ["Response to common medicines", "Grouped by drug category", "A report to share with your doctor"],
    includes: [
      "Guidance for commonly prescribed medicines, grouped by drug category",
      "Colour-coded guidance: normal, additional information, use with caution, replace or monitor",
      "A doctor's summary with evidence levels",
      "Your gene results and what they mean",
    ],
    sampleType: "Cheek swab or saliva", // TODO: confirm sample type for PGx
    turnaround: "About 15–20 working days", // TODO: confirm
    languages: "English",
    price: null,
    image: "/images/reports/dtect-pgx-cover.jpg",
    photo: null,
    gallery: [null, null, null],
    sampleReportId: "dtect-pgx",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

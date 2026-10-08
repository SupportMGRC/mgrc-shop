// Central product list — used on the homepage, Our Products page and each product page.
// Names, descriptions, ages and prices: exactly as in the Genomics content files
// (content_06102026.docx, content_07102026.docx).

export type Package = {
  tier: "Essential" | "Premium";
  includes: string; // what the customer gets
  price: string;
};

export type Brochure = { label: string; href: string };

// Dtect PGx is an add-on only: sold as a bundle with ORIGENE or LittleGENEius,
// and the customer receives 2 separate reports.
export type Bundle = {
  withId: "origene" | "littlegeneius"; // product it is bundled with
  label: string; // e.g. "ORIGENE® + PGx"
  packages: Package[];
};

export type Product = {
  id: string; // also the web address: /products/<id>/
  name: string;
  tagline: string;
  description: string;
  forWho: string; // age group
  audience: string; // short label for the homepage chooser, e.g. "For you"
  coverage: string | null; // e.g. "249 traits in 9 profiles"
  highlights: string[]; // 3 short points for the cards
  includes: string[]; // full list for the product page
  sampleType: string;
  turnaround: string;
  languages: string;
  packages: Package[]; // empty for add-on-only products (see bundles)
  bundles: Bundle[] | null; // add-on-only products: the bundles it can be bought in
  website: string | null; // the product's own website, opens in a new tab
  brochures: Brochure[]; // PDFs in public/brochures/, one per language (button shows "Coming soon" if empty)
  image: string; // report cover (used when no photo yet)
  photo: string | null; // TODO: product/kit photo, e.g. "/images/photos/origene-kit.jpg" (~1200×900)
  sampleReportId: string;
};

const ESSENTIAL = "Digital Report";
const PREMIUM = "Digital Report + Printed Report";

export const products: Product[] = [
  {
    id: "origene",
    name: "ORIGENE®",
    tagline: "A complete look at your genetic health",
    description:
      "ORIGENE is a comprehensive DNA screening test that analyzes selected genetic markers to provide personalized insights into health, wellness, physical traits, fitness, behavior, and disease predispositions across 249 traits in 9 profiles.",
    forWho: "Best for ages 13 and above",
    audience: "For you",
    coverage: "249 traits in 9 profiles",
    highlights: ["249 traits in 9 profiles", "Health, wellness, fitness and traits", "Disease predispositions"],
    includes: [
      "Genetic risk summary for health conditions",
      "Results for physical traits, fitness and behaviour",
      "Risk factors, typical symptoms and recommended actions for each condition",
      "A clear explanation of what genetic screening can and cannot tell you",
      "A one-to-one online consultation to go through your report",
    ],
    sampleType: "Cheek swab",
    turnaround: "Within 21 days",
    languages: "English, 中文",
    packages: [
      { tier: "Essential", includes: ESSENTIAL, price: "RM2200" },
      { tier: "Premium", includes: PREMIUM, price: "RM2450" },
    ],
    bundles: null,
    website: "https://origene.com.my/",
    brochures: [
      { label: "English", href: "/brochures/origene-en.pdf" },
      { label: "中文", href: "/brochures/origene-zh.pdf" },
    ],
    image: "/images/reports/origene-cover.jpg",
    photo: null,
    sampleReportId: "origene",
  },
  {
    id: "littlegeneius",
    name: "LittleGENEius",
    tagline: "Discover your child's natural strengths",
    description:
      "LittleGENEius combines genetic screening and AI-driven interpretation to uncover insights across 69 genetically influenced traits, helping parents better understand their child's unique potential and provide more personalised support for their growth and development.",
    forWho: "Best for children aged 3-12 years",
    audience: "For your child",
    coverage: "69 genetically influenced traits",
    highlights: ["69 genetically influenced traits", "Personality, learning and sports potential", "Nutrition and childhood health"],
    includes: [
      "Top 3 genetic strengths certificate",
      "Personality traits and emotional intelligence (EQ)",
      "Intelligence and academic potential",
      "Sports potential",
      "Childhood health conditions",
      "Nutrition and metabolism",
      "A parent's guide with practical tips",
      "A one-to-one online consultation to go through your child's report",
    ],
    sampleType: "Cheek swab",
    turnaround: "Within 21 days",
    languages: "English, 中文",
    packages: [
      { tier: "Essential", includes: ESSENTIAL, price: "RM1800" },
      { tier: "Premium", includes: PREMIUM, price: "RM2050" },
    ],
    bundles: null,
    website: "https://littlegeneius.mgrc.com.my/",
    brochures: [
      { label: "English", href: "/brochures/littlegeneius-en.pdf" },
      { label: "中文", href: "/brochures/littlegeneius-zh.pdf" },
    ],
    image: "/images/reports/littlegeneius-cover.jpg",
    photo: null,
    sampleReportId: "littlegeneius",
  },
  {
    id: "dtect-pgx",
    name: "Dtect® PGx",
    tagline: "How your genes affect your medicines",
    description:
      "Dtect PGx is a pharmacogenomic DNA screening test that analyzes genetic markers associated with drug response and adverse drug reactions, providing information that can help doctors select appropriate medications and dosages based on an individual's genetic profile.",
    forWho: "Suitable for all ages",
    audience: "For your medicines",
    coverage: null,
    highlights: ["Response to common medicines", "Adverse drug reaction risks", "A report to share with your doctor"],
    includes: [
      "Guidance for commonly prescribed medicines, grouped by drug category",
      "Colour-coded guidance: normal, additional information, use with caution, replace or monitor",
      "A doctor's summary with evidence levels",
      "Your gene results and what they mean",
    ],
    sampleType: "Cheek swab",
    turnaround: "Within 21 days",
    languages: "English",
    // Not sold alone — only as a bundle (content_07102026.docx; LittleGENEius + PGx prices added 8 Oct 2026).
    packages: [],
    bundles: [
      {
        withId: "origene",
        label: "ORIGENE® + PGx",
        packages: [
          { tier: "Essential", includes: ESSENTIAL, price: "RM3000" },
          { tier: "Premium", includes: PREMIUM, price: "RM3250" },
        ],
      },
      {
        withId: "littlegeneius",
        label: "LittleGENEius + PGx",
        packages: [
          { tier: "Essential", includes: ESSENTIAL, price: "RM2600" },
          { tier: "Premium", includes: PREMIUM, price: "RM2850" },
        ],
      },
    ],
    website: null,
    brochures: [{ label: "English", href: "/brochures/dtect-pgx-en.pdf" }],
    image: "/images/reports/dtect-pgx-cover.jpg",
    photo: null,
    sampleReportId: "dtect-pgx",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

const rm = (price: string) => Number(price.replace(/[^\d]/g, ""));

// "From RM1800" — lowest package price. Add-on products: "Bundle from RM2600".
export function fromPrice(p: Product) {
  if (p.bundles) {
    const lowest = Math.min(...p.bundles.map((b) => rm(b.packages[0].price)));
    return `Bundle from RM${lowest}`;
  }
  return `From ${p.packages[0].price}`;
}

// Extra cost of adding Dtect PGx to a test (same for Essential and Premium: +RM800)
export function pgxAddOn(baseId: string) {
  const base = getProduct(baseId);
  const bundle = getProduct("dtect-pgx")?.bundles?.find((b) => b.withId === baseId);
  if (!base || !bundle || base.packages.length === 0) return null;
  return {
    extra: `RM${rm(bundle.packages[0].price) - rm(base.packages[0].price)}`,
    from: bundle.packages[0].price,
  };
}

import Image from "next/image";

// "Why Us?" — wording and icons from the Genomics content files (content_06102026.docx;
// reliability wording and black-and-white icons updated from content_07102026.docx).
// Kept by Noor: "cheek (buccal) swab", the "Why MGRC" label and the "20+ years" line.
// Icons are the original images from that file, cropped only (public/images/icons/why-us/).
const lead = {
  icon: "/images/icons/why-us/expertise.png",
  title: "Expertise Behind Every Insight",
  text: "As one of Malaysia's pioneering genomics companies, we combine over 20 years of scientific expertise with advanced in-house laboratory capabilities. Our team of genetics, bioinformatics, and healthcare professionals transforms complex genetic data into accurate, reliable, and actionable insights, ensuring the highest standards of quality at every step.",
};

const reasons = [
  {
    icon: "/images/icons/why-us/asian-populations.png",
    title: "Built for Asian Populations",
    text: "Our genomic analyses are supported by extensive reference data from East and Southeast Asian populations, enabling more relevant insights and interpretations for individuals from the region.",
  },
  {
    icon: "/images/icons/why-us/fast-processing.png",
    title: "Fast and Efficient Processing",
    text: "Efficient laboratory processes and quality-controlled workflows enable us to deliver reports promptly without compromising accuracy.",
  },
  {
    icon: "/images/icons/why-us/consultation.png",
    title: "Personalized Genetic Consultation Included",
    text: "Genetic screening services include access to genetic consultation, allowing you to discuss your results and gain a better understanding of your genetic insights.",
  },
  {
    icon: "/images/icons/why-us/sample-collection.png",
    title: "Convenient Sample Collection",
    text: "Samples can be collected easily using a cheek (buccal) swab, making the process simple, non-invasive, and comfortable.",
  },
  {
    icon: "/images/icons/why-us/data-privacy.png",
    title: "Your Data Privacy Matters",
    text: "We are committed to safeguarding your personal information and genetic data. All collected information is handled in accordance with the Personal Data Protection Act 2010 (PDPA) and is protected through strict confidentiality and data security practices.",
  },
  {
    icon: "/images/icons/why-us/reliability.png",
    title: "High Analytical Reliability",
    text: "We combine advanced genetic testing technology with stringent quality assurance standards to provide accurate, reliable, and trustworthy results. Our ISO 9001:2015 certified quality management system reflects our commitment to excellence at every stage of the testing process.",
  },
];

function Icon({ src, size }: { src: string; size: "lg" | "md" }) {
  const box = size === "lg" ? "h-24 w-24 p-2" : "h-20 w-20 p-1.5";
  return (
    <span className={`flex items-center justify-center rounded-2xl bg-white ring-1 ring-gray-200 ${box}`}>
      <Image src={src} alt="" width={256} height={256} className="h-full w-full object-contain" />
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-semibold tracking-wide text-gold-dark uppercase">Why MGRC</p>
        <h2 className="mt-3 font-display text-5xl font-semibold text-ink md:text-6xl">Why Us?</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Lead reason, featured */}
          <article className="flex flex-col justify-between rounded-3xl bg-night p-8 text-white md:col-span-2 lg:col-span-1 lg:row-span-3">
            <div>
              <Icon src={lead.icon} size="lg" />
              <h3 className="mt-6 font-display text-4xl font-semibold">{lead.title}</h3>
              <p className="mt-4 leading-relaxed text-white/75">{lead.text}</p>
            </div>
            <p className="mt-10 border-t border-white/15 pt-6">
              <span className="block font-display text-7xl leading-none font-semibold text-gold">20+</span>
              <span className="mt-2 block text-sm text-white/65">years in genomics, listed on Bursa Malaysia</span>
            </p>
          </article>

          {reasons.map(({ icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-gray-200 p-7">
              <Icon src={icon} size="md" />
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

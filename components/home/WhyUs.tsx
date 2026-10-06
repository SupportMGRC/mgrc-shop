import MaskIcon from "@/components/MaskIcon";

// "Why Us?" — wording from the Genomics content file, 6 Oct 2026.
// Icons: supplied by Genomics, converted to one colour (public/images/icons/).
const reasons = [
  {
    icon: "/images/icons/asian-populations.png",
    title: "Built for Asian Populations",
    text: "Our genomic analyses are supported by extensive reference data from East and Southeast Asian populations, enabling more relevant insights and interpretations for individuals from the region.",
  },
  {
    icon: "/images/icons/fast-processing.png",
    title: "Fast and Efficient Processing",
    text: "Efficient laboratory processes and quality-controlled workflows enable us to deliver reports promptly without compromising accuracy.",
  },
  {
    icon: "/images/icons/consultation.png",
    title: "Personalized Genetic Consultation Included",
    text: "Genetic screening services include access to genetic consultation, allowing you to discuss your results and gain a better understanding of your genetic insights.",
  },
  {
    icon: "/images/icons/sample-collection.png",
    title: "Convenient Sample Collection",
    text: "Samples can be collected easily using a cheek (buccal) swab, making the process simple, non-invasive, and comfortable.",
  },
  {
    icon: "/images/icons/data-privacy.png",
    title: "Your Data Privacy Matters",
    text: "We are committed to safeguarding your personal information and genetic data. All collected information is handled in accordance with the Personal Data Protection Act 2010 (PDPA) and is protected through strict confidentiality and data security practices.",
  },
  {
    icon: "/images/icons/reliability.png",
    title: "High Analytical Reliability",
    text: "Our advanced testing and analytical methodologies are designed to deliver highly accurate and dependable genetic results, ensuring confidence in every report.",
  },
];

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
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-ink">
                <MaskIcon src="/images/icons/expertise.png" className="h-10 w-10" />
              </span>
              <h3 className="mt-6 font-display text-4xl font-semibold">Expertise Behind Every Insight</h3>
              <p className="mt-4 leading-relaxed text-white/75">
                As one of Malaysia&apos;s pioneering genomics companies, we combine over 20 years of
                scientific expertise with advanced in-house laboratory capabilities. Our team of
                genetics, bioinformatics, and healthcare professionals transforms complex genetic
                data into accurate, reliable, and actionable insights, ensuring the highest
                standards of quality at every step.
              </p>
            </div>
            <p className="mt-10 border-t border-white/15 pt-6">
              <span className="block font-display text-7xl leading-none font-semibold text-gold">20+</span>
              <span className="mt-2 block text-sm text-white/65">years in genomics, listed on Bursa Malaysia</span>
            </p>
          </article>

          {reasons.map(({ icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-gray-200 p-7">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-light text-gold-dark">
                <MaskIcon src={icon} className="h-10 w-10" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

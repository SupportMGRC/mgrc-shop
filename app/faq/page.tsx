import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/home/CtaBand";
import { faqGroups } from "@/lib/faqs";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | MGRC Shop",
  description: "Answers to common questions about ordering, samples, reports and privacy.",
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="FAQ"
        intro="Answers to common questions about ordering, your sample, your report and your privacy."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[15rem_1fr]">
          <aside className="md:sticky md:top-28 md:self-start">
            <nav aria-label="FAQ topics">
              <ul className="flex flex-wrap gap-2 md:flex-col md:gap-1">
                {faqGroups.map((g) => (
                  <li key={g.topic}>
                    <a
                      href={`#${slug(g.topic)}`}
                      className="block rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-ink hover:text-ink md:rounded-lg md:border-0 md:hover:bg-mist"
                    >
                      {g.topic}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 hidden rounded-2xl bg-night p-6 text-white md:block">
              <p className="font-display text-2xl font-semibold">Still have questions?</p>
              <p className="mt-2 text-sm text-white/70">Our team replies on WhatsApp during office hours.</p>
              <a
                href={whatsappLink("Hi MGRC, I have a question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
              >
                <FaWhatsapp aria-hidden />
                Ask us
              </a>
            </div>
          </aside>

          <div className="space-y-16">
            {faqGroups.map((g) => (
              <div key={g.topic} id={slug(g.topic)} className="scroll-mt-28">
                <h2 className="mb-8 font-display text-4xl font-semibold text-ink">{g.topic}</h2>
                <FaqList items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/home/CtaBand";
import { faqs } from "@/lib/faqs";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | MGRC Shop",
  description: "Answers to common questions about ordering, samples, reports and privacy.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="FAQ"
        intro="Answers to common questions about ordering, your sample, your report and your privacy."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_15rem]">
          <FaqList items={faqs} />

          <aside className="md:sticky md:top-28 md:self-start">
            <div className="rounded-2xl bg-night p-6 text-white">
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
        </div>
      </section>

      <CtaBand />
    </>
  );
}

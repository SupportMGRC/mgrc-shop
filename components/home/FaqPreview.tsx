import Link from "next/link";
import FaqList from "@/components/FaqList";
import { featuredFaqs } from "@/lib/faqs";

export default function FaqPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-5xl font-semibold text-ink md:text-6xl">Questions, answered</h2>
          <p className="mt-4 text-gray-600">Can&apos;t find what you need? Message us on WhatsApp.</p>
          <Link href="/faq/" className="mt-6 inline-block font-semibold text-gold-dark underline underline-offset-4">
            See all questions
          </Link>
        </div>
        <FaqList items={featuredFaqs} openFirst />
      </div>
    </section>
  );
}

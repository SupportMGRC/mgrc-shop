import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Terms & Conditions | MGRC Shop" };

// TEMPLATE — the remaining wording must come from MGRC Legal / Compliance.
// `text: null` shows "[Content to be provided]".
const sections: { title: string; text: string | null }[] = [
  { title: "About our tests", text: null },
  { title: "Ordering and payment", text: null },
  { title: "Delivery of sample kits", text: null },
  { title: "Returning your sample", text: null },
  { title: "Your report", text: null },
  {
    // From the Genomics content file, 6 Oct 2026
    title: "Refund policy",
    text: "While refunds are not available, we are happy to offer the full amount paid as MGRC credit, which can be redeemed for any MGRC product at the prevailing retail price.",
  },
  { title: "Limitations of genetic screening", text: null },
  { title: "Contact us", text: null },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Terms & Conditions" intro="The terms that apply when you order and use MGRC genetic tests." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4">
          <p className="rounded-lg border border-gold bg-gold-light p-4 text-sm text-gray-800">
            Draft template. Content to be provided and approved by MGRC Legal before launch.
          </p>
          {sections.map((s, i) => (
            <div key={s.title} id={s.title === "Refund policy" ? "refunds" : undefined}>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {i + 1}. {s.title}
              </h2>
              <p className="mt-3 leading-relaxed text-gray-700">{s.text ?? "[Content to be provided]"}</p>
            </div>
          ))}
          <p className="text-sm text-gray-500">Last updated: [date]</p>
        </div>
      </section>
    </>
  );
}

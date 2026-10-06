import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Terms & Conditions | MGRC Shop" };

// TEMPLATE ONLY — the actual wording must come from MGRC Legal / Compliance.
const sections = [
  "About our tests",
  "Ordering and payment",
  "Delivery of sample kits",
  "Returning your sample",
  "Your report",
  "Refunds and cancellations",
  "Limitations of genetic screening",
  "Contact us",
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
            <div key={s}>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {i + 1}. {s}
              </h2>
              <p className="mt-3 leading-relaxed text-gray-700">[Content to be provided]</p>
            </div>
          ))}
          <p className="text-sm text-gray-500">Last updated: [date]</p>
        </div>
      </section>
    </>
  );
}

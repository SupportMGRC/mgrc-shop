import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Privacy Policy | MGRC Shop" };

// TEMPLATE ONLY — the actual wording must come from MGRC Legal / Compliance.
const sections = [
  "Information we collect",
  "How we use your information",
  "How we protect your genetic data",
  "Sharing your information",
  "Your rights under the PDPA",
  "How long we keep your data",
  "Contact us",
];

export default function Page() {
  return (
    <>
      <PageHeader title="Privacy Policy" intro="How MGRC collects, uses and protects your personal and genetic information." />
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

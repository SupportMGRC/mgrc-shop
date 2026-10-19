import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Refund Policy | MGRC Shop",
  description: "MGRC refund policy for genetic test purchases.",
};

// Wording exactly as in the Genomics content file (content_06102026.docx).
export default function Page() {
  return (
    <>
      <PageHeader title="Refund Policy" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-lg leading-relaxed text-gray-700">
            We currently do not offer refunds. If you have any concerns, please get in touch with us. Our team will be
            happy to connect with you and provide the support you need.
          </p>
        </div>
      </section>
    </>
  );
}

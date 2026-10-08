import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Disclaimer | MGRC Shop",
  description: "What MGRC genetic screening results can and cannot tell you.",
};

// Wording exactly as in the Genomics content file (content_07102026.docx), finalised.
export default function Page() {
  return (
    <>
      <PageHeader title="Disclaimer" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-4 leading-relaxed text-gray-700">
          <p>
            Our DNA test provides information about selected genetic variants that may be associated with certain health
            and wellness traits. The results are intended for informational and educational purposes only.
          </p>
          <p>
            The test does not analyse every genetic factor that may affect your health, and genetic predisposition is
            only one of many factors influencing health outcomes. Lifestyle, environment, medical history, and other
            biological factors also play important roles.
          </p>
          <p>The information provided in your report:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Is based solely on the DNA sample submitted for testing.</li>
            <li>Indicates genetic predisposition or likelihood, not certainty.</li>
            <li>Is not intended to diagnose, treat, cure, or prevent any disease.</li>
            <li>Should not replace professional medical advice, diagnosis, or treatment.</li>
            <li>Should not be used as the sole basis for healthcare or medical decisions.</li>
          </ul>
          <p>
            While we apply established laboratory procedures and quality controls, test results may be affected by sample
            quality or certain biological characteristics. The interpretation of genetic findings is based on the
            scientific knowledge available at the time of testing and may evolve as new research emerges.
          </p>
          <p>
            If you have concerns regarding your health or medical care, we recommend consulting a qualified healthcare
            professional.
          </p>
        </div>
      </section>
    </>
  );
}

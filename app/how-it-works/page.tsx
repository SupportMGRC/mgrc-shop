import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SampleCollectionVideo from "@/components/SampleCollectionVideo";
import CtaBand from "@/components/home/CtaBand";
import { steps, stepsIntro } from "@/lib/steps";

export const metadata: Metadata = {
  title: "How It Works | MGRC Shop",
  description: stepsIntro,
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader title="How It Works" intro={stepsIntro} />

      <section className="py-24">
        <ol className="mx-auto max-w-5xl space-y-20 px-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`grid items-center gap-10 md:gap-16 ${i % 2 === 1 ? "md:grid-cols-[1fr_300px]" : "md:grid-cols-[300px_1fr]"}`}
            >
              <div className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={244}
                  height={235}
                  className="w-full max-w-[260px] rounded-3xl"
                />
              </div>
              <div>
                <span className="text-6xl font-bold text-gold tabular-nums">0{i + 1}</span>
                <h2 className="mt-2 font-display text-5xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">{step.text}</p>
                {step.note && (
                  <p className="mt-4 rounded-xl bg-gold-light px-4 py-3 text-sm leading-relaxed text-gray-800">
                    {step.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Video tutorial in English, Bahasa Melayu and 中文 */}
      <section className="relative overflow-hidden bg-night py-24 text-white">
        <div className="relative mx-auto max-w-4xl px-4">
          <h2 className="font-display text-5xl font-semibold">Watch: how to collect your sample</h2>
          <div className="mt-8">
            <SampleCollectionVideo />
          </div>
          <p className="mt-8 text-white/75">
            Have a question about your kit?{" "}
            <Link href="/faq/" className="font-semibold text-gold underline underline-offset-4">
              Read the FAQ
            </Link>{" "}
            or message us on WhatsApp.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

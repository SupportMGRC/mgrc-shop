import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiPlayCircle } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";
import MediaSlot from "@/components/MediaSlot";
import CtaBand from "@/components/home/CtaBand";
import { steps } from "@/lib/steps";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "How It Works | MGRC Shop",
  description: "From ordering your kit to receiving your report, in four simple steps.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        intro="From ordering your kit to receiving your report, in four simple steps. No clinic visit needed."
      />

      <section className="py-24">
        <ol className="mx-auto max-w-6xl space-y-24 px-4">
          {steps.map((step, i) => (
            <li key={step.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <MediaSlot
                src={step.photo}
                alt={step.title}
                label={`Photo for step ${i + 1}: ${step.title}`}
                className={`aspect-[4/3] rounded-3xl ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div>
                <span className="text-7xl font-bold text-gold tabular-nums">0{i + 1}</span>
                <h2 className="mt-2 font-display text-5xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-3 text-lg text-gray-700">{step.text}</p>
                <ul className="mt-6 space-y-3">
                  {step.detail.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-gray-700">
                      <FiCheck className="mt-1 shrink-0 text-gold-dark" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Video — set media.videoEmbed in lib/media.ts when the tutorial is ready */}
      <section className="relative overflow-hidden bg-night py-24 text-white">
        <div className="relative mx-auto max-w-4xl px-4">
          <h2 className="font-display text-5xl font-semibold">Watch: how to collect your sample</h2>
          <div className="mt-10 aspect-video overflow-hidden rounded-3xl">
            {media.videoEmbed ? (
              <iframe
                src={media.videoEmbed}
                title="How to collect your sample"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-night-light text-white/45">
                <div className="text-center">
                  <FiPlayCircle className="mx-auto text-6xl" aria-hidden />
                  <p className="mt-3">Video tutorial coming soon</p>
                </div>
              </div>
            )}
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

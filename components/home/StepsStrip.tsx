import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { TbTestPipe2, TbMicroscope, TbFileText } from "react-icons/tb";

// Homepage one-line summary of the process. The full guide is on How It Works.
const steps = [
  { icon: TbTestPipe2, title: "Swab at home", text: "A painless cheek swab, under two minutes" },
  { icon: TbMicroscope, title: "Our lab analyses it", text: "In our in-house laboratory" },
  { icon: TbFileText, title: "Report within 21 days", text: "Sent to your email, with a consultation" },
];

export default function StepsStrip() {
  return (
    <section className="border-b border-gray-200 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1fr_auto]">
        <ol className="grid gap-8 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-2xl text-ink" aria-hidden>
                <Icon />
              </span>
              <div>
                <p className="text-xs font-semibold text-gray-500 tabular-nums">Step {i + 1}</p>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-0.5 text-sm text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link
          href="/how-it-works/"
          className="inline-flex items-center gap-2 justify-self-start rounded-full border border-gray-300 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
        >
          See how it works
          <FiArrowRight aria-hidden />
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaFileMedical, FaTruckFast } from "react-icons/fa6";
import MaskIcon from "@/components/MaskIcon";
import { steps, stepsIntro, type Step } from "@/lib/steps";

// The 4 steps as short cards — used on the homepage and on product pages.
// The full guide (with pictures and full text) is on the How It Works page.

function StepIcon({ icon }: { icon: Step["icon"] }) {
  const cls = "h-11 w-11";
  if (icon === "order") return <MaskIcon src="/images/icons/steps/order.png" className={cls} />;
  if (icon === "swab") return <MaskIcon src="/images/icons/sample-collection.png" className={cls} />;
  if (icon === "return") return <FaTruckFast className="h-10 w-10" aria-hidden />;
  return <FaFileMedical className="h-10 w-10" aria-hidden />;
}

export default function HowItWorks({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-display text-5xl font-semibold text-ink md:text-6xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{stepsIntro}</p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col items-center rounded-3xl bg-mist p-8 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink tabular-nums">
                0{i + 1}
              </span>
              <span className="mt-6 flex h-14 items-center text-ink">
                <StepIcon icon={step.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600">{step.short}</p>
            </li>
          ))}
        </ol>

        {showLink && (
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works/"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
            >
              See how it works
              <FiArrowRight aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

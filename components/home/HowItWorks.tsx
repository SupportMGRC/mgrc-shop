import Link from "next/link";
import { steps } from "@/lib/steps";

export default function HowItWorks({
  showLink = true,
  dark = true,
}: {
  showLink?: boolean;
  dark?: boolean;
}) {
  return (
    <section className={`py-24 ${dark ? "bg-night text-white" : "bg-mist text-ink"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-5xl font-semibold md:text-6xl">From your home to your report</h2>
        <p className={`mt-3 max-w-xl text-lg ${dark ? "text-white/65" : "text-gray-600"}`}>
          Four simple steps. No clinic visit needed.
        </p>

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className={`border-t-2 pt-6 ${i === 0 ? "border-gold" : dark ? "border-white/15" : "border-gray-300"}`}>
              <span className="text-5xl font-bold text-gold tabular-nums">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className={`mt-2 leading-relaxed ${dark ? "text-white/65" : "text-gray-600"}`}>{step.text}</p>
            </li>
          ))}
        </ol>

        {showLink && (
          <Link
            href="/how-it-works/"
            className={`mt-12 inline-block font-semibold underline underline-offset-4 ${dark ? "text-gold" : "text-gold-dark"}`}
          >
            See the full guide
          </Link>
        )}
      </div>
    </section>
  );
}

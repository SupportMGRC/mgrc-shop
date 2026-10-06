import { FiAward, FiFileText, FiLock } from "react-icons/fi";
import MediaSlot from "@/components/MediaSlot";
import { media } from "@/lib/media";

// TODO: confirm these claims with Genomics / Marketing before launch
const reasons = [
  {
    icon: <FiAward />,
    title: "A Malaysian genomics company",
    text: "Working in genomics since 2004 and listed on Bursa Malaysia.",
  },
  {
    icon: <FiFileText />,
    title: "Reports you can understand",
    text: "Clear summaries in English and 中文, with guidance for each result.",
  },
  {
    icon: <FiLock />,
    title: "Your data stays private",
    text: "Your genetic information is handled confidentially, in line with Malaysia's PDPA.",
  },
];

export default function WhyMgrc() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-2">
        <MediaSlot
          src={media.family}
          alt="A Malaysian family"
          label="Photo: family or parent with child (landscape)"
          className="aspect-[4/3] rounded-3xl"
        />
        <div>
          <h2 className="font-display text-5xl font-semibold text-ink md:text-6xl">
            Made for Malaysian families
          </h2>
          <ul className="mt-10 space-y-8">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-light text-xl text-gold-dark" aria-hidden>
                  {r.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1 text-gray-600">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

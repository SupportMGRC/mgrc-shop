import { testimonials } from "@/lib/testimonials";

// Written customer quotes. Pass `ids` to choose which ones to show (in that order).
export default function Testimonials({
  ids,
  title = "What our customers say",
  flush = false,
}: {
  ids: string[];
  title?: string;
  flush?: boolean; // true when it follows another grey section (no extra top space)
}) {
  const visible = ids.map((id) => testimonials.find((t) => t.id === id)).filter((t) => t !== undefined);
  if (visible.length === 0) return null;

  return (
    <section className={`bg-mist pb-24 ${flush ? "pt-4" : "pt-24"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-5xl font-semibold text-ink md:text-6xl">{title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {visible.map((t) => (
            <figure key={t.id} className="flex flex-col rounded-2xl bg-white p-8">
              <span className="font-display text-6xl leading-none text-gold" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-ink">{t.by}</p>
                <p className="text-sm text-gray-500">{t.product}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Individual experiences may vary. Genetic screening is not a medical diagnosis.
        </p>
      </div>
    </section>
  );
}

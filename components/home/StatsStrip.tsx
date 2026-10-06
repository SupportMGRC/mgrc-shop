import { stats } from "@/lib/stats";
import { SHOW_PLACEHOLDERS } from "@/lib/media";

export default function StatsStrip() {
  const visible = stats.filter((s) => SHOW_PLACEHOLDERS || !s.placeholder);
  if (visible.length === 0) return null;

  return (
    <section className="border-t border-white/10 bg-night text-white">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-12 md:grid-cols-4">
        {visible.map((s) => (
          <div key={s.label} className="flex flex-col-reverse border-l border-white/15 pl-5">
            <dt className="mt-1 text-sm text-white/55">{s.label}</dt>
            <dd className={`text-4xl font-bold tabular-nums md:text-5xl ${s.placeholder ? "text-white/30" : "text-gold"}`}>
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

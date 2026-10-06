import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

type Crumb = { href: string; label: string };

// Dark title banner used at the top of every inner page
export default function PageHeader({
  title,
  intro,
  crumbs = [],
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b-4 border-gold bg-night text-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 md:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-white/50">
            <li>
              <Link href="/" className="hover:text-gold">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.href} className="flex items-center gap-1">
                <FiChevronRight aria-hidden />
                <Link href={c.href} className="hover:text-gold">{c.label}</Link>
              </li>
            ))}
            <li className="flex items-center gap-1" aria-current="page">
              <FiChevronRight aria-hidden />
              <span className="text-white/80">{title}</span>
            </li>
          </ol>
        </nav>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold md:text-7xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
      </div>
    </section>
  );
}

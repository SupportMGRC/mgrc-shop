import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { activePromo } from "@/lib/promo";

// Thin promo strip at the very top of every page (text in lib/promo.ts).
// Only shows while the promo is running ("promo-only" in globals.css).
export default function PromoBar() {
  if (!activePromo) return null;
  return (
    <div className="promo-only bg-night-deep text-sm text-white/85">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center">
        <span className="font-bold tracking-wide text-gold uppercase">{activePromo.name}</span>
        <span className="hidden text-white/40 sm:inline" aria-hidden>·</span>
        <span className="hidden sm:inline">{activePromo.bar}</span>
        <span className="text-white/40" aria-hidden>·</span>
        <span>Ends {activePromo.endLabel.replace(/ \d{4}$/, "")}</span>
        <Link
          href="/products/#pricing"
          className="inline-flex items-center gap-1 font-semibold text-gold underline-offset-4 hover:underline"
        >
          View offer
          <FiArrowRight aria-hidden />
        </Link>
      </div>
    </div>
  );
}

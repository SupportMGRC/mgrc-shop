import { FiArrowUpRight } from "react-icons/fi";
import { site } from "@/lib/site";

// Thin bar above the header linking back to the main MGRC website
export default function TopBar() {
  return (
    <div className="bg-night-deep text-xs text-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-2">
        <a
          href={site.mainSite}
          className="inline-flex items-center gap-1 font-semibold text-white hover:text-gold"
        >
          Visit mgrc.com.my
          <FiArrowUpRight aria-hidden />
        </a>
      </div>
    </div>
  );
}

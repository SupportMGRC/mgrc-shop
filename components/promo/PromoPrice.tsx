import { promoPrice } from "@/lib/promo";
import type { Package } from "@/lib/products";

// A package price. During a promo it shows the normal price crossed out with the promo price;
// otherwise just the normal price. Both are in the page and the "promo-on" class on <html>
// picks which one shows (globals.css), so it switches by itself when the promo starts or ends.
export default function PromoPrice({
  productId,
  pkg,
  className = "",
  stacked = false,
}: {
  productId: string;
  pkg: Package;
  className?: string;
  stacked?: boolean; // old price above the new one (narrow spaces)
}) {
  const promo = promoPrice(productId, pkg.tier);
  if (!promo) return <span className={className}>{pkg.price}</span>;
  return (
    <>
      <span className={`promo-off ${className}`}>{pkg.price}</span>
      <span className={`promo-only ${stacked ? "inline-flex flex-col items-end" : "inline-flex flex-wrap items-baseline gap-x-2"}`}>
        <s className="text-[0.7em] font-medium text-gray-500 decoration-gray-400">
          <span className="sr-only">Was </span>
          {pkg.price}
        </s>
        <span className={className}>
          <span className="sr-only">Now </span>
          {promo}
        </span>
      </span>
    </>
  );
}

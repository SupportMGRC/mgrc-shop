import type { Buy2Row } from "@/lib/promo";

// "Buy 2 (same report)" prices on the product cards - only while the promo is running.
export default function Buy2List({ rows }: { rows: Buy2Row[] }) {
  return (
    <div className="promo-only mt-4 block">
      <p className="text-xs font-semibold tracking-wide text-gold-dark uppercase">Buy 2 · same report · promo only</p>
      <dl className="mt-2 divide-y divide-[#f1e3c8] rounded-xl border border-[#ecd9b8] bg-[#fffaf1]">
        {rows.map((row) => (
          <div key={row.tier} className="flex items-start justify-between gap-3 px-3.5 py-2.5">
            <dt className="text-sm text-gray-800">
              2 × {row.tier}
              <span className="block text-xs font-semibold text-gold-dark">Save {row.save}</span>
            </dt>
            <dd className="flex flex-col items-end text-right">
              <s className="text-xs font-medium text-gray-500">
                <span className="sr-only">Was </span>
                {row.was}
              </s>
              <span className="text-base font-bold text-ink">
                <span className="sr-only">Now </span>
                {row.price}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

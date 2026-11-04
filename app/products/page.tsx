import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/home/CtaBand";
import Testimonials from "@/components/home/Testimonials";
import MoreWaysToOrder from "@/components/MoreWaysToOrder";
import { products, getProduct, type Package } from "@/lib/products";
import { activePromo, buy2Rows } from "@/lib/promo";
import PromoPrice from "@/components/promo/PromoPrice";

export const metadata: Metadata = {
  title: "Our Products | MGRC Shop",
  description: "Compare MGRC genetic tests: ORIGENE, LittleGENEius and Dtect PGx.",
};

const rows: { label: string; value: (p: (typeof products)[number]) => string }[] = [
  { label: "Age group", value: (p) => p.forWho },
  { label: "Sample", value: (p) => p.sampleType },
  { label: "Results in", value: (p) => p.turnaround },
  { label: "Report language", value: (p) => p.languages },
];

// Price list rows: ORIGENE, ORIGENE Buy 2 (promo only), ORIGENE + PGx, LittleGENEius, … Dtect PGx
type PriceRow = { key: string; href: string; name: string; productId?: string; packages: Package[]; promoOnly?: boolean };
const pgx = getProduct("dtect-pgx")!;
const priceRows: PriceRow[] = [
  ...["origene", "littlegeneius"].flatMap((id) => {
    const p = getProduct(id)!;
    const bundle = pgx.bundles?.find((b) => b.withId === id);
    const buy2 = buy2Rows(id);
    return [
      { key: id, href: `/products/${id}/`, name: p.name, productId: id, packages: p.packages },
      ...(buy2.length
        ? [{ key: `${id}-buy2`, href: `/products/${id}/`, name: `${p.name} · Buy 2`, packages: buy2, promoOnly: true }]
        : []),
      ...(bundle ? [{ key: `${id}-pgx`, href: "/products/#bundle-pgx", name: bundle.label, packages: bundle.packages }] : []),
    ];
  }),
  { key: pgx.id, href: `/products/${pgx.id}/`, name: pgx.name, packages: pgx.packages },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        intro="Genetic tests for you and your loved ones, supporting wellness and more informed medication choices. Every test uses a simple sample you collect at home."
      />

      <section className="py-20">
        <div data-stagger className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <MoreWaysToOrder />

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-5xl font-semibold text-ink">Compare tests</h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-night text-white">
                <tr>
                  <th scope="col" className="w-40 p-4 font-semibold">
                    <span className="sr-only">Detail</span>
                  </th>
                  {products.map((p) => (
                    <th key={p.id} scope="col" className="p-4 font-display text-2xl font-semibold">
                      <Link href={`/products/${p.id}/`} className="hover:text-gold">
                        {p.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 [&_tr:nth-child(even)]:bg-mist">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="p-4 font-semibold text-gray-600">{row.label}</th>
                    {products.map((p) => (
                      <td key={p.id} className="p-4 align-top text-gray-800">{row.value(p)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Packages and pricing */}
      <section id="pricing" className="scroll-mt-24 bg-mist py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-5xl font-semibold text-ink">Packages and pricing</h2>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Every test comes in two packages. Choose a digital report, or add a physical copy to keep. Dtect® PGx can
            be ordered on its own, or bundled with ORIGENE® or LittleGENEius at a special price.
          </p>
          {activePromo && (
            <p className="promo-only mt-4 max-w-2xl rounded-xl border border-[#ecd9b8] bg-[#fffaf1] px-4 py-3 text-gray-700">
              <strong className="text-ink">{activePromo.name}:</strong> promo prices until {activePromo.endLabel}. Buy 2
              means two of the same report. For other combinations, ask us on WhatsApp.
            </p>
          )}

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[560px] text-left">
              <thead className="border-b border-gray-200">
                <tr>
                  <th scope="col" className="p-5 text-sm font-semibold text-gray-600">Test</th>
                  <th scope="col" className="p-5">
                    <span className="block font-display text-2xl font-semibold text-ink">Essential Package</span>
                    <span className="text-sm font-normal text-gray-600">Digital Report</span>
                  </th>
                  <th scope="col" className="bg-gold-light p-5">
                    <span className="block font-display text-2xl font-semibold text-ink">Premium Package</span>
                    <span className="text-sm font-normal text-gray-600">Digital Report + Hardcover / Printed Report</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {priceRows.map((row) => (
                  <tr
                    key={row.key}
                    className={`transition-colors hover:bg-gold-light/40 ${row.promoOnly ? "promo-only bg-[#fffaf1]" : ""}`}
                  >
                    <th scope="row" className="p-5 font-semibold text-ink">
                      <Link href={row.href} className="hover:text-gold-dark">
                        {row.name}
                      </Link>
                      {activePromo && (row.promoOnly || (row.productId && activePromo.prices[row.productId])) && (
                        <span className="promo-only ml-2 inline-block rounded-md bg-[#C9A55C] px-2 py-0.5 align-middle text-[10px] font-bold tracking-wider text-ink uppercase">
                          Promo
                        </span>
                      )}
                    </th>
                    {row.packages.map((pkg) => (
                      <td
                        key={pkg.tier}
                        className={`p-5 text-xl font-bold text-ink tabular-nums ${pkg.tier === "Premium" ? "bg-gold-light/50" : ""}`}
                      >
                        {row.productId ? (
                          <PromoPrice productId={row.productId} pkg={pkg} />
                        ) : "was" in pkg ? (
                          <span className="inline-flex flex-wrap items-baseline gap-x-2">
                            <s className="text-[0.7em] font-medium text-gray-500">
                              <span className="sr-only">Was </span>
                              {String(pkg.was)}
                            </s>
                            <span>
                              <span className="sr-only">Now </span>
                              {pkg.price}
                            </span>
                          </span>
                        ) : (
                          pkg.price
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Premium: hardcover report for {getProduct("origene")!.name}; printed report for{" "}
            {getProduct("littlegeneius")!.name} and {pgx.name}. Every test includes a one-to-one online consultation to go
            through your report.{" "}
            <Link href="/refund-policy/" className="font-semibold text-gold-dark underline underline-offset-4">
              Refund Policy
            </Link>
          </p>
        </div>
      </section>

      <Testimonials ids={["origene-1", "littlegeneius-2", "pgx-1"]} />
      <CtaBand />
    </>
  );
}

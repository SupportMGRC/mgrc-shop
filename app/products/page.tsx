import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/home/CtaBand";
import Testimonials from "@/components/home/Testimonials";
import MoreWaysToOrder from "@/components/MoreWaysToOrder";
import { products, getProduct } from "@/lib/products";

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

// Price list rows: ORIGENE, ORIGENE + PGx, LittleGENEius, LittleGENEius + PGx
const pgx = getProduct("dtect-pgx")!;
const priceRows = ["origene", "littlegeneius"].flatMap((id) => {
  const p = getProduct(id)!;
  const bundle = pgx.bundles?.find((b) => b.withId === id);
  return [
    { key: id, href: `/products/${id}/`, name: p.name, packages: p.packages },
    ...(bundle ? [{ key: `${id}-pgx`, href: `/products/${pgx.id}/`, name: bundle.label, packages: bundle.packages }] : []),
  ];
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        intro="Genetic tests for you, your child and your medicines. Every test uses a simple sample you collect at home."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-5xl font-semibold text-ink">Packages and pricing</h2>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Every test comes in two packages. Choose a digital report, or add a printed copy to keep. Dtect PGx is
            available as an add-on bundle with ORIGENE® or LittleGENEius.
          </p>

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
                    <span className="text-sm font-normal text-gray-600">Digital Report + Printed Report</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {priceRows.map((row) => (
                  <tr key={row.key}>
                    <th scope="row" className="p-5 font-semibold text-ink">
                      <Link href={row.href} className="hover:text-gold-dark">
                        {row.name}
                      </Link>
                    </th>
                    {row.packages.map((pkg) => (
                      <td
                        key={pkg.tier}
                        className={`p-5 text-xl font-bold text-ink tabular-nums ${pkg.tier === "Premium" ? "bg-gold-light/50" : ""}`}
                      >
                        {pkg.price}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Every test includes a one-to-one online consultation to go through your report.{" "}
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

import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/home/CtaBand";
import Testimonials from "@/components/home/Testimonials";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Products | MGRC Shop",
  description: "Compare MGRC genetic tests: ORIGENE, LittleGENEius and Dtect PGx.",
};

const rows: { label: string; value: (p: (typeof products)[number]) => string }[] = [
  { label: "Best for", value: (p) => p.forWho },
  { label: "Sample", value: (p) => p.sampleType },
  { label: "Results in", value: (p) => p.turnaround },
  { label: "Report language", value: (p) => p.languages },
  { label: "Price", value: (p) => p.price ?? "Ask us for price" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        intro="Genetic tests for you, your child and your medicines. Every test uses a simple sample you collect at home."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

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

      <Testimonials />
      <CtaBand />
    </>
  );
}

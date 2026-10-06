import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsSection() {
  return (
    <section id="tests" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-5xl font-semibold text-ink md:text-6xl">
              Find the right test
            </h2>
            <p className="mt-3 max-w-xl text-lg text-gray-600">
              One for you, one for your child, one for your medicines.
            </p>
          </div>
          <Link href="/products/" className="font-semibold text-gold-dark underline underline-offset-4">
            Compare all tests
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

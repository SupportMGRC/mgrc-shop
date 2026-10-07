import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { products, fromPrice } from "@/lib/products";

// Homepage "Which test is right for you?" — a quick pointer to each product page.
// Full details, prices and comparisons live on Our Products and the product pages.
export default function TestChooser() {
  return (
    <section id="tests" className="scroll-mt-24 bg-night py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-5xl font-semibold md:text-6xl">Which test is right for you?</h2>
            <p className="mt-3 max-w-xl text-lg text-white/65">
              One for you, one for your child, one for your medicines.
            </p>
          </div>
          <Link href="/products/" className="font-semibold text-gold underline underline-offset-4">
            Compare tests and packages
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.id}>
              <Link
                href={`/products/${p.id}/`}
                className="group flex h-full flex-col rounded-3xl bg-night-light p-7 ring-1 ring-white/10 transition hover:ring-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold tracking-wide text-gold uppercase">{p.audience}</p>
                  <Image
                    src={p.image}
                    alt=""
                    width={480}
                    height={679}
                    className="-mt-2 w-14 shrink-0 rotate-3 rounded-sm shadow-lg transition-transform group-hover:rotate-0"
                  />
                </div>
                <h3 className="mt-2 font-display text-4xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-white/75">{p.tagline}</p>

                <dl className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/55">Age group</dt>
                    <dd className="text-right font-semibold">{p.forWho}</dd>
                  </div>
                  {p.coverage && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/55">Covers</dt>
                      <dd className="text-right font-semibold">{p.coverage}</dd>
                    </div>
                  )}
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/55">Price</dt>
                    <dd className="text-right font-semibold">
                      {fromPrice(p)}
                      {p.packageNote && <span className="block text-xs font-normal text-white/55">with OriGene</span>}
                    </dd>
                  </div>
                </dl>

                <span className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-gold">
                  Explore {p.name.replace("®", "")}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

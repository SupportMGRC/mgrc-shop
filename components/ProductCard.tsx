import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookOpen, FiCheck, FiInfo } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getProduct, type Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

const orderBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 font-semibold text-ink transition-colors hover:bg-[#e39a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

// Card image for an add-on product: [ORIGENE or LittleGENEius] + [Dtect], "You receive 2 separate reports"
function BundleImage({ product }: { product: Product }) {
  const bases = (product.bundles ?? []).map((b) => getProduct(b.withId)!);
  return (
    <div className="relative flex h-full items-center justify-center gap-3 px-3 pt-8 pb-10">
      <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-wide text-ink uppercase">
        Add-on · Bundle only
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-dashed border-white/35 p-2.5">
        {bases.map((b, i) => (
          <div key={b.id} className="flex items-center gap-2">
            {i > 0 && <span className="text-sm text-white/80 italic">or</span>}
            <Image src={b.image} alt={`${b.name} report`} width={480} height={679} className="w-14 rounded-[2px] shadow-xl sm:w-16" />
          </div>
        ))}
      </div>
      <span className="text-3xl font-bold text-gold" aria-hidden>
        +
      </span>
      <Image
        src={product.image}
        alt={`${product.name} report`}
        width={480}
        height={679}
        className="w-16 rounded-[2px] shadow-xl transition-transform duration-500 group-hover:-translate-y-1 sm:w-[4.5rem]"
      />
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white">
        You receive 2 separate reports
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const pageUrl = `/products/${product.id}/`;
  const isAddOn = Boolean(product.bundles);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-xl">
      <Link href={pageUrl} tabIndex={-1} className="relative block aspect-[4/3] overflow-hidden bg-night">
        {isAddOn ? (
          <BundleImage product={product} />
        ) : product.photo ? (
          <Image
            src={product.photo}
            alt={`${product.name} kit`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback until the product photo arrives: report cover on brand background
          <div className="flex h-full items-end justify-center pt-8">
            <Image
              src={product.image}
              alt={`${product.name} report`}
              width={480}
              height={679}
              className="w-36 rounded-t-sm shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
            />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl font-semibold text-ink">
          <Link href={pageUrl} className="inline-flex items-start gap-1 hover:text-gold-dark">
            {product.name}
            <FiArrowUpRight className="mt-1 text-xl opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
          </Link>
        </h3>
        <p className="mt-1 font-medium text-gray-800">{product.tagline}</p>
        <p className="mt-3 inline-flex self-start rounded-full bg-gold-light px-3 py-1 text-xs font-semibold text-gold-dark">
          {product.forWho}
        </p>

        <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <FiCheck className="mt-0.5 shrink-0 text-gold-dark" aria-hidden />
              {h}
            </li>
          ))}
        </ul>

        {product.brochures.length > 0 && (
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1.5 text-gray-600">
              <FiBookOpen aria-hidden />
              Brochure:
            </span>
            {product.brochures.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold-dark underline underline-offset-4 hover:text-ink"
              >
                {b.label}
                <span className="sr-only"> brochure (PDF, opens in a new tab)</span>
              </a>
            ))}
          </p>
        )}

        <div className="mt-auto pt-6">
          {isAddOn ? (
            <>
              <div className="flex gap-2.5 rounded-xl border border-gold bg-gold-light p-3.5 text-sm leading-relaxed text-gray-800">
                <FiInfo className="mt-0.5 shrink-0 text-lg text-gold-dark" aria-hidden />
                <p>
                  <strong className="font-semibold text-ink">Add-on only, not sold separately.</strong> Comes as a bundle
                  with ORIGENE® or LittleGENEius, as 2 separate reports.
                </p>
              </div>
              <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">Bundle prices</p>
              <dl className="mt-2 divide-y divide-gray-200 rounded-xl border border-gray-200">
                {product.bundles!.map((b) => (
                  <div key={b.label} className="flex items-baseline justify-between gap-3 px-3.5 py-2.5 text-sm">
                    <dt className="text-gray-700">{b.label}</dt>
                    <dd className="text-base font-bold text-ink">from {b.packages[0].price}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 grid gap-2">
                {product.bundles!.map((b) => {
                  const base = getProduct(b.withId)!;
                  return (
                    <a
                      key={b.label}
                      href={whatsappLink(`Hi MGRC, I'd like to order ${b.label}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={orderBtn}
                    >
                      <FaWhatsapp aria-hidden />
                      Order with {base.name}
                    </a>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Packages</p>
              <dl className="mt-2 divide-y divide-gray-200 rounded-xl border border-gray-200">
                {product.packages.map((pkg) => (
                  <div key={pkg.tier} className="flex items-start justify-between gap-3 px-3.5 py-2.5">
                    <dt className="text-sm text-gray-800">
                      {pkg.tier}
                      <span className="block text-xs text-gray-500">{pkg.includes}</span>
                    </dt>
                    <dd className="text-base font-bold text-ink">{pkg.price}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 grid gap-2">
                <a
                  href={whatsappLink(`Hi MGRC, I'd like to order ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={orderBtn}
                >
                  <FaWhatsapp aria-hidden />
                  Order via WhatsApp
                </a>
              </div>
            </>
          )}
          <Link
            href={pageUrl}
            className="mt-2 block rounded-full border border-gray-300 px-4 py-2.5 text-center font-semibold text-ink transition-colors hover:border-ink"
          >
            Learn more
          </Link>
        </div>
      </div>
    </article>
  );
}

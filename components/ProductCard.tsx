import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { fromPrice, type Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const pageUrl = `/products/${product.id}/`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-xl">
      <Link href={pageUrl} tabIndex={-1} className="relative block aspect-[4/3] overflow-hidden bg-night">
        {product.photo ? (
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

        <div className="mt-auto pt-6">
          <p className="text-2xl font-bold text-ink">{fromPrice(product)}</p>
          {product.packageNote && <p className="mt-1 text-xs text-gray-500">{product.packageNote}</p>}
          <div className="mt-4 grid gap-2">
            <a
              href={whatsappLink(`Hi MGRC, I'd like to order ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 font-semibold text-ink transition-colors hover:bg-[#e39a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <FaWhatsapp aria-hidden />
              Order via WhatsApp
            </a>
            <Link
              href={pageUrl}
              className="rounded-full border border-gray-300 px-4 py-2.5 text-center font-semibold text-ink transition-colors hover:border-ink"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

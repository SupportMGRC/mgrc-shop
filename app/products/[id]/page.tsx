import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCheck, FiClock, FiDroplet, FiGlobe, FiFileText, FiExternalLink, FiBookOpen, FiUsers } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import MediaSlot from "@/components/MediaSlot";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import { videoTestimonials } from "@/lib/testimonials";
import CtaBand from "@/components/home/CtaBand";
import { products, getProduct } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return { title: `${product.name} | MGRC Shop`, description: product.tagline };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const facts = [
    { icon: <FiUsers />, label: "Age group", value: product.forWho },
    { icon: <FiDroplet />, label: "Sample", value: product.sampleType },
    { icon: <FiClock />, label: "Results in", value: product.turnaround },
    { icon: <FiGlobe />, label: "Report language", value: product.languages },
  ];
  const others = products.filter((p) => p.id !== product.id);
  const hasVideos = videoTestimonials.some((v) => v.product === product.id);
  const shortName = product.name.replace("®", "");

  return (
    <>
      <PageHeader
        title={product.name}
        intro={product.tagline}
        crumbs={[{ href: "/products/", label: "Our Products" }]}
      />

      {/* Cover + buy box */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2">
          <div className="md:sticky md:top-28">
            {product.photo ? (
              <MediaSlot src={product.photo} alt={`${product.name} kit`} label="" className="aspect-[4/3] rounded-3xl" priority />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-night">
                <Image
                  src={product.image}
                  alt={`${product.name} report`}
                  width={480}
                  height={679}
                  priority
                  className="w-44 rounded-sm shadow-2xl md:w-52"
                />
              </div>
            )}
          </div>

          <div>
            <p className="text-lg leading-relaxed text-gray-700">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="rounded-xl bg-mist p-4">
                  <dt className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-gold-dark" aria-hidden>{f.icon}</span>
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-2xl border-2 border-gold p-6">
              {product.packageNote && (
                <p className="mb-3 text-sm font-semibold text-gold-dark">{product.packageNote}</p>
              )}
              <div className="grid gap-3 sm:grid-cols-2">
                {product.packages.map((pkg) => (
                  <div key={pkg.tier} className="rounded-xl bg-mist p-4">
                    <p className="text-sm font-semibold text-gray-600">{pkg.tier} Package</p>
                    <p className="mt-1 text-3xl font-bold text-ink">{pkg.price}</p>
                    <p className="mt-1 text-sm text-gray-600">{pkg.includes}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappLink(`Hi MGRC, I'd like to order ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-[#e39a2a]"
                >
                  <FaWhatsapp aria-hidden />
                  Order via WhatsApp
                </a>
                <Link
                  href={`/sample-reports/#${product.sampleReportId}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink"
                >
                  <FiFileText aria-hidden />
                  See sample report
                </Link>
              </div>
            </div>

            {/* More about the product: its own website and brochure */}
            <div className="mt-4 flex flex-wrap gap-3">
              {product.website && (
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  Visit {shortName} website
                  <FiExternalLink aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {product.brochures.length > 0 ? (
                product.brochures.map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    <FiBookOpen aria-hidden />
                    Brochure ({b.label})
                    <span className="sr-only">(PDF, opens in a new tab)</span>
                  </a>
                ))
              ) : (
                // Placeholder until Genomics provides the brochure
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-400"
                >
                  <FiBookOpen aria-hidden />
                  View brochure
                  <span className="rounded-full bg-mist px-2 py-0.5 text-xs font-medium text-gray-500">Coming soon</span>
                </span>
              )}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              Genetic screening shows your genetic predisposition. It is not a medical diagnosis.
              Please discuss your results with your doctor before making any health or medication
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* What's in your report — dark contrast section */}
      <section className="relative overflow-hidden bg-night py-24 text-white">
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-[1fr_1.4fr]">
          <Image
            src={product.image}
            alt={`${product.name} sample report cover`}
            width={480}
            height={679}
            className="mx-auto w-52 -rotate-3 rounded-sm shadow-2xl md:w-64"
          />
          <div>
            <h2 className="font-display text-5xl font-semibold">What&apos;s in your report</h2>
            <ul className="mt-8 space-y-4">
              {product.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-white/85">
                  <FiCheck className="mt-1.5 shrink-0 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/sample-reports/#${product.sampleReportId}`}
              className="mt-10 inline-block font-semibold text-gold underline underline-offset-4"
            >
              Look inside the sample report
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks dark={false} />
      {hasVideos ? <VideoTestimonials product={product.id} /> : <Testimonials />}

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-5xl font-semibold text-ink">You may also like</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

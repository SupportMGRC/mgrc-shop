import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCheck, FiClock, FiDroplet, FiGlobe, FiFileText, FiExternalLink, FiBookOpen, FiUsers, FiInfo, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import MediaSlot from "@/components/MediaSlot";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import { videoTestimonials, testimonials } from "@/lib/testimonials";
import CtaBand from "@/components/home/CtaBand";
import { products, getProduct, pgxAddOn } from "@/lib/products";
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
  const pgx = getProduct("dtect-pgx");
  const addOn = product.bundles ? null : pgxAddOn(product.id);
  const quotes = testimonials.filter((t) => t.productId === product.id);

  return (
    <>
      <PageHeader
        title={product.name}
        intro={product.tagline}
        crumbs={[{ href: "/products/", label: "Our Products" }]}
        badge={product.bundles ? "Add-on · Bundle only" : undefined}
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

          <div className="min-w-0">
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
              {product.bundles ? (
                <>
                  {/* Add-on only: show both bundles */}
                  <div className="flex gap-2.5 rounded-xl bg-gold-light p-4 text-sm leading-relaxed text-gray-800">
                    <FiInfo className="mt-0.5 shrink-0 text-lg text-gold-dark" aria-hidden />
                    <p>
                      <strong className="font-semibold text-ink">Add-on only, not sold separately.</strong> Bundle{" "}
                      {shortName} with ORIGENE® or LittleGENEius. You receive two separate reports: your ORIGENE® or
                      LittleGENEius report, plus your {shortName} report.
                    </p>
                  </div>
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[340px] text-left">
                      <thead>
                        <tr className="text-xs tracking-wide text-gray-500 uppercase">
                          <th scope="col" className="px-3 pb-2 font-semibold">Bundle</th>
                          <th scope="col" className="px-3 pb-2 font-semibold">
                            Essential
                            <span className="block text-xs font-normal tracking-normal normal-case">Digital Report</span>
                          </th>
                          <th scope="col" className="rounded-t-lg bg-gold-light/60 px-3 pt-2 pb-2 font-semibold">
                            Premium
                            <span className="block text-xs font-normal tracking-normal normal-case">Digital + Printed Report</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.bundles.map((b) => (
                          <tr key={b.label} className="border-t border-gray-200">
                            <th scope="row" className="px-3 py-3 font-normal text-gray-800">{b.label}</th>
                            {b.packages.map((pkg) => (
                              <td
                                key={pkg.tier}
                                className={`px-3 py-3 text-xl font-bold text-ink tabular-nums ${pkg.tier === "Premium" ? "bg-gold-light/60" : ""}`}
                              >
                                {pkg.price}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.bundles.map((b) => (
                      <a
                        key={b.label}
                        href={whatsappLink(`Hi MGRC, I'd like to order ${b.label}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 font-semibold text-ink transition-colors hover:bg-[#e39a2a]"
                      >
                        <FaWhatsapp aria-hidden />
                        Order with {getProduct(b.withId)!.name}
                      </a>
                    ))}
                    <Link
                      href={`/sample-reports/#${product.sampleReportId}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink sm:col-span-2"
                    >
                      <FiFileText aria-hidden />
                      See PGx sample report
                    </Link>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

            {/* Upsell: add Dtect PGx to ORIGENE / LittleGENEius */}
            {addOn && pgx && (
              <Link
                href={`/products/${pgx.id}/`}
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#fafaf8] p-4 transition-colors hover:border-gold"
              >
                <Image src={pgx.image} alt="" width={480} height={679} className="w-10 shrink-0 rounded-[2px] shadow-md" />
                <span className="flex-1 text-sm leading-relaxed text-gray-600">
                  <strong className="block text-base font-semibold text-ink">Add {pgx.name} for +{addOn.extra}</strong>
                  Also find out how your genes affect your medicines. Bundle from {addOn.from}, as a separate report.
                </span>
                <span className="hidden items-center gap-1 text-sm font-semibold whitespace-nowrap text-gold-dark underline underline-offset-4 sm:inline-flex">
                  See {pgx.name.replace("®", "")}
                  <FiArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            )}

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

      <HowItWorks />
      {hasVideos && <VideoTestimonials product={product.id} />}
      {quotes.length > 0 && <Testimonials ids={quotes.map((q) => q.id)} flush={hasVideos} />}

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

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getProduct } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

// Our Products: "More ways to order" — Bundle with Dtect PGx, Combo Package and Personalised Supplements.
// All are ordered through WhatsApp only (no product page).
// Supplements wording: content_07102026.docx (finalised). Combo wording: draft approved by Noor.

const orderBtn =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 font-semibold text-ink transition-colors hover:bg-[#e39a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

function Ticks({ items }: { items: string[] }) {
  return (
    <ul data-ticks className="mt-4 space-y-1.5 text-sm text-gray-700">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2">
          <FiCheck className="mt-0.5 shrink-0 text-gold-dark" aria-hidden />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function MoreWaysToOrder() {
  const origene = getProduct("origene")!;
  const littlegeneius = getProduct("littlegeneius")!;
  const pgx = getProduct("dtect-pgx")!;
  const covers = [littlegeneius, origene, littlegeneius];

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-5xl font-semibold text-ink">More ways to order</h2>

        <div data-stagger className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Bundle with Dtect PGx (2 separate reports, special bundle price) */}
          <article
            id="bundle-pgx"
            className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl sm:flex-row lg:flex-col"
          >
            <div className="relative flex min-h-56 items-center justify-center gap-2 bg-night px-3 pt-6 pb-12 sm:w-[42%] sm:shrink-0 lg:w-auto">
              <div className="flex items-center gap-1.5 rounded-xl border border-dashed border-white/35 p-2">
                {[origene, littlegeneius].map((b, i) => (
                  <div key={b.id} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-sm text-white/80 italic">or</span>}
                    <Image src={b.image} alt={`${b.name} report`} width={480} height={679} className="w-14 rounded-[2px] shadow-xl" />
                  </div>
                ))}
              </div>
              <span className="text-3xl font-bold text-gold" aria-hidden>
                +
              </span>
              <Image src={pgx.image} alt={`${pgx.name} report`} width={480} height={679} className="w-[4.5rem] rounded-[2px] shadow-xl" />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white">
                You receive 2 separate reports
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-3xl font-semibold text-ink">Bundle with {pgx.name}</h3>
              <p className="mt-1 font-medium text-gray-800">
                Add {pgx.name.replace("®", "")} to {origene.name} or {littlegeneius.name}
              </p>
              <p className="mt-3 inline-flex self-start rounded-full bg-gold-light px-3 py-1 text-xs font-semibold text-gold-dark">
                Special bundle pricing
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs text-gray-500">
                    <tr>
                      <th scope="col" className="px-3 pt-2.5 pb-1.5 font-semibold">Bundle</th>
                      <th scope="col" className="px-3 pt-2.5 pb-1.5 text-right font-semibold">Essential</th>
                      <th scope="col" className="px-3 pt-2.5 pb-1.5 text-right font-semibold">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {(pgx.bundles ?? []).map((b) => (
                      <tr key={b.label}>
                        <th scope="row" className="px-3 py-2.5 font-normal text-gray-800">{b.label}</th>
                        {b.packages.map((pkg) => (
                          <td key={pkg.tier} className="px-3 py-2.5 text-right font-bold text-ink tabular-nums">
                            {pkg.price}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-auto pt-6">
                <p className="text-sm text-gray-600">2 separate reports</p>
                <a
                  href={whatsappLink(`Hi MGRC, I'd like to order a bundle with ${pgx.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 ${orderBtn}`}
                >
                  <FaWhatsapp aria-hidden />
                  Order bundle via WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Combo Package */}
          <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl sm:flex-row lg:flex-col">
            <div className="relative flex min-h-56 items-center justify-center bg-night px-4 py-10 sm:w-[42%] sm:shrink-0 lg:w-auto">
              <div className="flex items-center">
                {covers.map((c, i) => (
                  <Image
                    key={i}
                    src={c.image}
                    alt=""
                    width={480}
                    height={679}
                    className={`w-20 sm:w-[5.0rem] rounded-[2px] shadow-xl ${
                      i === 1 ? "relative z-10 -mx-5 -translate-y-2" : i === 0 ? "-rotate-6" : "rotate-6"
                    }`}
                  />
                ))}
              </div>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white">
                2 or more reports
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-3xl font-semibold text-ink">Combo Package</h3>
              <p className="mt-1 font-medium text-gray-800">Order two or more reports together</p>
              <p className="mt-3 inline-flex self-start rounded-full bg-gold-light px-3 py-1 text-xs font-semibold text-gold-dark">
                Special combo pricing
              </p>
              <p className="mt-4 text-sm text-gray-700">Mix and match any reports for yourself and your family, for example:</p>
              <Ticks
                items={[
                  `${origene.name} + ${origene.name}`,
                  `${origene.name} + ${littlegeneius.name}`,
                  `${littlegeneius.name} + ${littlegeneius.name}`,
                  "Or any 2 or more reports",
                ]}
              />
              <div className="mt-auto pt-6">
                <p className="text-sm text-gray-600">Price depends on your combination. Message us for a combo quote.</p>
                <a
                  href={whatsappLink("Hi MGRC, I'd like to ask about a Combo Package price.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 ${orderBtn}`}
                >
                  <FaWhatsapp aria-hidden />
                  Ask for combo price
                </a>
              </div>
            </div>
          </article>

          {/* Personalised Supplements */}
          <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl sm:flex-row lg:flex-col">
            <div className="relative min-h-72 bg-white sm:w-[42%] sm:shrink-0 sm:border-r sm:border-gray-100 lg:w-auto lg:border-r-0 lg:border-b">
              <Image
                src="/images/products/personalised-supplements.jpg"
                alt="Personalised supplements bottle"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-contain p-2"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-3xl font-semibold text-ink">Personalised Supplements</h3>
              <p className="mt-1 font-medium text-gray-800">Personalise your supplements with your genetic profile</p>
              <p className="mt-3 inline-flex self-start rounded-full bg-gold-light px-3 py-1 text-xs font-semibold text-gold-dark">
                Available with {origene.name} only
              </p>
              <Ticks
                items={[
                  "Recommendations based on your genetic profile",
                  "Tailored to your nutritional needs",
                  "A more personalised approach to supplementation",
                ]}
              />
              <div className="mt-auto pt-6">
                <p className="text-sm text-gray-600">Available as an {origene.name} add-on</p>
                <a
                  href={whatsappLink("Hi MGRC, I'd like to ask about Personalised Supplements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 ${orderBtn}`}
                >
                  <FaWhatsapp aria-hidden />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

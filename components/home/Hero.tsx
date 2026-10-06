import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { media } from "@/lib/media";
import { whatsappLink } from "@/lib/site";

const trustPoints = [
  "20+ years in genomics, listed on Bursa Malaysia",
  "Simple cheek swab, collected at home",
  "Reports in English and 中文",
];

export default function Hero() {
  const hasPhoto = Boolean(media.hero);

  return (
    <section className="relative overflow-hidden bg-night text-white">
      {/* When a hero photo is set, it fills the background behind the text */}
      {hasPhoto && (
        <>
          <Image src={media.hero!} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/10" aria-hidden />
        </>
      )}

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-20 md:grid-cols-[1.15fr_1fr] md:pt-28 md:pb-28">
        <div>
          <p className="font-semibold tracking-wide text-gold">Malaysian Genomics Resource Centre</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] font-semibold md:text-[5.25rem]">
            Your DNA has a story. Read it.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Genetic screening for you, your child and your medicines. Collect your sample at
            home, and our lab turns it into a clear, personal report.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#tests"
              className="rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-colors hover:bg-[#ffbb52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Find your test
            </a>
            <a
              href={whatsappLink("Hi MGRC, I'd like to know which genetic test suits me.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition-colors hover:border-white"
            >
              <FaWhatsapp className="text-lg text-[#25D366]" aria-hidden />
              Ask us on WhatsApp
            </a>
          </div>

          <ul className="mt-12 space-y-2.5 text-sm text-white/70">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <FiCheck className="shrink-0 text-gold" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Without a photo: the three real reports, presented like a product shot */}
        {!hasPhoto && (
          <div className="relative mx-auto h-[20rem] w-full max-w-md sm:h-[25rem]" aria-hidden>
            <Image
              src="/images/reports/dtect-pgx-cover.jpg"
              alt=""
              width={480}
              height={679}
              className="absolute top-14 left-2 w-40 -rotate-[8deg] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:left-0 sm:w-52"
            />
            <Image
              src="/images/reports/littlegeneius-cover.jpg"
              alt=""
              width={480}
              height={679}
              className="absolute top-14 right-2 w-40 rotate-[8deg] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:right-0 sm:w-52"
            />
            <Image
              src="/images/reports/origene-cover.jpg"
              alt=""
              width={480}
              height={679}
              priority
              className="absolute top-0 left-1/2 z-10 w-44 -translate-x-1/2 rounded-sm shadow-[0_40px_80px_rgba(0,0,0,0.6)] sm:w-60"
            />          </div>
        )}
      </div>
    </section>
  );
}

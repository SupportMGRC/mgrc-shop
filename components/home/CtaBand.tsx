import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="bg-gold">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-xl font-display text-5xl leading-tight font-semibold text-ink">
            Not sure which test is right for you?
          </h2>
          <p className="mt-3 text-lg text-ink/75">
            Tell us what you&apos;d like to know, and our team will recommend a test.
          </p>
        </div>
        <a
          href={whatsappLink("Hi MGRC, can you help me choose a genetic test?")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-night px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <FaWhatsapp className="text-gold" aria-hidden />
          Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
}

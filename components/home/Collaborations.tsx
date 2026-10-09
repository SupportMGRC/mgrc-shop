import { FaWhatsapp } from "react-icons/fa";
import CollaboratorGrid from "@/components/home/CollaboratorGrid";
import { whatsappLink } from "@/lib/site";

// Homepage "Collaborations" section (content_07102026.docx): partner logos + "Collaborate with us" WhatsApp button.
export default function Collaborations() {
  return (
    <section className="border-t border-gray-200 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gold-dark uppercase">Collaborations</p>
          <h2 className="mt-3 font-display text-5xl font-semibold text-ink md:text-6xl">Our collaborators</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Trusted by leading hospitals, universities, research institutes and industry partners.
          </p>
        </div>

        <CollaboratorGrid />

        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Hi MGRC, I'd like to discuss a collaboration.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-night px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <FaWhatsapp className="text-gold" aria-hidden />
            Collaborate with us
          </a>
        </div>
      </div>
    </section>
  );
}

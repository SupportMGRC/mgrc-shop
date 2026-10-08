import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { collaborators } from "@/lib/collaborations";
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

        <ul className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4">
          {collaborators.map((c) => (
            <li
              key={c.name}
              className="flex h-20 w-[calc((100%-1.5rem)/3)] items-center justify-center rounded-2xl border border-gray-200 bg-white px-3 sm:w-[calc((100%-2.25rem)/4)] md:h-24 md:w-[calc((100%-4rem)/5)] lg:w-[calc((100%-7rem)/8)]"
            >
              <Image
                src={c.src}
                alt={c.name}
                title={c.name}
                width={c.w * 2}
                height={c.h * 2}
                style={{ width: c.w, maxWidth: "100%", height: "auto", maxHeight: c.h }}
                className="object-contain"
              />
            </li>
          ))}
        </ul>

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

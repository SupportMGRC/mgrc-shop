import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { site, whatsappLink, navLinks, legalLinks } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  // Only show social icons that have a URL filled in
  const socials = [
    { href: site.social.facebook, label: "Facebook", icon: <FaFacebookF /> },
    { href: site.social.instagram, label: "Instagram", icon: <FaInstagram /> },
    { href: site.social.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
    { href: whatsappLink(), label: "WhatsApp", icon: <FaWhatsapp /> },
  ].filter((s) => s.href);

  const contacts = [
    { icon: <FaClock />, title: "Operating hours", lines: [site.hours] },
    { icon: <FaPhoneAlt />, title: "Tel", lines: [site.tel.join(", ")] },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp (for product/medical enquiries)",
      lines: [site.whatsappDisplay],
      href: whatsappLink(),
    },
    { icon: <FaEnvelope />, title: "Email us", lines: [site.email], href: `mailto:${site.email}` },
  ];

  return (
    <footer className="bg-night-deep text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1.4fr_0.75fr_0.75fr]">
        {/* Contact details */}
        <div>
          <Image
            src="/images/mgrc-logo-white.png"
            alt="Malaysian Genomics Resource Centre"
            width={245}
            height={100}
            className="mb-6 h-12 w-auto"
          />
          <ul className="space-y-4">
            {contacts.map((c) => (
              <li key={c.title} className="flex gap-3">
                <span className="mt-1 text-lg text-gold">{c.icon}</span>
                <div>
                  <p className="font-semibold text-white">{c.title}</p>
                  {c.lines.map((line) =>
                    c.href ? (
                      <a key={line} href={c.href} className="text-sm hover:text-gold">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm">{line}</p>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Map and address */}
        <div>
          <p className="mb-4 font-semibold text-white">Find us at</p>
          <iframe
            src={site.mapEmbed}
            title="MGRC location map"
            className="h-56 w-full rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="mt-4 text-sm font-semibold uppercase text-gray-400">
            {site.company} ({site.regNo})
          </p>
          <p className="mt-2 text-sm leading-relaxed">{site.address}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <p className="mb-4 font-semibold text-white">Explore</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div>
          <p className="mb-4 font-semibold text-white">Connect</p>
          <div className="flex gap-4 text-xl">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hover:text-gold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-400">
          Copyright © 2004–{year} {site.company} ({site.regNo}). All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, whatsappLink } from "@/lib/site";

const clean = (p: string) => p.replace(/\/$/, "") || "/";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Slimmer header with a soft shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    clean(href) === "/" ? clean(pathname) === "/" : clean(pathname).startsWith(clean(href));

  const orderLink = whatsappLink("Hi MGRC, I'd like to order a genetic test.");

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-gray-200/70 shadow-[0_6px_20px_rgba(0,0,0,0.07)]" : "border-gray-200"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 transition-[height] duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" aria-label="MGRC Shop home" className="shrink-0">
          <Image
            src="/images/mgrc-logo.png"
            alt="Malaysian Genomics Resource Centre"
            width={245}
            height={100}
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-10" : "h-12"}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform after:duration-300 ${
                isActive(link.href) ? "text-ink after:scale-x-100" : "text-gray-600 after:scale-x-0 hover:text-ink hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-night px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-night-light sm:inline-flex"
          >
            <FaWhatsapp className="text-gold" aria-hidden />
            Order now
          </a>
          <button
            type="button"
            className="p-2 text-ink lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gray-200 bg-white lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block border-l-4 px-4 py-3 font-medium ${
                isActive(link.href) ? "border-gold bg-mist text-ink" : "border-transparent text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-4">
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-night px-5 py-3 font-semibold text-white"
            >
              <FaWhatsapp className="text-gold" aria-hidden />
              Order now on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

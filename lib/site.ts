// All contact details, links and menu items live here.
// Change something once here and it updates across the whole site.

export const site = {
  company: "Malaysian Genomics Resource Centre Berhad",
  regNo: "652790-V",
  hours: "Monday – Friday 8:30 am – 5:30 pm",
  tel: ["+603-7890 0015", "+603-7890 0016"],
  whatsappDisplay: "+6011-5880 4488",
  whatsappNumber: "601158804488", // digits only, with country code, no + or dashes
  fax: "+603-6150 3232",
  email: "genomics@mgrc.com.my",
  address:
    "8F Jalan Teknologi 3/6, Taman Sains Selangor 1, Kota Damansara (PJU5), 47810 Petaling Jaya, Selangor, Malaysia",
  mapEmbed:
    "https://www.google.com/maps?q=Malaysian+Genomics+Resource+Centre+Kota+Damansara&output=embed",
  mainSite: "https://www.mgrc.com.my",
  social: {
    facebook: "", // TODO: paste MGRC Facebook URL (copy from main site footer)
    instagram: "https://www.instagram.com/mgrc_genomics/",
    linkedin: "https://www.linkedin.com/company/mgrc/",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products/", label: "Our Products" },
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/sample-reports/", label: "Sample Reports" },
  { href: "/faq/", label: "FAQ" },
];

export const legalLinks = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms & Conditions" },
];

// Builds a WhatsApp chat link, optionally with a pre-filled message.
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// All contact details, links and menu items live here.
// Change something once here and it updates across the whole site.

export const site = {
  company: "Malaysian Genomics Resource Centre Berhad",
  regNo: "652790-V",
  hours: "Monday – Friday 8:30 am – 5:30 pm",
  tel: ["+603-7890 0015", "+603-7890 0016"],
  whatsappDisplay: "+6011-1310 5761",
  whatsappNumber: "601113105761", // digits only, with country code, no + or dashes
  email: "genomics@mgrc.com.my",
  address:
    "8F Jalan Teknologi 3/6, Taman Sains Selangor 1, Kota Damansara (PJU5), 47810 Petaling Jaya, Selangor, Malaysia",
  // Google Maps embed (no API key needed). The search text below picks the pin.
  mapEmbed:
    "https://maps.google.com/maps?q=Malaysian%20Genomics%20Resource%20Centre%20Berhad%2C%20Jalan%20Teknologi%203%2F6%2C%20Kota%20Damansara%2C%20Petaling%20Jaya&z=16&hl=en&output=embed",
  mainSite: "https://www.mgrc.com.my",
  social: {
    facebook: "https://www.facebook.com/MGRCberhad/",
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
  { href: "/refund-policy/", label: "Refund Policy" },
];

// Builds a WhatsApp chat link, optionally with a pre-filled message.
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

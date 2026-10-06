// FAQ list, grouped by topic. The homepage shows the first few; the FAQ page shows all.
// TODO: confirm every answer with Genomics before launch.

export type Faq = { q: string; a: string };

export const faqGroups: { topic: string; items: Faq[] }[] = [
  {
    topic: "Ordering",
    items: [
      {
        q: "How do I order?",
        a: "Tap any “Order via WhatsApp” button. Our team will confirm the price, payment and delivery of your kit.",
      },
      {
        q: "Which test should I choose?",
        a: "ORIGENE is for adults who want a full picture of their genetic health. LittleGENEius is for children. Dtect PGx shows how your genes affect your medicines. If you're unsure, message us and we'll help you decide.",
      },
      {
        q: "How do I pay?",
        a: "Our team will share the payment options when you order through WhatsApp.",
      },
    ],
  },
  {
    topic: "Your sample",
    items: [
      {
        q: "What kind of sample do you need?",
        a: "A simple cheek swab or saliva sample, depending on the test. The kit comes with step-by-step instructions.",
      },
      {
        q: "Do I need to visit a clinic?",
        a: "No. You can collect your sample at home using the kit we send you.",
      },
      {
        q: "Do I need to take the test again in future?",
        a: "No. Your genes don't change over your lifetime, so it's a one-time test.",
      },
    ],
  },
  {
    topic: "Results and reports",
    items: [
      {
        q: "How long until I get my results?",
        a: "About 15–20 working days after our lab receives your sample.",
      },
      {
        q: "What languages are the reports in?",
        a: "ORIGENE and LittleGENEius reports are available in English and 中文. Dtect PGx is available in English.",
      },
      {
        q: "Is this a medical diagnosis?",
        a: "No. Genetic screening shows your genetic predisposition, not a diagnosis. Please discuss your results with your doctor before making any health or medication decisions.",
      },
    ],
  },
  {
    topic: "Privacy",
    items: [
      {
        q: "Is my genetic data kept private?",
        a: "Yes. Your personal and genetic information is handled confidentially, in line with Malaysia's Personal Data Protection Act (PDPA).",
      },
    ],
  },
];

// Picks a few common questions for the homepage
export const featuredFaqs: Faq[] = [
  faqGroups[2].items[0],
  faqGroups[1].items[0],
  faqGroups[1].items[2],
  faqGroups[0].items[0],
];

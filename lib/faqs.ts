// FAQ list, grouped by topic. Wording: finalised content file from Genomics (Ting Ning), 6 Oct 2026.
// Small edits made for the website (Genomics to confirm):
//  - "saliva sample" changed to "sample" / "cheek swab", as the kit uses a cheek swab
//  - gift answer: orders are placed on WhatsApp (the site has no checkout)

export type Faq = {
  q: string;
  a: string;
  link?: { href: string; label: string }; // optional link shown under the answer
};

export const faqGroups: { topic: string; items: Faq[] }[] = [
  {
    topic: "Your sample",
    items: [
      {
        q: "How is the DNA sample collected at home?",
        a: "Sample collection is quick, simple, and non-invasive. Using the swab provided in your kit, gently rub the inside of your cheeks to collect your sample. Then place the swab into the collection tube, seal it securely, and return it using the envelope. The entire process takes less than two minutes and can be completed in the comfort of your home.",
        link: { href: "/how-it-works/", label: "See how it works, step by step" },
      },
      {
        q: "Do I need to fast before collecting my sample?",
        a: "No fasting is required. However, for best results, we recommend avoiding food, beverages, smoking, or chewing gum for at least 30 minutes before collecting your sample.",
      },
      {
        q: "Will my sample be sufficient for analysis?",
        a: "In rare cases, a sample may not contain enough DNA for analysis. If this happens, we may contact you and arrange for a replacement collection kit.",
      },
      {
        q: "Will my DNA change over time?",
        a: "No. Your DNA remains essentially the same throughout your life, which means your genetic test only needs to be performed once.",
      },
    ],
  },
  {
    topic: "Results and reports",
    items: [
      {
        q: "How long does it take to receive the DNA reports?",
        a: "Results are typically available within 21 days after our laboratory receives your sample. Once your analysis is complete, we will notify you via WhatsApp and send your DNA reports to your registered email address.",
      },
      {
        q: "Where do I view my DNA test results?",
        a: "Your personalised DNA reports will be delivered securely to your registered email address. You can review your results at your convenience on any compatible device.",
      },
      {
        q: "Will I receive guidance on my DNA test results?",
        a: "Yes. Your DNA test includes a complimentary one-to-one report consultation online session. During the session, our team will guide you through your report, explain the insights provided, and answer general questions about your results.",
      },
      {
        q: "Why might my results differ from another DNA test provider's results?",
        a: "Different DNA testing providers may analyse different genetic markers and use different scientific models when generating reports. As a result, some findings or recommendations may vary. Our reports are based on the genetic markers and methodologies used in our analysis process.",
      },
    ],
  },
  {
    topic: "Privacy",
    items: [
      {
        q: "How is my genetic data secured and protected?",
        a: "We prioritize your privacy above all else. Your genetic data is stored securely. We do not sell or share your DNA details with any third parties or insurance providers without your explicit consent. Your sample is anonymized inside our laboratory database using random barcoding.",
      },
    ],
  },
  {
    topic: "Ordering",
    items: [
      {
        q: "Can I buy a DNA test as a gift?",
        a: "Yes. A DNA test kit makes a thoughtful gift for family members or friends who are interested in learning more about their health and wellness. Simply share the recipient's shipping address when you order with us on WhatsApp, and we will deliver the kit directly to them.",
      },
    ],
  },
];

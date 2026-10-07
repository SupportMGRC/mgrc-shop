// FAQ list — questions, answers and order exactly as in the Genomics content file (content_06102026.docx).

export type Faq = {
  q: string;
  a: string;
  link?: { href: string; label: string }; // optional link shown under the answer
};

export const faqs: Faq[] = [
  {
    q: "Will my DNA change over time?",
    a: "No. Your DNA remains essentially the same throughout your life, which means your genetic test only needs to be performed once.",
  },
  {
    q: "How is the DNA sample collected at home?",
    a: "Sample collection is quick, simple, and non-invasive. Using the swab provided in your kit, gently rub the inside of your cheeks to collect your sample. Then place the swab into the collection tube, seal it securely, and return it using the envelope. The entire process takes less than two minutes and can be completed in the comfort of your home.",
    link: { href: "/how-it-works/", label: "See How It Works" },
  },
  {
    q: "Do I need to fast before providing my sample?",
    a: "No fasting is required. However, for best results, we recommend avoiding food, beverages, smoking, or chewing gum for at least 30 minutes before collecting your sample.",
  },
  {
    q: "How long does it take to receive the DNA reports?",
    a: "Results are typically available within 21 days after our laboratory receives your sample. Once your analysis is complete, we will notify you via WhatsApp and send your DNA reports to your registered email address.",
  },
  {
    q: "How is my genetic data secured and protected?",
    a: "We prioritize your privacy above all else. Your genetic data is stored securely. We do not sell or share your DNA details with any third parties or insurance providers without your explicit consent. Your sample is anonymized inside our laboratory database using random barcoding.",
  },
  {
    q: "Where do I view my DNA test results?",
    a: "Your personalised DNA reports will be delivered securely to your registered email address. You can review your results at your convenience on any compatible device.",
  },
  {
    q: "Will my sample be sufficient for analysis?",
    a: "In rare cases, a sample may not contain enough DNA for analysis. If this happens, we may contact you and arrange for a replacement collection kit.",
  },
  {
    q: "Can I buy a DNA test as a gift?",
    a: "Yes. A DNA test kit makes a thoughtful gift for family members or friends who are interested in learning more about their health and wellness. Simply enter the recipient's shipping address during checkout, and we will deliver the kit directly to them.",
  },
  {
    q: "Why might my results differ from another DNA test provider's results?",
    a: "Different DNA testing providers may analyse different genetic markers and use different scientific models when generating reports. As a result, some findings or recommendations may vary. Our reports are based on the genetic markers and methodologies used in our analysis process.",
  },
  {
    q: "Will I receive guidance on my DNA test results?",
    a: "Yes. Your DNA test includes a complimentary one-to-one report consultation online session. During the session, our team will guide you through your report, explain the insights provided, and answer general questions about your results.",
  },
];

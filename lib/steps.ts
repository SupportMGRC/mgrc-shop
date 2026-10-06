// "How it works" steps — used on the homepage, How It Works page and product pages.
// Photos: put files in public/images/photos/ and type the path in `photo`.
// TODO: confirm every step (especially kit delivery and courier) with Genomics.

export const steps = [
  {
    title: "Order via WhatsApp",
    photo: null as string | null, // TODO: e.g. someone messaging on phone
    text: "Tell us which test you want. We'll confirm the price, payment and delivery of your kit.",
    detail: [
      "Tap any “Order via WhatsApp” button on this site, or message us at +6011-5880 4488.",
      "Our team confirms your test, price and payment method.",
      "We arrange delivery of your sample collection kit to your address.",
    ],
  },
  {
    title: "Collect your sample",
    photo: null as string | null, // TODO: kit being used
    text: "Use the kit at home. A simple cheek swab or saliva sample, with instructions included.",
    detail: [
      "Don't eat, drink, smoke or chew gum for 30 minutes before collecting your sample.",
      "Follow the step-by-step instructions in your kit.",
      "Seal the sample tube and fill in the form included in the kit.",
    ],
  },
  {
    title: "Send it to our lab",
    photo: null as string | null, // TODO: packed kit / courier
    text: "Return the kit using the courier arrangement we give you.",
    detail: [
      "Pack the sample as shown in the kit instructions.",
      "Send it back using the courier arrangement we provide.",
      "We'll let you know once our lab receives your sample.",
    ],
  },
  {
    title: "Get your report",
    photo: null as string | null, // TODO: person reading report
    text: "Your personal report is ready in about 15–20 working days.",
    detail: [
      "Our lab analyses your DNA and prepares your personal report.",
      "Your report is ready in about 15–20 working days after we receive your sample.",
      "Have questions about your results? Our team is a WhatsApp message away.",
    ],
  },
];

// "How it works" steps — used on the How It Works page (full text + picture)
// and as short cards on the homepage and product pages.
// Wording from the Genomics content files (content_07102026.docx, content_08102026.docx), finalised.
// `short` lines for steps 2–4 approved by Noor (step 1 is from the content file).

export type Step = {
  title: string;
  image: string; // How It Works page picture
  text: string; // full step text (How It Works page)
  note?: string; // extra line under the text
  short: string; // one-line summary (homepage / product pages)
  icon: "order" | "swab" | "return" | "report";
};

export const stepsIntro =
  "Getting started with your DNA test is simple. Follow these four steps from ordering your kit to receiving your personalised DNA report.";

export const steps: Step[] = [
  {
    title: "Place Your Order",
    image: "/images/how-it-works/step-1.jpg",
    text: "Contact us via WhatsApp to place your order. After completing your payment, send us your transaction receipt for confirmation. We will prepare and arrange your DNA collection kit for delivery.",
    short: "Order in minutes, kit delivered to your doorstep.",
    icon: "order",
  },
  {
    title: "Collect Your Sample",
    image: "/images/how-it-works/step-2.jpg",
    text: "For optimal sample collection, wait 1 hour after eating or brushing your teeth. Rinse your mouth with water, then carefully open the collection kit. Gently rub the swab along the inside of your cheeks on both sides to collect your sample.",
    short: "A quick, painless cheek swab at home.",
    icon: "swab",
  },
  {
    title: "Return Your Sample",
    image: "/images/how-it-works/step-3.jpg",
    text: "Please complete your sample collection and return it to us within 2 weeks of receiving your DNA test kit. Place the swab into the provided collection tube, securely close the tube, place it inside the biohazard bag, and seal the return package. Send your sample to the assigned shipping provider and notify us once it has been shipped.",
    short: "Send it back within 2 weeks.",
    icon: "return",
  },
  {
    title: "Receive Your Report",
    image: "/images/how-it-works/step-4.jpg",
    text: "Once your sample has been received and analysed, your personalised DNA report will be prepared within 21 days. Your report will be sent to you via email in digital format.",
    note: "For Premium orders, an additional 7 days is required for the printed hardcopy report to be prepared and delivered to you.",
    short: "Your digital report, emailed within 21 days.",
    icon: "report",
  },
];

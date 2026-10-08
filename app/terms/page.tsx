import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Terms & Conditions | MGRC Shop" };

// Wording exactly as in the Genomics content file (content_07102026.docx), finalised.
const notice: { title: string; paragraphs: string[]; bullets?: string[]; after?: string[] }[] = [
  {
    title: "Personal Data Notice (“Notice”)",
    paragraphs: [
      "Malaysian Genomics Resource Centre Berhad (Co. 652790-V), 8F, Jalan Teknologi 3/6, Taman Sains Selangor 1, Kota Damansara (PJU5), 47810 Petaling Jaya, Selangor, Malaysia (“Company”), hereby notifies you that your personal and/or sensitive personal data (“Personal Data”) will be collected and processed in accordance with the Personal Data Protection Act 2010 (“Act”).",
    ],
  },
  {
    title: "Personal Data Collected",
    paragraphs: [
      "Personal Data may include information provided in the Order & Consent Form, including your name, identification number, address, telephone number and email address, as well as your biological sample containing DNA and genetic report (“Report”).",
    ],
  },
  {
    title: "Purpose of Processing",
    paragraphs: [
      "Your Personal Data is collected, processed and retained to provide genetic screening services (“Services”), including processing your biological sample, generating and providing your Report, and providing further services or updates requested by you. The Company will process your Personal Data only for lawful and necessary purposes related to its activities.",
    ],
  },
  {
    title: "Disclosure & Protection",
    paragraphs: [
      "The Company will not disclose your Personal Data to third parties except where required by law, requested by a regulatory authority, or with your express consent. Reasonable measures will be taken to protect your Personal Data against loss, misuse and unauthorised access or disclosure.",
    ],
  },
  {
    title: "Accuracy of Information",
    paragraphs: [
      "You confirm that the Personal Data provided is true, accurate, current and complete, and that the biological sample submitted is your own.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: ["You may, subject to the Act:"],
    bullets: [
      "request access to your Personal Data;",
      "request correction or updating of your Personal Data;",
      "withdraw your consent to processing;",
      "request cessation of processing where permitted under the Act; and",
      "request cessation of processing for direct marketing purposes.",
    ],
    after: [
      "Requests must be made to the Company in writing. Withdrawal of consent may result in the Company being unable to continue providing the Services.",
    ],
  },
  {
    title: "Sensitive Personal Data",
    paragraphs: [
      "You expressly consent to the processing of your sensitive Personal Data as defined under the Act, as indicated in the Order & Consent Form.",
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Terms & Conditions" intro="The terms that apply when you order and use MGRC genetic tests." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4">
          {notice.map((s, i) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {String.fromCharCode(97 + i)}. {s.title}
              </h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-gray-700">{p}</p>
              ))}
              {s.bullets && (
                <ul className="mt-3 list-disc space-y-1 pl-6 leading-relaxed text-gray-700">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-gray-700">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

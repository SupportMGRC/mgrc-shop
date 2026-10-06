import type { Faq } from "@/lib/faqs";

// Accordion based on HyperUI "FAQs — Divided with chevrons" (MIT licence).
// Uses the built-in <details> tag, so it opens/closes without JavaScript.
export default function FaqList({ items, openFirst = false }: { items: Faq[]; openFirst?: boolean }) {
  return (
    <div className="flow-root">
      <div className="-my-4 flex flex-col divide-y divide-gray-300">
        {items.map((faq, i) => (
          <details
            key={faq.q}
            className="group py-4 [&_summary::-webkit-details-marker]:hidden"
            open={openFirst && i === 0}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-ink">
              <h3 className="text-lg font-medium">{faq.q}</h3>
              <svg
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="max-w-2xl pt-3 leading-relaxed text-gray-700">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

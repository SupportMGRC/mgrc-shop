# MGRC Shop — content needed from Genomics / Marketing

Send this list to Genomics. When each item arrives, put the file in the
folder shown and type its path in the file listed. Until then, the site shows a
grey placeholder box. Set SHOW_PLACEHOLDERS = false in lib/media.ts to hide
missing testimonials, logos and numbers before going live.

## Photos  →  public/images/photos/
JPG, under 400 KB each. Real photos of people and the kit work best.

| Photo | Shape | Where to set it |
|---|---|---|
| Hero background: person or family with the kit | Wide (~2000×1200), subject on the right side | lib/media.ts → hero |
| ORIGENE kit / product | Landscape (~1200×900) | lib/products.ts → photo |
| LittleGENEius kit / product | Landscape (~1200×900) | lib/products.ts → photo |
| Dtect PGx kit / product | Landscape (~1200×900) | lib/products.ts → photo |
| Step 1: ordering on phone | Landscape (~1200×900) | lib/steps.ts → photo |
| Step 2: collecting the sample | Landscape | lib/steps.ts → photo |
| Step 3: packed kit / courier | Landscape | lib/steps.ts → photo |
| Step 4: reading the report | Landscape | lib/steps.ts → photo |

## Video
- Sample collection tutorial (YouTube link)  →  lib/media.ts → videoEmbed
- More video testimonials (ORIGENE, Dtect PGx)  →  public/videos/ + lib/testimonials.ts → videoTestimonials
  (compress to 720p MP4 first; see the note in that file)

## Brochures  →  lib/products.ts → brochure
- ORIGENE, LittleGENEius, Dtect PGx. Until set, the button shows "Coming soon".
  To keep them view-only, convert them like the sample reports (scripts/build-report-pages.py).

## Sample reports  →  report-sources/ (not in Git) + lib/reports.ts
- Put the PDF in report-sources/ as <id>-<lang>.pdf, run `python scripts/build-report-pages.py`,
  then update the page count in lib/reports.ts. The PDF itself is never published.

## Prices  →  lib/products.ts → packages
- Done (Essential / Premium, content file 6 Oct 2026)
- Still needed: Dtect PGx on its own (the site shows the ORIGENE + Dtect PGx bundle for now)

## Testimonials  →  lib/testimonials.ts
- Text quotes: 3 or more real customer quotes, with name (or initials), location, product
- Customer permission to publish (including the two LittleGENEius videos)

## Accreditation logos  →  public/images/logos/ + lib/accreditations.ts
- PNG with transparent background, for each accreditation / certification

## Wording to confirm
- Product descriptions, "What's in your report" lists  →  lib/products.ts
- How it works steps (kit delivery, courier, collection instructions)  →  lib/steps.ts
- All FAQ answers  →  lib/faqs.ts
- "Why Us" wording (content file 6 Oct 2026)  →  components/home/WhyUs.tsx
- Open questions for Genomics: "21 days" calendar or working days; consultation included for Dtect PGx?; FAQ wording edits (saliva → cheek swab, gift
  answer refers to WhatsApp ordering); add back "Is this a medical diagnosis?" as an FAQ?

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
| Family / parent with child | Landscape (~1600×1200) | lib/media.ts → family |
| ORIGENE kit / product | Landscape (~1200×900) | lib/products.ts → photo |
| LittleGENEius kit / product | Landscape (~1200×900) | lib/products.ts → photo |
| Dtect PGx kit / product | Landscape (~1200×900) | lib/products.ts → photo |
| 3 extra photos per product (kit contents, report, in use) | Square (~1000×1000) | lib/products.ts → gallery |
| Step 1: ordering on phone | Landscape (~1200×900) | lib/steps.ts → photo |
| Step 2: collecting the sample | Landscape | lib/steps.ts → photo |
| Step 3: packed kit / courier | Landscape | lib/steps.ts → photo |
| Step 4: reading the report | Landscape | lib/steps.ts → photo |

## Video
- Sample collection tutorial (YouTube link)  →  lib/media.ts → videoEmbed

## Numbers  →  lib/stats.ts
- Total tests completed / customers served
- Number of health conditions and traits screened
- (Years in genomics already shows 20+, since 2004)

## Prices  →  lib/products.ts → price
- ORIGENE, LittleGENEius, Dtect PGx (e.g. "RM 1,200")

## Testimonials  →  lib/testimonials.ts
- 3 or more real customer quotes, with name (or initials), location, product
- Customer permission to publish

## Accreditation logos  →  public/images/logos/ + lib/accreditations.ts
- PNG with transparent background, for each accreditation / certification

## Wording to confirm
- Product descriptions, "What's in your report" lists  →  lib/products.ts
- How it works steps (kit delivery, courier, collection instructions)  →  lib/steps.ts
- All FAQ answers  →  lib/faqs.ts
- "Why MGRC" claims (since 2004, Bursa Malaysia, PDPA)  →  components/home/WhyMgrc.tsx
- Privacy Policy and Terms & Conditions (from Legal)

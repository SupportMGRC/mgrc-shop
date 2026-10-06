// ─────────────────────────────────────────────────────────────
// PHOTOS & VIDEO — put files in public/images/photos/ then type the path here.
// Recommended: JPG, under 400 KB each.
// ─────────────────────────────────────────────────────────────

// true  = show grey boxes / sample text where content is still missing
//         (use this when reviewing the site with Genomics)
// false = hide missing testimonials, logos and numbers so the site looks finished
export const SHOW_PLACEHOLDERS = true;

export const media = {
  // Homepage hero background — person or family with the kit (wide, ~2000×1200).
  // When set, it becomes a full-width photo behind the headline.
  hero: null as string | null, // e.g. "/images/photos/hero.jpg"

  // How It Works page — YouTube embed link, e.g. "https://www.youtube.com/embed/VIDEO_ID"
  videoEmbed: null as string | null,
};

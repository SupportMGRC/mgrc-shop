// Customer testimonials. TODO: replace with real quotes (with customer permission),
// then set placeholder: false.

export type Testimonial = {
  quote: string;
  name: string;
  detail: string; // e.g. "Parent, Kuala Lumpur"
  product: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Customer quote goes here. One or two sentences about their experience with the test and report.",
    name: "Customer name",
    detail: "Location",
    product: "ORIGENE®",
    placeholder: true,
  },
  {
    quote: "Customer quote goes here. One or two sentences about their experience with the test and report.",
    name: "Customer name",
    detail: "Parent, location",
    product: "LittleGENEius",
    placeholder: true,
  },
  {
    quote: "Customer quote goes here. One or two sentences about their experience with the test and report.",
    name: "Customer name",
    detail: "Location",
    product: "Dtect® PGx",
    placeholder: true,
  },
];

// ─────────────────────────────────────────────────────────────
// VIDEO TESTIMONIALS — shown on the homepage and on the matching product page.
// To add one: compress the video (720p MP4), put it and a poster JPG in
// public/videos/, then add a line below. `product` must match an id in lib/products.ts.
// ─────────────────────────────────────────────────────────────

export type VideoTestimonial = {
  product: string; // product id, e.g. "littlegeneius"
  title: string;
  src: string;
  poster: string;
  duration: string; // shown on the card, e.g. "3:20"
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    product: "littlegeneius",
    title: "Parent testimonial",
    src: "/videos/littlegeneius-testimonial-1.mp4",
    poster: "/videos/littlegeneius-testimonial-1.jpg",
    duration: "3:20",
  },
  {
    product: "littlegeneius",
    title: "Parent testimonial",
    src: "/videos/littlegeneius-testimonial-2.mp4",
    poster: "/videos/littlegeneius-testimonial-2.jpg",
    duration: "4:45",
  },
];

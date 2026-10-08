// Written customer testimonials — wording exactly as in the Genomics content file (content_08102026.docx).
// Shown on each product page (all 3 for that product) and on Our Products (one per product).

export type Testimonial = {
  id: string;
  productId: "origene" | "littlegeneius" | "dtect-pgx";
  product: string; // tag shown under the quote
  quote: string;
  by: string; // attribution as supplied by Genomics
};

export const testimonials: Testimonial[] = [
  {
    id: "origene-1",
    productId: "origene",
    product: "ORIGENE®",
    quote:
      "I’ve always enjoyed coffee, but I noticed that I don’t tolerate caffeine very well. My ORIGENE report helped me better understand my body’s response to caffeine and encouraged me to be more mindful of my daily intake.",
    by: "ORIGENE customer, age 38",
  },
  {
    id: "origene-2",
    productId: "origene",
    product: "ORIGENE®",
    quote:
      "Sleep has always been a challenge for me. After learning about my genetic trait related to magnesium metabolism, I became more aware of my magnesium intake and overall sleep habits. It inspired me to take a closer look at factors that may affect my sleep quality.",
    by: "ORIGENE customer, Selangor",
  },
  {
    id: "origene-3",
    productId: "origene",
    product: "ORIGENE®",
    quote:
      "One of the insights in my report was surprisingly accurate. It highlighted my tendency toward instant gratification, and it really made me reflect on my everyday decisions, including my online shopping habits. The report gave me a new perspective on myself.",
    by: "Female ORIGENE customer",
  },
  {
    id: "littlegeneius-1",
    productId: "littlegeneius",
    product: "LittleGENEius",
    quote:
      "One thing that stood out to me was how accurately the report reflected my daughter’s ability to understand emotions and read people’s expressions. It helped me appreciate her strengths even more.",
    by: "Father of Averie",
  },
  {
    id: "littlegeneius-2",
    productId: "littlegeneius",
    product: "LittleGENEius",
    quote:
      "As a parent, I found this report especially valuable because it doesn’t just provide insights, it also includes practical suggestions and guidance. It feels like having an action plan to help nurture my child’s potential.",
    by: "Teddy, father of Two",
  },
  {
    id: "littlegeneius-3",
    productId: "littlegeneius",
    product: "LittleGENEius",
    quote:
      "The report provided useful insights into my child’s lactose intolerance tendency, which encouraged us to pay closer attention to her diet and nutritional needs. The information has been helpful in supporting healthier food choices for our family.",
    by: "Dr Andy, medical doctor and father",
  },
  {
    id: "pgx-1",
    productId: "dtect-pgx",
    product: "Dtect® PGx",
    quote:
      "I’ve always wondered why certain medications seemed to affect me differently from others. My pharmacogenomics report gave me valuable insights into how my body may process certain medicines, helping me have a more informed discussion with my healthcare provider.",
    by: "Male customer, age 45",
  },
  {
    id: "pgx-2",
    productId: "dtect-pgx",
    product: "Dtect® PGx",
    quote:
      "Previous medications did not seem to work as effectively for me as expected. My pharmacogenomics report provided valuable insights that I shared with my healthcare provider. Together, we explored a different treatment approach, and the outcome has been much more positive for me.",
    by: "Female customer, age 37",
  },
  {
    id: "pgx-3",
    productId: "dtect-pgx",
    product: "Dtect® PGx",
    quote:
      "As someone who takes multiple medications, I found the report informative and reassuring. It provided insights that I could share with my doctor when reviewing my treatment plan.",
    by: "Customer from Kuala Lumpur",
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

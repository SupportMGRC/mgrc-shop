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

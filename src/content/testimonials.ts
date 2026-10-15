import type { ServiceId } from "./services";

// Placeholder quotes: replace with real, approved client testimonials.
// Attributions stay bracketed until then so nothing ships as a real quote.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  service: ServiceId;
  headshot: { note: string; alt: string };
  placeholder: true;
};

export const featuredTestimonial: Testimonial = {
  quote: "They didn't just run our socials. They gave us a voice people actually want to hear.",
  name: "[Client name]",
  role: "[Head of Marketing, Company]",
  service: "social",
  headshot: {
    note: "Portrait headshot, natural window light, plain backdrop, relaxed and direct to camera.",
    alt: "Portrait of the client",
  },
  placeholder: true,
};

export const testimonials: Testimonial[] = [
  {
    quote: "Our launch night sold out in a week, and we're still posting content from it three months on.",
    name: "[Client name]",
    role: "[Founder, Company]",
    service: "events",
    headshot: {
      note: "Square headshot, candid, warm indoor light.",
      alt: "Portrait of the client",
    },
    placeholder: true,
  },
  {
    quote: "We went from page four to the top three for the searches that bring us work. The phone hasn't stopped.",
    name: "[Client name]",
    role: "[Managing Partner, Company]",
    service: "seo",
    headshot: {
      note: "Square headshot, office daylight, neutral background.",
      alt: "Portrait of the client",
    },
    placeholder: true,
  },
];

import type { ServiceId } from "./services";

export const hero = {
  eyebrow: "Social · Events · SEO · Brand",
  headline: "Make them stop scrolling.",
  lead: "Ssixteen is a four-discipline marketing agency. Social, events, SEO and brand, planned together, made by one team and measured on what actually moves.",
};

/**
 * The 16-cell poster grid. Each row belongs to one service: an illustration
 * in its colour, its two-word promise on ink, and two photos.
 */
export type HeroCell =
  | { type: "photo"; note: string; alt: string }
  | { type: "illustration"; service: ServiceId }
  | { type: "promise"; service: ServiceId };

export const heroGrid: HeroCell[] = [
  // Row 1: social
  {
    type: "photo",
    note: "Square, creator filming a product reel on a phone, daylight, candid.",
    alt: "Creator filming a product video on a phone",
  },
  { type: "illustration", service: "social" },
  {
    type: "photo",
    note: "Square, close-up of a thumb mid-scroll on a phone, street behind, natural light.",
    alt: "Close-up of a hand scrolling a phone",
  },
  { type: "promise", service: "social" },
  // Row 2: events
  { type: "promise", service: "events" },
  {
    type: "photo",
    note: "Square, crowd with phones up at a launch night, warm tungsten light.",
    alt: "Crowd holding phones up at a launch night",
  },
  { type: "illustration", service: "events" },
  {
    type: "photo",
    note: "Square, crew building a stage set, wide angle, work lights on, candid.",
    alt: "Event crew building a stage",
  },
  // Row 3: SEO
  {
    type: "photo",
    note: "Square, hands on a laptop showing an analytics dashboard, daylight, shallow focus.",
    alt: "Hands on a laptop showing analytics",
  },
  { type: "promise", service: "seo" },
  {
    type: "photo",
    note: "Square, strategist at a whiteboard of keywords and sticky notes, natural light.",
    alt: "Strategist mapping keywords on a whiteboard",
  },
  { type: "illustration", service: "seo" },
  // Row 4: brand
  { type: "illustration", service: "brand" },
  {
    type: "photo",
    note: "Square, branded merch flat-lay on concrete, overhead, hard daylight.",
    alt: "Branded merchandise laid out on concrete",
  },
  { type: "promise", service: "brand" },
  {
    type: "photo",
    note: "Square, designer pinning logo sketches to a studio wall, candid.",
    alt: "Designer pinning logo sketches to a wall",
  },
];

export const cta = {
  label: "Let's talk",
  headline: ["Got something loud?", "Let's talk."],
  lead: "Tell us what you're launching, opening or fixing. We'll come back with how we'd make it land.",
};

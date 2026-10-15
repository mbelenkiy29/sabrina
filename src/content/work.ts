import type { ServiceId } from "./services";

// Placeholder case studies: client names and titles are illustrative and must
// be replaced with real projects before launch.
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  service: ServiceId;
  image: { note: string; alt: string };
  placeholder: true;
};

export const work: CaseStudy[] = [
  {
    slug: "halcyon-coffee",
    client: "Halcyon Coffee",
    title: "A feed you can smell through the screen",
    service: "social",
    image: {
      note: "Square, barista pouring latte art shot from above, morning window light, steam visible.",
      alt: "Barista pouring latte art in morning light",
    },
    placeholder: true,
  },
  {
    slug: "northside-run-club",
    client: "Northside Run Club",
    title: "The 5K launch party the whole city ran to",
    service: "events",
    image: {
      note: "Square, runners crossing a finish line at dusk, crowd behind, flash on, candid motion.",
      alt: "Runners crossing a finish line at dusk",
    },
    placeholder: true,
  },
  {
    slug: "mercer-and-hale",
    client: "Mercer & Hale",
    title: "Page one for every search that pays",
    service: "seo",
    image: {
      note: "Square, two people reviewing a laptop at a bright office table, daylight, shallow focus.",
      alt: "Two people reviewing results on a laptop",
    },
    placeholder: true,
  },
  {
    slug: "ollo-skincare",
    client: "Ollo Skincare",
    title: "A brand built to be picked up off the shelf",
    service: "brand",
    image: {
      note: "Square, product bottles on a coloured plinth, hard midday light, crisp shadows.",
      alt: "Skincare bottles on a coloured plinth",
    },
    placeholder: true,
  },
  {
    slug: "spark-summit",
    client: "Spark Summit",
    title: "A 900-seat summit that felt like a gig",
    service: "events",
    image: {
      note: "Square, speaker on stage from the back of a packed room, warm stage light, phones up.",
      alt: "Speaker on stage in front of a packed room",
    },
    placeholder: true,
  },
  {
    slug: "fieldtrip-gin",
    client: "Fieldtrip Gin",
    title: "Short-form that sold out the first batch",
    service: "social",
    image: {
      note: "Square, friends toasting with gin and tonics outdoors, golden hour, natural and unposed.",
      alt: "Friends toasting with drinks at golden hour",
    },
    placeholder: true,
  },
];

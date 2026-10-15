import type { ServiceId } from "./services";

// Placeholder case studies: client names, stories and results are
// illustrative and must be replaced with real projects before launch.
// Values in [brackets] are deliberately unfilled.
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  service: ServiceId;
  year: string;
  deliverables: string[];
  brief: string;
  approach: string;
  results: { value: string; label: string }[];
  image: { note: string; alt: string };
  hero: { note: string; alt: string };
  gallery: { note: string; alt: string };
  placeholder: true;
};

export const work: CaseStudy[] = [
  {
    slug: "halcyon-coffee",
    client: "Halcyon Coffee",
    title: "A feed you can smell through the screen",
    service: "social",
    year: "[Year]",
    deliverables: ["Social strategy", "Content production", "Community management"],
    brief: "A much-loved neighbourhood roaster with a feed that looked like everyone else's. They wanted the online version of walking into the shop.",
    approach: "We moved the camera behind the counter: daily short-form from the roasters and baristas, a weekly 'bean of the week' series and replies with personality.",
    results: [
      { value: "[+X%]", label: "Engaged reach" },
      { value: "[X×]", label: "Followers" },
      { value: "[+X%]", label: "Footfall on launch days" },
    ],
    image: {
      note: "Square, barista pouring latte art shot from above, morning window light, steam visible.",
      alt: "Barista pouring latte art in morning light",
    },
    hero: {
      note: "16:9, behind the counter at opening time, roaster in the background, warm window light.",
      alt: "Coffee shop counter at opening time",
    },
    gallery: {
      note: "Square, phone filming a pour-over in close-up, candid, natural light.",
      alt: "Phone filming a pour-over coffee",
    },
    placeholder: true,
  },
  {
    slug: "northside-run-club",
    client: "Northside Run Club",
    title: "The 5K launch party the whole city ran to",
    service: "events",
    year: "[Year]",
    deliverables: ["Event concept", "Production and run-of-show", "On-the-night content"],
    brief: "A new run club needed a launch big enough to recruit its first few hundred members in one evening.",
    approach: "A dusk 5K that finished in a street party: DJ at the line, a finisher wall and a content crew turning the night into a month of posts.",
    results: [
      { value: "[X]", label: "Runners on the night" },
      { value: "[X]", label: "Members signed up" },
      { value: "[X]", label: "Pieces of content" },
    ],
    image: {
      note: "Square, runners crossing a finish line at dusk, crowd behind, flash on, candid motion.",
      alt: "Runners crossing a finish line at dusk",
    },
    hero: {
      note: "16:9, wide shot of a street party at the finish line, string lights, crowd mid-cheer.",
      alt: "Street party at a 5K finish line",
    },
    gallery: {
      note: "Square, finisher wall covered in signatures, flash, close crop.",
      alt: "Finisher wall covered in signatures",
    },
    placeholder: true,
  },
  {
    slug: "mercer-and-hale",
    client: "Mercer & Hale",
    title: "Page one for every search that pays",
    service: "seo",
    year: "[Year]",
    deliverables: ["Technical SEO audit", "Content strategy", "Local search"],
    brief: "A law firm buried on page four for the searches that bring in their best clients.",
    approach: "We fixed the technical debt first, rebuilt their service pages around how clients actually search and earned local links that matter.",
    results: [
      { value: "[+X%]", label: "Organic traffic" },
      { value: "[X]", label: "Page-one keywords" },
      { value: "[+X%]", label: "Enquiries from search" },
    ],
    image: {
      note: "Square, two people reviewing a laptop at a bright office table, daylight, shallow focus.",
      alt: "Two people reviewing results on a laptop",
    },
    hero: {
      note: "16:9, partners in a glass meeting room mid-conversation, daylight, candid.",
      alt: "Partners talking in a meeting room",
    },
    gallery: {
      note: "Square, close-up of a search results page on a phone, natural light.",
      alt: "Search results on a phone screen",
    },
    placeholder: true,
  },
  {
    slug: "ollo-skincare",
    client: "Ollo Skincare",
    title: "A brand built to be picked up off the shelf",
    service: "brand",
    year: "[Year]",
    deliverables: ["Positioning", "Visual identity", "Packaging system"],
    brief: "A small-batch skincare startup heading into retail with a name nobody could pronounce and packaging nobody noticed.",
    approach: "A sharper name story, a bold type-led identity and a colour-coded pack system you can spot from the end of the aisle.",
    results: [
      { value: "[X]", label: "Stockists at launch" },
      { value: "[X]", label: "Weeks to launch" },
      { value: "1", label: "System across every pack" },
    ],
    image: {
      note: "Square, product bottles on a coloured plinth, hard midday light, crisp shadows.",
      alt: "Skincare bottles on a coloured plinth",
    },
    hero: {
      note: "16:9, full product range lined up on a shelf, straight-on, even studio light.",
      alt: "Skincare range lined up on a shelf",
    },
    gallery: {
      note: "Square, hand picking a bottle off a retail shelf, natural light.",
      alt: "Hand picking a bottle off a shelf",
    },
    placeholder: true,
  },
  {
    slug: "spark-summit",
    client: "Spark Summit",
    title: "A 900-seat summit that felt like a gig",
    service: "events",
    year: "[Year]",
    deliverables: ["Creative concept", "Stage and set", "Live social coverage"],
    brief: "An annual industry summit that had started to feel like a very long meeting.",
    approach: "We staged it like a gig: house band, hard-cut transitions between speakers, live social coverage on screens around the room.",
    results: [
      { value: "[X]", label: "Seats filled" },
      { value: "[X%]", label: "Rebooked for next year" },
      { value: "[X]", label: "Social impressions" },
    ],
    image: {
      note: "Square, speaker on stage from the back of a packed room, warm stage light, phones up.",
      alt: "Speaker on stage in front of a packed room",
    },
    hero: {
      note: "16:9, packed auditorium from the stage, audience lit by stage wash, wide angle.",
      alt: "Packed auditorium seen from the stage",
    },
    gallery: {
      note: "Square, house band mid-set at the side of the stage, warm light.",
      alt: "House band playing beside the stage",
    },
    placeholder: true,
  },
  {
    slug: "fieldtrip-gin",
    client: "Fieldtrip Gin",
    title: "Short-form that sold out the first batch",
    service: "social",
    year: "[Year]",
    deliverables: ["Launch campaign", "Short-form video", "Creator partnerships"],
    brief: "A first-batch gin with no budget for ads and three months to sell out.",
    approach: "A run of short-form videos shot on the farm where the botanicals grow, plus a handful of local creators who actually drink gin.",
    results: [
      { value: "[X]", label: "Days to sell out" },
      { value: "[X]", label: "Video views" },
      { value: "[X]", label: "Creator posts" },
    ],
    image: {
      note: "Square, friends toasting with gin and tonics outdoors, golden hour, natural and unposed.",
      alt: "Friends toasting with drinks at golden hour",
    },
    hero: {
      note: "16:9, wildflower field at golden hour with a bottle in the foreground, shallow focus.",
      alt: "Gin bottle in a wildflower field",
    },
    gallery: {
      note: "Square, creator filming a pour at a garden table, golden hour.",
      alt: "Creator filming a drink being poured",
    },
    placeholder: true,
  },
  {
    slug: "bloom-dental",
    client: "Bloom Dental",
    title: "From invisible to booked out locally",
    service: "seo",
    year: "[Year]",
    deliverables: ["Local SEO", "Google Business Profile", "Review strategy"],
    brief: "A new practice that didn't show up on the map for anyone searching nearby.",
    approach: "Local SEO done properly: a rebuilt Google Business Profile, location pages, a steady review engine and the basics fixed.",
    results: [
      { value: "[X]", label: "Map pack keywords" },
      { value: "[+X%]", label: "Calls from search" },
      { value: "[X]", label: "New reviews" },
    ],
    image: {
      note: "Square, bright reception desk with a receptionist smiling, daylight, candid.",
      alt: "Bright dental practice reception",
    },
    hero: {
      note: "16:9, practice exterior on a sunny street, signage visible, natural light.",
      alt: "Dental practice exterior on a sunny street",
    },
    gallery: {
      note: "Square, phone showing a map search with pins, close-up.",
      alt: "Map search results on a phone",
    },
    placeholder: true,
  },
  {
    slug: "tidal-swim-school",
    client: "Tidal Swim School",
    title: "A rebrand that made lessons look like fun",
    service: "brand",
    year: "[Year]",
    deliverables: ["Brand strategy", "Identity", "Tone of voice"],
    brief: "A swim school whose brand looked like a leisure-centre timetable, not somewhere kids beg to go.",
    approach: "A playful identity built from wave shapes and a loud colour palette, plus a voice parents actually read to the end.",
    results: [
      { value: "[X]", label: "Weeks to roll out" },
      { value: "[+X%]", label: "Trial bookings" },
      { value: "[X]", label: "Touchpoints rebranded" },
    ],
    image: {
      note: "Square, kids jumping into a bright pool, splash frozen, overhead light.",
      alt: "Children jumping into a swimming pool",
    },
    hero: {
      note: "16:9, poolside with branded kickboards stacked, bright overhead light.",
      alt: "Branded kickboards stacked by a pool",
    },
    gallery: {
      note: "Square, swim school tote bag and cap on a poolside bench, natural light.",
      alt: "Branded tote bag and swim cap by a pool",
    },
    placeholder: true,
  },
  {
    slug: "atlas-removals",
    client: "Atlas Removals",
    title: "The removals firm everyone finds first",
    service: "seo",
    year: "[Year]",
    deliverables: ["Technical SEO", "Service area pages", "Content"],
    brief: "A family removals firm losing quotes to national comparison sites.",
    approach: "Fast pages, a service-area page for every town they cover and a moving checklist people bookmark and share.",
    results: [
      { value: "[+X%]", label: "Quote requests" },
      { value: "[X]", label: "Towns ranking" },
      { value: "[X]", label: "Checklist downloads" },
    ],
    image: {
      note: "Square, movers carrying a sofa out of a terraced house, daylight, candid.",
      alt: "Movers carrying a sofa out of a house",
    },
    hero: {
      note: "16:9, branded removals van on a residential street, morning light.",
      alt: "Removals van on a residential street",
    },
    gallery: {
      note: "Square, stack of labelled moving boxes in an empty room, window light.",
      alt: "Labelled moving boxes in an empty room",
    },
    placeholder: true,
  },
];

/** The six shown on the homepage. */
export const featuredWork = work.slice(0, 6);

export function getCaseStudy(slug: string) {
  return work.find((item) => item.slug === slug);
}

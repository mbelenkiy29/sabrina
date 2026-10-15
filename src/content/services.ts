export type ServiceId = "social" | "events" | "seo" | "brand";

export type Service = {
  id: ServiceId;
  number: string;
  name: string;
  fullName: string;
  /** Two-word promise, also used in the hero grid. */
  promise: string;
  /** One-line pitch for the services strip. */
  pitch: string;
  highlights: string[];
  included: string[];
  outcomes: { value: string; label: string }[];
  illustration: { note: string; alt: string };
};

export const services: Service[] = [
  {
    id: "social",
    number: "01",
    name: "Social",
    fullName: "Social media management",
    promise: "Be seen",
    pitch: "Feeds people stop for. Content that earns the follow, not just the view.",
    highlights: ["Strategy and channel planning", "Content made in-house", "Community and creators"],
    included: [
      "Channel audit and strategy",
      "Monthly content calendar",
      "Short-form video and photo production",
      "Community management",
      "Creator and influencer partnerships",
      "Paid social amplification",
    ],
    outcomes: [
      { value: "[+X%]", label: "Engaged reach" },
      { value: "[X×]", label: "Follower growth" },
      { value: "[X]", label: "Hours saved a month" },
    ],
    illustration: {
      note: "Flat geometric illustration: stacked speech-bubble squares and a phone frame, pink and black only.",
      alt: "Illustration of stacked speech bubbles around a phone",
    },
  },
  {
    id: "events",
    number: "02",
    name: "Events",
    fullName: "Event management",
    promise: "Be felt",
    pitch: "Launches, parties and summits people talk about long after the lights go up.",
    highlights: ["Concept and production", "Venues, suppliers, run-of-show", "Content captured on the night"],
    included: [
      "Event concept and creative",
      "Venue sourcing and supplier management",
      "Budget and run-of-show",
      "Guest lists, ticketing and RSVPs",
      "On-the-day production",
      "Photo, video and social coverage",
    ],
    outcomes: [
      { value: "[X]", label: "Guests through the door" },
      { value: "[X%]", label: "RSVP-to-attendance" },
      { value: "[X]", label: "Pieces of content per event" },
    ],
    illustration: {
      note: "Flat geometric illustration: spotlight cone over stacked stage blocks, orange and black only.",
      alt: "Illustration of a spotlight shining on a stage",
    },
  },
  {
    id: "seo",
    number: "03",
    name: "SEO",
    fullName: "Search engine optimisation",
    promise: "Be found",
    pitch: "Page one for the searches that pay. Technical, content and local — done properly.",
    highlights: ["Technical and on-page SEO", "Content that ranks", "Local search and reviews"],
    included: [
      "Technical SEO audit and fixes",
      "Keyword and competitor research",
      "On-page optimisation",
      "Content strategy and copywriting",
      "Local SEO and Google Business Profile",
      "Monthly ranking and traffic reporting",
    ],
    outcomes: [
      { value: "[+X%]", label: "Organic traffic" },
      { value: "[X]", label: "Page-one keywords" },
      { value: "[+X%]", label: "Organic enquiries" },
    ],
    illustration: {
      note: "Flat geometric illustration: rising bar stack with a magnifier ring, blue and black only.",
      alt: "Illustration of rising bars under a magnifying glass",
    },
  },
  {
    id: "brand",
    number: "04",
    name: "Brand",
    fullName: "Brand development",
    promise: "Be known",
    pitch: "Names, identities and voices built to be picked out of a crowded feed.",
    highlights: ["Positioning and naming", "Visual identity systems", "Voice and guidelines"],
    included: [
      "Brand strategy and positioning",
      "Naming and taglines",
      "Logo and visual identity",
      "Tone of voice",
      "Brand guidelines",
      "Launch toolkit and templates",
    ],
    outcomes: [
      { value: "[X]", label: "Weeks to launch" },
      { value: "[+X%]", label: "Brand recall" },
      { value: "1", label: "System across every channel" },
    ],
    illustration: {
      note: "Flat geometric illustration: interlocking letterform shapes, lime and black only.",
      alt: "Illustration of interlocking letter shapes",
    },
  },
];

export const serviceById = Object.fromEntries(services.map((s) => [s.id, s])) as Record<
  ServiceId,
  Service
>;

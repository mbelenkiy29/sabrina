// Site-wide copy. Values in [brackets] are placeholders to replace with the
// client's real details before launch.

export const site = {
  name: "Ssixteen",
  descriptor: "Social, events, SEO and brand agency",
  description:
    "Ssixteen is a four-discipline marketing agency. Social, events, SEO and brand — planned together, made by one team, measured on what actually moves.",
  email: "hello@ssixteen.com",
  phone: "[Phone number]",
  address: "[Studio address, City]",
  bookingHref: "/contact#book",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

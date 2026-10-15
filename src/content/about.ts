// About page copy. Values in [brackets] are placeholders for real facts.

export const about = {
  headline: "Four disciplines. One loud team.",
  lead: "We started Ssixteen because marketing had been split into too many pieces, with too many agencies and nobody owning the whole picture.",
  statement: "Social, events, search and brand work better when one team plans them together.",
  story: [
    "Ssixteen began in [year] in [city], when [founder name] got tired of watching brands hire four agencies that never spoke to each other.",
    "So we built one team that does all four. The social team sits next to the events crew. The SEO lead reviews the brand work. Every plan has a number on it, and we report against it every month.",
    "Today we work with [X] brands, from neighbourhood favourites to national names. The brief is always the same: make them impossible to ignore.",
  ],
  studioImage: {
    note: "3:2, the team around a big table mid-workshop, sticky notes everywhere, natural light, candid.",
    alt: "The Ssixteen team in a workshop",
  },
  numbers: [
    { value: "[X]", label: "Brands launched" },
    { value: "[X]", label: "Events produced" },
    { value: "[X]", label: "Page-one keywords" },
    { value: "[X]", label: "Years making noise" },
  ],
  values: [
    {
      title: "Loud, not noisy",
      body: "Attention is easy to buy and hard to keep. We go for the kind people remember.",
    },
    {
      title: "One team",
      body: "No hand-offs between agencies. The people planning your launch are the people making it.",
    },
    {
      title: "A number on everything",
      body: "Every piece of work has a goal before it starts and a result after it ships.",
    },
    {
      title: "Made properly",
      body: "Fast doesn't mean sloppy. We sweat the details nobody notices until they're wrong.",
    },
  ],
};

export const team = [
  { role: "Founder & Creative Director" },
  { role: "Head of Social" },
  { role: "Events Lead" },
  { role: "SEO Lead" },
  { role: "Brand Designer" },
  { role: "Content Producer" },
  { role: "Community Manager" },
  { role: "Account Director" },
].map((member, i) => ({
  ...member,
  id: `team-${i + 1}`,
  name: "[Name]",
  headshot: {
    note: "Square headshot, plain light backdrop, natural window light, relaxed and direct to camera.",
    alt: `Portrait of the ${member.role}`,
  },
}));

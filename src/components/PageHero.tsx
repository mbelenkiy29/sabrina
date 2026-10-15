type PageHeroProps = {
  label: string;
  title: string;
  lead?: string;
};

/** Poster-scale page opener: label, h1, optional lead, ink rule beneath. */
export function PageHero({ label, title, lead }: PageHeroProps) {
  return (
    <section className="border-b-2 border-ink px-gutter pt-section pb-12 lg:pb-16">
      <p className="type-label">{label}</p>
      <h1 className="type-display mt-6 max-w-[14ch] text-d1">{title}</h1>
      {lead ? <p className="mt-8 max-w-[44ch] text-lead">{lead}</p> : null}
    </section>
  );
}

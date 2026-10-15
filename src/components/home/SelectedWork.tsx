import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { work } from "@/content/work";

export function SelectedWork() {
  return (
    <section aria-labelledby="work-heading" className="px-gutter py-section">
      <SectionHeading
        id="work-heading"
        label="Selected work"
        title="Proof, not promises."
        action={<ButtonLink href="/work">All work</ButtonLink>}
      />
      <div className="mt-12 grid gap-x-el gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {work.map((item) => (
          <WorkCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}

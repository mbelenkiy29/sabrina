import type { Metadata } from "next";
import { ArtSlot } from "@/components/ArtSlot";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { about, team } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: "One team doing social, events, SEO and brand together.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="About" title={about.headline} lead={about.lead} />

      <section aria-labelledby="story-heading" className="grid gap-12 px-gutter py-section lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="story-heading" className="type-label">
            Our story
          </h2>
          <p className="type-display mt-6 text-d2">{about.statement}</p>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
          <ArtSlot kind="photo" ratio="3/2" note={about.studioImage.note} alt={about.studioImage.alt} />
          {about.story.map((paragraph) => (
            <p key={paragraph} className="text-lead">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-label="Ssixteen in numbers" className="border-y-2 border-ink bg-fog">
        <dl className="ruled-grid grid grid-cols-2 lg:grid-cols-4">
          {about.numbers.map((n) => (
            <div key={n.label} className="flex flex-col-reverse gap-5 bg-fog p-card py-12">
              <dt className="type-label">{n.label}</dt>
              <dd className="type-display text-d1 leading-none">{n.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="values-heading" className="py-section">
        <div className="px-gutter">
          <SectionHeading id="values-heading" label="What we believe" title="Four rules we work by." />
        </div>
        <ol className="ruled-grid mt-12 grid border-y-2 border-ink md:grid-cols-2 xl:grid-cols-4 lg:mt-16">
          {about.values.map((v, i) => (
            <li key={v.title} className="flex flex-col gap-6 bg-canvas p-card pb-12">
              <span aria-hidden="true" className="type-display text-d2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="type-display text-d3">{v.title}</h3>
              <p className="max-w-[34ch]">{v.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="team-heading" className="px-gutter pb-section">
        <SectionHeading id="team-heading" label="The team" title="The people making the noise." />
        <ul className="mt-12 grid grid-cols-2 gap-x-el gap-y-10 lg:mt-16 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.id} className="flex flex-col gap-3">
              <ArtSlot kind="photo" note={member.headshot.note} alt={member.headshot.alt} />
              <div>
                <p className="type-display text-d3">{member.name}</p>
                <p className="text-small font-semibold">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}

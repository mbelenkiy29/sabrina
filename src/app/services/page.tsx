import type { Metadata } from "next";
import { ArtSlot } from "@/components/ArtSlot";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/PageHero";
import { serviceBg } from "@/components/service-color";
import { WorkCard } from "@/components/WorkCard";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Services",
  description: "Social media management, event management, SEO and brand development from one team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Four services. One loud plan."
        lead="Pick one or run all four. Either way, the same team plans it, makes it and measures it."
      />

      <nav aria-label="Services on this page" className="border-b-2 border-ink">
        <ul className="ruled-grid grid grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.id} className={serviceBg[s.id]}>
              <a
                href={`#${s.id}`}
                className="group flex min-h-28 flex-col justify-between gap-4 p-card decoration-2 underline-offset-4"
              >
                <span className="type-label">{s.number}</span>
                <span className="type-display flex items-end justify-between gap-2 text-d3 group-hover:underline">
                  {s.name}
                  <span aria-hidden="true">↓</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((s) => {
        const related = work.find((item) => item.service === s.id);
        return (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`${s.id}-heading`}
            className={`border-b-2 border-ink px-gutter pt-12 pb-section ${serviceBg[s.id]}`}
          >
            <div className="type-label flex items-start justify-between gap-4">
              <span>{s.number}</span>
              <span className="text-right">{s.fullName}</span>
            </div>
            <h2
              id={`${s.id}-heading`}
              className="type-display mt-6 text-[clamp(5rem,0.5rem+19vw,19rem)] leading-[0.8]"
            >
              {s.name}
              <span className="sr-only"> — {s.fullName}</span>
            </h2>

            <div className="mt-12 grid gap-12 lg:grid-cols-12">
              <div className="flex flex-col gap-10 lg:col-span-7">
                <p className="type-display text-d2">{s.promise}.</p>
                <p className="max-w-[40ch] text-lead">{s.pitch}</p>
                <div>
                  <h3 className="type-label">What&apos;s included</h3>
                  <ul className="mt-4 grid border-t-2 border-ink sm:grid-cols-2 sm:gap-x-el">
                    {s.included.map((item) => (
                      <li key={item} className="border-b-2 border-ink py-3 font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-5">
                <ArtSlot kind="photo" ratio="4/5" note={s.photo.note} alt={s.photo.alt} />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="type-label">What you get</h3>
              <dl className="ruled-grid mt-4 grid border-2 border-ink sm:grid-cols-3">
                {s.outcomes.map((o) => (
                  <div key={o.label} className={`flex flex-col-reverse gap-5 p-card ${serviceBg[s.id]}`}>
                    <dt className="type-label">{o.label}</dt>
                    <dd className="type-display text-d1 leading-none">{o.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-12">
              {related ? (
                <div className="lg:col-span-5">
                  <p className="type-label mb-4">Recent {s.name} work</p>
                  <div className="bg-canvas p-card">
                    <WorkCard item={related} />
                  </div>
                </div>
              ) : null}
              <div className="flex flex-col justify-end gap-3 lg:col-span-7 lg:items-start">
                <ButtonLink href={site.bookingHref}>Talk to us about {s.name}</ButtonLink>
                <ButtonLink href={`/work?service=${s.id}`}>See all {s.name} work</ButtonLink>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}

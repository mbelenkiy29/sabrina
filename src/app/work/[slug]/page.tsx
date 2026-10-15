import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtSlot } from "@/components/ArtSlot";
import { ButtonLink } from "@/components/ButtonLink";
import { serviceBg } from "@/components/service-color";
import { ServiceTag } from "@/components/ServiceTag";
import { serviceById } from "@/content/services";
import { site } from "@/content/site";
import { getCaseStudy, work } from "@/content/work";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  return item ? { title: `${item.client}: ${item.title}` } : {};
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) notFound();

  const service = serviceById[item.service];
  const index = work.findIndex((w) => w.slug === item.slug);
  const next = work[(index + 1) % work.length];

  return (
    <article>
      <header className="border-b-2 border-ink px-gutter pt-section pb-12 lg:pb-16">
        <p className="type-label">
          <Link href="/work" className="decoration-2 underline-offset-4 hover:underline">
            Work
          </Link>
          <span aria-hidden="true"> / </span>
          {item.client}
        </p>
        <h1 className="type-display mt-6 max-w-[16ch] text-d1">{item.title}</h1>
      </header>

      <dl className="ruled-grid grid grid-cols-2 border-b-2 border-ink lg:grid-cols-4">
        <div className="flex flex-col gap-2 bg-canvas p-card">
          <dt className="type-label">Client</dt>
          <dd className="font-semibold">{item.client}</dd>
        </div>
        <div className="flex flex-col items-start gap-2 bg-canvas p-card">
          <dt className="type-label">Service</dt>
          <dd>
            <ServiceTag service={item.service} />
          </dd>
        </div>
        <div className="flex flex-col gap-2 bg-canvas p-card">
          <dt className="type-label">Year</dt>
          <dd className="font-semibold">{item.year}</dd>
        </div>
        <div className="flex flex-col gap-2 bg-canvas p-card">
          <dt className="type-label">Deliverables</dt>
          <dd className="font-semibold">{item.deliverables.join(", ")}</dd>
        </div>
      </dl>

      <ArtSlot kind="photo" ratio="16/9" note={item.hero.note} alt={item.hero.alt} framed={false} className="border-b-2 border-ink" />

      <div className="grid gap-12 px-gutter py-section lg:grid-cols-12">
        <section aria-labelledby="brief-heading" className="flex flex-col gap-4 lg:col-span-5">
          <h2 id="brief-heading" className="type-label">
            The brief
          </h2>
          <p className="type-display text-d3">{item.brief}</p>
        </section>
        <section aria-labelledby="approach-heading" className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
          <h2 id="approach-heading" className="type-label">
            What we did
          </h2>
          <p className="text-lead">{item.approach}</p>
        </section>
      </div>

      <section aria-labelledby="results-heading" className={`border-y-2 border-ink ${serviceBg[item.service]}`}>
        <div className="px-gutter pt-12 pb-10">
          <p className="type-label">{service.fullName}</p>
          <h2 id="results-heading" className="type-display mt-4 text-d2">
            What changed.
          </h2>
        </div>
        <dl className="ruled-grid grid border-t-2 border-ink sm:grid-cols-3">
          {item.results.map((r) => (
            <div key={r.label} className={`flex flex-col-reverse gap-5 p-card pb-12 ${serviceBg[item.service]}`}>
              <dt className="type-label">{r.label}</dt>
              <dd className="type-display text-d1 leading-none">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="ruled-grid grid border-b-2 border-ink sm:grid-cols-2">
        <ArtSlot kind="photo" note={item.gallery.note} alt={item.gallery.alt} framed={false} />
        <ArtSlot
          kind="illustration"
          service={item.service}
          note={service.illustration.note}
          alt={service.illustration.alt}
          framed={false}
        />
      </div>

      <nav aria-label="Next project" className="flex flex-col gap-10 px-gutter py-section lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <p className="type-label">Next project · {next.client}</p>
          <Link
            href={`/work/${next.slug}`}
            className="type-display max-w-[16ch] text-d1 decoration-[0.06em] underline-offset-[0.08em] hover:underline"
          >
            {next.title} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="flex shrink-0 flex-col gap-3">
          <ButtonLink href="/work">All work</ButtonLink>
          <ButtonLink href={site.bookingHref}>Book a call</ButtonLink>
        </div>
      </nav>
    </article>
  );
}

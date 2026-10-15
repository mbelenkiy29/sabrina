import { ArtSlot } from "@/components/ArtSlot";
import { ButtonLink } from "@/components/ButtonLink";
import { serviceBg } from "@/components/service-color";
import { Wordmark } from "@/components/Wordmark";
import { hero, heroGrid, type HeroCell } from "@/content/home";
import { serviceById } from "@/content/services";
import { site } from "@/content/site";

function Cell({ cell }: { cell: HeroCell }) {
  if (cell.type === "photo") {
    return <ArtSlot kind="photo" note={cell.note} alt={cell.alt} framed={false} />;
  }

  const service = serviceById[cell.service];

  if (cell.type === "illustration") {
    return (
      <ArtSlot
        kind="illustration"
        service={cell.service}
        note={service.illustration.note}
        alt={service.illustration.alt}
        framed={false}
      />
    );
  }

  return (
    <div className="@container relative aspect-square bg-ink text-canvas">
      <div className="absolute inset-0 flex flex-col justify-between p-[6cqw]">
        <span className="type-label flex items-center gap-[3cqw] text-[max(0.625rem,min(4.6cqw,0.8125rem))]">
          <span aria-hidden="true" className={`size-[max(0.5rem,5cqw)] shrink-0 ${serviceBg[cell.service]}`} />
          {service.number} {service.name}
        </span>
        <span className="type-display text-[length:30cqw] leading-[0.84]">
          {service.promise.split(" ").map((word, i, words) => (
            <span key={word} className="block">
              {word}
              {i === words.length - 1 ? "." : ""}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b-2 border-ink">
      <h1 id="hero-heading" className="px-gutter pt-[calc(var(--spacing-gutter)*1.25)] pb-gutter">
        <Wordmark />
        <span className="sr-only"> — {site.descriptor}</span>
      </h1>

      <div className="grid border-t-2 border-ink xl:grid-cols-12">
        <div className="flex flex-col justify-between gap-10 px-gutter py-10 xl:col-span-5 xl:border-r-2 xl:border-ink xl:py-12">
          <p className="type-label">{hero.eyebrow}</p>
          <div className="flex flex-col gap-6">
            <p className="type-display text-d1 xl:text-d2">{hero.headline}</p>
            <p className="text-lead max-w-[36ch]">{hero.lead}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={site.bookingHref}>Book a call</ButtonLink>
            <ButtonLink href="/work">See the work</ButtonLink>
          </div>
        </div>

        <ul
          aria-label="Ssixteen at a glance"
          className="ruled-grid grid grid-cols-4 content-start border-t-2 border-ink xl:col-span-7 xl:border-t-0"
        >
          {heroGrid.map((cell, i) => (
            <li key={i} className="bg-canvas">
              <Cell cell={cell} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

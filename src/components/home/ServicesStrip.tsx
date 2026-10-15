import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceBg } from "@/components/service-color";
import { services } from "@/content/services";

export function ServicesStrip() {
  return (
    <section aria-labelledby="services-heading">
      <div className="px-gutter py-section">
        <SectionHeading
          id="services-heading"
          label="What we do"
          title="Four ways to get loud."
          action={<ButtonLink href="/services">All services</ButtonLink>}
        />
      </div>

      <ul className="ruled-grid grid border-y-2 border-ink md:grid-cols-2 xl:grid-cols-4">
        {services.map((s) => (
          <li
            key={s.id}
            className={`@container flex min-h-[34rem] flex-col gap-8 p-card xl:min-h-[40rem] ${serviceBg[s.id]}`}
          >
            <div className="type-label flex items-start justify-between gap-4">
              <span>{s.number}</span>
              <span className="text-right">{s.fullName}</span>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="type-display text-[length:min(35cqw,11rem)] leading-[0.82]">{s.name}</h3>
              <p className="text-lead max-w-[30ch]">{s.pitch}</p>
            </div>

            <ul className="mt-auto border-t-2 border-ink">
              {s.highlights.map((h) => (
                <li key={h} className="border-b-2 border-ink py-3 font-semibold">
                  {h}
                </li>
              ))}
            </ul>

            <ButtonLink href={`/services#${s.id}`}>
              Explore {s.name}
              <span className="sr-only"> — {s.fullName}</span>
            </ButtonLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

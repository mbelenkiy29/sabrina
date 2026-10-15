import { ArtSlot } from "@/components/ArtSlot";
import { ServiceTag } from "@/components/ServiceTag";
import { serviceBg } from "@/components/service-color";
import { serviceById } from "@/content/services";
import { featuredTestimonial as featured, testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="sr-only">
        What clients say
      </h2>

      <figure className={`grid border-y-2 border-ink lg:grid-cols-12 ${serviceBg[featured.service]}`}>
        <div className="flex flex-col justify-between gap-10 px-gutter py-section lg:col-span-8">
          <p className="type-label">Client words · {serviceById[featured.service].fullName}</p>
          <blockquote>
            <p className="type-display text-d2">“{featured.quote}”</p>
          </blockquote>
          <figcaption className="flex items-center gap-4">
            <ArtSlot
              kind="photo"
              note={featured.headshot.note}
              alt={featured.headshot.alt}
              className="size-20 shrink-0 lg:hidden"
            />
            <span className="flex flex-col">
              <span className="text-lead font-semibold">{featured.name}</span>
              <span>{featured.role}</span>
            </span>
          </figcaption>
        </div>
        <div className="hidden border-l-2 border-ink lg:col-span-4 lg:block">
          <ArtSlot
            kind="photo"
            ratio="4/5"
            note={featured.headshot.note}
            alt={featured.headshot.alt}
            framed={false}
            className="h-full w-full"
          />
        </div>
      </figure>

      <div className="ruled-grid grid border-b-2 border-ink md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.quote} className="flex flex-col gap-8 bg-canvas px-gutter py-12 lg:py-16">
            <ServiceTag service={t.service} />
            <blockquote>
              <p className="type-display text-d3">“{t.quote}”</p>
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-4">
              <ArtSlot kind="photo" note={t.headshot.note} alt={t.headshot.alt} className="size-20 shrink-0" />
              <span className="flex flex-col">
                <span className="font-semibold">{t.name}</span>
                <span className="text-small">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

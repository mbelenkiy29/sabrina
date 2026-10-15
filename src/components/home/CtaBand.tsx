import { ButtonLink } from "@/components/ButtonLink";
import { serviceBg } from "@/components/service-color";
import { cta } from "@/content/home";
import { services } from "@/content/services";
import { site } from "@/content/site";

// All four service colours side by side: the whole agency in one band.
// Ink text clears 7:1 on every stripe.
export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="relative isolate">
      <div aria-hidden="true" className="absolute inset-0 -z-10 grid grid-cols-4">
        {services.map((s) => (
          <div key={s.id} className={serviceBg[s.id]} />
        ))}
      </div>
      <div className="flex flex-col gap-10 px-gutter py-section">
        <p className="type-label">{cta.label}</p>
        <div className="@container">
          <h2 id="cta-heading" className="type-display text-[length:max(3.5rem,calc(100cqw*0.1165))] leading-[0.84]">
            {cta.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
        <p className="text-lead max-w-[40ch] font-medium">{cta.lead}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={site.bookingHref}>Book a call</ButtonLink>
          <ButtonLink href={`mailto:${site.email}`}>Email us</ButtonLink>
        </div>
      </div>
    </section>
  );
}

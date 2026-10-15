import { SectionHeading } from "@/components/SectionHeading";
import { clientLogos } from "@/content/clients";

export function ClientLogos() {
  return (
    <section aria-labelledby="clients-heading" className="px-gutter py-section">
      <SectionHeading id="clients-heading" label="Trusted by" title="Brands that like being noticed." size="d2" />
      <ul className="ruled-grid mt-12 grid grid-cols-2 border-2 border-ink md:grid-cols-4 lg:mt-16">
        {clientLogos.map((logo) => (
          <li key={logo.id} className="bg-canvas">
            <div
              role="img"
              aria-label={`${logo.label} (placeholder)`}
              className="flex aspect-[3/2] flex-col items-center justify-center gap-1 p-4 text-center"
            >
              <span aria-hidden="true" className="type-label">
                {logo.label}
              </span>
              <span aria-hidden="true" className="text-small">
                Mono black SVG
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { SectionHeading } from "@/components/SectionHeading";
import { process } from "@/content/process";

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="border-y-2 border-ink bg-fog">
      <div className="px-gutter py-section">
        <SectionHeading id="process-heading" label="How we work" title="Four steps. No guesswork." />
      </div>
      <ol className="ruled-grid grid border-t-2 border-ink md:grid-cols-2 xl:grid-cols-4">
        {process.map((step) => (
          <li key={step.number} className="flex flex-col gap-10 bg-fog p-card pb-12">
            <span aria-hidden="true" className="type-display text-d1">
              {step.number}
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="type-display text-d3">
                <span className="sr-only">Step {step.number}: </span>
                {step.title}
              </h3>
              <p className="max-w-[34ch]">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

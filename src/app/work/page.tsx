import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/PageHero";
import { WorkGrid } from "@/components/WorkGrid";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies across social, events, SEO and brand.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="The work does the talking."
        lead="Launches, feeds, rankings and rebrands. Filter by service, or scroll the lot."
      />
      <section aria-label="Case studies" className="px-gutter pt-12 pb-section lg:pt-16">
        <WorkGrid items={work} />
      </section>
      <CtaBand />
    </>
  );
}

import Link from "next/link";
import type { CaseStudy } from "@/content/work";
import { ArtSlot } from "./ArtSlot";
import { ServiceTag } from "./ServiceTag";

/**
 * EVOKE's square image card: on hover or keyboard focus a "VIEW" stamp
 * appears over the image. The stamp is decorative; the link is named by the
 * client and title.
 */
export function WorkCard({ item, headingLevel = "h3" }: { item: CaseStudy; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article className="group relative flex flex-col gap-4 outline-offset-4 has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-ink has-[a:focus-visible]:outline-solid">
      <div className="relative">
        <ArtSlot kind="photo" ratio="1/1" note={item.image.note} alt={item.image.alt} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 ease-snap group-hover:opacity-100 group-has-[a:focus-visible]:opacity-100"
        >
          <span className="type-display flex size-28 items-center justify-center border-2 border-ink bg-ink text-[2.25rem] leading-none text-canvas">
            View
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <p className="type-label">{item.client}</p>
          <ServiceTag service={item.service} />
        </div>
        <Heading className="type-display text-d3">
          <Link
            href={`/work/${item.slug}`}
            className="decoration-2 underline-offset-4 after:absolute after:inset-0 group-hover:underline focus-visible:outline-none"
          >
            {item.title}
          </Link>
        </Heading>
      </div>
    </article>
  );
}

import type { ServiceId } from "@/content/services";
import { serviceBg } from "./service-color";

type Ratio = "1/1" | "3/2" | "4/5" | "16/9";

const ratioClass: Record<Ratio, string> = {
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "16/9": "aspect-video",
};

type ArtSlotProps = {
  kind: "photo" | "illustration";
  /** Art-direction note for the photographer or illustrator. */
  note: string;
  /** Final alt text, carried over when the real asset is dropped in. */
  alt: string;
  ratio?: Ratio;
  /** Illustration slots take their service's colour. */
  service?: ServiceId;
  framed?: boolean;
  className?: string;
};

/**
 * Intentional image placeholder: a fixed aspect-ratio slot that shows what
 * goes here and how it should be shot or drawn. Swap for next/image with the
 * same ratio and alt when assets arrive.
 */
export function ArtSlot({
  kind,
  note,
  alt,
  ratio = "1/1",
  service,
  framed = true,
  className = "",
}: ArtSlotProps) {
  const fill = kind === "illustration" && service ? serviceBg[service] : "bg-fog";
  const label = `${kind === "photo" ? "Photo" : "Illustration"} · ${ratio.replace("/", ":")}`;
  const shortLabel = kind === "photo" ? "Photo" : "Illus.";

  return (
    <div
      role="img"
      aria-label={alt}
      title={note}
      className={`@container relative ${ratioClass[ratio]} ${fill} ${
        framed ? "border-2 border-ink" : ""
      } ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-between p-[6cqw] text-ink">
        <span className="type-label text-[max(0.625rem,min(4.6cqw,0.8125rem))]">
          <span className="@max-[9rem]:hidden">{label}</span>
          <span className="hidden @max-[9rem]:inline">{shortLabel}</span>
        </span>
        <span className="hidden max-w-[34ch] text-[0.75rem] leading-snug @min-[11rem]:block @min-[18rem]:text-small">
          {note}
        </span>
      </div>
    </div>
  );
}

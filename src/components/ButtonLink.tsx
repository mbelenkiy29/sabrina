import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  /** "ink" sits on canvas or colour panels; "canvas" sits on ink. */
  tone?: "ink" | "canvas";
  size?: "md" | "sm";
  arrow?: boolean;
};

// Outlined by default. Ink is never a CTA fill at rest: hover and focus invert
// the button, which is ink's "inverted UI" role.
export function ButtonLink({
  tone = "ink",
  size = "md",
  arrow = true,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const toneClass =
    tone === "ink"
      ? "border-ink text-ink hover:bg-ink hover:text-canvas focus-visible:bg-ink focus-visible:text-canvas"
      : "border-canvas text-canvas hover:bg-canvas hover:text-ink focus-visible:bg-canvas focus-visible:text-ink";
  const sizeClass = size === "md" ? "min-h-14 px-6 text-[0.9375rem]" : "min-h-11 px-4 text-label";

  return (
    <Link
      {...props}
      className={`type-label inline-flex items-center justify-between gap-4 border-2 transition-colors duration-150 ease-snap ${sizeClass} ${toneClass} ${className}`}
    >
      <span>{children}</span>
      {arrow ? (
        <span aria-hidden="true" className="text-[1.5em] leading-none">
          →
        </span>
      ) : null}
    </Link>
  );
}

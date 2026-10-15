import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  /** Optional action aligned to the heading's baseline, e.g. "All work". */
  action?: ReactNode;
  size?: "d1" | "d2";
  className?: string;
};

export function SectionHeading({ id, label, title, action, size = "d1", className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}>
      <div className="flex flex-col gap-4">
        <p className="type-label">{label}</p>
        <h2 id={id} className={`type-display max-w-[14ch] ${size === "d1" ? "text-d1" : "text-d2"}`}>
          {title}
        </h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

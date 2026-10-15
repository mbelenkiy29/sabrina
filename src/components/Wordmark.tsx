import { site } from "@/content/site";

/** "SSIXTEEN" set to fill the full width of its container, like signage. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`@container block w-full ${className}`}>
      <span className="wordmark block">{site.name}</span>
    </span>
  );
}

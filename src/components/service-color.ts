import type { ServiceId } from "@/content/services";

// Static class names so Tailwind can see them. A service colour is only ever
// used to mark that service.
export const serviceBg: Record<ServiceId, string> = {
  social: "bg-social",
  events: "bg-events",
  seo: "bg-seo",
  brand: "bg-brand",
};

import { serviceById, type ServiceId } from "@/content/services";
import { serviceBg } from "./service-color";

/** Square chip in the service's colour, ink text. */
export function ServiceTag({ service }: { service: ServiceId }) {
  return (
    <span className={`type-label inline-flex w-fit items-center border-2 border-ink px-2 py-1 ${serviceBg[service]}`}>
      {serviceById[service].name}
    </span>
  );
}

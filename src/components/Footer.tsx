import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { serviceBg } from "./service-color";
import { Wordmark } from "./Wordmark";

const linkClass = "decoration-2 underline-offset-4 hover:underline";

// Ink footer: EVOKE's "inverted UI" role for ink.
export function Footer() {
  return (
    <footer className="on-ink bg-ink text-canvas">
      <div className="grid gap-12 px-gutter pt-section pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h2 className="type-label">Services</h2>
          <ul className="flex flex-col gap-2">
            {services.map((s) => (
              <li key={s.id} className="flex items-center gap-3">
                <span aria-hidden="true" className={`size-3 ${serviceBg[s.id]}`} />
                <Link href={`/services#${s.id}`} className={linkClass}>
                  {s.fullName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="type-label">Studio</h2>
          <ul className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="type-label">Say hello</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>{site.phone}</li>
            <li>{site.address}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="type-label">Follow</h2>
          <ul className="flex flex-col gap-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className={linkClass} rel="noopener noreferrer" target="_blank">
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-gutter">
        <Wordmark />
      </div>

      <div className="flex flex-col gap-2 px-gutter py-6 text-small sm:flex-row sm:justify-between">
        <p>© {site.name}. All rights reserved.</p>
        <p>{site.descriptor}</p>
      </div>
    </footer>
  );
}

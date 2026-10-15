"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const linkClass =
  "type-label inline-flex min-h-11 items-center decoration-2 underline-offset-[6px] hover:underline aria-[current=page]:underline";

/** Desktop nav with the current section marked. */
export function NavLinks() {
  const pathname = usePathname();

  return <NavList isCurrent={(href) => pathname === href || pathname.startsWith(`${href}/`)} />;
}

/** Same list without route awareness, for the Suspense fallback. */
export function NavList({ isCurrent = () => false }: { isCurrent?: (href: string) => boolean }) {
  return (
    <ul className="flex items-center gap-8">
      {site.nav.map((item) => (
        <li key={item.href}>
          <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={linkClass}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

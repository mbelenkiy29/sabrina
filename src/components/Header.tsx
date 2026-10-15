import Link from "next/link";
import { Suspense } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { MobileMenu } from "./MobileMenu";
import { NavLinks, NavList } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-canvas">
      <div className="flex h-16 items-center justify-between gap-6 px-gutter">
        <Link href="/" className="type-display text-[2rem] leading-none" aria-label={`${site.name} home`}>
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <Suspense fallback={<NavList />}>
            <NavLinks />
          </Suspense>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <ButtonLink href={site.bookingHref} size="sm" arrow={false}>
              Book a call
            </ButtonLink>
          </span>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

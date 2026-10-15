"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

// Full-screen poster menu. A modal <dialog> gives focus containment, Escape to
// close and an inert page behind it without extra code.
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="type-label min-h-11 border-2 border-ink px-4 transition-colors duration-150 hover:bg-ink hover:text-canvas md:hidden"
      >
        Menu
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="on-ink fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-ink text-canvas backdrop:bg-ink md:hidden"
      >
        <div className="flex h-full flex-col px-gutter pb-gutter">
          <div className="flex h-16 items-center justify-between border-b-2 border-canvas">
            <span className="type-display text-[2rem] leading-none">{site.name}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="type-label min-h-11 border-2 border-canvas px-4 transition-colors duration-150 hover:bg-canvas hover:text-ink"
            >
              Close
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 py-8">
            <ul className="flex flex-col">
              {site.nav.map((item, i) => (
                <li key={item.href} className="border-b-2 border-canvas">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="type-display flex items-baseline justify-between py-3 text-[clamp(3.5rem,18vw,7rem)] leading-[0.9]"
                  >
                    {item.label}
                    <span className="type-label">{String(i + 1).padStart(2, "0")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <Link
              href={site.bookingHref}
              onClick={() => setOpen(false)}
              className="type-label flex min-h-14 items-center justify-between border-2 border-canvas px-6 text-[0.9375rem] transition-colors duration-150 hover:bg-canvas hover:text-ink"
            >
              Book a call <span aria-hidden="true">→</span>
            </Link>
            <a href={`mailto:${site.email}`} className="text-lead underline decoration-2 underline-offset-4">
              {site.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

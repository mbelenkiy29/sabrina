"use client";

import { useSyncExternalStore } from "react";
import { serviceById, services, type ServiceId } from "@/content/services";
import type { CaseStudy } from "@/content/work";
import { WorkCard } from "./WorkCard";

type Filter = "all" | ServiceId;

// Pressed state: "All" inverts to ink; a service fills with its colour.
const pressedClass: Record<Filter, string> = {
  all: "aria-pressed:bg-ink aria-pressed:text-canvas",
  social: "aria-pressed:bg-social",
  events: "aria-pressed:bg-events",
  seo: "aria-pressed:bg-seo",
  brand: "aria-pressed:bg-brand",
};

function isServiceId(value: string | null): value is ServiceId {
  return value !== null && value in serviceById;
}

function countLabel(filter: Filter, count: number) {
  const noun = count === 1 ? "project" : "projects";
  return filter === "all"
    ? `Showing all ${count} ${noun}`
    : `Showing ${count} ${serviceById[filter].name} ${noun}`;
}

// The URL's ?service= is the source of truth, so filtered views can be shared.
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function readFilter(): Filter {
  const value = new URLSearchParams(window.location.search).get("service");
  return isServiceId(value) ? value : "all";
}

/**
 * Case-study grid filtered by service. Every card is rendered and
 * non-matching ones are hidden, so the filter state lives in the DOM
 * (pressed buttons, hidden cards) and in the URL.
 */
export function WorkGrid({ items }: { items: CaseStudy[] }) {
  const filter = useSyncExternalStore(subscribe, readFilter, () => "all" as Filter);

  function choose(next: Filter) {
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("service");
    else url.searchParams.set("service", next);
    window.history.replaceState(null, "", url);
    listeners.forEach((notify) => notify());
  }

  const visible = items.filter((item) => filter === "all" || item.service === filter);
  const options: { value: Filter; label: string }[] = [
    { value: "all", label: "All work" },
    ...services.map((s) => ({ value: s.id, label: s.name })),
  ];

  return (
    <div data-work-filter className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by service" className="flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              data-filter={option.value}
              aria-pressed={filter === option.value}
              onClick={() => choose(option.value)}
              className={`type-label min-h-11 border-2 border-ink px-4 transition-colors duration-150 hover:bg-fog ${pressedClass[option.value]}`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p data-filter-count role="status" className="type-label">
          {countLabel(filter, visible.length)}
        </p>
      </div>

      <ul className="grid gap-x-el gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.slug} data-service={item.service} hidden={filter !== "all" && item.service !== filter}>
            <WorkCard item={item} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

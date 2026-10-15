import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project or book a 20-minute intro call.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title={contact.headline} lead={contact.lead} />

      <div className="grid border-b-2 border-ink lg:grid-cols-12">
        <section aria-labelledby="form-heading" className="px-gutter py-12 lg:col-span-7 lg:border-r-2 lg:border-ink lg:py-16">
          <h2 id="form-heading" className="type-display mb-10 text-d2">
            Send a message.
          </h2>
          <ContactForm />
        </section>

        <aside
          id="book"
          aria-labelledby="book-heading"
          className="flex flex-col gap-8 border-t-2 border-ink bg-fog px-gutter py-12 lg:col-span-5 lg:border-t-0 lg:py-16"
        >
          <h2 id="book-heading" className="type-display text-d2">
            {contact.booking.title}
          </h2>
          <p className="text-lead">{contact.booking.body}</p>

          <div
            role="img"
            aria-label="Placeholder for the call scheduler"
            className="@container flex aspect-[4/3] flex-col justify-between border-2 border-ink bg-canvas p-card"
          >
            <span aria-hidden="true" className="type-label">
              Scheduler · 4:3
            </span>
            <span aria-hidden="true" className="max-w-[36ch] text-small">
              {contact.booking.schedulerNote}
            </span>
          </div>

          <dl className="flex flex-col border-t-2 border-ink">
            <div className="flex flex-col gap-1 border-b-2 border-ink py-4">
              <dt className="type-label">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-lead underline decoration-2 underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-b-2 border-ink py-4">
              <dt className="type-label">Phone</dt>
              <dd className="text-lead">{site.phone}</dd>
            </div>
            <div className="flex flex-col gap-1 border-b-2 border-ink py-4">
              <dt className="type-label">Studio</dt>
              <dd className="text-lead">{site.address}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}

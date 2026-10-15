"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "@/content/contact";
import { services } from "@/content/services";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const chipChecked: Record<string, string> = {
  social: "has-checked:bg-social",
  events: "has-checked:bg-events",
  seo: "has-checked:bg-seo",
  brand: "has-checked:bg-brand",
};

const fieldClass =
  "min-h-14 w-full border-2 border-ink bg-canvas px-4 text-body outline-offset-[-6px] aria-invalid:outline-2 aria-invalid:outline-ink aria-invalid:outline-solid";

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (!name) errors.name = contact.errors.name;
  if (!email) errors.email = contact.errors.emailMissing;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = contact.errors.emailInvalid;
  if (!message) errors.message = contact.errors.message;
  return errors;
}

function ErrorText({ field, message }: { field: Field; message?: string }) {
  return (
    <p id={`contact-${field}-error`} data-error-for={field} hidden={!message} className="type-label">
      <span aria-hidden="true">✕ </span>
      {message}
    </p>
  );
}

/**
 * Prototype contact form: validates on submit and shows a success state.
 * TODO: send submissions to an email provider or CRM before launch.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(new FormData(form));
    setErrors(nextErrors);

    const firstInvalid = (["name", "email", "message"] as Field[]).find((f) => nextErrors[f]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setSent(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  function reset() {
    formRef.current?.reset();
    setErrors({});
    setSent(false);
  }

  const describedBy = (field: Field) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <div data-contact>
      <form
        ref={formRef}
        data-contact-form
        noValidate
        hidden={sent}
        onSubmit={handleSubmit}
        className="flex flex-col gap-8"
        data-msg-name={contact.errors.name}
        data-msg-email-missing={contact.errors.emailMissing}
        data-msg-email-invalid={contact.errors.emailInvalid}
        data-msg-message={contact.errors.message}
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="type-label">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy("name")}
              className={fieldClass}
            />
            <ErrorText field="name" message={errors.name} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="type-label">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
              className={fieldClass}
            />
            <ErrorText field="email" message={errors.email} />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-company" className="type-label">
              Company
            </label>
            <input id="contact-company" name="company" type="text" autoComplete="organization" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-budget" className="type-label">
              Budget
            </label>
            <div className="relative">
              <select id="contact-budget" name="budget" defaultValue="" className={`${fieldClass} appearance-none pr-12`}>
                <option value="" disabled>
                  Choose a range
                </option>
                {contact.budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-lead">
                ↓
              </span>
            </div>
          </div>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="type-label mb-3">What do you need?</legend>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <label
                key={s.id}
                className={`type-label group inline-flex min-h-11 cursor-pointer items-center gap-2 border-2 border-ink px-4 transition-colors duration-150 hover:bg-fog has-focus-visible:outline-3 has-focus-visible:outline-offset-3 has-focus-visible:outline-ink has-focus-visible:outline-solid ${chipChecked[s.id]}`}
              >
                <input type="checkbox" name="services" value={s.id} className="sr-only" />
                <span aria-hidden="true" className="group-has-checked:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden group-has-checked:inline">
                  ✓
                </span>
                {s.fullName}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="type-label">
            Tell us about it <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message")}
            className={`${fieldClass} py-3`}
          />
          <ErrorText field="message" message={errors.message} />
        </div>

        <p className="text-small">
          <span aria-hidden="true">*</span> Required
        </p>

        <button
          type="submit"
          className="type-label flex min-h-14 w-full items-center justify-between border-2 border-ink px-6 text-[0.9375rem] transition-colors duration-150 hover:bg-ink hover:text-canvas focus-visible:bg-ink focus-visible:text-canvas"
        >
          Send it
          <span aria-hidden="true" className="text-[1.5em] leading-none">
            →
          </span>
        </button>
      </form>

      <div data-contact-success hidden={!sent} className="flex flex-col items-start gap-6 border-2 border-ink bg-fog p-card py-12">
        <h2 ref={successRef} tabIndex={-1} className="type-display text-d2 focus-visible:outline-none">
          {contact.success.title}
        </h2>
        <p className="text-lead max-w-[36ch]">{contact.success.body}</p>
        <p className="text-small">Prototype: this form isn&apos;t connected to email yet, so nothing was sent.</p>
        <button
          type="button"
          data-contact-reset
          onClick={reset}
          className="type-label min-h-14 border-2 border-ink px-6 transition-colors duration-150 hover:bg-ink hover:text-canvas"
        >
          Send another message
        </button>
      </div>
    </div>
  );
}

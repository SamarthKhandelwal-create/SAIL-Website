"use client";

import { useId, useState } from "react";
import { EVENTS, track } from "@/lib/analytics";
import { site } from "@/lib/site";

/**
 * The site's only first-party conversion.
 *
 * Everything else that counts as an action here — applications, donations —
 * hands the visitor to JotForm or Zeffy. This form submits to /api/contact on
 * our own origin, which is what lets us fire a reliable GA4 event on success
 * rather than on the click that leaves the site.
 *
 * `reason` mirrors the REASONS list in app/api/contact/route.ts; the route
 * falls back to "Something else" for anything it does not recognize, so the
 * two lists drifting degrades the subject line rather than dropping the mail.
 */

const REASONS = [
  "Request a workshop",
  "Start a chapter",
  "Sponsor or donate",
  "Press or media",
  "Something else",
] as const;

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-outline-variant/60 bg-surface px-4 py-3 font-body text-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

const labelClass =
  "mb-2 block font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary";

export default function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    setStatus("sending");
    setErrors({});
    setFormError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setStatus("sent");
        /* Fires only on a confirmed send, so the GA4 count matches the number
           of messages that actually reached the inbox. */
        track(EVENTS.contactSubmit, {
          method: "contact_form",
          reason: String(payload.reason || "Something else"),
        });
        return;
      }

      if (json.errors) setErrors(json.errors);
      setFormError(
        json.error ||
          (json.errors ? "Please check the highlighted fields." : "Something went wrong.")
      );
      setStatus("error");
    } catch {
      setFormError("We could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-xl border border-primary/30 bg-surface p-10 text-center"
      >
        <h3 className="mb-3 font-display text-headline-lg text-primary">
          Message sent
        </h3>
        <p className="font-body text-body-lg text-on-surface-variant">
          Thank you — it reached our student team. We reply to everything within
          a week, usually sooner.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      {/* Honeypot. Hidden from sight and from screen readers, skipped by the
          keyboard — anything that fills it in is automated. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Your name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-err` : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id={`${id}-name-err`} className="mt-2 font-body text-body-sm text-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id}-email-err` : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id={`${id}-email-err`} className="mt-2 font-body text-body-sm text-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor={`${id}-organization`} className={labelClass}>
            School or organization <span className="font-normal normal-case">(optional)</span>
          </label>
          <input
            id={`${id}-organization`}
            name="organization"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-reason`} className={labelClass}>
            What is this about?
          </label>
          <select id={`${id}-reason`} name="reason" defaultValue={REASONS[0]} className={fieldClass}>
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={6}
          placeholder="If you are asking about a workshop, a rough date range and the age of your students is all we need to get started."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-err` : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id={`${id}-message-err`} className="mt-2 font-body text-body-sm text-error">
            {errors.message}
          </p>
        )}
      </div>

      {formError && (
        <p role="alert" className="font-body text-body-md text-error">
          {formError}{" "}
          <a
            href={`mailto:${site.contact.inbox}`}
            className="underline underline-offset-4"
          >
            Email us directly instead.
          </a>
        </p>
      )}

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <span aria-hidden="true">→</span>
        </button>
        <p className="font-body text-body-sm text-on-surface-variant">
          We reply within a week.
        </p>
      </div>
    </form>
  );
}

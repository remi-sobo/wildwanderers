"use client";

import { useState } from "react";
import { freeSessionPage } from "@/content/fitness";

const fieldBase =
  "mt-2 w-full rounded-xl border bg-bone px-4 py-3 font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus-visible:border-amber focus-visible:ring-2 focus-visible:ring-amber/40";

type Field = "name" | "contact" | "email" | "phone" | "message";
type Errors = Partial<Record<Field, string>>;

/**
 * The free consult form. Posts JSON to /api/fitness/inquire, which
 * rate-limits, checks the honeypot, validates, and writes one row through the
 * anon insert-only policy on lead_inquiries. Inline errors come back from the
 * route; a warm success state replaces the form. Field styling matches the
 * join form.
 */
export default function FreeSessionForm() {
  const f = freeSessionPage.form;
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = new FormData(e.currentTarget);

    setStatus("sending");
    setErrors({});
    setMessage(null);
    try {
      const res = await fetch("/api/fitness/inquire", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          interest: String(form.get("interest") ?? ""),
          message: String(form.get("message") ?? ""),
          preferredTimes: form.getAll("preferredTimes").map(String),
          company: String(form.get("company") ?? ""),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: Errors;
      };
      if (res.ok && data.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setErrors(data.errors ?? {});
        setMessage(data.error ?? null);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again in a moment.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[20px] border border-bark/15 bg-bone p-8 sm:p-10" role="status">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-deep">
          Sent
        </div>
        <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,32px)] font-semibold text-forest-deep">
          {f.success.headline}
        </h3>
        <p className="mt-3 font-sans text-[15px] leading-[1.6] text-[#5A5142]">{f.success.body}</p>
      </div>
    );
  }

  const label = "font-sans text-[13px] font-semibold text-ink";
  const optional = <span className="font-normal text-ink/45">(optional)</span>;
  const errText = "mt-1.5 font-sans text-[12.5px] text-amber-deep";
  const border = (bad: boolean) => (bad ? "border-amber-deep" : "border-bark/20");

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[20px] border border-bark/15 bg-bone p-8 sm:p-10">
      {/* Honeypot, visually hidden from people. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5">
        <div>
          <label htmlFor="fs-name" className={label}>
            Your name
          </label>
          <input
            id="fs-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={`${fieldBase} ${border(!!errors.name)}`}
          />
          {errors.name && <p className={errText}>{errors.name}</p>}
        </div>

        <fieldset>
          <legend className="font-sans text-[13px] leading-[1.5] text-ink/60">{f.contactHint}</legend>
          <div className="mt-1 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="fs-email" className={label}>
                Email
              </label>
              <input
                id="fs-email"
                name="email"
                type="email"
                maxLength={254}
                autoComplete="email"
                aria-invalid={!!(errors.email || errors.contact)}
                className={`${fieldBase} ${border(!!(errors.email || errors.contact))}`}
              />
              {errors.email && <p className={errText}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="fs-phone" className={label}>
                Phone
              </label>
              <input
                id="fs-phone"
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
                aria-invalid={!!(errors.phone || errors.contact)}
                className={`${fieldBase} ${border(!!(errors.phone || errors.contact))}`}
              />
              {errors.phone && <p className={errText}>{errors.phone}</p>}
            </div>
          </div>
          {errors.contact && <p className={errText}>{errors.contact}</p>}
        </fieldset>

        <div>
          <label htmlFor="fs-interest" className={label}>
            {f.interestLabel}
          </label>
          <select
            id="fs-interest"
            name="interest"
            defaultValue={f.interests[0].value}
            className={`${fieldBase} ${border(false)}`}
          >
            {f.interests.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="fs-message" className={label}>
            {f.messageLabel} {optional}
          </label>
          <textarea
            id="fs-message"
            name="message"
            rows={3}
            maxLength={1000}
            placeholder={f.messagePlaceholder}
            aria-invalid={!!errors.message}
            className={`${fieldBase} resize-y ${border(!!errors.message)}`}
          />
          {errors.message && <p className={errText}>{errors.message}</p>}
        </div>

        <fieldset>
          <legend className={label}>
            {f.timesLabel} {optional}
          </legend>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
            {f.times.map((t) => (
              <label key={t.value} className="inline-flex items-center gap-2.5 font-sans text-[14.5px] text-ink">
                <input
                  type="checkbox"
                  name="preferredTimes"
                  value={t.value}
                  className="h-4 w-4 rounded border-bark/30 accent-amber-deep"
                />
                {t.label}
              </label>
            ))}
          </div>
        </fieldset>

        {message && (
          <p role="alert" className="font-sans text-[13px] text-amber-deep">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="group/btn relative isolate inline-flex items-center gap-2 self-start overflow-hidden rounded-full bg-amber px-[30px] py-4 font-sans text-[15px] font-semibold text-ink shadow-[0_12px_34px_rgba(120,68,16,0.34)] transition-opacity disabled:opacity-70"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-[1] origin-left scale-x-0 bg-amber-deep transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
          />
          <span className="relative z-[1] inline-flex items-center gap-2">
            {status === "sending" ? "Sending..." : "Start the conversation"}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
            >
              &rarr;
            </span>
          </span>
        </button>

        <p className="font-sans text-[12.5px] leading-[1.55] text-ink/50">{f.note}</p>
      </div>
    </form>
  );
}

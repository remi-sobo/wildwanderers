"use client";

import { useState } from "react";
import { freeSessionCopy } from "@/content/fitness";
import { Chip, EMAIL_RE, Field, FieldError, FormCard, Honeypot, Optional, SubmitButton, TextArea, labelText } from "@/components/forms/fields";

const f = freeSessionCopy.form;

type ServerField = "name" | "contact" | "email" | "phone" | "message";
type ServerErrors = Partial<Record<ServerField, string>>;

/**
 * The free consult form. Posts JSON to /api/fitness/inquire, which
 * rate-limits, checks the honeypot, validates, and writes one row through the
 * anon insert-only policy on lead_inquiries. Interest is a single-select chip
 * row (values match the app's lead_interest enum); free times are multi-select
 * chips. Validation shows only after the first submit attempt, and a success
 * state replaces the form in place.
 *
 * `message` can carry health context a visitor volunteers, so it is never
 * logged or echoed back anywhere on this site.
 */
export default function FreeSessionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState<string>(f.interests[0].value);
  const [times, setTimes] = useState<string[]>([]);
  const [tried, setTried] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [server, setServer] = useState<{ errors: ServerErrors; error: string | null }>({ errors: {}, error: null });

  const okEmail = EMAIL_RE.test(email.trim());
  const hasContact = okEmail || phone.replace(/\D/g, "").length >= 7;
  const nameErr = (tried && !name.trim() ? f.errors.name : undefined) ?? server.errors.name;
  const contactErr = (tried && !hasContact ? f.errors.contact : undefined) ?? server.errors.contact;

  const toggleTime = (value: string) =>
    setTimes((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setTried(true);
    setServer({ errors: {}, error: null });
    if (!name.trim() || !hasContact) return;

    setSending(true);
    try {
      const res = await fetch("/api/fitness/inquire", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phone, interest, message, preferredTimes: times, company }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: ServerErrors };
      if (res.ok && data.ok) setDone(true);
      else setServer({ errors: data.errors ?? {}, error: data.error ?? null });
    } catch {
      setServer({ errors: {}, error: "Something went wrong. Try again in a moment." });
    } finally {
      setSending(false);
    }
  }

  return (
    <FormCard>
      {done ? (
        <div role="status">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-deep">
            {f.success.eyebrow}
          </div>
          <h3 className="mt-3 font-display text-[clamp(26px,3vw,32px)] font-semibold text-forest-deep">
            {f.success.headline}
          </h3>
          <p className="mt-3 font-sans text-[15px] leading-[1.6] text-[#5A5142]">{f.success.body}</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="grid gap-5">
          <Honeypot value={company} onChange={setCompany} />
          <Field
            id="fs-name"
            label={f.nameLabel}
            autoComplete="name"
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameErr}
          />

          <div>
            <p className="font-sans text-[13px] leading-[1.5] text-ink/60">{f.contactHint}</p>
            <div className="mt-3 grid gap-5 sm:grid-cols-2">
              <Field
                id="fs-email"
                label={f.emailLabel}
                type="email"
                autoComplete="email"
                maxLength={254}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={contactErr ?? server.errors.email}
              />
              <Field
                id="fs-phone"
                label={f.phoneLabel}
                type="tel"
                autoComplete="tel"
                maxLength={40}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={server.errors.phone}
              />
            </div>
          </div>

          <div role="group" aria-labelledby="fs-interest-label">
            <div id="fs-interest-label" className={`${labelText} !mb-2.5`}>
              {f.interestLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {f.interests.map((i) => (
                <Chip key={i.value} on={interest === i.value} onClick={() => setInterest(i.value)}>
                  {i.label}
                </Chip>
              ))}
            </div>
          </div>

          <TextArea
            id="fs-message"
            label={
              <>
                {f.messageLabel} <Optional>{f.optional}</Optional>
              </>
            }
            rows={3}
            maxLength={1000}
            placeholder={f.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={server.errors.message}
          />

          <div role="group" aria-labelledby="fs-times-label">
            <div id="fs-times-label" className={`${labelText} !mb-2.5`}>
              {f.timesLabel} <Optional>{f.optional}</Optional>
            </div>
            <div className="flex flex-wrap gap-2">
              {f.times.map((t) => (
                <Chip key={t.value} weight="medium" on={times.includes(t.value)} onClick={() => toggleTime(t.value)}>
                  {t.label}
                </Chip>
              ))}
            </div>
          </div>

          <FieldError>{server.error}</FieldError>
          <div className="mt-1">
            <SubmitButton pending={sending}>{sending ? f.sending : f.submit}</SubmitButton>
          </div>
          <p className="font-sans text-[12.5px] leading-[1.55] text-[#7A7264]">{f.note}</p>
        </form>
      )}
    </FormCard>
  );
}

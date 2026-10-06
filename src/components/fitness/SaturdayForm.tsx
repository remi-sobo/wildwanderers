"use client";

import { useState } from "react";
import { saturdayCopy } from "@/content/fitness";
import { EMAIL_RE, Field, FieldError, Honeypot, SubmitButton } from "@/components/forms/fields";

const f = saturdayCopy.form;
const ok = saturdayCopy.success;

type ServerErrors = Partial<Record<"name" | "email" | "phone", string>>;

/**
 * The pop-up list form. Posts JSON to /api/fitness/saturday-signup, which
 * mirrors the Trailhead subscribe route (honeypot, rate limit, one
 * insert-only row tagged source 'saturday', idempotent). Validation shows only
 * after the first submit attempt; the success state replaces the form and
 * offers "Add someone else" to reset it.
 */
export default function SaturdayForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [tried, setTried] = useState(false);
  const [sending, setSending] = useState(false);
  const [doneName, setDoneName] = useState<string | null>(null);
  const [server, setServer] = useState<{ errors: ServerErrors; error: string | null }>({ errors: {}, error: null });

  const okEmail = EMAIL_RE.test(email.trim());
  const nameErr = (tried && !name.trim() ? f.errors.name : undefined) ?? server.errors.name;
  const emailErr = (tried && !okEmail ? f.errors.email : undefined) ?? server.errors.email;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setTried(true);
    setServer({ errors: {}, error: null });
    if (!name.trim() || !okEmail) return;

    setSending(true);
    try {
      const res = await fetch("/api/fitness/saturday-signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phone, company }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: ServerErrors };
      if (res.ok && data.ok) setDoneName(name.trim().split(/\s+/)[0] ?? "");
      else setServer({ errors: data.errors ?? {}, error: data.error ?? null });
    } catch {
      setServer({ errors: {}, error: "Something went wrong. Try again in a moment." });
    } finally {
      setSending(false);
    }
  }

  function reset() {
    setName("");
    setEmail("");
    setPhone("");
    setTried(false);
    setDoneName(null);
  }

  if (doneName !== null) {
    return (
      <div role="status">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-deep">{ok.eyebrow}</div>
        <h3 className="mt-3 font-display text-[clamp(26px,3vw,32px)] font-semibold leading-[1.1] text-forest-deep">
          {ok.headline(doneName)}
        </h3>
        <p className="mt-3 font-sans text-[15px] leading-[1.6] text-[#5A5142]">
          {ok.body}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 min-h-11 font-sans text-[14px] font-semibold text-amber-deep transition-colors hover:text-amber"
        >
          {ok.reset}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5">
      <h3 className="font-display text-[24px] font-semibold text-forest-deep">{f.headline}</h3>
      <Honeypot value={company} onChange={setCompany} />
      <Field id="sat-name" label={f.nameLabel} autoComplete="name" maxLength={120} value={name} onChange={(e) => setName(e.target.value)} error={nameErr} />
      <Field
        id="sat-email"
        label={f.emailLabel}
        type="email"
        autoComplete="email"
        maxLength={254}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailErr}
      />
      <Field
        id="sat-phone"
        label={f.phoneLabel}
        type="tel"
        autoComplete="tel"
        maxLength={40}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={server.errors.phone}
      />
      <FieldError>{server.error}</FieldError>
      <div className="mt-1">
        <SubmitButton pending={sending}>{sending ? f.sending : f.submit}</SubmitButton>
      </div>
      <p className="font-sans text-[12.5px] leading-[1.55] text-[#7A7264]">{f.note}</p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { submitInquiry } from "./actions";
import { joinCopy } from "@/content/pages";
import { EMAIL_RE, Field, FormCard, Honeypot, Optional, SubmitButton, TextArea } from "@/components/forms/fields";

const f = joinCopy.form;

type Values = { name: string; email: string; about: string; company: string };

/**
 * The boys program interest form. Inline validation shows only after the
 * first submit attempt; a success state replaces the form in place.
 */
export default function JoinForm() {
  const [v, setV] = useState<Values>({ name: "", email: "", about: "", company: "" });
  const [tried, setTried] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setV((prev) => ({ ...prev, [k]: e.target.value }));

  const nameErr = tried && !v.name.trim() ? f.errors.name : undefined;
  const emailErr = tried && !EMAIL_RE.test(v.email.trim()) ? f.errors.email : undefined;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setTried(true);
    setServerError(null);
    if (!v.name.trim() || !EMAIL_RE.test(v.email.trim())) return;

    setSending(true);
    try {
      const form = new FormData();
      form.set("name", v.name);
      form.set("email", v.email);
      form.set("about", v.about);
      form.set("company", v.company);
      const res = await submitInquiry({ status: "idle" }, form);
      if (res.status === "success") setDone(true);
      else setServerError(res.message ?? Object.values(res.errors ?? {})[0] ?? null);
    } catch {
      setServerError("Something went wrong. Try again in a moment.");
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
          <Honeypot value={v.company} onChange={(company) => setV((prev) => ({ ...prev, company }))} />
          <Field id="join-name" label={f.nameLabel} autoComplete="name" value={v.name} onChange={set("name")} error={nameErr} />
          <Field
            id="join-email"
            label={f.emailLabel}
            type="email"
            autoComplete="email"
            value={v.email}
            onChange={set("email")}
            error={emailErr}
          />
          <TextArea
            id="join-about"
            label={
              <>
                {f.aboutLabel} <Optional>{f.optional}</Optional>
              </>
            }
            rows={4}
            maxLength={1000}
            placeholder={f.aboutPlaceholder}
            value={v.about}
            onChange={set("about")}
          />
          {serverError && (
            <p role="alert" className="font-sans text-[13px] text-[#b4472e]">
              {serverError}
            </p>
          )}
          <div className="mt-1">
            <SubmitButton pending={sending}>{sending ? f.sending : f.submit}</SubmitButton>
          </div>
          <p className="font-sans text-[12.5px] leading-[1.55] text-[#7A7264]">{f.note}</p>
        </form>
      )}
    </FormCard>
  );
}

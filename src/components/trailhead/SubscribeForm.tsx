"use client";

import { useState } from "react";

const fieldBase =
  "w-full rounded-xl border border-bark/20 bg-bone px-4 py-3 font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus-visible:border-amber focus-visible:ring-2 focus-visible:ring-amber/40";

// The "get the weekly trail note" signup. Posts JSON to the route handler,
// which rate-limits, checks the honeypot, and writes one row through the anon
// insert-only policy. A warm success state replaces the field.
export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");

    setStatus("sending");
    setMessage(null);
    try {
      const res = await fetch("/api/trailhead/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("done");
        formEl.reset();
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again in a moment.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again in a moment.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[18px] border border-bark/15 bg-bone/70 p-6">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-deep">
          You are on the trail
        </div>
        <p className="mt-2 font-sans text-[15px] leading-[1.6] text-[#4A4234]">
          The next trail note will land in your inbox. No noise, just the good stuff.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-[520px]">
      {/* Honeypot, off-screen for people, catnip for bots. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="trail-email" className="sr-only">
          Email address
        </label>
        <input
          id="trail-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className={fieldBase}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="group/btn relative shrink-0 overflow-hidden rounded-full bg-amber px-6 py-3 font-sans text-[14px] font-semibold text-ink transition-colors hover:bg-amber-deep disabled:opacity-70"
        >
          {status === "sending" ? "Sending" : "Get the trail note"}
        </button>
      </div>
      {status === "error" && message && (
        <p role="alert" className="mt-3 font-sans text-[13.5px] text-[#b4472e]">
          {message}
        </p>
      )}
    </form>
  );
}

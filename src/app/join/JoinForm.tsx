"use client";

import { useActionState } from "react";
import { submitInquiry, type JoinState } from "./actions";
import { joinPage } from "@/content/pages";

const initial: JoinState = { status: "idle" };

const fieldBase =
  "mt-2 w-full rounded-xl border bg-bone px-4 py-3 font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus-visible:border-amber focus-visible:ring-2 focus-visible:ring-amber/40";

/**
 * The join inquiry form. Uses useActionState against the typed Server Action,
 * with inline validation errors, a pending state on the amber submit, and a
 * warm success state that replaces the form. Progressive enhancement: it posts
 * even before JS hydrates.
 */
export default function JoinForm() {
  const [state, action, pending] = useActionState(submitInquiry, initial);
  const f = joinPage.form;

  if (state.status === "success") {
    return (
      <div className="rounded-[20px] border border-bark/15 bg-bone p-8 sm:p-10">
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

  const v = state.values;
  const err = state.errors ?? {};

  return (
    <form action={action} className="rounded-[20px] border border-bark/15 bg-bone p-8 sm:p-10">
      {/* Honeypot, visually hidden from people. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="font-sans text-[13px] font-semibold text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={v?.name}
            autoComplete="name"
            aria-invalid={!!err.name}
            className={`${fieldBase} ${err.name ? "border-amber-deep" : "border-bark/20"}`}
          />
          {err.name && <p className="mt-1.5 font-sans text-[12.5px] text-amber-deep">{err.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="font-sans text-[13px] font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={v?.email}
            autoComplete="email"
            aria-invalid={!!err.email}
            className={`${fieldBase} ${err.email ? "border-amber-deep" : "border-bark/20"}`}
          />
          {err.email && <p className="mt-1.5 font-sans text-[12.5px] text-amber-deep">{err.email}</p>}
        </div>

        <div>
          <label htmlFor="about" className="font-sans text-[13px] font-semibold text-ink">
            About your boy <span className="font-normal text-ink/45">(optional)</span>
          </label>
          <textarea
            id="about"
            name="about"
            rows={4}
            defaultValue={v?.about}
            placeholder="His age, what he loves, what you are hoping for."
            aria-invalid={!!err.about}
            className={`${fieldBase} resize-y ${err.about ? "border-amber-deep" : "border-bark/20"}`}
          />
          {err.about && <p className="mt-1.5 font-sans text-[12.5px] text-amber-deep">{err.about}</p>}
        </div>

        {state.message && (
          <p className="font-sans text-[13px] text-amber-deep">{state.message}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="group/btn relative isolate inline-flex items-center gap-2 self-start overflow-hidden rounded-full bg-amber px-[30px] py-4 font-sans text-[15px] font-semibold text-ink shadow-[0_12px_34px_rgba(120,68,16,0.34)] transition-opacity disabled:opacity-70"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-[1] origin-left scale-x-0 bg-amber-deep transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
          />
          <span className="relative z-[1] inline-flex items-center gap-2">
            {pending ? "Sending..." : "Send my note"}
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

"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { joinCopy } from "@/content/pages";
import { insertInquiry, ipFrom, rateLimited } from "@/lib/inquiries";

export type JoinValues = { name: string; email: string; about: string; company: string };

export type JoinResult = {
  ok: boolean;
  error?: string;
  errors?: Partial<Record<"name" | "email" | "about", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Bounds match the check constraints on lead_inquiries.
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 1000;
const RETRY = "Something went wrong. Try again in a moment.";

/**
 * The boys program interest form. It lands in the same place as the free
 * consult: one row in lead_inquiries through the shared insert path, with
 * interest 'boys_program' and "about your son" as the message, so Gabe sees
 * every family in the app's inbox and the speed-to-lead alert fires. No new
 * table.
 *
 * The existing Resend and Slack notices still go out, best effort, when their
 * env vars are set; they never decide the outcome. The stored row does.
 */
export async function submitJoin(values: JoinValues): Promise<JoinResult> {
  const name = String(values.name ?? "").trim();
  const email = String(values.email ?? "").trim();
  const about = String(values.about ?? "").trim();

  // Honeypot: real people leave this empty. Accept silently.
  if (String(values.company ?? "").trim()) return { ok: true };

  const errors: JoinResult["errors"] = {};
  if (!name || name.length > MAX_NAME) errors.name = joinCopy.form.errors.name;
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) errors.email = joinCopy.form.errors.email;
  if (about.length > MAX_MESSAGE) errors.about = "That is a lot. Mind trimming it a little?";
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  if (rateLimited(ipFrom(await headers()))) {
    return { ok: false, error: "One moment, that is a few too many tries. Try again shortly." };
  }

  const result = await insertInquiry(
    { name, email, phone: null, interest: "boys_program", message: about || null, preferred_times: null },
    "join",
  );
  if (result === "error") return { ok: false, error: RETRY };

  // A fresh inquiry also goes to the email and Slack channels, if configured.
  if (result === "stored") await notify(name, email, about);

  return { ok: true };
}

async function notify(name: string, email: string, about: string): Promise<void> {
  const summary = `Name: ${name}\nEmail: ${email}\n\n${about || "(no message)"}`;
  const channels: Promise<void>[] = [];

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    channels.push(
      (async () => {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
          from: process.env.JOIN_FROM ?? "Wild Wanderers <onboarding@resend.dev>",
          to: process.env.JOIN_INBOX ?? "hello@wildwanderers.com",
          replyTo: email,
          subject: `New boys program inquiry from ${name}`,
          text: summary,
        });
        if (error) throw new Error(error.message);
      })(),
    );
  }

  const slackUrl = process.env.SLACK_WEBHOOK_URL;
  if (slackUrl) {
    channels.push(
      (async () => {
        const res = await fetch(slackUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            text: `:evergreen_tree: *New boys program inquiry from ${name}*\n*Email:* ${email}\n\n${about || "_(no message)_"}`,
          }),
          signal: AbortSignal.timeout(4000),
        });
        if (!res.ok) throw new Error(`Slack webhook responded ${res.status}`);
      })(),
    );
  }

  const results = await Promise.allSettled(channels);
  if (results.some((r) => r.status === "rejected")) console.warn("[join] a notify channel failed");
}

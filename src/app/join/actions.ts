"use server";

import { Resend } from "resend";

export type JoinState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "about", string>>;
  values?: { name: string; email: string; about: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Join inquiry. A simple typed Server Action (spec section 11): validate, then
 * notify on every channel that is configured. Two independent ways to hear about
 * an inquiry: Resend (email) and a Slack incoming webhook. Each is gated on its
 * own env var, so either, both, or neither can be on. With nothing configured
 * (local or preview) it succeeds without sending, so the form is fully usable
 * before secrets land. Channels run best-effort: as long as one configured
 * channel gets through, the family sees success. No data is stored here; this is
 * a notification, not a CRM.
 */
export async function submitInquiry(
  _prev: JoinState,
  formData: FormData,
): Promise<JoinState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const about = String(formData.get("about") ?? "").trim();
  // Honeypot: real people leave this empty.
  const trap = String(formData.get("company") ?? "").trim();

  const errors: JoinState["errors"] = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!email) errors.email = "We need an email to write back.";
  else if (!EMAIL_RE.test(email)) errors.email = "That email looks off, mind checking it?";
  if (about.length > 4000) errors.about = "That is a lot. Mind trimming it a little?";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values: { name, email, about } };
  }

  // Silently accept bot submissions without notifying.
  if (trap) return { status: "success" };

  const summary = `Name: ${name}\nEmail: ${email}\n\n${about || "(no message)"}`;

  // One task per configured channel. Each throws on its own failure; we only
  // surface an error to the family if every configured channel fails.
  const channels: Promise<void>[] = [];

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    channels.push(
      (async () => {
        const resend = new Resend(apiKey);
        const to = process.env.JOIN_INBOX ?? "hello@wildwanderers.com";
        const from = process.env.JOIN_FROM ?? "Wild Wanderers <onboarding@resend.dev>";
        const { error } = await resend.emails.send({
          from,
          to,
          replyTo: email,
          subject: `New trail inquiry from ${name}`,
          text: summary,
        });
        if (error) throw new Error(error.message);
      })(),
    );
  }

  // Slack incoming webhook: a second, independent way to hear about an inquiry,
  // straight to a channel (and your phone). Dormant until SLACK_WEBHOOK_URL is set.
  const slackUrl = process.env.SLACK_WEBHOOK_URL;
  if (slackUrl) {
    channels.push(
      (async () => {
        const res = await fetch(slackUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ text: `New trail inquiry from ${name}\n${summary}` }),
        });
        if (!res.ok) throw new Error(`Slack webhook responded ${res.status}`);
      })(),
    );
  }

  // Nothing configured (local or preview): accept so the experience is whole.
  if (channels.length === 0) {
    console.info(`[join] inquiry from ${name} <${email}> (no notify channel configured)`);
    return { status: "success" };
  }

  const results = await Promise.allSettled(channels);
  if (!results.some((r) => r.status === "fulfilled")) {
    return {
      status: "error",
      message: "Something went wrong sending that. Please try again in a moment.",
      values: { name, email, about },
    };
  }

  return { status: "success" };
}

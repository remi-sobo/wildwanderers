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
 * notify via Resend when it is configured. With no key set (local or preview)
 * it succeeds without sending, so the form is fully usable before secrets land.
 * No data is stored here; this is a notification, not a CRM.
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

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const to = process.env.JOIN_INBOX ?? "hello@wildwanderers.com";
      const from = process.env.JOIN_FROM ?? "Wild Wanderers <onboarding@resend.dev>";
      await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `New trail inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${about || "(no message)"}`,
      });
    } catch {
      return {
        status: "error",
        message: "Something went wrong sending that. Please try again in a moment.",
        values: { name, email, about },
      };
    }
  } else {
    // No key configured: accept the inquiry so the experience is whole.
    console.info(`[join] inquiry from ${name} <${email}> (Resend not configured)`);
  }

  return { status: "success" };
}

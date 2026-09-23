import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Contact form delivery.
 *
 * WHY A ROUTE AND NOT AN EMBED: /contact previously offered only `mailto:`
 * links. Ad Grants review treats those as a weak call to action — they depend
 * on the visitor having a mail client configured, they cannot confirm receipt,
 * and they produce no measurable conversion. A real form posts here, we send
 * the mail server-side, and the browser gets a confirmation it can track.
 *
 * TRANSPORT: Resend's REST API over plain fetch. No SDK — the request is four
 * lines and a dependency here would be a dependency to patch forever.
 *
 * SETUP (once, in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY   from resend.com/api-keys
 *   CONTACT_FROM     optional; must be on a domain verified in Resend.
 *                    Verify a SUBDOMAIN such as send.studentsforailiteracy.org
 *                    rather than the apex — the apex already carries Google
 *                    Workspace MX records and Resend would collide with them.
 *   CONTACT_TO       optional; defaults to site.contact.inbox.
 *
 * Until RESEND_API_KEY is set the route returns 503 and the form shows its
 * fallback, which is the existing direct email and phone. It never pretends to
 * have sent something it did not.
 */

export const runtime = "nodejs";
/* Never prerender or cache: this is a side-effecting endpoint. */
export const dynamic = "force-dynamic";

const MAX = { name: 120, email: 200, organization: 200, message: 5000 } as const;

const REASONS = [
  "Request a workshop",
  "Start a chapter",
  "Sponsor or donate",
  "Press or media",
  "Something else",
] as const;

type Payload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  reason?: unknown;
  message?: unknown;
  /** Honeypot. Real people never see this field, so a filled one is a bot. */
  website?: unknown;
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

/* Deliberately permissive. Strict email regexes reject valid addresses far
   more often than they catch typos, and the address is only ever used as a
   Reply-To — a wrong one costs us a reply, not a security boundary. */
function looksLikeEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= MAX.email;
}

/**
 * Strip CR/LF from anything interpolated into a header. Without this, a
 * newline in the name or email field lets a submitter inject extra headers
 * (Bcc:, for instance) into the outgoing message.
 */
function headerSafe(v: string): string {
  return v.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not read that submission." },
      { status: 400 }
    );
  }

  /* Honeypot: accept and discard, so the bot sees success and does not retry
     with a different shape. */
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name).slice(0, MAX.name);
  const email = str(body.email).slice(0, MAX.email);
  const organization = str(body.organization).slice(0, MAX.organization);
  const message = str(body.message).slice(0, MAX.message);
  const rawReason = str(body.reason);
  const reason = (REASONS as readonly string[]).includes(rawReason)
    ? rawReason
    : "Something else";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!email) errors.email = "Please give us an email address to reply to.";
  else if (!looksLikeEmail(email)) errors.email = "That email address does not look right.";
  if (!message) errors.message = "Please tell us what you need.";
  else if (message.length < 10) errors.message = "Could you add a little more detail?";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — cannot send.");
    return NextResponse.json(
      {
        ok: false,
        error: "The form is not accepting messages right now.",
        fallbackEmail: site.contact.inbox,
      },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO || site.contact.inbox;
  const from = process.env.CONTACT_FROM || `SAIL Website <website@${new URL(site.url).hostname.replace(/^www\./, "")}>`;

  const text = [
    `Reason:       ${reason}`,
    `Name:         ${name}`,
    `Email:        ${email}`,
    organization ? `Organization: ${organization}` : null,
    "",
    message,
    "",
    "—",
    `Sent from the contact form at ${site.url}/contact`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        /* Reply hits the sender, not the website mailbox. */
        reply_to: headerSafe(`${name} <${email}>`),
        subject: headerSafe(`[${reason}] ${name}`),
        text,
      }),
    });

    if (!res.ok) {
      /* Resend's body explains the failure — usually an unverified sending
         domain. Log it; never show it to the submitter. */
      console.error("[contact] Resend rejected the send:", res.status, await res.text());
      return NextResponse.json(
        {
          ok: false,
          error: "We could not send that just now.",
          fallbackEmail: site.contact.inbox,
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact] Network error sending mail:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "We could not send that just now.",
        fallbackEmail: site.contact.inbox,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

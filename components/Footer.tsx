import Link from "next/link";
import { site } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-outline/10 bg-surface-container-lowest">
      <div className="mx-auto max-w-content px-margin-mobile py-stack-lg md:px-gutter">
        <div className="grid gap-stack-lg md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-headline-lg text-primary">SAIL</p>
            <p className="mt-4 max-w-sm font-body text-body-md text-secondary">
              A non-profit created and led by students to promote AI literacy
              skills within youth.
            </p>
            <p className="mt-4 font-body text-body-md text-on-surface-variant">
              Registered nonprofit organization · EIN {site.ein}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/50 text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/50 text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="mb-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary">
              Contact
            </p>
            <ul className="space-y-3 font-body text-body-md text-secondary">
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  About SAIL
                </Link>
              </li>
              <li>Founder: {site.contact.founder}</li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Get involved */}
          <div className="md:col-span-3">
            <p className="mb-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary">
              Get Involved
            </p>
            <ul className="space-y-3 font-body text-body-md text-secondary">
              <li>
                <Link href="/chapters" className="transition-colors hover:text-primary">
                  Start a Chapter
                </Link>
              </li>
              <li>
                <Link href="/join" className="transition-colors hover:text-primary">
                  Join the Team
                </Link>
              </li>
              <li>
                <Link href="/donate" className="transition-colors hover:text-primary">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="transition-colors hover:text-primary">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="transition-colors hover:text-primary">
                  Outreach
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-stack-lg flex flex-col gap-3 border-t border-outline/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-body-md text-secondary">
            © {new Date().getFullYear()} Students For AI Literacy.
          </p>
          <Link
            href="/privacy"
            className="font-body text-body-md text-secondary transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

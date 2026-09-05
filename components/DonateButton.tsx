import { site } from "@/lib/site";

/**
 * The site's one giving button.
 *
 * Renders nothing until `site.donateUrl` is set. That is deliberate: Google Ad
 * Grants review treats a donate button that cannot take a donation as a broken
 * donation link, and SAIL is running on an Ad Grant. Setting the URL in
 * lib/site.ts turns the button on everywhere it appears — nav, /donate, and
 * /sponsors — with no other change.
 */
export default function DonateButton({
  variant = "solid",
  className = "",
}: {
  /** `solid` on light ground, `inverse` on the primary-colored bands. */
  variant?: "solid" | "inverse";
  className?: string;
}) {
  if (!site.donateUrl) return null;

  const styles =
    variant === "inverse"
      ? "bg-on-primary text-primary hover:bg-white"
      : "bg-primary text-on-primary hover:bg-surface-tint";

  return (
    <a
      href={site.donateUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-donate
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] shadow-sm transition-colors ${styles} ${className}`}
    >
      Donate
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

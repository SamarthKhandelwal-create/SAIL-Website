import Link from "next/link";

/**
 * Closing band for a page — points the reader at the next place to go so no
 * page dead-ends.
 */
export default function SectionCTA({
  eyebrow,
  title,
  href,
  label,
  external = false,
}: {
  eyebrow: string;
  title: string;
  href: string;
  label: string;
  external?: boolean;
}) {
  const classes =
    "group inline-flex items-center gap-3 rounded bg-on-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary shadow-sm transition-colors hover:bg-white";

  const inner = (
    <>
      {label}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  return (
    <section className="bg-primary px-margin-mobile py-stack-lg md:px-gutter">
      <div className="mx-auto flex max-w-content flex-col items-start gap-stack-md md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-on-primary/70">
            {eyebrow}
          </p>
          <p className="max-w-xl font-display text-headline-lg text-on-primary">
            {title}
          </p>
        </div>

        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {inner}
          </a>
        ) : (
          <Link href={href} className={classes}>
            {inner}
          </Link>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import ShaderBackground from "./ShaderBackground";

const DEFAULT_WORDS = ["STUDENTS", "FOR AI", "LITERACY"];
const DEFAULT_SUBTITLE =
  "AI literacy, taught by students — for students. We train high school students to lead free, hands-on AI workshops in schools, libraries, and community organizations.";

export type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Page hero. Server component — no JS ships for it. Every page passes at least
 * one call to action so there is always a next step above the fold.
 */
export default function Hero({
  words = DEFAULT_WORDS,
  subtitle = DEFAULT_SUBTITLE,
  size = "full",
  id = "home",
  ctas = [],
}: {
  words?: string[];
  subtitle?: string;
  size?: "full" | "page";
  id?: string;
  ctas?: HeroCta[];
}) {
  return (
    <header
      id={id}
      /* The nav is fixed, so it floats over this header. Padding the top by
         the nav's height keeps vertically-centred content from sliding under
         it — which it did on short heroes and on mobile. */
      style={{ paddingTop: "calc(var(--nav-h) + 2rem)" }}
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden pb-16 ${
        size === "full"
          ? "min-h-[640px] md:h-[88svh]"
          : "min-h-[420px] md:h-[56svh]"
      }`}
    >
      <ShaderBackground className="absolute inset-0 z-0 h-full w-full" />
      {/* Legibility veil */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto max-w-content px-margin-mobile text-center md:px-gutter">
        <h1 className="animate-hero font-display text-display-xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
          {words.map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>

        <p className="animate-hero animate-delay-1 mx-auto mt-stack-md max-w-2xl font-body text-body-lg text-white/90">
          {subtitle}
        </p>

        {ctas.length > 0 && (
          <div className="animate-hero animate-delay-2 mt-stack-md flex flex-wrap items-center justify-center gap-4">
            {ctas.map((cta, i) => {
              const primary = i === 0;
              const className = `group inline-flex items-center gap-2 rounded px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] transition-colors ${
                primary
                  ? "bg-white text-primary shadow-sm hover:bg-primary-container"
                  : "border border-white/60 text-white hover:border-white hover:bg-white/10"
              }`;
              const inner = (
                <>
                  {cta.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </>
              );
              return cta.external ? (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <Link key={cta.href} href={cta.href} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

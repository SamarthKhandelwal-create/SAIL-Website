import Image from "next/image";
import Link from "next/link";
import type { Sponsor } from "@/data/types";
import Reveal from "./Reveal";

const isSvg = (path: string) => path.toLowerCase().endsWith(".svg");

/**
 * Compact logo row for the home page, linking through to the full /sponsors
 * wall. The homepage previously reached /sponsors only from the footer, which
 * put our funders three scrolls down a page they help pay for.
 *
 * Only sponsors with artwork appear here — a wordmark reads as a card, not as
 * a logo in a row, and the full page gives every funder its proper credit.
 */
export default function SponsorStrip({ sponsors }: { sponsors: Sponsor[] }) {
  const withLogos = sponsors.filter((s) => s.logo);
  if (withLogos.length === 0) return null;

  return (
    <section className="bg-surface-container-lowest px-margin-mobile py-stack-lg md:px-gutter">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-8 text-center font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            Supported by
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {withLogos.map((s) => (
              <li
                key={s.id}
                className="flex h-14 items-center justify-center sm:h-16"
              >
                {isSvg(s.logo!) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.logo}
                    alt={s.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full w-auto max-w-[150px] object-contain sm:max-w-[170px]"
                  />
                ) : (
                  <Image
                    src={s.logo!}
                    alt={s.name}
                    width={340}
                    height={170}
                    className="max-h-full w-auto max-w-[150px] object-contain sm:max-w-[170px]"
                  />
                )}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center">
            <Link
              href="/sponsors"
              className="group inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
            >
              Meet our sponsors
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

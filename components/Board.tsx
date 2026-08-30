import Image from "next/image";
import type { BoardMember } from "@/data/types";
import Reveal from "./Reveal";

function withLink(member: BoardMember, node: React.ReactNode) {
  if (!member.email) return node;
  return (
    <a
      href={`mailto:${member.email}`}
      aria-label={`Email ${member.name}`}
      className="block h-full"
    >
      {node}
    </a>
  );
}

/**
 * Feature card: an editorial split so a tall portrait headshot is framed in its
 * own column (anchored to the top to keep the face) beside a readable text panel.
 */
function FeatureCard({ member }: { member: BoardMember }) {
  return withLink(
    member,
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline/15 bg-surface-container-lowest transition-colors duration-500 hover:border-primary/40 sm:flex-row">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container-high sm:aspect-auto sm:h-auto sm:w-[42%]">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          priority
          sizes="(max-width: 640px) 100vw, 42vw"
          className="absolute inset-0 object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 p-8 md:p-10">
        <p className="font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
          {member.role}
        </p>
        <h3 className="font-display text-headline-lg text-primary">
          {member.name}
        </h3>
        {member.bio && (
          <p className="font-body text-body-md text-on-surface-variant">
            {member.bio}
          </p>
        )}
        {member.email && (
          <span className="mt-2 inline-flex items-center gap-2 font-body text-body-md text-primary transition-colors group-hover:text-surface-tint">
            {member.email}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

function MemberCard({
  member,
  className,
}: {
  member: BoardMember;
  className?: string;
}) {
  return withLink(
    member,
    <div
      className={`group relative h-full overflow-hidden rounded-xl border border-outline/15 bg-surface-container-lowest transition-colors duration-500 hover:border-primary/40 ${className ?? ""}`}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-surface-container-high">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="mb-1 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary-fixed">
            {member.role}
          </p>
          <h3 className="font-display text-2xl text-white">{member.name}</h3>
          {member.email && (
            // Addresses run to ~48 characters, which is wider than this card at
            // every breakpoint — break-all keeps them inside the overlay rather
            // than pushing past the rounded edge.
            <p className="mt-1 break-all font-body text-xs text-white/70">
              {member.email}
            </p>
          )}
          {member.bio && (
            <p className="mt-3 max-h-0 overflow-hidden font-body text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const INTRO =
  "Meet the students leading the charge in AI literacy — bridging the gap between complex technology and accessible education.";

export default function Board({
  board,
  showHeading = true,
}: {
  board: BoardMember[];
  showHeading?: boolean;
}) {
  const feature = board.find((m) => m.feature) ?? board[0];
  const rest = board.filter((m) => m.id !== feature.id);

  return (
    <section className="bg-background px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-20 text-center">
            {showHeading && (
              <>
                <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                  Our Team
                </p>
                <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
                  Leadership
                </h2>
              </>
            )}
            <p className="mx-auto mb-6 max-w-2xl font-body text-body-lg text-secondary">
              {INTRO}
            </p>
            <p className="mx-auto mb-4 max-w-3xl font-body text-body-md text-on-surface-variant">
              SAIL has no paid staff and no adult executive director. The board
              below sets direction, maintains the curriculum, keeps the books,
              and teaches workshops alongside every other volunteer. Chapter
              leads at each school run their own programming and bring what
              works back to the wider network.
            </p>
            <p className="mx-auto max-w-3xl font-body text-body-md text-on-surface-variant">
              Everyone here is a high school student doing this around
              coursework and everything else, which shapes how we work: small
              commitments that people can actually keep, and no single point of
              failure on any one person. If you want to be part of it, we have
              open roles on the marketing and finance teams, and we are always
              looking for new chapter leads.
            </p>
          </div>
        </Reveal>

        <Reveal className="mx-auto mb-6 max-w-3xl">
          <FeatureCard member={feature} />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((member, i) => (
            <Reveal key={member.id} delay={i % 3}>
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

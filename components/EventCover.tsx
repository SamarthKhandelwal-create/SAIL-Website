import Image from "next/image";

/**
 * An event's cover photo, or a plain branded panel when the event has none.
 *
 * Some sessions cannot show photos at all — a host may not permit images of
 * the young people in the room — so `cover` is optional and every place that
 * draws one goes through here. Drop it inside a positioned box, as you would
 * an `<Image fill>`.
 */
export default function EventCover({
  src,
  alt,
  sizes,
  quality,
  priority,
  className = "object-cover",
  small = false,
}: {
  src?: string;
  alt: string;
  sizes: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  /** Calendar thumbnails: drop the wordmark to a size that fits 56px. */
  small?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={className}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-surface-tint"
    >
      <span
        className={`font-display font-bold tracking-wide text-white/90 ${
          small ? "text-base" : "text-5xl md:text-6xl"
        }`}
      >
        SAIL
      </span>
    </div>
  );
}

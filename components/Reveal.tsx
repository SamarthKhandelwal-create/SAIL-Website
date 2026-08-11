import type { ReactNode } from "react";

/**
 * Scroll reveal wrapper. Previously a framer-motion client component; it is
 * now a server component driving the same fade-up through CSS scroll-driven
 * animations (see `.reveal` in globals.css). No JavaScript ships, and content
 * stays visible in browsers without `animation-timeline` support.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger index — each step offsets the animation slightly. */
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  return (
    <Tag
      className={`reveal ${className ?? ""}`}
      style={delay ? { animationDelay: `${delay * 0.08}s` } : undefined}
    >
      {children}
    </Tag>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal dot cursor that tracks the pointer exactly.
 * Only mounts on devices with a fine pointer (mouse); never on touch.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // Detect a fine pointer and enable the cursor (renders the dot).
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setEnabled(true);
      document.body.classList.add("has-custom-cursor");
    }
    return () => document.body.classList.remove("has-custom-cursor");
  }, []);

  // Once enabled, wire the dot to the pointer.
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };
    const onLeave = () => {
      dot.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary"
    />
  );
}

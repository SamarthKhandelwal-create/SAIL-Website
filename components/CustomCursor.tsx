"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal dot + ring cursor that expands over interactive elements.
 * Only mounts on devices with a fine pointer (mouse); never on touch.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // 1) Detect a fine pointer and enable the cursor (renders the ring/dot).
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setEnabled(true);
      document.body.classList.add("has-custom-cursor");
    }
    return () => document.body.classList.remove("has-custom-cursor");
  }, []);

  // 2) Once enabled, the ring/dot are in the DOM — wire up the behavior.
  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Target (true mouse) vs. eased (ring) position for a trailing effect.
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };

    const isInteractive = (el: Element | null) =>
      !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, .leaflet-marker-icon, [data-cursor="hover"]'
      );

    const onOver = (e: MouseEvent) => {
      ring.classList.toggle("cursor-grow", isInteractive(e.target as Element));
    };

    const onDown = () => ring.classList.add("cursor-press");
    const onUp = () => ring.classList.remove("cursor-press");
    const onLeave = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };
    const onEnter = () => {
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-primary/60 transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-primary"
      />
      <style jsx global>{`
        .cursor-ring.cursor-grow {
          width: 64px;
          height: 64px;
          background-color: rgba(73, 131, 155, 0.12);
          border-color: rgba(73, 131, 155, 0.9);
        }
        .cursor-ring.cursor-press {
          transform-origin: center;
          scale: 0.85;
        }
      `}</style>
    </>
  );
}

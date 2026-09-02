"use client";

import { useEffect, useRef, useState } from "react";

export function ClientEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      setVisible(true);
      const target = (event.target as Element).closest<HTMLElement>("a, button, [data-cursor]");
      setLabel(target?.dataset.cursor ?? (target ? "OPEN" : ""));
    };
    const leave = () => setVisible(false);
    const magneticMove = (event: PointerEvent) => {
      const target = (event.target as Element).closest<HTMLElement>("[data-magnetic]");
      if (!target) return;
      const bounds = target.getBoundingClientRect();
      target.style.translate = `${(event.clientX - bounds.left - bounds.width / 2) * 0.12}px ${(event.clientY - bounds.top - bounds.height / 2) * 0.12}px`;
    };
    const magneticReset = (event: PointerEvent) => {
      const target = (event.target as Element).closest<HTMLElement>("[data-magnetic]");
      if (target) target.style.translate = "0 0";
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointermove", magneticMove, { passive: true });
    document.addEventListener("pointerout", magneticReset, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointermove", magneticMove);
      document.removeEventListener("pointerout", magneticReset);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <div ref={cursorRef} className={`custom-cursor${visible ? " is-visible" : ""}${label ? " has-label" : ""}`} aria-hidden="true"><span>{label}</span></div>;
}
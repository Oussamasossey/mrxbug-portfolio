"use client";

import { useRef } from "react";

export function BugEntity() {
  const shellRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const shell = shellRef.current;
    if (!shell || event.pointerType === "touch") return;
    const bounds = shell.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -12;
    shell.style.setProperty("--bug-rx", `${rotateX}deg`);
    shell.style.setProperty("--bug-ry", `${rotateY}deg`);
  }

  function resetPosition() {
    shellRef.current?.style.setProperty("--bug-rx", "0deg");
    shellRef.current?.style.setProperty("--bug-ry", "0deg");
  }

  return (
    <div ref={shellRef} className="bug-shell" onPointerMove={handlePointerMove} onPointerLeave={resetPosition}>
      <svg className="bug-entity" viewBox="0 0 600 720" role="img" aria-label="Abstract digital bug entity">
        <defs>
          <linearGradient id="bug-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e6ff4b" />
            <stop offset="0.45" stopColor="#80a900" />
            <stop offset="1" stopColor="#253000" />
          </linearGradient>
          <filter id="bug-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g className="bug-lines" fill="none" stroke="currentColor">
          <path d="M214 246 88 136 38 145M386 246l126-110 50 9M184 330 62 286 18 308M416 330l122-44 44 22M190 426 62 480 25 530M410 426l128 54 37 50M232 514 138 626 91 646M368 514l94 112 47 20" />
        </g>
        <g className="bug-core" filter="url(#bug-glow)">
          <path d="M256 160 300 92l44 68-18 54h-52Z" fill="url(#bug-metal)" />
          <path d="M224 232 300 188l76 44 32 122-45 183-63 78-63-78-45-183-45-183Z" fill="#111509" stroke="#c7ff19" strokeWidth="3" />
          <path d="M300 205v380M222 260l78 34 78-34M202 354h196M218 456l82-30 82 30M242 536l58-36 58 36" fill="none" stroke="#8bab22" strokeWidth="2" />
          <path d="M300 294 261 337l39 89 39-89Z" fill="url(#bug-metal)" />
          <circle cx="300" cy="354" r="9" fill="#efffb3" />
        </g>
      </svg>
      <span className="bug-scanline" aria-hidden="true" />
      <span className="bug-coordinate bug-coordinate-a" aria-hidden="true">X.034</span>
      <span className="bug-coordinate bug-coordinate-b" aria-hidden="true">Y.118</span>
    </div>
  );
}
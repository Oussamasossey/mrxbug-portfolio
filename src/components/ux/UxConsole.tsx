"use client";
import { useState } from "react";

export function UxConsole({ principles }: { principles: readonly string[] | string[] }) {
  const [active, setActive] = useState(0);
  return <div className="ux-console"><div className="ux-preview"><div className="preview-nav"><i /><span>INTERFACE PROTOTYPE</span></div><div className={`preview-content mode-${active % 3}`}><small>PRINCIPLE / {String(active + 1).padStart(2, "0")}</small><strong>{principles[active]}</strong><p>Clarity changes how the interface is understood, navigated and remembered.</p><button type="button">PRIMARY ACTION <span>↗</span></button></div></div><div className="principle-list" role="tablist" aria-label="UI and UX principles">{principles.map((item, index) => <button type="button" role="tab" aria-selected={active === index} key={item} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item}</button>)}</div></div>;
}
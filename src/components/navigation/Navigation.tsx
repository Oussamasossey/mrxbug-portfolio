"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["PROJECTS", "projects"],
  ["STACK", "stack"],
  ["JOURNEY", "journey"],
  ["CONTACT", "contact"],
] as const;

export function Navigation() {
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[visible.length - 1].target.id);
      },
      { rootMargin: "-35% 0px -55%" },
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`site-header${compact ? " is-compact" : ""}${menuOpen ? " menu-is-open" : ""}`}>
      <Link className="brand" href={`${prefix}#home`} aria-label="MrxBug home" onClick={() => setMenuOpen(false)}>
        <span className="brand-glyph" aria-hidden="true"><i /><i /><b /></span>
        <strong>MRXBUG</strong>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, id]) => {
          const isActive = pathname === "/" && active === id;
          return <Link key={id} className={isActive ? "is-active" : ""} href={`${prefix}#${id}`} aria-current={isActive ? "location" : undefined}>{label}</Link>;
        })}
      </nav>
      <Link className="nav-contact" data-magnetic href={`${prefix}#contact`}>LET&apos;S TALK <span aria-hidden="true">↗</span></Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>
        <span /><span />
      </button>
      <div className="mobile-menu" id="mobile-menu" aria-hidden={!menuOpen}>
        <div className="mobile-system-mark" aria-hidden="true"><span className="brand-glyph"><i /><i /><b /></span><small>ENTITY NAVIGATION / ACTIVE</small></div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, id], index) => (
            <Link key={id} href={`${prefix}#${id}`} style={{ "--nav-order": index } as React.CSSProperties} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{label}</Link>
          ))}
        </nav>
        <p>MRXBUG // DIGITAL SYSTEM <span>ONLINE</span></p>
      </div>
    </header>
  );
}
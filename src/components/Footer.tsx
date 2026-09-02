"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";

  return <footer className="footer"><Link className="brand" href={`${prefix}#home`}><span className="brand-glyph" aria-hidden="true"><i /><i /><b /></span><strong>MRXBUG</strong></Link><nav aria-label="Footer navigation"><Link href={`${prefix}#about`}>ABOUT</Link><Link href={`${prefix}#projects`}>PROJECTS</Link><Link href={`${prefix}#stack`}>STACK</Link><Link href={`${prefix}#contact`}>CONTACT</Link></nav><div><span>SYSTEM STATUS: <b>ONLINE</b></span><span>BUILT WITH NEXT.JS</span><span>© 2026 MRXBUG</span></div></footer>;
}

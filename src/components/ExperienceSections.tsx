import Link from "next/link";
import { journey, principles, sahara, stack } from "@/data/portfolio";
import { ContactForm } from "./contact/ContactForm";
import { Footer } from "./Footer";
import { UxConsole } from "./ux/UxConsole";

export function ExperienceSections() {
  return <>
    <section className="section ux-section" aria-labelledby="ux-title">
      <div className="section-index"><span>UI / UX // OPERATING LOGIC</span><span>FORM FOLLOWS PURPOSE</span></div>
      <div className="split-heading"><h2 id="ux-title" className="section-title">DESIGN ISN&apos;T<br /><em>DECORATION.</em></h2><p>I don&apos;t just code interfaces. I think about how people use them.</p></div>
      <UxConsole principles={principles} />
    </section>

    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="section-index"><span>02 // PROJECTS</span><span>BUG // SCANNING PROJECTS</span></div>
      <h2 id="projects-title" className="section-title">THINGS<br />I&apos;VE <em>BUILT.</em></h2>
      <article className="project-feature">
        <Link className="project-visual" href="/work/saharatravel" aria-label="View the SaharaTravel case study" data-cursor="VIEW CASE STUDY ↗"><div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>saharatravel / explore</span></div><div className="sahara-scene" aria-hidden="true"><span>EXPLORE<br />THE SAHARA</span><b>TOURS / ACTIVITIES / EXPERIENCES</b><i /></div></Link>
        <div className="project-info"><small>FEATURED SYSTEM / 001</small><h3>{sahara.title}</h3><p>{sahara.description}</p><ul>{sahara.technologies.map((item) => <li key={item}>{item}</li>)}</ul><Link className="project-note" href="/work/saharatravel">VIEW CASE STUDY ↗</Link></div>
      </article>
    </section>

    <section className="section stack-section" id="stack" aria-labelledby="stack-title">
      <div className="section-index"><span>03 // SYSTEM STACK</span><span>BUG // SYSTEM STACK</span></div>
      <h2 id="stack-title" className="section-title">THE TOOLS<br />BEHIND <em>THE BUG.</em></h2>
      <div className="stack-system"><div className="stack-flow" aria-label="Primary application architecture"><span>UI</span><i /> <span>REACT</span><i /> <span>NEXT.JS</span><i /> <span>NODE.JS</span><i /> <span>POSTGRESQL</span></div><ul>{stack.map((item, index) => <li key={item}><small>{String(index + 1).padStart(2, "0")}</small><strong>{item}</strong><span>ACTIVE NODE</span></li>)}</ul></div>
    </section>

    <section className="section journey-section" id="journey" aria-labelledby="journey-title">
      <div className="section-index"><span>04 // JOURNEY</span><span>CONTINUOUS ITERATION</span></div>
      <h2 id="journey-title" className="section-title">ALWAYS IN<br /><em>PROGRESS.</em></h2>
      <ol className="journey-path">{journey.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, "0")}</span><h3>{stage}</h3><p>{index === 0 ? "Understanding the foundations." : index === 1 ? "Turning knowledge into working products." : index === 2 ? "Testing new interfaces and interactions." : index === 3 ? "Releasing useful experiences." : "Refining every layer of the system."}</p></li>)}</ol>
    </section>

    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="section-index"><span>05 // CONNECTION</span><span>BUG // CONNECTION READY</span></div>
      <div className="contact-grid"><div><p className="eyebrow">CONNECTION READY</p><h2 id="contact-title" className="section-title">HAVE A PROJECT<br /><em>IN MIND?</em></h2><p className="contact-lead">Let&apos;s build something people remember.</p></div><ContactForm /></div>
    </section>

    <Footer />
  </>;
}
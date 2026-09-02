import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { ClientEffects } from "@/components/motion/ClientEffects";
import { Footer } from "@/components/Footer";
import { sahara } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "SaharaTravel — Case Study | MrxBug",
  description: sahara.description,
};

export default function SaharaTravelCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <section className="section case-hero" aria-labelledby="case-title">
          <Link className="case-crumb" href="/#projects">← ALL PROJECTS</Link>
          <div className="section-index"><span>CASE STUDY / 001</span><span>BUG // FEATURED SYSTEM</span></div>
          <h1 id="case-title" className="section-title">{sahara.title}</h1>
          <p className="case-lead">{sahara.description}</p>
          <ul className="case-tags">{sahara.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="case-links">
            <a className="button button-primary" href={sahara.liveUrl} target="_blank" rel="noopener noreferrer">VISIT LIVE SITE ↗</a>
            <span className="private-repo-label">PRIVATE REPOSITORY</span>
          </div>
        </section>

        <section className="section case-section" aria-labelledby="case-overview">
          <div className="section-index"><span>01 // OVERVIEW</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-overview" className="case-section-title">OVERVIEW</h2>
          <p className="case-copy">{sahara.overview}</p>
        </section>

        <section className="section case-section" aria-labelledby="case-problem">
          <div className="section-index"><span>02 // THE PROBLEM</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-problem" className="case-section-title">THE PROBLEM</h2>
          <p className="case-copy">{sahara.problem}</p>
        </section>

        <section className="section case-section" aria-labelledby="case-approach">
          <div className="section-index"><span>03 // THE APPROACH</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-approach" className="case-section-title">THE APPROACH</h2>
          <p className="case-copy">{sahara.approach}</p>
        </section>

        <section className="section case-section" aria-labelledby="case-uxui">
          <div className="section-index"><span>04 // UX / UI</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-uxui" className="case-section-title">UX / UI</h2>
          <p className="case-copy">{sahara.uxUi}</p>
        </section>

        <section className="section case-section" aria-labelledby="case-features">
          <div className="section-index"><span>05 // FEATURES</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-features" className="case-section-title">FEATURES</h2>
          <ul className="case-feature-list">{sahara.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>

        <section className="section case-section" aria-labelledby="case-tech">
          <div className="section-index"><span>06 // TECHNOLOGY</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-tech" className="case-section-title">TECHNOLOGY</h2>
          <ul className="case-tech-list">{sahara.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="section case-section" aria-labelledby="case-responsive">
          <div className="section-index"><span>07 // RESPONSIVE EXPERIENCE</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-responsive" className="case-section-title">RESPONSIVE EXPERIENCE</h2>
          <p className="case-copy">{sahara.responsive}</p>
        </section>

        <section className="section case-section" aria-labelledby="case-result">
          <div className="section-index"><span>08 // FINAL RESULT</span><span>SAHARATRAVEL</span></div>
          <h2 id="case-result" className="case-section-title">FINAL RESULT</h2>
          <p className="case-copy">{sahara.finalResult}</p>
          <a className="button button-quiet" href={sahara.liveUrl} target="_blank" rel="noopener noreferrer">VISIT SAHARIOCAMELTOURS.COM ↗</a>
        </section>

        <Footer />
      </main>
      <ClientEffects />
    </>
  );
}

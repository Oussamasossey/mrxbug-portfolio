import { BugEntity } from "./BugEntity";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="intro" aria-hidden="true">
        <span>MRXBUG</span>
        <i />
      </div>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true">
        <span>ENTITY / 001</span>
        <span>LAT 34.02 / LNG -6.84</span>
      </div>
      <div className="hero-copy">
        <p className="eyebrow reveal reveal-1">{"// WEB & APP DEVELOPER"}</p>
        <h1 id="hero-title" className="display-title">
          <span className="reveal reveal-2">I BUILD DIGITAL</span>
          <span className="reveal reveal-3">EXPERIENCES<span className="accent-mark">.</span></span>
          <span className="reveal reveal-4">THAT SHOULDN&apos;T</span>
          <span className="reveal reveal-5">EXIST.</span>
        </h1>
        <p className="hero-summary reveal reveal-6">
          I build modern, fast and scalable websites and web applications with
          a strong focus on UI/UX, performance and interaction design.
        </p>
        <div className="hero-actions reveal reveal-7">
          <a className="button button-primary" data-magnetic data-cursor="EXPLORE" href="#projects">EXPLORE MY WORK <span aria-hidden="true">↗</span></a>
          <a className="button button-quiet" data-magnetic href="#contact">LET&apos;S TALK</a>
        </div>
      </div>
      <div className="hero-entity reveal reveal-3">
        <div className="entity-status"><i aria-hidden="true" /> BUG INITIALIZED</div>
        <BugEntity />
      </div>
      <div className="hero-footer" aria-hidden="true">
        <span>SCROLL TO ENTER SYSTEM</span>
        <span>SYS.2026 / ONLINE</span>
      </div>
    </section>
  );
}
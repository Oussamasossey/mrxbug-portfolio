import { Hero } from "@/components/hero/Hero";
import { Navigation } from "@/components/navigation/Navigation";
import { ClientEffects } from "@/components/motion/ClientEffects";
import { About } from "@/components/about/About";
import { ExperienceSections } from "@/components/ExperienceSections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <ExperienceSections />
      </main>
      <ClientEffects />
    </>
  );
}

import HeroSection from "~/components/HeroSection";
import AboutMe from "~/components/AboutMe";
import Skills from "~/components/Skills";
import Projects from "~/components/Projects";
import Contact from "~/components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <HeroSection />

      <AboutMe />

      <Skills />

      <Projects />

      <Contact />
    
    </div>
  );
}

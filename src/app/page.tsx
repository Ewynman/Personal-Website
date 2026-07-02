import Hero from "../components/Hero";
import About from "../components/About";
import WorkSection from "../components/WorkSection";
import ProjectSection from "../components/ProjectSection";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import workData from "../data/work.json";
import projectData from "../data/projects.json";
import type { ContentItem } from "../types/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WorkSection items={workData as ContentItem[]} />
      <ProjectSection items={projectData as ContentItem[]} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

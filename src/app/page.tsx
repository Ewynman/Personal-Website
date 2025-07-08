// src/app/page.tsx
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import workData from "../data/work.json";
import projectData from "../data/projects.json";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Work Experience Carousel */}
      <Carousel
        items={workData}
        sectionId="work"
        sectionTitle="Work Experience"
      />

      {/* Projects Carousel */}
      <Carousel
        items={projectData}
        sectionId="projects"
        sectionTitle="Projects"
      />

      <Skills />
      <Footer />
    </>
  );
}

import Image from "next/image";
import type { ContentItem } from "../types/content";
import Reveal from "./Reveal";
import TagList from "./TagList";

interface ProjectSectionProps {
  items: ContentItem[];
}

export default function ProjectSection({ items }: ProjectSectionProps) {
  const [featured, ...rest] = items;

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <span className="section-label">Projects</span>
            <h2 id="projects-heading" className="section-title">
              Selected work
            </h2>
            <p className="section-description">
              Side projects and products — from a production iOS app to
              full-stack tools built to solve real problems.
            </p>
          </header>
        </Reveal>

        <div className="projects-grid">
          {featured && (
            <Reveal delay={60}>
              <FeaturedProject item={featured} />
            </Reveal>
          )}

          {rest.map((item, index) => (
            <Reveal key={item.id} delay={(index + 1) * 60}>
              <ProjectCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ item }: { item: ContentItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card project-card--featured"
      aria-label={`View ${item.company} project`}
    >
      <div className="project-card-header">
        <div className="project-card-meta">
          <Image
            src={item.logo}
            alt=""
            className="project-card-logo"
            width={48}
            height={48}
          />
          <div>
            <p className="project-card-name">{item.company}</p>
            <p className="project-card-role">{item.title}</p>
          </div>
        </div>
        <time className="project-card-dates">{item.dates}</time>
      </div>
      <p className="project-card-highlight">{item.highlight}</p>
      <div className="project-card-footer">
        <TagList tags={item.tags} limit={6} />
        <span className="project-card-link">Visit project →</span>
      </div>
    </a>
  );
}

function ProjectCard({ item }: { item: ContentItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label={`View ${item.company} project`}
    >
      <div className="project-card-header">
        <div className="project-card-meta">
          <Image
            src={item.logo}
            alt=""
            className="project-card-logo"
            width={40}
            height={40}
          />
          <div>
            <p className="project-card-name">{item.company}</p>
            <p className="project-card-role">{item.title}</p>
          </div>
        </div>
        <time className="project-card-dates">{item.dates}</time>
      </div>
      <p className="project-card-highlight">{item.highlight}</p>
      <div className="project-card-footer">
        <TagList tags={item.tags} limit={4} />
        <span className="project-card-link">View →</span>
      </div>
    </a>
  );
}

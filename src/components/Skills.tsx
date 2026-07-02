import Reveal from "./Reveal";

const groups = [
  {
    label: "Mobile",
    items: ["Swift", "SwiftUI", "UIKit", "Flutter"],
  },
  {
    label: "Web",
    items: ["TypeScript", "React", "Next.js", "JavaScript"],
  },
  {
    label: "Backend & tools",
    items: ["Python", "Java", "Firebase", "Azure", "Node.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <span className="section-label">Capabilities</span>
            <h2 id="skills-heading" className="section-title">
              Tools I work with
            </h2>
            <p className="section-description">
              Technologies I use regularly across mobile, web, and backend
              development.
            </p>
          </header>
        </Reveal>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <Reveal key={group.label} delay={index * 80}>
              <div className="skills-group">
                <h3 className="skills-group-label">{group.label}</h3>
                <ul className="skills-list">
                  {group.items.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

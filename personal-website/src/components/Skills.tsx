// src/components/Skills.tsx
"use client";

import React from "react";

interface Skill {
  name: string;
  level: number; // 0–100
}

const skills: Skill[] = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 95 },
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "Java", level: 90 },
  { name: "React.js/Next.js", level: 85 },
  { name: "SQL", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "PHP", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="container skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

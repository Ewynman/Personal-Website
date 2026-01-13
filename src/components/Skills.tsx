"use client";

import React from "react";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "Swift", level: 95 },
  { name: "SwiftUI", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React/Next.js", level: 90 },
  { name: "Flutter", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "Java", level: 85 },
  { name: "Firebase", level: 85 },
  { name: "Azure", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
      </div>
    </section>
  );
}

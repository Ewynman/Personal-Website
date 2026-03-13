"use client";

import React from "react";

const groups = [
  { label: "Mobile", items: ["Swift", "SwiftUI", "Flutter"] },
  { label: "Web", items: ["TypeScript", "React", "Next.js", "JavaScript"] },
  { label: "Backend & tools", items: ["Python", "Java", "Firebase", "Azure"] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.label} className="skills-group">
              <h3 className="skills-group-label">{group.label}</h3>
              <ul className="skills-list">
                {group.items.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

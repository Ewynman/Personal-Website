"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-badge">iOS & Full-Stack Developer</div>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="gradient-text">Eddie Wynman</span>
        </h1>
        <p className="hero-subtitle">
          Building mobile apps and web experiences with Swift, React, and modern tools
        </p>
        <div className="hero-links">
          <a
            href="/Files/Edward-Wynman-Resume.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="#work"
            className="btn btn-secondary"
          >
            View Work
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">2.5M+</div>
            <div className="stat-label">Users Impacted</div>
          </div>
          <div className="stat">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects</div>
          </div>
        </div>
      </div>
      <div className="hero-gradient"></div>
    </section>
  );
}

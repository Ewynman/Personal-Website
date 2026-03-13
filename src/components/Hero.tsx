"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
      <div className="hero-content">
        <p className="hero-role">iOS & full-stack developer</p>
        <h1 className="hero-title">Eddie Wynman</h1>
        <p className="hero-subtitle">
          I build mobile and web apps. Currently at Geico; previously NASA, Zebra, and others.
        </p>
        <div className="hero-actions">
          <a
            href="/Files/Edward-Wynman-Resume.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href="#work" className="hero-link">
            Work & projects
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

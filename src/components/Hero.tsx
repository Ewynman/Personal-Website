// src/components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <h1>Hi, I’m Eddie Wynman</h1>
      <p>Web &amp; Mobile Developer</p>
      <a
        href="/Files/Edward-Wynman-Resume.pdf"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
    </section>
  );
}

// src/components/Header.tsx
"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="logo">Eddie Wynman</div>

        {/* hamburger toggle */}
        <button 
          className="menu-toggle" 
          aria-label="Toggle menu" 
          onClick={() => setOpen(o => !o)}
        >
          ☰
        </button>

        <nav>
          <ul className={`nav-list${open ? " open" : ""}`}>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#work"  onClick={() => setOpen(false)}>Work</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#skills"  onClick={() => setOpen(false)}>Skills</a></li>
            <li>
              <a 
                href="/Files/Edward-Wynman-Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

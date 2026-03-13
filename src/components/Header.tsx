"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
  ];

  const socialLinks = [
    { href: "/Files/Edward-Wynman-Resume.pdf", label: "Resume", external: true },
    { href: "https://www.linkedin.com/in/edward-wynman/", label: "LinkedIn", external: true },
    { href: "https://github.com/Ewynman", label: "GitHub", external: true },
    { href: "https://twitter.com/eddiebytes", label: "Twitter", external: true },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#about" className="logo">
          Eddie Wynman
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? "open" : ""}>{open ? "✕" : "Menu"}</span>
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={() => setOpen(false)}
                  className="nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="social-link"
                aria-label={link.label}
                onClick={() => setOpen(false)}
              >
                <span className="social-label">{link.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

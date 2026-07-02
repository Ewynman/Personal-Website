"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#about" className="logo" onClick={closeMenu}>
          Eddie Wynman
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`menu-icon ${open ? "open" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          className={`nav-overlay ${open ? "open" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:edward.wynman@gmail.com"
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

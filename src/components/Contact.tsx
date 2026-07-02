import Reveal from "./Reveal";

const links = [
  {
    href: "/Files/Edward-Wynman-Resume.pdf",
    label: "Resume",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/edward-wynman/",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/Ewynman",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://twitter.com/eddiebytes",
    label: "Twitter",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-inner">
        <Reveal>
          <span className="section-label">Contact</span>
          <h2 id="contact-heading" className="contact-title">
            Let&apos;s connect
          </h2>
          <p className="contact-description">
            Open to interesting projects, collaborations, and conversations
            about mobile and full-stack development.
          </p>
          <div className="contact-actions">
            <a href="mailto:edward.wynman@gmail.com" className="contact-email">
              edward.wynman@gmail.com
            </a>
          </div>
          <nav className="contact-links" aria-label="Social links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="contact-link"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

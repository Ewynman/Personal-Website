import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <Reveal>
          <div className="hero-content">
            <p className="hero-label">iOS &amp; full-stack developer</p>
            <h1 className="hero-title">Eddie Wynman</h1>
            <p className="hero-lead">
              I build software that holds up under real use — from iOS systems
              processing millions of sensor events to full-stack platforms serving
              production users.
            </p>
            <div className="hero-actions">
              <a
                href="/Files/Edward-Wynman-Resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume
              </a>
              <a href="#work" className="text-link text-link-arrow">
                See my work
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

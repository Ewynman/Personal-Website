import Reveal from "./Reveal";

const highlights = [
  {
    title: "Systems thinking",
    text: "Network layers, sensor pipelines, and backend infrastructure — built to be debuggable and maintainable.",
  },
  {
    title: "End-to-end ownership",
    text: "From SwiftUI interfaces to Firebase backends and CI/CD — comfortable across the full stack.",
  },
  {
    title: "Measured impact",
    text: "Reduced geocoding failures to near zero, cut false positives by 90%, and shipped tools that save hours of debug time.",
  },
];

export default function About() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <span className="section-label">About</span>
            <h2 id="about-heading" className="section-title">
              Building with intention
            </h2>
          </header>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={80}>
            <div className="about-text">
              <p>
                I&apos;m an iOS developer at Geico, working on telematics
                infrastructure that processes driving data at scale. Before that,
                I built therapy platforms at Therapi, automated diagnostics at
                Zebra Technologies, and hyperspectral imaging workflows during a
                NASA research internship.
              </p>
              <p>
                Outside of work, I founded{" "}
                <a
                  href="https://spotapp.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Spot
                </a>
                , a production iOS app with real-time content delivery. I care
                about the details that most people never see — error handling,
                logging, retry logic — because that&apos;s what separates software
                that works from software that just looks like it does.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <ul className="about-highlights">
              {highlights.map((item) => (
                <li key={item.title} className="about-highlight">
                  <p className="about-highlight-title">{item.title}</p>
                  <p className="about-highlight-text">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

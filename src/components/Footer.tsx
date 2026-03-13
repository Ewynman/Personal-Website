export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          <a href="mailto:edward.wynman@gmail.com">edward.wynman@gmail.com</a>
        </p>
        <div className="footer-links">
          <a href="/Files/Edward-Wynman-Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://www.linkedin.com/in/edward-wynman/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/Ewynman" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://twitter.com/eddiebytes" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <p>© {new Date().getFullYear()} Eddie Wynman</p>
      </div>
    </footer>
  );
}

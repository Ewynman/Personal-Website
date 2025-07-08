// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          <a href="mailto:edward.wynman@gmail.com">edward.wynman@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/edward-wynman/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" • "}
          <a href="https://github.com/Ewynman" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
        <p>© {new Date().getFullYear()} Eddie Wynman</p>
      </div>
    </footer>
  );
}

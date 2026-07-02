export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} Eddie Wynman
        </p>
        <p className="footer-copy">Built with care.</p>
      </div>
    </footer>
  );
}

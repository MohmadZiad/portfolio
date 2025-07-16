import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient">
      <div className="footer-content">
        <p>© 2025 Mohmad Ali. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/mohmadali"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Mohmad Ali on LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MohmadZiad"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Mohmad Ali on GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

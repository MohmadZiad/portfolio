import React from "react";
import "./Footer.css";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "footer-gradient dark" : "footer-gradient"}>
      <div className="footer-content">
        <p className="copyright">© 2025 Mohmad Ali. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/mohmadali"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MohmadZiad"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

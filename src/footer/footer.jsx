import React from "react";
import "./footer.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-avatar">EV</span>
          <span className="footer-name">Esteban Vargas</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} • Diseñado y desarrollado con pasión.
        </p>

        <div className="footer-links">
          <a href="https://github.com" aria-label="GitHub" className="footer-link">
            <IconBrandGithub className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="footer-link">
            <IconBrandLinkedin className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

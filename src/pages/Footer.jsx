import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import vetannowLogo from "../img/vetannow_logo.webp";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-brand-col">
          <div className="footer-logo-card">
            <img src={vetannowLogo} alt="VetanNow" className="footer-logo-img" />
          </div>
          <p className="footer-brand-desc">
            VetanNow is India's financial wellness suite that enables employees to build
            a foundation for financial well-being.
          </p>
        </div>

        {/* Column 2: Company */}
        <div className="footer-links-col">
          <h3 className="footer-col-title">COMPANY</h3>
          <ul className="footer-links-list">
            <li><NavHashLink smooth to="/#who-we-are">About Us</NavHashLink></li>
            <li><Link to="/services/employee">Employee</Link></li>
            <li><Link to="/services/employer">Employer</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><NavHashLink smooth to="/#contact-us">Contact Us</NavHashLink></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="footer-links-col">
          <h3 className="footer-col-title">LEGAL</h3>
          <ul className="footer-links-list">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Column 4: Compliance & Social */}
        <div className="footer-trust-col">
          <ul className="footer-trust-list">
            <li>
              <span className="footer-check-icon">
                <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
                  <rect width="16" height="16" rx="4" fill="#20c331" />
                  <path d="M4 8.5L6.5 11L12 5.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Strict Data Privacy</span>
            </li>
            <li>
              <span className="footer-check-icon">
                <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
                  <rect width="16" height="16" rx="4" fill="#20c331" />
                  <path d="M4 8.5L6.5 11L12 5.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Labour Law Compliant</span>
            </li>
          </ul>

          <div className="footer-social-row">
            <a
              href="https://www.instagram.com/vetannow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VetanNow on Instagram"
              className="footer-social-btn"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/vetannow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VetanNow on LinkedIn"
              className="footer-social-btn"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import vetannowLogo from "../img/vetannow_logo.webp";
import instagramIcon from "../img/instagram.png";
import linkedinIcon from "../img/linkedin-logo.png";
import "./footer.css";
const Footer = () => {
  return (
    // foooter
    <footer className="footer">
      <div className="footer-container">
      <div className="top">
        <div className="left">
          <img src={vetannowLogo} alt="VetanNow Logo" />
          <p>
            VetanNow is India's financial wellness suite that enables
            employees to build a foundation for financial well-being.
          </p>
        </div>
        <div className="right">
          <div className="col">
            <h3>Company</h3>
            <ul>
              <li><NavHashLink smooth to="/#who-we-are">About Us</NavHashLink></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><NavHashLink smooth to="/#contact-us">Contact Us</NavHashLink></li>
            </ul>
          </div>
          <div className="col">
            <h3>LEGAL</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>✅ Strict Data Privacy</li>
              <li>✅ Labour Law Compliant</li>
            </ul>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/vetannow/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VetanNow on Instagram"
              >
                <img src={instagramIcon} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/vetannow/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VetanNow on LinkedIn"
              >
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="col">
          <h4>SALES</h4>
          {/* email */}
            <a href="mailto:quires@vetannow.com">
              {/* dummy */}
              quires@vetannow.com
            </a>
        </div>
        <div className="col">
          {/* media */}
          <h4>MEDIA</h4>
          <a href="mailto:media@vetanNow.com">
            {/* dummy */}
            media@vetanNow.com
            </a>
        </div>
        <div className="col">
          <h4>CUSTUMER SERVICE</h4>
          <a href="mailto:support@vetannow.com">
            {/* dummy */}
            support@vetannow.com
          </a>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer

import React from 'react'

import vetannowLogo from "../img/vetannow_logo.png";
import twitterIcon from "../img/twitter.png";
import instagramIcon from "../img/instagram.png";
import facebookIcon from "../img/facebook.png";
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
            VetanNow is India s financial wellness suite that enables
            employees to build a foundation for financial well being.
          </p>
        </div>
        <div className="right">
          <div className="col">
            <h3>Products</h3>
            <ul>
              <li>Salary On Demand</li>
              <li>Financial Coaching</li>
              <li>Financial Literacy</li>
            </ul>
            <hr />
            <ul>
              <li>Company</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col">
            <h3>LEGAL</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>✅ ISO 27001 Certified</li>
              <li>✅ Strict Data Privacy</li>
              <li>✅ Labour Law Compliant</li>
            </ul>

            {/* social */}
            <div className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
               <img src={twitterIcon} alt="Twiter" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
               <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="facebook" />
              </a>

              <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
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

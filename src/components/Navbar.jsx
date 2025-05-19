import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="VetanNowLogo" />
          <div className="navbar-brand-text">
            <span className="brand-bold">VetanNow</span>
            <span className="brand-tagline">Empowering Bharat Workforces</span>
          </div>
        </div>

        <div
          className={`navbar-links ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/" className="active">
            Home
          </Link>
          <div className="dropdown">Products ▾</div>
          <div className="dropdown">Services ▾</div>
          <Link to="/partners">Partners</Link>
          <Link to="/who-we-are">About us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blog">Blogs</Link>
          <button className="demo-button">Request Demo</button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        height="300"
      >
        <path
          fill="#d40602"
          fill-opacity="1"
          d="M0,128L60,138.7C120,149,240,171,360,154.7C480,139,600,85,720,64C840,43,960,53,1080,69.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
        <path
          fill="#e44e4e"
          fill-opacity="1"
          d="M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,69.3C840,53,960,75,1080,69.3C1200,64,1320,32,1380,16L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Navbar;

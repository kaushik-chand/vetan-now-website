import React, { useState } from "react";
import "./Navbar.css";
import logo from "../img/logo.webp";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");
  const isHomeActive = location.pathname === "/" && !location.hash;
  const isAboutActive = location.hash === "#who-we-are";
  const isBlogsActive = location.pathname.startsWith("/blogs");
  const isFaqActive = location.pathname === "/faq";

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = (event) => {
    event.stopPropagation();
    if (window.matchMedia("(max-width: 1324px)").matches) {
      setServicesOpen((open) => !open);
    }
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="VetanNow" />
        <div className="navbar-brand-text">
          <span className="brand-bold">VetanNow</span>
          <span className="brand-tagline">Empowering Bharat Workforces</span>
        </div>
      </Link>

      <div
        className={`navbar-links ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <NavLink
          to="/"
          end
          className={`nav-link ${isHomeActive ? "active" : ""}`}
        >
          Home
        </NavLink>

        <div className={`dropdown ${servicesOpen ? "open" : ""}`}>
          <button
            type="button"
            className={`dropdown-toggle nav-link ${isServicesActive ? "active" : ""}`}
            onClick={toggleServices}
          >
            Services <span className="dropdown-arrow">▾</span>
          </button>
          <div className="dropdown-content">
            <NavLink
              to="/services/employee"
              className={({ isActive }) =>
                `dropdown-item ${isActive ? "item-active" : ""}`
              }
            >
              Employee
            </NavLink>
            <NavLink
              to="/services/employer"
              className={({ isActive }) =>
                `dropdown-item ${isActive ? "item-active" : ""}`
              }
            >
              Employer
            </NavLink>
          </div>
        </div>

        <NavHashLink
          smooth
          to="/#who-we-are"
          className={`nav-link ${isAboutActive ? "active" : ""}`}
        >
          About Us
        </NavHashLink>

        <NavLink
          to="/blogs"
          className={`nav-link ${isBlogsActive ? "active" : ""}`}
        >
          Blogs
        </NavLink>

        <NavLink
          to="/faq"
          className={`nav-link ${isFaqActive ? "active" : ""}`}
        >
          FAQs
        </NavLink>

        <NavHashLink
          smooth
          to="/#contact-us"
          className="navbar-cta-link"
        >
          <button className="demo-button navbar-cta-btn">Get Started</button>
        </NavHashLink>
      </div>

      <div
        className="hamburger"
        onClick={() => {
          setMenuOpen((open) => !open);
          setServicesOpen(false);
        }}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../img/logo.webp";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");
  const isHomeActive = location.pathname === "/" && !location.hash;
  const isAboutActive = location.hash === "#who-we-are";
  const isBlogsActive = location.pathname.startsWith("/blogs");
  const isFaqActive = location.pathname === "/faq";

  const closeMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 2000);
  };

  const toggleServices = (event) => {
    event.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesOpen((open) => !open);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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

        <div
          className={`dropdown ${servicesOpen ? "open" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
              onClick={closeMenu}
              className={({ isActive }) =>
                `dropdown-item ${isActive ? "item-active" : ""}`
              }
            >
              Employee
            </NavLink>
            <NavLink
              to="/services/employer"
              onClick={closeMenu}
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

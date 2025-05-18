import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png"; // Use the logo from your assets

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="Crediito Logo" />
        <div className="navbar-brand-text">
          <span className="brand-bold">VetanNow</span>
          <span className="brand-tagline">Empowering Bharat Workforces</span>
        </div>
      </div>

      <div className="navbar-links">
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
    </nav>
  );
};

export default Navbar;

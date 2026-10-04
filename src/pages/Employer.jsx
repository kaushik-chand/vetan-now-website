import React from "react";
import rightImage from "../img/employer1.webp";
import "./Employer1.css";
import "./Employer2.css";
import "./employer3.css";
import empolyee from "../img/employer.webp";
import access from "../img/access.png";
import availability from "../img/availability.png";
import percentage from "../img/percentage.png";
import coaching from "../img/coaching.png";
import bg from "../img/employee2.webp";
import "./employer4.css";
import "./Ready_to_get_started.css";
import zero from "../img/0-percent (1).png";
import integration from "../img/integration.png";
import nochanges from "../img/nochange.png";
import risk from "../img/risk.png";
import { NavHashLink } from "react-router-hash-link";
import Seo from "../components/Seo";

const Employer = () => {
  return (
    <div className="employer-container">
      <Seo
        title="Employers | VetanNow"
        description="Offer earned wage access to your team with no change to payroll cash flow. VetanNow integrates with your existing payroll process."
        path="/services/employer"
      />
      <div className="banner">
        <h4>
          <img src={empolyee} alt="employer Icon" />
          Employer
        </h4>
        <h1>
          <span>VetanNow </span>
          is the right earning on demand provide for your organization.
        </h1>
        <div className="banner-content">
          <div className="left">
            <p>
              VetanNow allows employees of our partnering firms access to a
              portion of their earned pay as soon as they earned pay as soon as
              they've earned it with, importantly, no financial impact on your
              business and a seamless payroll, time and attendance management
              system at no cost.
            </p>
            <button className="demo-button">Download VentanNow</button>
          </div>
          <div className="right">
            <img
              src={rightImage}
              style={{ "max-width": "500px" }}
              alt="Home Banner"
            />
          </div>
        </div>
      </div>
      <div className="Request_Demo">
        <div className="Request_Demo_content">
          <div className="col">
            <img src={zero} alt="zero" />
            <h3>Zero Cost to Your Company</h3>
          </div>
          <div className="col">
            <img src={integration} alt="" />
            <h3>Intergrated Seamlessly with Payroll</h3>
          </div>
          <div className="col">
            <img src={nochanges} alt="" />
            <h3>No Changes to Payroll Cycle or Cashflow</h3>
          </div>
          <div className="col">
            <img src={risk} alt="" />
            <h3>Exposes You to no Financial Risk</h3>
          </div>
        </div>
        <NavHashLink smooth to="/#contact-us" className="demo-button">
          Request Demo
        </NavHashLink>
      </div>{" "}
      <div className="how_vetannow_works">
        <h1>
          What employers get with <span>VetanNow </span>?
        </h1>
        <div className="how_vetannow_works_container">
          <div className="col">
            {/* 3 li 1.Easy access to liquidity 2. Timely availability of funds 3.Hassle-free paperwork */}
            <li>
              <img src={access} alt="access" />
              <h4>Improve employee productivity</h4>
              <p>by eliminating financial stress</p>
            </li>
            <li>
              <img src={availability} alt="availability" />
              <h4>Attract talent & reduce employee turnover</h4>
              <p>via earned salary access</p>
            </li>
          </div>
          <div className="col">
            {/* 3 li 1.Easy access to liquidity 2. Timely availability of funds 3.Hassle-free paperwork */}
            <li>
              <img src={percentage} alt="availability" />
              <h4>Track employee financial health</h4>
              <p>via VetanNow employer dashboard</p>
            </li>
            <li>
              <img src={coaching} alt="coaching" />
              <h4>Zero cost plug and play</h4>
              <p>compatible with your HRMS</p>
            </li>
          </div>
          <img className="bg" src={bg} alt="bg" />
        </div>
      </div>
      <div className="Get_in_touch">
        <div className="content">
          <h1>Know more about us</h1>
          <p>
            Download our corporate brochure to improve the financial wellness of
            your employees
          </p>

          <NavHashLink smooth to="/#contact-us" className="demo-button">
            Request Demo
          </NavHashLink>
        </div>
      </div>
      {/* <div className="Testimonials">
        <h1>Why businesses love VetanNow?</h1>

        <h4>
          <img src={star} alt="employer Icon" />
          Testimonials
        </h4>

        <div className="video-scroll-wrapper">
          <button
            className="scroll-btn left"
            aria-label="Scroll left"
            onClick={() => scroll("left")}
          >
            &#10094;
          </button>

          <div className="video-container" ref={scrollRef}>
            {[
              "1g2b3c4d5e6",
              "7h8i9j0k1l2",
              "3m4n5o6p7q8",
              "3m4n5o6p7q8",
              "3m4n5o6p7q8",
              "3m4n5o6p7q8",
              "3m4n5o6p7q8",
            ].map((videoId, index) => (
              <div className="video" key={index}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>

          <button
            className="scroll-btn right"
            aria-label="Scroll right"
            onClick={() => scroll("right")}
          >
            &#10095;
          </button>
        </div>
      </div> */}
      <div className="Ready_to_get_started">
        <h1>
          Ready to get started with <span>VetanNow</span>?
        </h1>
        <p>
          VetanNow focuses on building long term financial wellness for the
          employed workforce via multiple tools for easy budgeting, tracking and
          financial coaching. Download the VetanNow App if your Employer has
          partnered with VetanNow
        </p>
        <div className="buttons">
          <NavHashLink smooth to="/#contact-us" className="demo-button">
            Request Demo
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default Employer;

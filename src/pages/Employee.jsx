import React, { useRef } from "react";
import rightImage from "../img/employee1.png";
import "./Employee.css";
import empolyee from "../img/employee.png";
import "./how_vetannow_works.css";
import access from "../img/access.png";
import availability from "../img/availability.png";
import paperwork from "../img/paperwork.png";
import percentage from "../img/percentage.png";
import coaching from "../img/coaching.png";
import multilingual from "../img/multilingual.png";
import bg from "../img/employee2.png";
import "./Get_in_touch.css";
import Getintouch from "../img/Get in touch.png";
import "./Testimonials.css";
import star from "../img/star.png";
import "./Ready_to_get_started.css";
import playstore from "../img/playstore.png";
import appstore from "../img/appstore.png";

const Employee = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Adjust based on video width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const [showPopup, setShowPopup] = React.useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  const themeColor = "#d40602";

  return (
    <div className="employee-container">
      <div className="banner">
        <div className="left">
          <h4>
            <img src={empolyee} alt="Employee Icon" />
            Employees
          </h4>
          <h1>Need Money Immediately?</h1>

          <p>
            The VetanNow app is the easiest, most secure way to access your
            earned but unpaid wages before your next payday. Get early access to
            pay bills on time, avoid late fees and meet your financial goals.
            With VetanNow you have access to your earned, accrued pay as you
            need it.
          </p>
          <button
            className="demo-button"
            onClick={handleDownloadClick}
           
          >
            Download VentanNow
          </button>
        </div>
        <div className="right">
          <img src={rightImage} alt="Home Banner" />
        </div>
      </div>

      <div className="how_vetannow_works">
        <h1>
          How <span>VetanNow </span>
          can help you become a financially free
        </h1>
        <div className="how_vetannow_works_container">
          <div className="col">
            {/* 3 li 1.Easy access to liquidity 2. Timely availability of funds 3.Hassle-free paperwork */}
            <li>
              <img src={access} alt="access" />
              Easy access to liquidity
            </li>
            <li>
              <img src={availability} alt="availability" />
              Timely availability of funds
            </li>
            <li>
              <img src={paperwork} alt="paperwork" />
              Hassle-free paperwork
            </li>
          </div>
          <div className="col">
            {/* 3 li 1.No high interest charges 2. Get financial coaching 3. Multilingual support */}
            <li>
              <img src={percentage} alt="availability" />
              No high interest charges
            </li>
            <li>
              <img src={coaching} alt="coaching" />
              Get financial coaching
            </li>
            <li>
              <img src={multilingual} alt="multilingual" />
              Multilingual support
            </li>
          </div>
          <img className="bg" src={bg} alt="bg" />
        </div>
      </div>

      <div className="Get_in_touch">
        <div className="left">
          <h1>Tell your employer you want on-demand pay</h1>
          <p>
            Your employer can integrate with VetanNow easily and atno cost. Let
            themknow you'd like earned waged access by getting in touch with us.
          </p>
          <button
            className="demo-button"
            style={{ background: themeColor }}
          >
            Get in Touch
          </button>
        </div>
        <div className="right">
          <img src={Getintouch} alt="Get in Touch" />
        </div>
      </div>

      {/* <div className="Testimonials">
        <h1>Why employees love VetanNow?</h1>

        <h4>
          <img src={star} alt="Employee Icon" />
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
          {/* playstore and app store */}
          <button
            className="demo-button"
            onClick={handleDownloadClick}
          >
            <img src={playstore} alt="playstore" />
            Download on Playstore
          </button>
          <button
            className="demo-button"
            onClick={handleDownloadClick}
          >
            <img src={appstore} alt="playstore" />
            Download on App Store
          </button>
        </div>
      </div>
      {showPopup && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="popup-content"
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "center",
              minWidth: "280px",
            }}
          >
            <h2 style={{ color: themeColor }}>App is coming soon</h2>
            <p>Stay tuned!</p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1.5rem",
                border: "none",
                background: themeColor,
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;

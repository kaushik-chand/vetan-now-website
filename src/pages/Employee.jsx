import React, { useState } from "react";
import "./Employee.css";
import Seo from "../components/Seo";
import { NavHashLink } from "react-router-hash-link";

// Assets
import rightImage from "../img/employee1.webp";
import accessIcon from "../img/access.png";
import availabilityIcon from "../img/availability.png";
import paperworkIcon from "../img/paperwork.png";
import percentageIcon from "../img/percentage.png";
import coachingIcon from "../img/coaching.png";
import multilingualIcon from "../img/multilingual.png";
import getInTouchImg from "../img/Get in touch.webp";
import playstoreIcon from "../img/playstore.png";
import appstoreIcon from "../img/appstore.png";

const Employee = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="employee-page-wrapper">
      <Seo
        title="Employees | VetanNow — Access Your Earned Salary Anytime"
        description="Access earned wages before payday with VetanNow. Pay bills on time, avoid loan sharks, and gain complete control over your money."
        path="/services/employee"
      />

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="employee-hero-section">
        <div className="employee-hero-container">
          <div className="employee-hero-content">
            <div className="section-pill">
              <span className="pill-dot"></span>
              FOR EMPLOYEES
            </div>

            <h1 className="employee-hero-title">
              Need Money Immediately?{" "}
              <span className="highlight-crimson">Make any day your payday.</span>
            </h1>

            <p className="employee-hero-subtitle">
              Financial flexibility to live with dignity and zero debt stress.
            </p>

            <p className="employee-hero-desc">
              The VetanNow app is the easiest, most secure way to access your earned but
              unpaid wages before your regular payday. Pay bills on time, handle emergencies,
              and avoid predatory payday loans or high-interest borrowings.
            </p>

            <div className="employee-hero-actions">
              <button
                type="button"
                className="btn-crimson-primary"
                onClick={handleDownloadClick}
              >
                Download VetanNow App <span className="btn-arrow">→</span>
              </button>
              <a href="#refer-employer" className="btn-crimson-secondary">
                Tell Your Employer
              </a>
            </div>
          </div>

          <div className="employee-hero-visual">
            <div className="visual-card-wrap">
              <img
                src={rightImage}
                alt="Employee reviewing salary balance on VetanNow app"
                className="section-featured-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6 BENEFITS SECTION                                        */}
      {/* ========================================================= */}
      <section className="employee-benefits-section">
        <div className="section-header text-center">
          <div className="section-pill center-pill">FINANCIAL FREEDOM</div>
          <h2 className="section-heading">
            How VetanNow helps you become{" "}
            <span className="highlight-crimson">financially free.</span>
          </h2>
          <p className="section-subheading">
            Real-time access to your own hard-earned money with absolute transparency and ease.
          </p>
        </div>

        <div className="benefits-cards-grid">
          <div className="benefit-card">
            <div className="benefit-icon-box">
              <img src={accessIcon} alt="Access Icon" />
            </div>
            <h3>Easy Access to Liquidity</h3>
            <p>
              Withdraw accumulated earned wages on-demand directly into your existing salary bank account within seconds.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-box">
              <img src={availabilityIcon} alt="Availability Icon" />
            </div>
            <h3>Timely 24/7 Availability</h3>
            <p>
              Funds are disbursed in under 60 seconds at any time of the day or night — weekends and holidays included.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-box">
              <img src={paperworkIcon} alt="Paperwork Icon" />
            </div>
            <h3>Zero Paperwork or Checks</h3>
            <p>
              No loan applications, no tedious documents, and no impact on your CIBIL or credit score.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-box">
              <img src={percentageIcon} alt="Interest Icon" />
            </div>
            <h3>No Predatory Interest Rates</h3>
            <p>
              Transparent flat transaction fees with 0% compounding interest. You only withdraw what you have already worked for.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-box">
              <img src={coachingIcon} alt="Coaching Icon" />
            </div>
            <h3>Smart Financial Coaching</h3>
            <p>
              In-app budgeting, spending trackers, and financial wellness tips to help you build long-term savings habits.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-box">
              <img src={multilingualIcon} alt="Multilingual Icon" />
            </div>
            <h3>Multilingual Indian Support</h3>
            <p>
              Available in multiple regional Indian languages with dedicated phone and chat customer assistance.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* REFER EMPLOYER SECTION                                    */}
      {/* ========================================================= */}
      <section className="refer-employer-section" id="refer-employer">
        <div className="section-grid-2col">
          <div className="col-text">
            <div className="section-pill">BRING VETANNOW TO WORK</div>
            <h2 className="section-heading">
              Tell your employer you want{" "}
              <span className="highlight-crimson">on-demand pay.</span>
            </h2>

            <p className="text-body">
              VetanNow operates as an employer-benefit program. If your company hasn't
              partnered with us yet, let us know!
            </p>

            <p className="text-body">
              Your company can integrate VetanNow easily and at <strong>zero cost</strong>, with
              no alterations to existing payroll cycles or employer cash flows.
            </p>

            <NavHashLink smooth to="/#contact-us" className="btn-crimson-primary" style={{ marginTop: "16px" }}>
              Refer Your Company HR <span className="btn-arrow">→</span>
            </NavHashLink>
          </div>

          <div className="col-visual">
            <div className="visual-card-wrap">
              <img
                src={getInTouchImg}
                alt="Refer your employer to VetanNow"
                className="section-featured-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* READY TO GET STARTED / APP DOWNLOAD BANNER                */}
      {/* ========================================================= */}
      <section className="employee-cta-banner-section">
        <div className="employee-cta-banner-card">
          <div className="section-pill center-pill">JOIN THE REVOLUTION</div>
          <h2 className="cta-banner-title">
            Ready to get started with <span className="highlight-crimson">VetanNow</span>?
          </h2>
          <p className="cta-banner-desc">
            VetanNow focuses on building long-term financial wellness for India’s workforce.
            Download the app if your employer is partnered with VetanNow.
          </p>

          <div className="app-download-buttons">
            <button
              type="button"
              className="store-btn"
              onClick={handleDownloadClick}
            >
              <img src={playstoreIcon} alt="Google Play" />
              <div className="btn-text">
                <span>GET IT ON</span>
                <strong>Google Play</strong>
              </div>
            </button>

            <button
              type="button"
              className="store-btn"
              onClick={handleDownloadClick}
            >
              <img src={appstoreIcon} alt="Apple App Store" />
              <div className="btn-text">
                <span>DOWNLOAD ON THE</span>
                <strong>App Store</strong>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* APP COMING SOON MODAL                                     */}
      {/* ========================================================= */}
      {showPopup && (
        <div className="video-modal-backdrop" onClick={closePopup}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-button"
              onClick={closePopup}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="video-player-content">
              <div className="section-pill center-pill">MOBILE APP LAUNCH</div>
              <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "12px 0 8px" }}>
                Mobile Apps Coming Soon!
              </h3>
              <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", marginBottom: "20px" }}>
                We are currently rolling out app updates to our partner organizations.
                Stay tuned for direct Android and iOS store links!
              </p>
              <button
                type="button"
                className="btn-crimson-primary"
                onClick={closePopup}
                style={{ padding: "10px 24px", fontSize: "14px" }}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;

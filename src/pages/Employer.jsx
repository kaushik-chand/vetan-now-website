import React from "react";
import "./Employer.css";
import Seo from "../components/Seo";
import { NavHashLink } from "react-router-hash-link";

// Assets
import rightImage from "../img/employer1.webp";
import zeroIcon from "../img/0-percent (1).png";
import integrationIcon from "../img/integration.png";
import nochangeIcon from "../img/nochange.png";
import riskIcon from "../img/risk.png";
import accessIcon from "../img/access.png";
import availabilityIcon from "../img/availability.png";
import percentageIcon from "../img/percentage.png";
import coachingIcon from "../img/coaching.png";

const Employer = () => {
  return (
    <div className="employer-page-wrapper">
      <Seo
        title="Employers | VetanNow — Zero Cost Employee Benefits"
        description="Offer earned wage access to your team with no change to payroll cash flow. VetanNow integrates with your existing payroll process."
        path="/services/employer"
      />

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="employer-hero-section">
        <div className="employer-hero-container">
          <div className="employer-hero-content">
            <div className="section-pill">
              <span className="pill-dot"></span>
              FOR EMPLOYERS
            </div>

            <h1 className="employer-hero-title">
              <span className="highlight-crimson">VetanNow</span> is the right earned wage
              access provider for your organization.
            </h1>

            <p className="employer-hero-desc">
              VetanNow allows employees of partnering firms to access a portion of their
              earned pay as soon as they've earned it, with zero financial impact on your
              business and a seamless payroll integration at no cost to you.
            </p>

            <div className="employer-hero-actions">
              <NavHashLink smooth to="/#contact-us" className="btn-crimson-primary">
                Request a Demo <span className="btn-arrow">→</span>
              </NavHashLink>
              <a href="#employer-benefits" className="btn-crimson-secondary">
                See Employer Benefits
              </a>
            </div>
          </div>

          <div className="employer-hero-visual">
            <div className="visual-card-wrap">
              <img
                src={rightImage}
                alt="Employer dashboard overview showing VetanNow integration"
                className="section-featured-image"
                style={{ maxWidth: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4 HIGHLIGHTS — Zero Cost, Integration, No Changes, No Risk */}
      {/* ========================================================= */}
      <section className="employer-highlights-section">
        <div className="employer-highlights-grid">
          <div className="highlight-stat-card">
            <div className="highlight-icon-wrap">
              <img src={zeroIcon} alt="Zero cost" />
            </div>
            <h3>Zero Cost to Your Company</h3>
            <p>No capital outlay required — employees access their own earned wages.</p>
          </div>

          <div className="highlight-stat-card">
            <div className="highlight-icon-wrap">
              <img src={integrationIcon} alt="Seamless integration" />
            </div>
            <h3>Seamless Payroll Integration</h3>
            <p>Plug-and-play with any HRMS or payroll system with minimal configuration.</p>
          </div>

          <div className="highlight-stat-card">
            <div className="highlight-icon-wrap">
              <img src={nochangeIcon} alt="No changes" />
            </div>
            <h3>No Changes to Cash Flow</h3>
            <p>Payroll cycle remains unchanged — disbursements are auto-reconciled at month-end.</p>
          </div>

          <div className="highlight-stat-card">
            <div className="highlight-icon-wrap">
              <img src={riskIcon} alt="No risk" />
            </div>
            <h3>Zero Financial Risk</h3>
            <p>VetanNow bears all credit and operational risk — your balance sheet stays clean.</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHAT EMPLOYERS GET — 4 Benefits Grid                      */}
      {/* ========================================================= */}
      <section className="employer-benefits-section" id="employer-benefits">
        <div className="section-header text-center">
          <div className="section-pill center-pill">EMPLOYER BENEFITS</div>
          <h2 className="section-heading">
            What employers get with{" "}
            <span className="highlight-crimson">VetanNow.</span>
          </h2>
          <p className="section-subheading">
            Improve your employer brand, attract talent, and reduce attrition at zero cost with a powerful EWA offering.
          </p>
        </div>

        <div className="employer-benefits-grid">
          <div className="employer-benefit-card">
            <div className="benefit-icon-box">
              <img src={accessIcon} alt="Productivity" />
            </div>
            <div>
              <h3>Improve Employee Productivity</h3>
              <p>
                By eliminating financial stress, employees are better focused, engaged,
                and consistently productive on the job.
              </p>
            </div>
          </div>

          <div className="employer-benefit-card">
            <div className="benefit-icon-box">
              <img src={availabilityIcon} alt="Retention" />
            </div>
            <div>
              <h3>Attract Talent & Reduce Turnover</h3>
              <p>
                Offering earned salary access makes your organization a preferred employer
                for both new hires and existing workforce.
              </p>
            </div>
          </div>

          <div className="employer-benefit-card">
            <div className="benefit-icon-box">
              <img src={percentageIcon} alt="Dashboard" />
            </div>
            <div>
              <h3>Track Employee Financial Health</h3>
              <p>
                Employer dashboards and analytics provide real-time insights into usage,
                adoption, and workforce wellbeing metrics.
              </p>
            </div>
          </div>

          <div className="employer-benefit-card">
            <div className="benefit-icon-box">
              <img src={coachingIcon} alt="Plug and play" />
            </div>
            <div>
              <h3>Zero Cost Plug-and-Play</h3>
              <p>
                Compatible with all major HRMS platforms with deployment in 24-48 hours
                and dedicated onboarding support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* KNOW MORE / BROCHURE CTA                                  */}
      {/* ========================================================= */}
      <section className="employer-know-more-section">
        <div className="employer-know-more-card">
          <div className="section-pill center-pill">LEARN MORE</div>
          <h2 className="cta-banner-title">
            Know more about <span className="highlight-crimson">VetanNow.</span>
          </h2>
          <p className="cta-banner-desc">
            Download our corporate brochure to explore how VetanNow can improve the
            financial wellness of your employees and transform your employer brand.
          </p>
          <NavHashLink smooth to="/#contact-us" className="btn-crimson-primary">
            Request Demo <span className="btn-arrow">→</span>
          </NavHashLink>
        </div>
      </section>

      {/* ========================================================= */}
      {/* READY TO GET STARTED BANNER                               */}
      {/* ========================================================= */}
      <section className="employer-cta-banner-section">
        <div className="employer-cta-banner-card">
          <h2 className="cta-banner-title">
            Ready to get started with <span className="highlight-crimson">VetanNow</span>?
          </h2>
          <p className="cta-banner-desc">
            VetanNow focuses on building long-term financial wellness for the employed
            workforce via multiple tools for easy budgeting, tracking, and financial
            coaching. Partner with us today.
          </p>
          <NavHashLink smooth to="/#contact-us" className="btn-crimson-primary">
            Request Demo <span className="btn-arrow">→</span>
          </NavHashLink>
        </div>
      </section>
    </div>
  );
};

export default Employer;

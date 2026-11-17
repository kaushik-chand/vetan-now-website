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
              <span className="highlight-crimson">VetanNow</span> Support your people beyond the payday.
            </h1>

            <p className="employer-hero-desc">
              Give employees more flexibility over the wages they have already earned. VetanNow helps employers bring Earned Wage Access into the employee experience—through a responsible, HRMS- and payroll-connected approach.
            </p>

            <div className="employer-hero-actions">
              <NavHashLink smooth to="/#contact-us" className="btn-crimson-primary">
                Bring VetanNow to your workplace <span className="btn-arrow">→</span>
              </NavHashLink>
              <NavHashLink smooth to="#employer-benefits" className="btn-crimson-secondary">
                See how it works
              </NavHashLink>
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
      {/* VETANNOW: FOUR STANDALONE SECTIONS                        */}
      {/* ========================================================= */}
      <div className="vetannow-sections">
        {/* 1. The payday gap */}
        <section className="vn-section vn-problem" id="payday-gap">
          <div className="vn-wrap">
            <div className="vn-center">
              <div className="vn-kicker">The payday gap</div>

              <h2>Your employees earn every working day. Their financial needs don’t wait for payday.</h2>

              <p className="vn-intro">
                An unexpected bill or an urgent expense can arrive days before salary day. When earned wages are out of reach, employees may turn to costly short-term borrowing.
              </p>
            </div>

            <div className="vn-problem-grid">
              <div className="vn-problem-quote">
                <div className="vn-big">
                  Sometimes, the challenge isn't how much people earn. It's{" "}
                  <span>when they can access it.</span>
                </div>

                <p>
                  Not every short-term cash-flow problem should become a credit problem.
                </p>
              </div>

              <div className="vn-bullets">
                <article className="vn-bullet">
                  <div className="vn-bullet-icon">01</div>
                  <div>
                    <h3>Financial pressure affects the workday</h3>
                    <p>
                      Money worries can follow employees into the workplace and make it harder to focus on what matters.
                    </p>
                  </div>
                </article>

                <article className="vn-bullet">
                  <div className="vn-bullet-icon">02</div>
                  <div>
                    <h3>Traditional pay cycles leave a timing gap</h3>
                    <p>
                      Employees may have already earned wages but still need to wait for the scheduled payday.
                    </p>
                  </div>
                </article>

                <article className="vn-bullet">
                  <div className="vn-bullet-icon">03</div>
                  <div>
                    <h3>Wellbeing benefits should meet real needs</h3>
                    <p>
                      Practical financial flexibility can complement the wider employee wellbeing initiatives you already offer.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Why employers choose to explore VetanNow */}
        <section className="vn-section vn-benefits" id="why-vetannow">
          <div className="vn-wrap">
            <div className="vn-center">
              <div className="vn-kicker">
                Why employers choose to explore VetanNow
              </div>

              <h2>
                Make financial wellbeing a more practical part of your people strategy.
              </h2>

              <p className="vn-intro">
                A benefit designed around the realities of employees’ cash flow, and the operational needs of employers.
              </p>
            </div>

            <div className="vn-cards">
              <article className="vn-card">
                <div className="vn-card-icon">♡</div>
                <h3>Show employees you understand</h3>
                <p>
                  Offer a benefit that recognises real-life financial needs—not just the annual compensation conversation.
                </p>
              </article>

              <article className="vn-card">
                <div className="vn-card-icon">↗</div>
                <h3>Strengthen your employee experience</h3>
                <p>
                  Add a practical financial wellness option alongside your existing benefits and engagement initiatives.
                </p>
              </article>

              <article className="vn-card">
                <div className="vn-card-icon">⌘</div>
                <h3>Fit into existing workflows</h3>
                <p>
                  Explore an HRMS- and payroll-connected model designed to work with your organisation’s processes.
                </p>
              </article>

              <article className="vn-card">
                <div className="vn-card-icon">◎</div>
                <h3>Give employees more flexibility</h3>
                <p>
                  Eligible employees can request access to a portion of wages they have already earned, before payday.
                </p>
              </article>

              <article className="vn-card">
                <div className="vn-card-icon">▤</div>
                <h3>Keep policies clear</h3>
                <p>
                  Define the programme around agreed eligibility, access limits, and payroll processes.
                </p>
              </article>

              <article className="vn-card">
                <div className="vn-card-icon">＋</div>
                <h3>Start with a focused rollout</h3>
                <p>
                  Explore a phased implementation or pilot aligned with your workforce and operational readiness.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 3. Simple by design */}
        <section className="vn-section vn-how" id="how-vetannow-works">
          <div className="vn-wrap">
            <div className="vn-center">
              <div className="vn-kicker">Simple by design</div>

              <h2>
                A clear experience for your organisation and your employees.
              </h2>

              <p className="vn-intro">
                VetanNow works with your HRMS/payroll ecosystem and agreed programme rules to support a straightforward employee journey.
              </p>
            </div>

            <div className="vn-steps">
              <article className="vn-step">
                <div className="vn-step-no">STEP 01</div>
                <h3>Align the programme</h3>
                <p>
                  We understand your workforce, policies, payroll cycle and implementation requirements.
                </p>
              </article>

              <article className="vn-step">
                <div className="vn-step-no">STEP 02</div>
                <h3>Connect the workflow</h3>
                <p>
                  Configure the agreed HRMS/payroll integration and employee access journey.
                </p>
              </article>

              <article className="vn-step">
                <div className="vn-step-no">STEP 03</div>
                <h3>Employees request access</h3>
                <p>
                  Eligible employees can view available earned wages and make a request within programme limits.
                </p>
              </article>

              <article className="vn-step">
                <div className="vn-step-no">STEP 04</div>
                <h3>Reconcile through payroll</h3>
                <p>
                  Approved access is accounted for through the agreed payroll and settlement process.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 4. Built around responsibility */}
        <section className="vn-section vn-trust" id="responsible-access">
          <div className="vn-wrap vn-trust-grid">
            <div className="vn-trust-copy">
              <div className="vn-kicker">Built around responsibility</div>

              <h2>
                Financial flexibility should come with clarity and control.
              </h2>

              <p>
                VetanNow’s approach is centred on access to wages already earned—not an invitation to borrow more. Programme design is aligned with employer policies, employee eligibility and the relevant financial and operational partners.
              </p>
            </div>

            <div className="vn-trust-box">
              <h3>What responsible access means</h3>

              <div className="vn-trust-line">
                <span className="vn-tick">✓</span>
                <span>Access is limited to a portion of eligible earned wages.</span>
              </div>

              <div className="vn-trust-line">
                <span className="vn-tick">✓</span>
                <span>Eligibility and limits follow the agreed employer programme.</span>
              </div>

              <div className="vn-trust-line">
                <span className="vn-tick">✓</span>
                <span>Employees can review the applicable terms before making a request.</span>
              </div>

              <div className="vn-trust-line">
                <span className="vn-tick">✓</span>
                <span>Payroll reconciliation follows the agreed implementation model.</span>
              </div>

              <div className="vn-trust-line">
                <span className="vn-tick">✓</span>
                <span>Any regulated financial services are supported through appropriate partners, where applicable.</span>
              </div>
            </div>
          </div>
        </section>
      </div>

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

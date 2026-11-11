import React, { useState } from "react";
import "./Home.css";
import Seo from "../components/Seo";

// High-resolution infographics
import heroInfographic from "../img/hero_infographic.webp";
import stepOnboarding from "../img/step_onboarding.webp";
import stepInvite from "../img/step_invite.webp";
import stepAccess from "../img/step_access.webp";
import stepPayroll from "../img/step_payroll.webp";
import whoWeAreInfographic from "../img/whoweare_infographic.webp";
import founderPortrait from "../img/founder_portrait_clean.webp";
import partnershipsInfographic from "../img/partnerships_infographic.webp";

const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  hq: "",
  designation: "",
  companySize: "",
  phone: "",
};

const Home = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("Contact form is not configured yet.");
      return;
    }

    setStatus("Sending...");

    try {
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `VetanNow demo request from ${fullName}`,
          from_name: fullName,
          name: fullName,
          email: formData.email.trim(),
          replyto: formData.email.trim(),
          company: formData.company.trim(),
          headquarters: formData.hq.trim(),
          designation: formData.designation.trim(),
          company_size: formData.companySize,
          phone: formData.phone.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }
      setStatus("Message sent successfully ✅");
      setFormData(emptyForm);
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <div className="home-wrapper">
      <Seo
        title="VetanNow | Earned Wage Access & Financial Flexibility"
        description="VetanNow helps employees access a portion of their earned wages before payday to avoid high-interest loans and manage emergencies with financial control."
        path="/"
      />
      <div className="banner">
        <div className="left">
          <h1>Get your salary anytime.</h1>
          <h2>
            Here we are to help
            <span> Employees</span>
          </h2>
          <p className="section-subheading">
            A four-step streamlined journey to integrate VetanNow into your organization
            and provide your employees with real-time financial freedom.
          </p>
        </div>

        {/* New 4-Step Process Grid */}
        <div className="process-steps-grid">
          {/* STEP 01 */}
          <div className="process-step-card">
            <div className="step-card-header">
              <span className="step-badge-num">01</span>
              <span className="step-badge-line"></span>
            </div>
            <div className="step-card-illustration">
              <img
                src={stepOnboarding}
                alt="Company Onboarding illustration showing admin with laptop"
                loading="lazy"
              />
            </div>
            <div className="step-card-body">
              <h3 className="step-card-title">Company Onboarding</h3>
              <p className="step-card-text">
                HR/Admin integrates company data and registers with VetanNow platform with seamless setup and zero tech overhead.
              </p>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="process-step-card">
            <div className="step-card-header">
              <span className="step-badge-num">02</span>
              <span className="step-badge-line"></span>
            </div>
            <div className="step-card-illustration">
              <img
                src={stepInvite}
                alt="Invite Employees illustration showing employee receiving credentials"
                loading="lazy"
              />
            </div>
            <div className="step-card-body">
              <h3 className="step-card-title">Invite Employees</h3>
              <p className="step-card-text">
                Employees receive credentials via SMS/email to access their employee portal or download the mobile app.
              </p>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="process-step-card">
            <div className="step-card-header">
              <span className="step-badge-num">03</span>
              <span className="step-badge-line"></span>
            </div>
            <div className="step-card-illustration">
              <img
                src={stepAccess}
                alt="Access Earned Wages illustration showing employee with digital wallet"
                loading="lazy"
              />
            </div>
            <div className="step-card-body">
              <h3 className="step-card-title">Access Earned Wages</h3>
              <p className="step-card-text">
                Employees can request earned wages in seconds with zero hidden charges and instant disbursement into bank accounts.
              </p>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="process-step-card">
            <div className="step-card-header">
              <span className="step-badge-num">04</span>
              <span className="step-badge-line"></span>
            </div>
            <div className="step-card-illustration">
              <img
                src={stepPayroll}
                alt="Seamless Payroll illustration showing automated payroll reconciliation"
                loading="lazy"
              />
            </div>
            <div className="step-card-body">
              <h3 className="step-card-title">Seamless Payroll</h3>
              <p className="step-card-text">
                Auto-deduction during regular payroll cycle with zero impact on cash flows or HR administrative workload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHO WE ARE (2 Focused Containers)              */}
      {/* ========================================================= */}
      <section className="who-we-are-section" id="who-we-are">
        <div className="section-grid-2col">
          <div className="col-text">
            <div className="section-pill">WHO WE ARE</div>
            <h2 className="section-heading">
              We're on a mission to bridge the{" "}
              <span className="highlight-crimson">Payday Gap.</span>
            </h2>

            {/* 2 Focused Content Containers */}
            <div className="whoweare-dual-containers">
              <div className="whoweare-content-box">
                <div className="box-indicator"></div>
                <div className="box-text-wrap">
                  <h4 className="box-title">The Payday Dilemma</h4>
                  <p className="text-body">
                    At VetanNow, we believe financial wellness is a fundamental pillar of employee
                    well-being. Yet, millions of hardworking employees in India still have to wait
                    until the end of the month to access money they have already earned, creating
                    stress during unexpected financial hurdles.
                  </p>
                </div>
              </div>

              <div className="whoweare-content-box">
                <div className="box-indicator"></div>
                <div className="box-text-wrap">
                  <h4 className="box-title">Our Solution & Promise</h4>
                  <p className="text-body">
                    VetanNow bridges this <strong>Payday Gap</strong> through transparent Earned Wage
                    Access (EWA) — empowering employees with flexible, debt-free control over their
                    earned pay whenever urgent needs arise, boosting morale and retention.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 value icons */}
            <div className="values-grid">
              <div className="value-item-card">
                <div className="value-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span>Financial Flexibility</span>
              </div>

              <div className="value-item-card">
                <div className="value-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span>Employee Well-being</span>
              </div>

              <div className="value-item-card">
                <div className="value-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 8.5 12 15 22 8.5 12 2" />
                    <polyline points="2 15.5 12 22 22 15.5" />
                  </svg>
                </div>
                <span>Stronger Workforce</span>
              </div>

              <div className="value-item-card">
                <div className="value-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <span>A More Productive Workforce</span>
              </div>
            </div>
          </div>

          <div className="col-visual">
            <div className="visual-card-wrap">
              <img
                src={whoWeAreInfographic}
                alt="Three employees hoisting the Rupee flag collaboratively"
                className="section-featured-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: MEET THE FOUNDER                               */}
      {/* ========================================================= */}
      <section className="founder-section" id="founder">
        <div className="section-grid-2col">
          <div className="col-text">
            <div className="section-pill">MEET THE FOUNDER</div>
            <h2 className="section-heading">
              Building financial flexibility for{" "}
              <span className="highlight-crimson">Bharat's workforce.</span>
            </h2>

            <div className="founder-story">
              <p className="text-body">
                In financial stress, the biggest irony of modern business lies in the simple
                reality: hard-working individuals are left with no choice but to wait for earned
                wages when unexpected hurdles arise. No one should be forced to take high-interest
                loans for money they've already worked for.
              </p>

              <p className="text-body">
                With a background in fintech and digital product development, I've seen firsthand
                the friction between traditional payroll schedules and real-world emergencies.
                VetanNow was born from this urgency: to solve the Payday Gap with a fair, ethical,
                and accessible financial safety net. We don't just provide wages early; we provide
                peace of mind.
              </p>

              <p className="text-body">
                Our promise is simple: transparent fees, zero debt trap, and a platform that
                respects both employer and employee. Because a financially secure workforce is an
                empowered workforce.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="founder-pillars-row">
              <div className="pillar-item-box">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <h5>Purpose-Driven</h5>
                  <p>Built to bridge financial gaps with zero interest debt burden.</p>
                </div>
              </div>

              <div className="pillar-item-box">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div>
                  <h5>Product-Focused</h5>
                  <p>Built from real feedback and enterprise needs.</p>
                </div>
              </div>

              <div className="pillar-item-box">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div>
                  <h5>Long-Term Vision</h5>
                  <p>Expanding into complete financial wellness for the modern workforce.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-visual founder-visual-col">
            <div className="founder-card-wrapper">
              <div className="founder-portrait-card">
                <div className="founder-card-top-tag">
                  Empowering Bharat's Workforce
                </div>
                
                <div className="founder-image-container">
                  <img
                    src={founderPortrait}
                    alt="Manish Shukla, Founder and CEO of VetanNow"
                    className="founder-portrait-img"
                    loading="lazy"
                  />
                </div>

                <div className="founder-bio-section">
                  <div className="founder-title-block">
                    <h3 className="founder-name">Manish Shukla</h3>
                    <p className="founder-role">Founder & CEO, VetanNow</p>
                  </div>

                  <p className="founder-quote">
                    “No one should have to borrow to access the money they've already earned.”
                  </p>

                  <a
                    href="https://www.linkedin.com/in/manishshukla-ds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-linkedin-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Connect with me on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: OUR PARTNERSHIPS                               */}
      {/* ========================================================= */}
      <section className="partnerships-section" id="partnerships">
        <div className="section-grid-2col reverse-on-mobile">
          <div className="col-visual">
            <div className="visual-card-wrap">
              <img
                src={partnershipsInfographic}
                alt="Business partnership handshake representing HRMS platforms, employers, and financial institutions"
                className="section-featured-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-text">
            <div className="section-pill">OUR PARTNERSHIPS</div>
            <h2 className="section-heading">
              Together, let's empower the{" "}
              <span className="highlight-crimson">people who power businesses.</span>
            </h2>

            <p className="text-body">
              Financial wellness is a shared responsibility, and true impact comes when
              ecosystems collaborate to create seamless experiences for companies and their
              employees.
            </p>

            <p className="text-body">
              At VetanNow, we work at the intersection of companies, platforms, and financial
              institutions to make earned wage access an effortless extension of everyday payroll
              in India.
            </p>

            <p className="text-body">
              By bringing together workforce ecosystems and financial infrastructure, we
              ensure an intuitive, transparent, and compliant system designed to improve cash
              flows and eliminate employee financial stress.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SEPARATE CONTAINER: HOW WE PARTNER                        */}
        {/* ========================================================= */}
        <div className="how-we-partner-container">
          <div className="how-we-partner-header text-center">
            <div className="section-pill center-pill">ECOSYSTEM COLLABORATION</div>
            <h3 className="how-we-partner-title">
              How We <span className="highlight-crimson">Partner</span>
            </h3>
            <p className="how-we-partner-subtitle">
              Tailored integrations designed for effortless adoption across the entire workforce and financial ecosystem.
            </p>
          </div>

          <div className="partner-cards-grid">
            <div className="partner-feature-card">
              <div className="partner-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <div className="partner-card-body">
                <h4>HRMS & Payroll Platforms</h4>
                <p>Seamless API integration into existing payroll workflows with zero manual effort for HR and payroll teams.</p>
              </div>
            </div>

            <div className="partner-feature-card">
              <div className="partner-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
                </svg>
              </div>
              <div className="partner-card-body">
                <h4>Employers</h4>
                <p>Help your teams achieve financial flexibility, improve employee retention, and boost morale at zero cost to your bottom line.</p>
              </div>
            </div>

            <div className="partner-feature-card">
              <div className="partner-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="21" x2="21" y2="21" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <polyline points="5 6 12 3 19 6" />
                  <line x1="4" y1="10" x2="4" y2="21" />
                  <line x1="20" y1="10" x2="20" y2="21" />
                  <line x1="8" y1="14" x2="8" y2="17" />
                  <line x1="12" y1="14" x2="12" y2="17" />
                  <line x1="16" y1="14" x2="16" y2="17" />
                </svg>
              </div>
              <div className="partner-card-body">
                <h4>Financial Institutions</h4>
                <p>Partner with leading banks and licensed NBFCs to ensure regulatory compliance and capital efficiency for credit solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: DUAL TRUST & CTA BANNER                        */}
      {/* ========================================================= */}
      <section className="trust-cta-section">
        <div className="trust-cta-container">
          <div className="trust-col">
            <div className="trust-bar-label">
              <span className="accent-bar"></span>
              <h4>Built on trust. Driven by shared value.</h4>
            </div>
            <p>
              We believe that true business impact starts with people. When organizations
              empower their teams with financial flexibility, everyone wins. We work
              collaboratively to ensure ethical standards, bank-grade security, and
              sustainable solutions that companies can rely on.
            </p>
          </div>

          <div className="cta-col">
            <div className="trust-bar-label">
              <span className="accent-bar"></span>
              <h4>Let's build a financially stronger workforce.</h4>
            </div>
            <p>
              Reach out to explore how VetanNow can integrate into your company or platform
              to create seamless, compliant earned wage access.
            </p>
            <a href="#contact-us" className="btn-crimson-primary btn-cta-banner">
              Explore Partnerships <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: CONTACT US / REQUEST DEMO                      */}
      {/* ========================================================= */}
      <section className="contact-us-section" id="contact-us">
        <div className="section-header text-center">
          <div className="section-pill center-pill">GET IN TOUCH</div>
          <h2 className="section-heading">
            Get in <span className="highlight-crimson">Touch</span>
          </h2>
          <p className="section-subheading">
            Have questions or want to learn more about <strong>VetanNow</strong>? We're here to help!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-details-col">
            <div className="contact-card-box">
              <h3>Let's talk about financial wellness for your teams</h3>
              <p>
                Whether you're an enterprise, MSME owner, HR leader, or financial partner —
                our team is just a message away. Reach out for customized demos, integration
                guides, or partnership conversations.
              </p>

              <div className="contact-info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <label>Email Us</label>
                    <a href="mailto:support@vetannow.com">support@vetannow.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <label>Call Us</label>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <label>Headquarters</label>
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <form className="modern-contact-form" onSubmit={handleSubmit}>
              <div className="form-row-2col">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="e.g. Rahul"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="e.g. Sharma"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label>Business Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Acme Enterprises"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Headquarters City *</label>
                  <input
                    type="text"
                    name="hq"
                    placeholder="e.g. Mumbai / Bengaluru"
                    value={formData.hq}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label>Your Designation *</label>
                  <input
                    type="text"
                    name="designation"
                    placeholder="e.g. Head of HR / Founder"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Company Size *</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="201-500">201–500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-submit-form">
                Send Message <span className="btn-arrow">→</span>
              </button>

              {status && <div className="form-status-alert">{status}</div>}
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VIDEO MODAL                                               */}
      {/* ========================================================= */}
      {isVideoModalOpen && (
        <div className="video-modal-backdrop" onClick={() => setIsVideoModalOpen(false)}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-button"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="video-player-container">
              <div className="video-player-content">
                <div className="video-header">
                  <div className="section-pill hero-pill">VETANNOW OVERVIEW</div>
                  <h3>Empowering Bharat's Workforce with Earned Wage Access</h3>
                  <p>
                    See how VetanNow simplifies payroll, eliminates loan debt traps, and
                    provides employees instant financial freedom whenever they need it.
                  </p>
                </div>
                <div className="video-mockup-screen">
                  <div className="video-play-banner">
                    <div className="big-play-btn">▶</div>
                    <h4>Watch the 2-Minute Product Tour</h4>
                    <p>Learn how EWA integrates in 30 minutes with your existing HRMS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

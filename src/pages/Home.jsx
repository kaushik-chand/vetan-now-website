import React, { useState } from "react";
import rightImage from "../img/Home_Banner_Img.webp";
import "./Home.css";
import "./how_itworks.css";
import step1 from "../img/step1.webp";
import step3 from "../img/step3.webp";
import step4 from "../img/step4.webp";
import step2 from "../img/step 2.webp";
import who_we_are from "../img/whoweare.webp";
import "./who_we_are.css";
import "./meet_our_team.css";
import avatar from "../img/avatar.webp";
import "./advisory_panel.css";
import "./mentor_panel.css";
import partnerships from "../img/partnerships.webp";
import "./partnerships.css";
import "./contact_us.css";
import Seo from "../components/Seo";

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
    <div className="home-container">
      <Seo
        title="VetanNow | Get your salary anytime"
        description="VetanNow lets employees of partner companies access earned wages before payday, with payroll reconciled at month end."
        path="/"
      />
      <div className="banner">
        <div className="left">
          <h1>Get your salary anytime.</h1>
          <h2>
            Here we are to help
            <span> Employees</span>
          </h2>
          <h3>Make any day your payday.</h3>
          <p>
            VetanNowis a salary disbursement services which enables employees of
            partnering firms to access a portion of their earned, accrued pay on
            demand
          </p>
          <a href="/#contact-us" className="btn">
            <button className="demo-button">Request Demo</button>
          </a>
        </div>
        <div className="right">
          <img src={rightImage} alt="Home Banner" />
        </div>
      </div>

      <div className="how_itworks">
        <div className="how_itworks_container">
          <h1>
            {" "}
            How <span>VetanNow</span> Works{" "}
          </h1>{" "}
          <div className="step-card">
            <div className="card">
              <div>
                <h2>
                  <span>1</span> Company Onboarding
                </h2>
                <p>
                  VetanNow partners with your company and sets up the system for
                  salary access.
                </p>
              </div>
              <img src={step1} alt="Company onboarding" loading="lazy" />
            </div>
            <div className="arrow">↓</div>
          </div>
          <div className="step-card">
            <div className="card reverse">
              <div>
                <h2>
                  <span>2</span> Invite Employees
                </h2>
                <p>
                  The company invites employees to join the platform with secure
                  access.
                </p>
              </div>
              <img src={step2} alt="Employee invitation" loading="lazy" />
            </div>
            <div className="arrow">↓</div>
          </div>
          <div className="step-card">
            <div className="card">
              <div>
                <h2>
                  <span>3</span> Access Earned Wages
                </h2>
                <p>
                  Employees download the app and access their earned salaries
                  anytime, on demand.
                </p>
              </div>
              <img src={step3} alt="Salary access" loading="lazy" />
            </div>
            <div className="arrow">↓</div>
          </div>
          <div className="step-card">
            <div className="card reverse">
              <div>
                <h2>
                  <span>4</span> Seamless Payroll
                </h2>
                <p>
                  At month-end, the company reconciles payouts with VetanNow via
                  the normal payroll process.
                </p>
              </div>
              <img src={step4} alt="Payroll integration" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      {/* WHO WE ARE SECTION */}
      <div className="who-we-are" id="who-we-are">
        <div className="who-we-are-container">
          <div className="left-content">
            <h2>Who We Are</h2>
            <p>
              Over more than <strong>77%</strong> of Indians live paycheck to
              paycheck. <br />
              Nearly half will not be able to handle an unexpected expense.{" "}
              <br />
              With workers and their families operating on such tight budgets,
              improving the timing of cash flows can be the difference between
              retaining an employee or having them quit.
              <br />
              <br />
              With <span className="highlight">VetanNow</span>, employers can
              support the financial wellbeing of their employees and in turn
              benefit from improved productivity, retention rates, and reduced
              attrition.
            </p>
          </div>
          <div className="right-image">
            <img src={who_we_are} alt="Employees reviewing their earnings" loading="lazy" />
          </div>
        </div>
      </div>

      {/* END OF WHO WE ARE SECTION */}

      <section className="meet_our_team" aria-labelledby="team-heading">
        <h1 id="team-heading">Meet our team</h1>

        <div className="meet_our_team_container">
          <article className="card">
            <img src={avatar} alt="Manish Shukla, Founder and CEO" loading="lazy" />
            <h3>Manish Shukla</h3>
            <p className="role">Founder & CEO</p>
            <p>
              A fintech founder with 10+ years in digital lending, building salary
              access for India’s workforce.
            </p>
            <a
              className="team-linkedin"
              href="https://www.linkedin.com/in/manishshukla-ds/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manish Shukla on LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.5 9H4V20h2.5V9zM5.2 4C4.3 4 3.6 4.7 3.6 5.6c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6C6.8 4.7 6.1 4 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z"
                />
              </svg>
            </a>
          </article>
        </div>
      </section>

      {/* Partnerships */}

      <div className="partnerships">
        <div className="partnerships-layout">
          <div className="partnerships-image">
            <img src={partnerships} alt="VetanNow employer partnerships" loading="lazy" />
          </div>
          <div className="partnerships-content">
            <h1>
              Our <span>Partnerships</span>
            </h1>
            <p>
              We partner with change making employers and enable them to support and
              work towards the financial wellbeing of their employees.
              <br />
              <br />
              <span>
                Before we partner, We evaluate 3 major aspects for any potential
                employer partner
              </span>
              <br />
              <br />
              Corporate background: professional backgrounds of promoters and
              operators, ongoing litigations, and reference calls with key customers
              and other stakeholders.
              <br />
              <br />
              Financials Analysis of annual reports for previous years to understand
              scale, growth of business, unit economics, profitability patterns,
              current cash position and outstanding debts and loans
              <br />
              <br />
              Business Performance Review of key contracts, industry trends and
              assets to understand ability of employer partner to settle payments
              disbursements incurred VetanNow.
              <br />
              <br />
              <span className="highlight">
                Built to improve employees’ financial well-being and day-to-day productivity.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* contact us */}

      <div className="contact-us" id="contact-us">
        <h1>
          Get in <span>Touch</span>
        </h1>

        <div className="contact-us-container">
          <div className="contact-text">
            <p>
              Have questions or want to learn more about{" "}
              <strong>VetanNow</strong>? We’re here to help!
            </p>
            <p className="extra-text">
              Whether you’re an MSME owner, HR manager, or simply curious about
              how Earned Wage Access can help your workforce — our team is just
              a message away. Reach out for partnerships, demos, or to just
              explore financial wellness for your employees.
            </p>
            <div className="contact-info">
              <div>
                <i className="fas fa-envelope"></i>
                <span>support@vetannow.com</span>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>
                <span>+91 98765 43210</span>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-columns">
              <div className="form-column">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="hq"
                  placeholder="Headquarter Name"
                  value={formData.hq}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="designation"
                  placeholder="Your Designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-column">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Your Company Size</option>
                  <option value="1-10">1–10 employees</option>
                  <option value="11-50">11–50 employees</option>
                  <option value="51-200">51–200 employees</option>
                  <option value="201-500">201–500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

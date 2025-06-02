import React from "react";
import rightImage from "../img/Home_Banner_Img.png";
import "./Home.css";
import "./how_itworks.css";
import step1 from "../img/step1.png";
import step3 from "../img/step3.png";
import step4 from "../img/step4.png";
import step2 from "../img/step 2.png";
import who_we_are from "../img/whoweare.png";
import "./who_we_are.css";
import "./meet_our_team.css";
import avatar from "../img/avatar.png";
import "./advisory_panel.css";
import "./mentor_panel.css";
import partnerships from "../img/partnerships.png";
import "./partnerships.css";
import dummy_company from "../img/dummy_comapny.png";
import howitworks1 from "../img/howitwork1.png";
import howitworks2 from "../img/howitwork2.png";
import "./contact_us.css";
import contact from "../img/contact.png";

const Home = () => {
  return (
    <div className="home-container">
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
          <button className="demo-button">Request Demo</button>
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
              <img src={step1} alt="Company Onboarding" />
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
              <img src={step2} alt="Employee Invitation" />
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
              <img src={step3} alt="Salary Access" />
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
              <img src={step4} alt="Payroll Integration" />
            </div>
          </div>
          {/* <div className="how_itworks_image_down">
            <img src={howitworks2} alt="How It Works" />
          </div> */}
        </div>
      </div>
      {/* WHO WE ARE SECTION */}
      <div className="who-we-are" id="who-we-are">
        <div className="who-we-are-container">
          <div className="left-content">
            <h2>Who We Are</h2>
            <p>
              Over <strong>XX%</strong> of Indians live paycheck to paycheck.{" "}
              <br />
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
            <img src={who_we_are} alt="who_we_are" />
          </div>
        </div>
      </div>

      {/* END OF WHO WE ARE SECTION */}

      {/* Meet our team */}
      <div className="meet_our_team">
        <h1>
          Meet Our <span>Team</span>
        </h1>

        <div className="meet_our_team_container">
          <div className="card">
            <img src={avatar} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>
              John Doe is the CEO of VetanNow. He has over 10 years of
              experience
            </p>
            <h4>CEO</h4>
            {/* des */}
          </div>
          <div className="card">
            <img src={avatar} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>
              Jane Smith is the CTO of VetanNow. She has a background in
              technology and finance.
            </p>
            <h4>CTO</h4>
          </div>
          <div className="card">
            <img src={avatar} alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>
              Mike Johnson is the CFO of VetanNow. He has extensive experience
              in financial management.
            </p>
            <h4>CFO</h4>
          </div>
          {/* <div className="card">
            <img src={step4} alt="Team Member 4" />
            <h3>Emily Davis</h3>
            <p>
              Emily Davis is the COO of VetanNow. She has a strong background in
              operations and management.
            </p>
            <h4>COO</h4>
          </div> */}
        </div>
      </div>

      {/* Advisory panel */}

      <div className="advisory-panel">
        <h1>
          Meet Our <span>Advisory Panel</span>
        </h1>

        <div className="advisory-panel-container">
          <div className="card">
            <img src={avatar} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>
              John Doe is the CEO of VetanNow. He has over 10 years of
              experience
            </p>
            <h4>CEO</h4>
            {/* des */}
          </div>
          <div className="card">
            <img src={avatar} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>
              Jane Smith is the CTO of VetanNow. She has a background in
              technology and finance.
            </p>
            <h4>CTO</h4>
          </div>
          <div className="card">
            <img src={avatar} alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>
              Mike Johnson is the CFO of VetanNow. He has extensive experience
              in financial management.
            </p>
            <h4>CFO</h4>
          </div>
          {/* <div className="card">
            <img src={step4} alt="Team Member 4" />
            <h3>Emily Davis</h3>
            <p>
              Emily Davis is the COO of VetanNow. She has a strong background in
              operations and management.
            </p>
            <h4>COO</h4>
          </div> */}
        </div>
      </div>

      {/* Mentor panel */}
      <div className="mentor-panel">
        <h1>
          Meet Our <span>Mentor Panel</span>
        </h1>

        <div className="mentor-panel-container">
          <div className="card">
            <img src={avatar} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>
              John Doe is the CEO of VetanNow. He has over 10 years of
              experience
            </p>
            <h4>CEO</h4>
            {/* des */}
          </div>
          <div className="card">
            <img src={avatar} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>
              Jane Smith is the CTO of VetanNow. She has a background in
              technology and finance.
            </p>
            <h4>CTO</h4>
          </div>
          <div className="card">
            <img src={avatar} alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>
              Mike Johnson is the CFO of VetanNow. He has extensive experience
              in financial management.
            </p>
            <h4>CFO</h4>
          </div>
          {/* <div className="card">
            <img src={step4} alt="Team Member 4" />
            <h3>Emily Davis</h3>
            <p>
              Emily Davis is the COO of VetanNow. She has a strong background in
              operations and management.
            </p>
            <h4>COO</h4>
          </div> */}
        </div>
      </div>

      {/* Partnerships */}

      <div className="partnerships">
        <img src={partnerships} alt="Partnerships" />
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
          Corporate Background Professional backgrounds ofpromoters and
          operators, analyze ongoing litigations as well as reference calls with
          key customers and other stakeholders
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
            Over xxx employees lives improved by financial well-being and
            productivity
          </span>
        </p>

        <div className="partnerships-container">
          <div className="card">
            <img src={dummy_company} alt="Partner 1" />
            <h3>Partner 1</h3>
            <p>Description of Partner 1</p>
          </div>
          <div className="card">
            <img src={dummy_company} alt="Partner 2" />
            <h3>Partner 2</h3>
            <p>Description of Partner 2</p>
          </div>
          <div className="card">
            <img src={dummy_company} alt="Partner 3" />
            <h3>Partner 3</h3>
            <p>Description of Partner 3</p>
          </div>
        </div>
      </div>

      {/* contact us */}

      <div className="contact-us">
        <h1>
          Get in <span>Touch</span>
        </h1>

        <div className="contact-us-container">
          <div className="contact-text">
            <p>
              Have questions or want to learn more about{" "}
              <strong>VetanNow</strong>? We’re here to help!
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
            <img
              src={contact}
              alt="Contact Illustration"
              className="contact-illustration"
            />
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

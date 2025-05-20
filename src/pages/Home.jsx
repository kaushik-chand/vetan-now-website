import React from "react";
import rightImage from "../img/Home_Banner_Img.png";
import "./Home.css";
import "./how_itworks.css";
import step1 from "../img/step1.png";
import step3 from "../img/step3.png";
import step4 from "../img/step4.png";
import step2 from "../img/step 2.png";

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
        <h1>
          {" "}
          How <span>VetanNow</span> Works{" "}
        </h1>{" "}
        <div className="how_itworks_container">
          {" "}
          <div className="card">
            {" "}
            <div>
              {" "}
              <h2>
                <span>1</span> Company Onboarding
              </h2>{" "}
              <p>
                VetanNow partners with your company and sets up the system for
                salary access.
              </p>{" "}
            </div>{" "}
            <img src={step1} alt="Company Onboarding" />{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <div>
              {" "}
              <h2>
                <span>2</span> Invite Employees
              </h2>{" "}
              <p>
                The company invites employees to join the platform with secure
                access.
              </p>{" "}
            </div>{" "}
            <img src={step2} alt="Employee Invitation" />{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <div>
              {" "}
              <h2>
                <span>3</span> Access Earned Wages
              </h2>{" "}
              <p>
                Employees download the app and access their earned salaries
                anytime, on demand.
              </p>{" "}
            </div>{" "}
            <img src={step3} alt="Salary Access" />{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <div>
              {" "}
              <h2>
                <span>4</span> Seamless Payroll
              </h2>{" "}
              <p>
                At month-end, the company reconciles payouts with VetanNow via
                the normal payroll process.
              </p>{" "}
            </div>{" "}
            <img src={step4} alt="Payroll Integration" />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;

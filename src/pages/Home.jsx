import React from "react";
import rightImage from "../img/Home_Banner_Img.png";
import "./Home.css";

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
    </div>
  );
};

export default Home;

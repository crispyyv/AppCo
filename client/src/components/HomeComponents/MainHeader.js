import React from "react";

export const MainHeader = () => {
  return (
    <div className="main">
      <div className="wavy">
        <img src="../../image/wavy-bg.jpg" alt="" />
      </div>
      <div className="main__inner">
        <span className="main__title">AppCo</span>
        <div className="main__information">
          <h1 className="main__header">
            <span className="bold">Brainstorming</span> for desired perfect
            Usability
          </h1>
          <p className="main__text">
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
          <a href="#" className="main__button">
            View Stats
          </a>
        </div>
        <div
          className="main__mobile"
          style={{ backgroundImage: `url("../image/iPhoneX.svg")` }}
        >
          <div
            className="shadow"
            style={{ backgroundImage: `url('../image/shadow.svg')` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

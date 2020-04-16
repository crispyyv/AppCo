import React from "react";

export const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages__text">
        <h2 className="advantages__title">
          Why{" "}
          <span className="bold">
            small business owners
            <br />
            love
          </span>{" "}
          AppCo?
        </h2>
        <span className="advantages__subtitle">
          Our design projects are fresh and simple and will benefit your
          <br />
          business greatly. Learn more about our work!
        </span>
      </div>
      <div className="advantages__cards">
        <div className="advantages__cards__info">
          <img
            src="../image/design.svg"
            alt="clean design"
            className="advantages__cards__image"
          />
          <h3 className="advantages__cards__title">Clean Design</h3>
          <span className="advantages__cards__subtitle">
            Increase sales by showing true dynamics of your website.
          </span>
        </div>
        <div className="advantages__cards__info">
          <img
            src="../image/secure.svg"
            alt="secure data"
            className="advantages__cards__image"
          />
          <h3 className="advantages__cards__title">Secure Data</h3>
          <span className="advantages__cards__subtitle">
            Build your online store’s trust using Social Proof & Urgency.
          </span>
        </div>
        <div className="advantages__cards__info">
          <img
            src="../image/retina.svg"
            alt="retina ready"
            className="advantages__cards__image"
          />
          <h3 className="advantages__cards__title">Retina Ready</h3>
          <span className="advantages__cards__subtitle">
            Realize importance of social proof in customer’s purchase decision.
          </span>
        </div>
      </div>
    </div>
  );
};

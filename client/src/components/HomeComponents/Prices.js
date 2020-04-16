import React from "react";

export const Prices = () => {
  return (
    <div className="prices">
      <div className="prices__wave">
        <img src="../../image/wavyPrice.svg" alt="" />
      </div>
      <div className="prices__content">
        <div className="prices__text">
          <h2 className="prices__title">
            <span className="bold">Afforadble Pricing and Packages</span> choose
            your best one
          </h2>
          <p className="prices__subtitle">
            Monotonectally grow strategic process improvements vis-a-vis
            integrated resources.
          </p>
        </div>
        <div className="prices__cards">
          <div className="prices__card">
            <h4 className="prices__card__title">Basic</h4>
            <img src="../../image/basic.svg" alt="basic" />
            <span className="price">$29</span>
            <span className="separator" />
            <ul className="prices__card__description">
              <li>Push Notifications</li>
              <li>Data Transfer</li>
              <li>SQL Database</li>
              <li>Search & SEO Analytics</li>
              <li>24/7 Phone Support</li>
              <li>2 months technical support</li>
              <li>2+ profitable keyword</li>
            </ul>
            <a href="#" className="prices__card__button">
              Purchase now
            </a>
          </div>
          <div className="prices__card standard">
            <h4 className="prices__card__title">Standard</h4>
            <img src="../../image/standard.svg" alt="" />
            <span className="price standard">$149</span>
            <span className="separator" />
            <ul className="prices__card__description">
              <li>Push Notifications</li>
              <li>Data Transfer</li>
              <li>SQL Database</li>
              <li>Search & SEO Analytics</li>
              <li>24/7 Phone Support</li>
              <li>2 months technical support</li>
              <li>2+ profitable keyword</li>
            </ul>
            <a href="#" className="prices__card__button">
              Purchase now
            </a>
          </div>
          <div className="prices__card">
            <h4 className="prices__card__title">Unlimited</h4>
            <img src="../../image/unlimited.svg" alt="unlimited" />
            <span className="price">$39</span>
            <span className="separator" />
            <ul className="prices__card__description">
              <li>Push Notifications</li>
              <li>Data Transfer</li>
              <li>SQL Database</li>
              <li>Search & SEO Analytics</li>
              <li>24/7 Phone Support</li>
              <li>2 months technical support</li>
              <li>2+ profitable keyword</li>
            </ul>
            <a href="#" className="prices__card__button">
              Purchase now
            </a>
          </div>
        </div>
        <div className="prices__subtext">
          <p>
            If you need custom services or Need more?{" "}
            <a href="#"> Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

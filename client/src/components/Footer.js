import React from "react";

export const Footer = ({
  backgroundColor = "",
  height = "183px",
  className = "",
  url = "",
  isHomePage = false,
}) => {
  return (
    <div
      className={`footer ${className}`}
      style={{
        backgroundColor,
        height,
        backgroundImage: url,
      }}
    >
      {isHomePage ? (
        <div className="footer__input">
          <input type="email" placeholder="Enter your email" />
          <input type="submit" value="Subscribe" className="levitate__input" />
        </div>
      ) : null}
      <div className="footer__wrapper">
        <ul className="footer__info">
          <li className="footer__text">
            <span className="footer__text-high">AppCo</span>
          </li>
          <li className="footer__text">All rights reserved by ThemeTags</li>
          <li className="footer__text">Copyrights © 2019. </li>
        </ul>
      </div>
    </div>
  );
};

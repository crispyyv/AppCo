import React from "react";

export const Notebook = () => {
  return (
    <div className="notebook">
      <div className="notebook__container">
        <div className="notebook__image">
          <img src="../../image/macbook.svg" alt="" />
        </div>
        <div className="notebook__content">
          <h2 className="notebook__title">
            Start Managing your apps <br /> business, more faster
          </h2>
          <span className="notebook__subtitle">
            Objectively deliver professional value with diverse web-readiness.
            Collaboratively transition wireless customer service without <br />
            goal-oriented catalysts for change. Collaboratively.
          </span>
          <a href="#" className="notebook__btn">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

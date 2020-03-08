import React from "react";

export const Card = ({ title, feats, price, index }) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${index}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${index}`}>
            {title}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            {feats.map((feat, index) => (
              <li key={index}>{feat}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back-${index}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">{price}</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

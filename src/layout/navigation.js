import React from "react";

export const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <button className="navigation__link">
              <span>01</span>About Natours
            </button>
          </li>
          <li className="navigation__item">
            <button className="navigation__link">
              <span>02</span>Your benefits
            </button>
          </li>
          <li className="navigation__item">
            <button className="navigation__link">
              <span>03</span>Popular tours
            </button>
          </li>
          <li className="navigation__item">
            <button className="navigation__link">
              <span>04</span>Stories
            </button>
          </li>
          <li className="navigation__item">
            <button className="navigation__link">
              <span>05</span>Book now
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

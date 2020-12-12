import React from "react";
import logoWhite from "../../img/logo-white.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img
          src={logoWhite}
          alt="logo white version"
          className="header__logo"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens!</span>
        </h1>

        <a href="#stories" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};
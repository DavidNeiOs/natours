import React from "react";
import FullLogo2x from "../img/logo-green-2x.png";
import FullLogo1x from "../img/logo-green-1x.png";

import SmallLogo2x from "../img/logo-green-small-2x.png";
import SmallLogo1x from "../img/logo-green-small-1x.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture>
          <source
            srcSet={`${SmallLogo1x} 1x, ${SmallLogo2x} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${FullLogo1x} 1x, ${FullLogo2x} 2x`}
            alt="full logo"
            className="footer__logo"
            src={FullLogo2x}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <button className="footer__link">Company</button>
              </li>
              <li className="footer__item">
                <button className="footer__link">Contact us</button>
              </li>
              <li className="footer__item">
                <button className="footer__link">Careers</button>
              </li>
              <li className="footer__item">
                <button className="footer__link">Privacy policy</button>
              </li>
              <li className="footer__item">
                <button className="footer__link">Terms</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Bult by{" "}
            <a href="https://davidneios.dev" className="footer__link">
              David Neira
            </a>{" "}
            following this online{" "}
            <a
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              className="footer__link"
            >
              course
            </a>
            . Copyright &copy; Original author and design - Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
};

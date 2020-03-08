import React from "react";
import FullLogo from "../img/logo-green-2x.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={FullLogo} alt="full logo" className="footer__logo" />
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

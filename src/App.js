import React from "react";
import logoWhite from "./img/logo-white.png";
import photo1 from "./img/nat-1-large.jpg";
import photo2 from "./img/nat-2-large.jpg";
import photo3 from "./img/nat-3-large.jpg";
import firstCustomerPhoto from "./img/nat-8.jpg";
import secondCustomerPhoto from "./img/nat-9.jpg";
import BgVideoMP4 from "./img/video.mp4";
import BgVideoWebM from "./img/video.webm";

function App() {
  return (
    <div>
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

          <button className="btn btn--white btn--animated">
            Discover our tours
          </button>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventourus people
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You are going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                atque distinctio eius veniam nesciunt a voluptatem vitae error
                fugit doloremque commodi doloribus, minima deleniti ratione
                inventore architecto ipsam blanditiis rerum!
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, qui reprehenderit? Eligendi ratione quo fuga sequi
                deleniti laborum magni est in vitae animi, possimus voluptatem!
                Nobis ex dolor vitae mollitia?
              </p>

              <a
                href="https://davidneios.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={photo1}
                  alt="Sight 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={photo2}
                  alt="Sight 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={photo3}
                  alt="Sight 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis ab reprehenderit, voluptatum labore facilis
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis ab reprehenderit, voluptatum labore facilis
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis ab reprehenderit, voluptatum labore facilis
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Leave a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis ab reprehenderit, voluptatum labore facilis
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      The sea explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <button className="btn btn--white">Book now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      The forest hiker
                    </span>
                  </h4>

                  <div className="card__details">
                    <ul>
                      <li>7 day tour</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$700</p>
                    </div>
                    <button className="btn btn--white">Book now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      The snow adventurer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>5 day tour</li>
                      <li>Up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$890</p>
                    </div>
                    <button className="btn btn--white">Book now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-bottom-huge">
            <button className="btn btn--green">Discover all tours</button>
          </div>
        </section>

        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={BgVideoMP4} type="video/mp4" />
              <source src={BgVideoWebM} type="video/webm" />
              Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">We make peopple genuily happy</h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={firstCustomerPhoto}
                  alt="first experience"
                  className="story__image"
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum ipsum reiciendis cupiditate, possimus consectetur neque
                  vel dignissimos accusamus est, officia dicta quo itaque
                  voluptas nostrum saepe eos non accusantium suscipit!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={secondCustomerPhoto}
                  alt="first experience"
                  className="story__image"
                />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Wow! My life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum ipsum reiciendis cupiditate, possimus consectetur neque
                  vel dignissimos accusamus est, officia dicta quo itaque
                  voluptas nostrum saepe eos non accusantium suscipit!
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-bottom-huge">
            <a
              href="https://davidneios.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text"
            >
              Read all stories &rarr;
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

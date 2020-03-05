import React from "react";
import logoWhite from "./img/logo-white.png";
import photo1 from "./img/nat-1-large.jpg";
import photo2 from "./img/nat-2-large.jpg";
import photo3 from "./img/nat-3-large.jpg";

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

          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
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

              <a href="#" className="btn-text">
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
      </main>
    </div>
  );
}

export default App;

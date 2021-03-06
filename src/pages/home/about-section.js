import React from "react";

import photo1 from "../../img/nat-1-large.jpg";
import photo1Large from "../../img/nat-1-large.jpg";
import photo2 from "../../img/nat-2-large.jpg";
import photo2Large from "../../img/nat-2-large.jpg";
import photo3 from "../../img/nat-3-large.jpg";
import photo3Large from "../../img/nat-3-large.jpg";

export const AboutSection = () => {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque
            distinctio eius veniam nesciunt a voluptatem vitae error fugit
            doloremque commodi doloribus, minima deleniti ratione inventore
            architecto ipsam blanditiis rerum!
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            qui reprehenderit? Eligendi ratione quo fuga sequi deleniti laborum
            magni est in vitae animi, possimus voluptatem! Nobis ex dolor vitae
            mollitia?
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
              srcSet={`${photo1} 300w, ${photo1Large} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              alt="Sight 1"
              className="composition__photo composition__photo--p1"
              src={photo1Large}
            />
            <img
              srcSet={`${photo2} 300w, ${photo2Large} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              alt="Sight 2"
              className="composition__photo composition__photo--p2"
              src={photo2Large}
            />
            <img
              srcSet={`${photo3} 300w, ${photo3Large} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              alt="Sight 3"
              className="composition__photo composition__photo--p3"
              src={photo3Large}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

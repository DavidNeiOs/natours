import React from "react";

import firstCustomerPhoto from "../../img/nat-8.jpg";
import secondCustomerPhoto from "../../img/nat-9.jpg";
import BgVideoMP4 from "../../img/video.mp4";
import BgVideoWebM from "../../img/video.webm";

export const StoriesSection = () => {
  return (
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              ipsum reiciendis cupiditate, possimus consectetur neque vel
              dignissimos accusamus est, officia dicta quo itaque voluptas
              nostrum saepe eos non accusantium suscipit!
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              ipsum reiciendis cupiditate, possimus consectetur neque vel
              dignissimos accusamus est, officia dicta quo itaque voluptas
              nostrum saepe eos non accusantium suscipit!
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
  );
};

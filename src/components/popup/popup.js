import React from "react";

import PopupPhoto1 from "../../img/nat-8.jpg";
import PopupPhoto2 from "../../img/nat-9.jpg";

export const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={PopupPhoto1} alt="Tour" className="popup__img" />
          <img src={PopupPhoto2} alt="Tour" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            perferendis eos voluptatem. Id modi consequatur atque voluptates
            soluta nesciunt laborum quidem maiores rem cumque, reiciendis
            aspernatur inventore ad obcaecati. Fugit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil ullam aspernatur illum tempora
            perspiciatis debitis ut, quaerat nobis officia animi ex alias sit
            autem? Hic doloribus nostrum voluptates inventore suscipit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            delectus, expedita minima quam unde, illo nostrum fugit deleniti,
            incidunt tempora nisi recusandae. Ex fugiat consequuntur maiores
            velit, nisi eos repellat!
          </p>
          <button className="btn btn--green">Book now</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";

import { Card } from "../../components/card";

export const ToursSection = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <Card
            title="The sea explorer"
            feats={[
              "3 day tour",
              "Up to 30 people",
              "2 tour guides",
              "Sleep in cozy hotels",
              "Difficulty: easy"
            ]}
            price="$297"
            index="1"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            title="The forest hiker"
            feats={[
              "7 day tour",
              "Up to 40 people",
              "6 tour guides",
              "Sleep in provided tents",
              "Difficulty: medium"
            ]}
            price="$700"
            index="2"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            title="The snow adventurer"
            feats={[
              "5 day tour",
              "Up to 15 people",
              "3 tour guides",
              "Sleep in provided tents",
              "Difficulty: hard"
            ]}
            price="$890"
            index="3"
          />
        </div>
      </div>

      <div className="u-center-text u-margin-bottom-huge">
        <button className="btn btn--green">Discover all tours</button>
      </div>
    </section>
  );
};

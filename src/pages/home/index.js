import React from "react";

import { AboutSection } from "./about-section";
import { FeaturesSection } from "./features-section";
import { ToursSection } from "./tours-section";
import { StoriesSection } from "./stories-section";
import { BookSection } from "./book-section";

export const Home = () => {
  return (
    <main>
      <AboutSection />
      <FeaturesSection />
      <ToursSection />
      <StoriesSection />
      <BookSection />
    </main>
  );
};

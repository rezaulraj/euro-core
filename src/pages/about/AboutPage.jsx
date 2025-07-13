import React from "react";
import HeroAbout from "./HeroAbout";
import DigitalDisruption from "./DigitalDisruption";
import AboutStory from "./AboutStory";
import ContactHelp from "../home/ContactHelp";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <HeroAbout />
      <DigitalDisruption />
      <AboutStory />
      <ContactHelp />
    </div>
  );
};

export default AboutPage;

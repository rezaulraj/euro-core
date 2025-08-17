import React from "react";
import HeroCandidate from "./HeroCandiate";
import BenefitsSection from "./BenefitsSection";
import HowItWorks from "./HowItWorks";
import ContactPageCandidate from "./ContactPageCandidate";
import BlogCarosel from "../home/BlogCarosel";
import BlogCardCarousel from "../home/BlogCardCarosel";
import ContactHelp from "../home/ContactHelp";

const CandidatePage = () => {
  return (
    <div className="min-h-screen">
      <HeroCandidate />
      <BenefitsSection />
      <HowItWorks />
      {/* <BlogCarosel /> */}
      <BlogCardCarousel />
      {/* <ContactPageCandidate /> */}
      <ContactHelp />
    </div>
  );
};

export default CandidatePage;

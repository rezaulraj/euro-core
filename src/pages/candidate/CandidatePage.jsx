import React from "react";
import HeroCandidate from "./HeroCandiate";
import BenefitsSection from "./BenefitsSection";
import HowItWorks from "./HowItWorks";
import ContactPageCandidate from "./ContactPageCandidate";
import BlogCarosel from "../home/BlogCarosel";

const CandidatePage = () => {
  return (
    <div className="min-h-screen">
      <HeroCandidate />
      <BenefitsSection />
      <HowItWorks />
      <BlogCarosel />
      {/* <ContactPageCandidate /> */}
    </div>
  );
};

export default CandidatePage;

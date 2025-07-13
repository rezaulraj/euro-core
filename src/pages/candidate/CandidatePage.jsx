import React from "react";
import HeroCandidate from "./HeroCandiate";
import BenefitsSection from "./BenefitsSection";
import HowItWorks from "./HowItWorks";
import ContactPageCandidate from "./ContactPageCandidate";

const CandidatePage = () => {
  return (
    <div className="min-h-screen">
      <HeroCandidate />
      <BenefitsSection />
      <HowItWorks />
      <ContactPageCandidate />
    </div>
  );
};

export default CandidatePage;

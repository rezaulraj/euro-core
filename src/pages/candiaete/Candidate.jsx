import React from "react";
import CandiateHeroPage from "./CandiateHeroPage";
import WhyChoseCandidateEurocore from "./WhyChoseCandiate";
import CandidateProcess from "./CandidateProcess";
import CandidateForm from "./CadidateFrom";

const Candidate = () => {
  return (
    <div className="min-h-screen">
      <CandiateHeroPage />
      <WhyChoseCandidateEurocore />
      <CandidateProcess />
      <CandidateForm />
    </div>
  );
};

export default Candidate;

import React from "react";
import HeroEmployee from "./HeroEmployee";
import TalentExperts from "./TalentExpert";
import OurPartner from "../home/OurPartner";
import HowWeWork from "./HowWeWork";
import FAQ from "./FAQ";
import ContactHelp from "../home/ContactHelp";

const EmployeePage = () => {
  return (
    <div className="min-h-screen">
      <HeroEmployee />
      <TalentExperts />
      <OurPartner />
      <HowWeWork />
      <FAQ />
      <ContactHelp />
    </div>
  );
};

export default EmployeePage;

import React from "react";
import HeroPartner from "./HeroPartner";
import ContactPartner from "./ContactPartner";
import ContactHelp from "../home/ContactHelp";
import PartnerBenefits from "./PartnerBenefits";

const PartnerPage = () => {
  return (
    <div className="min-h-screen">
      <HeroPartner />
      <PartnerBenefits />
      <ContactPartner />
      {/* <ContactHelp /> */}
    </div>
  );
};

export default PartnerPage;

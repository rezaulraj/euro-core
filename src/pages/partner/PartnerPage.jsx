import React from "react";
import HeroPartner from "./HeroPartner";
import ContactPartner from "./ContactPartner";
import ContactHelp from "../home/ContactHelp";
import PartnerBenefits from "./PartnerBenefits";
import OurPartner from "../home/OurPartner";

const PartnerPage = () => {
  return (
    <div className="min-h-screen">
      <HeroPartner />
      <PartnerBenefits />
      <ContactPartner />
      <OurPartner />
    </div>
  );
};

export default PartnerPage;

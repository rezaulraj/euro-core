import React from "react";
import HeroPartner from "./HeroPartner";
import ContactPartner from "./ContactPartner";
import ContactHelp from "../home/ContactHelp";

const PartnerPage = () => {
  return (
    <div className="min-h-screen">
      <HeroPartner />
      <ContactPartner />
      <ContactHelp />
    </div>
  );
};

export default PartnerPage;

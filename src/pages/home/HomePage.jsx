import React from "react";
import HeroHome from "./HeroHome";
import ClientHome from "./ClientHome";
import EmployerRecruitment from "./EmployerRecruitment";
import PartnerHome from "./PartnerHome";
import AreaExpertise from "./AreaExpertise";
import Consultation from "./Consultation";
import WhyCloudeKonektion from "./WhyCloudeKonektion";
import OurPartner from "./OurPartner";
import ContactHelp from "./ContactHelp";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <ClientHome />
      <EmployerRecruitment />
      <AreaExpertise />
      <PartnerHome />
      <Consultation />
      <WhyCloudeKonektion />
      <OurPartner />
      <ContactHelp />
    </div>
  );
};

export default HomePage;

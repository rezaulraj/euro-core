import React from "react";
import HeroService from "./HeroService";
import AllServices from "./AllServices";
import ContactHelp from "../home/ContactHelp";
import IndustryLeader from "./IndustryLeader";

const ServicePage = () => {
  return (
    <div className="min-h-screen">
      <HeroService />
      <IndustryLeader />
      <AllServices />
      <ContactHelp />
    </div>
  );
};

export default ServicePage;

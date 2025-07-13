import React from "react";
import HeroService from "./HeroService";
import AllServices from "./AllServices";
import ContactHelp from "../home/ContactHelp";

const ServicePage = () => {
  return (
    <div className="min-h-screen">
      <HeroService />
      <AllServices />
      <ContactHelp />
    </div>
  );
};

export default ServicePage;

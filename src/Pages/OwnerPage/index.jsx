import React from "react";
import BestPractices from "../../Components/BestPractices";
import CTA from "../../Components/CTA";
import Divider from "../../Components/Divider";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import WhyUseApp from "../../Components/WhyUseApp";
import { ownerCTAData, ownerPracticesData } from "../../data";

const OwnerPage = () => {
  return (
    <>
      <Navbar buttonText="dealers" />
      <CTA ctaContent={ownerCTAData} />
      <Divider />
      <BestPractices bestPracticesContent={ownerPracticesData} />
      <Divider />
      <WhyUseApp />
      <Footer />
    </>
  );
};

export default OwnerPage;

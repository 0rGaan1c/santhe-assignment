import React from "react";
import BestPractices from "../../Components/BestPractices";
import CTA from "../../Components/CTA";
import Divider from "../../Components/Divider";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import WhyUseApp from "../../Components/WhyUseApp";
import { dealerCTAData, dealerPracticesData } from "../../data";

const OwnerPage = () => {
  return (
    <>
      <Navbar buttonText="owners" />
      <CTA ctaContent={dealerCTAData} />
      <Divider />
      <BestPractices bestPracticesContent={dealerPracticesData} />
      <Divider />
      <WhyUseApp />
      <Footer />
    </>
  );
};

export default OwnerPage;

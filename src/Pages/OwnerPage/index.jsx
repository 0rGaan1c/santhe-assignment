import React from "react";
import BestPractices from "../../Components/BestPractices";
import CTA from "../../Components/CTA";
import Divider from "../../Components/Divider";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import WhyUseApp from "../../Components/WhyUseApp";

const OwnerPage = () => {
  const ctaContent = {
    heading: "for owners",
    description:
      "Sell your used car to certified used car dealers in an online auction and get the best price.",
  };

  return (
    <>
      <Navbar buttonText="dealers" />
      <CTA ctaContent={ctaContent} />
      <Divider />
      <BestPractices />
      <Divider />
      <WhyUseApp />
      <Footer />
    </>
  );
};

export default OwnerPage;

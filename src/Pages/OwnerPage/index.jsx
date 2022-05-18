import React from "react";
import BestPractices from "../../Components/BestPractices";
import CTA from "../../Components/CTA";
import Divider from "../../Components/Divider";
import Navbar from "../../Components/Navbar";

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
    </>
  );
};

export default OwnerPage;

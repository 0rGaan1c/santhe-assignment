import React from "react";
import Logo from "../Logo";
import playStoreImage from "../../images/playstore.png";
import appStoreImage from "../../images/appstore.png";
import "./styles.css";

const CTA = ({ ctaContent }) => {
  const { heading, description } = ctaContent;
  return (
    <section className="cta">
      <h2 className="heading">{heading}</h2>
      <Logo logoSize="big" />
      <p>{description}</p>
      <div className="download-links">
        <a href="/">
          <img src={playStoreImage} alt="play store" />
        </a>
        <a href="/">
          <img src={appStoreImage} alt="app store" />
        </a>
      </div>
    </section>
  );
};

export default CTA;

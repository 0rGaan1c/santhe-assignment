import React from "react";
import Logo from "../Logo";
import playStoreImage from "../../images/playstore.png";
import appStoreImage from "../../images/appstore.png";
import "./styles.css";

const CTA = ({ ctaContent }) => {
  const { heading, description, playStoreLink, appStoreLink } = ctaContent;
  return (
    <section className="cta">
      <div className="container">
        <h2 className="heading">{heading}</h2>
        <Logo logoSize="big" />
        <p className="description">{description}</p>
        <div className="download-links">
          <a href={playStoreLink}>
            <img src={playStoreImage} alt="play store" />
          </a>
          <a href={appStoreLink}>
            <img src={appStoreImage} alt="app store" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

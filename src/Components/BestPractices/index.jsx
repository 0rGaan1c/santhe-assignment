import React from "react";
import "./styles.css";

const BestPractices = ({ bestPracticesContent }) => {
  return (
    <section className="bestpractices">
      <h2 className="heading">Best Practices</h2>
      {bestPracticesContent.map(({ imageUrl, heading, description }, idx) => {
        return (
          <article className="bestpractice" key={idx}>
            <div className="image">
              <img src={imageUrl} alt="bid" />
            </div>
            <div className="description">
              <h3>{heading}</h3>
              <p>{description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default BestPractices;

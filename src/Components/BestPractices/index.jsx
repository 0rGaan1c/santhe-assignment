import React from "react";
import "./styles.css";
import BidImage from "../../images/bid.png";
import RuleImage from "../../images/rules.png";

const BestPractices = () => {
  return (
    <section className="bestpractices">
      <h2 className="heading">Best Practices</h2>
      <article className="bestpractice">
        <div className="description">
          <h3>
            Set your bids <span>properly.</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="image">
          <img src={BidImage} alt="bid" />
        </div>
      </article>
      <article className="bestpractice">
        <div className="description">
          <h3>
            Define the <span>rules.</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="image">
          <img src={RuleImage} alt="bid" />
        </div>
      </article>
    </section>
  );
};

export default BestPractices;

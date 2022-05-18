import React from "react";
import "./styles.css";

const Logo = ({ logoSize }) => {
  return (
    <div className={`${logoSize}-logo logo`}>
      <span>CAR</span>CHOR
    </div>
  );
};

export default Logo;

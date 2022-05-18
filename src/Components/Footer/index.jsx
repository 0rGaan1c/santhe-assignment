import React from "react";
import Logo from "../Logo";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="line"></div>
      <footer className="footer">
        <span className="copyright">©</span>
        <Logo logoSize="small" />
      </footer>
    </>
  );
};

export default Footer;

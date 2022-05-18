import React from "react";
import Logo from "../Logo";
import "./styles.css";

const Navbar = ({ buttonText }) => {
  return (
    <nav className="navbar">
      <Logo logoSize="medium" />
      <a href={`${buttonText}`} className="link">
        for {buttonText}
      </a>
    </nav>
  );
};

export default Navbar;

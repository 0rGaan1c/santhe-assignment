import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./styles.css";

const Navbar = ({ buttonText }) => {
  return (
    <nav className="navbar">
      <Logo logoSize="medium" />
      <Link to={`/${buttonText}`} className="link">
        for {buttonText}
      </Link>
    </nav>
  );
};

export default Navbar;

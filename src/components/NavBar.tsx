import React from "react";
import "./NavBar.css";
import { VscSettings } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="navbar-container">
      <button className="nav-btn">
        <VscSettings
          className="icon-size"
          style={{ transform: " rotate(90deg)" }}
        />
        <p>Display</p>
        <BiChevronDown className="icon-size" />
      </button>
    </div>
  );
};

export default NavBar;

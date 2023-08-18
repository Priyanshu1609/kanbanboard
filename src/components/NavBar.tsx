import React from "react";
import "./NavBar.css";
import { VscSettings } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
import DropDown from "./DropDown";

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
        <BiChevronDown className="nav-option-icon" />
        <div className="navbar-select">
          <div
            style={{
              display: "flex",
              justifyContent: "between",
              alignItems: "center",
            }}
          >
            <p>Grouping</p>
            <DropDown />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "between",
              alignItems: "center",
            }}
          >
            <p>Ordering</p>
            <DropDown />
          </div>
        </div>
      </button>
    </div>
  );
};

export default NavBar;

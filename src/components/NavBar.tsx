import React from "react";
import "./NavBar.css";
import { VscSettings } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
import DropDown from "./DropDown";

type Props = {
  group: "status" | "priority" | "user";
  setGroup: (group: "status" | "priority" | "user") => void;
  sort: "priority" | "title";
  setSort: (sort: "priority" | "title") => void;
};

const Group = () => (
  <button className="navbar-selection-btn">
    <p style={{ fontWeight: "500" }}>Status</p>
    <BiChevronDown className="nav-option-icon" />
  </button>
);

const Order = () => (
  <button className="navbar-selection-btn">
    <p style={{ fontWeight: "500" }}>Priority</p>
    <BiChevronDown className="nav-option-icon" />
  </button>
);

const NavBar = ({ group, setGroup, sort, setSort }: Props) => {
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
          <div className="navbar-select-option-wrapper">
            <p style={{ color: "#6B7280", fontSize: "small" }}>Grouping</p>
            <Group />
          </div>
          <div className="navbar-select-option-wrapper">
            <p style={{ color: "#6B7280", fontSize: "small" }}>Ordering</p>
            <Order />
          </div>
        </div>
      </button>
    </div>
  );
};

export default NavBar;

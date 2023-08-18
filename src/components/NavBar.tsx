import React from "react";
import "./NavBar.css";
import { VscSettings } from "react-icons/vsc";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

type Props = {
  group: "status" | "priority" | "user";
  setGroup: (group: "status" | "priority" | "user") => void;
  sort: "priority" | "title";
  setSort: (sort: "priority" | "title") => void;
};

const NavBar = ({ group, setGroup, sort, setSort }: Props) => {
  const Group = () => (
    <button className="navbar-selection-btn" id="btn-1">
      <p style={{ fontWeight: "500", textTransform: "capitalize" }}>{group}</p>
      <BiChevronRight className="nav-option-icon" />
      <div className="navbar-second-select">
        <p onClick={() => setGroup("status")} className="">
          Status
        </p>
        <p onClick={() => setGroup("user")} className="">
          User
        </p>
        <p onClick={() => setGroup("priority")} className="">
          Priority
        </p>
      </div>
    </button>
  );

  const Order = () => (
    <button className="navbar-selection-btn" id="btn-2">
      <p style={{ fontWeight: "500", textTransform: "capitalize" }}>{sort}</p>
      <BiChevronRight className="nav-option-icon" />
      <div className="navbar-second-select">
        <p onClick={() => setSort("priority")} className="">
          Priority
        </p>
        <p onClick={() => setSort("title")} className="">
          Title
        </p>
      </div>
    </button>
  );
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

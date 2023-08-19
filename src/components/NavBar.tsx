import React from "react";
import "./NavBar.css";
import { VscSettings } from "react-icons/vsc";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

type Props = {
  group: "status" | "priority" | "user";
  sort: "priority" | "title";
  setGroup: (group: "status" | "priority" | "user") => void;
  setSort: (sort: "priority" | "title") => void;
};

const NavBar = ({ group, setGroup, sort, setSort }: Props) => {
  const handleChangeGroup = (group: "status" | "priority" | "user") => {
    setGroup(group);
    localStorage.setItem("group", group);
  };

  const handleChangeSort = (sort: "priority" | "title") => {
    setSort(sort);
    localStorage.setItem("sort", sort);
  };

  // Component to handle grouping selection
  const Group = () => (
    <button className="navbar-selection-btn" id="btn-1">
      <p style={{ fontWeight: "500", textTransform: "capitalize" }}>{group}</p>
      <BiChevronRight className="nav-option-icon" />
      <div className="navbar-second-select">
        <p
          onClick={() => handleChangeGroup("status")}
          className="nav-second-select-btn"
        >
          Status
        </p>
        <p
          onClick={() => handleChangeGroup("user")}
          className="nav-second-select-btn"
        >
          User
        </p>
        <p
          onClick={() => handleChangeGroup("priority")}
          className="nav-second-select-btn"
        >
          Priority
        </p>
      </div>
    </button>
  );

  // Component to handle sorting selection
  const Order = () => (
    <button className="navbar-selection-btn" id="btn-2">
      <p style={{ fontWeight: "500", textTransform: "capitalize" }}>{sort}</p>
      <BiChevronRight className="nav-option-icon" />
      <div className="navbar-second-select">
        <p onClick={() => handleChangeSort("priority")} className="">
          Priority
        </p>
        <p onClick={() => handleChangeSort("title")} className="">
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
          style={{ transform: "rotate(90deg)" }}
        />
        <p>Display</p>
        <BiChevronDown className="nav-option-icon" />
        <div className="navbar-select">
          {/* Grouping Selection */}
          <div className="navbar-select-option-wrapper">
            <p style={{ color: "#6B7280", fontSize: "small" }}>Grouping</p>
            <Group />
          </div>
          {/* Ordering Selection */}
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

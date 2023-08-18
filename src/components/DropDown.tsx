import React from "react";
import "./DropDown.css";

type Props = {};

const DropDown = (props: Props) => {
  return (
    <>
      <nav>
        <label htmlFor="touch">
          <p>titre</p>
        </label>
        <input type="checkbox" id="touch" />

        <ul className="slide">
          <li>
            <a href="#">Lorem Ipsum</a>
          </li>
          <li>
            <a href="#">Lorem Ipsum</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DropDown;

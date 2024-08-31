"use client"; // Ensure this component is treated as a client component

import React from "react";
import "./Filter.css";
import data from "../../public/data.json";

interface Props {
  setCategory: (item: string) => void;
  setPrice: (item: string) => void;
}

const Filter = (props: Props) => {
  let priceArr = ["Free", "0-20", "21-50", "51-75", "76-100", "Above 100"];

  return (
    <div className="filterContainer">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Categories
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => props.setCategory("All")}>All</a>
          </li>
          {data.map((item, index) => (
            <li key={index}>
              <a onClick={() => props.setCategory(item.title)}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Price
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => props.setPrice("All")}>All</a>
          </li>
          {priceArr.map((price, index) => (
            <li key={index}>
              <a onClick={() => props.setPrice(price)}>{price}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;

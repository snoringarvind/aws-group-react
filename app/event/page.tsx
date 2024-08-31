"use client";
import React, { useState } from "react";
import Card from "../components/Card";
import "./page.css";
import Filter from "../components/Filter";
import NavBar from "../components/NavBar";

const Event = () => {
  let [category, setCategory] = useState("All");
  let [price, setPrice] = useState("All");

  return (
    <div>
      <NavBar />
      <div className="mainContainer">
        <div className="filterContainer">
          <Filter setPrice={setPrice} setCategory={setCategory} />
        </div>
        <div className="cardContainer">
          <Card category={category} price={price} />
        </div>
      </div>
    </div>
  );
};

export default Event;

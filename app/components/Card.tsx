"use client"; // Ensure this component is treated as a client component

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Card.css";
import data from "../../public/data.json";

interface Props {
  category: string;
  price: string;
}

const Card = (props: Props) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toDateString());
  }, []);

  return (
    <div className="card-main">
      {data
        .filter(
          (item) => props.category === item.title || props.category === "All"
        )
        .map((item, index) => (
          <div
            key={index} // Ensure key is stable and unique
            className="card bg-base-100 w-96 shadow-xl card-normal"
          >
            <figure>
              <Image src="/img1.jpg" width={100} height={100} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{index}</p>
              <p>{item.description}</p>
              <p>{currentDate}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.price}</div>
                <div className="badge badge-outline">{item.location}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;

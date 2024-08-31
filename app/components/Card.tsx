import React, { useState } from "react";
import Image from "next/image";
import "./Card.css";
import data from "../../public/data.json";

interface Props {
  category: string;
  price: string;
}

const Card = (props: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <>
          {(props.category == item.title || props.category == "All") && (
            <div
              key={item.title}
              className="card bg-base-100 w-96 shadow-xl card-normal"
            >
              <figure>
                <Image src="/img1.jpg" width={100} height={100} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <p>{new Date(item.date).toDateString()}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{item.price}</div>
                  <div className="badge badge-outline">{item.location}</div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default Card;

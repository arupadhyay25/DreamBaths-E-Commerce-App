import React from "react";
import star from "../Images/star.jpg";

export const Singleproduct = ({ image, title, titledesp, price, category }) => {
  return (
    <div>
      <img src={image} alt="title" />
      <h3>{title}</h3>
      <p>{titledesp}</p>
      <p>{category}</p>
      <p>$ {price}</p>
      <span>
        {Array(Math.floor(Math.random() * 5) + 1)
          .fill("")
          .map((_, i) => (
            <span>
              <img src={star} alt="dhfjkdh" width="30px" height="35px" />
            </span>
          ))}
      </span>
    </div>
  );
};

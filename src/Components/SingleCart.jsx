import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { apiproduct } from "./Api";

export const SingleCart = ({ arr, state, setstate }) => {
  let x = arr.cartquantity;
  let [page, setpage] = useState(x);

  let AddQuantocart = (id) => {
    setpage(page + 1);
    patchdata();
  };
  let SubQuantocart = (id) => {
    setpage(page - 1);
    patchdata();
  };
  let handledelete = (id) => {
    setpage(0);
    patchdata();
    setstate((prev) => prev + 1);
  };
  let patchdata = () => {
    let payload = { cartquantity: page };
    axios.patch(`${apiproduct}/${arr.id}`, payload);
    setstate(state + 1);
  };
  useEffect(() => {}, [page,state]);

  return (
    <div key={arr.id} className="Product-Cart">
      <div>
        <img src={arr.image} alt={arr.title} width="50px" height="100px" />
      </div>
      <div className="Cart-details">
        <h1>{arr.title}</h1>
        <p>In Stock</p>
        <h3>from {arr.category}</h3>
        <div>
          <Button disabled={page == 1} onClick={SubQuantocart}>
            <MinusIcon />
          </Button>
          &nbsp;&nbsp;
          <Button>{arr.cartquantity}</Button>&nbsp;&nbsp;
          <Button onClick={AddQuantocart}>
            <AddIcon />
          </Button>
          &nbsp;&nbsp;
          <Button onClick={() => handledelete(arr.id)}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <div>
        <h1 className="Cart-price">
          ₹ {(arr.price * arr.cartquantity).toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

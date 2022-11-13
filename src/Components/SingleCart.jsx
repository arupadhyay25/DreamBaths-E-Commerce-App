import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addproductquantity, resetcartbag, subproductquantity } from "../Redux/action";

export const SingleCart = ({ arr, setstate }) => {
  let [page, setpage] = useState(arr.cartquantity);
  let dispatch = useDispatch();

  let AddQuantocart = (id) => {
    dispatch(addproductquantity(id, page));
    setpage(page + 1);
    setstate((prev) => prev + 1);
  };
  let SubQuantocart = (id) => {
    dispatch(subproductquantity(id, page));
    setpage(page - 1);
    setstate((prev) => prev + 1);
  };
  let handledelete = (id) => {
    
    dispatch(resetcartbag(id));
    setstate((prev) => prev + 1);
  };

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
          <Button disabled={page == 1} onClick={() => SubQuantocart(arr.id)}>
            <MinusIcon />
          </Button>
          &nbsp;&nbsp;
          <Button>{arr.cartquantity}</Button>&nbsp;&nbsp;
          <Button onClick={() => AddQuantocart(arr.id)}>
            <AddIcon />
          </Button>
          &nbsp;&nbsp;
          <Button onClick={() => handledelete(arr.id)}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <div>
        <h1 className="Cart-price">₹ {arr.price.toFixed(2)*arr.cartquantity}</h1>
      </div>
    </div>
  );
};

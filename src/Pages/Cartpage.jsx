import { AddIcon, CalendarIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsuccess } from "../Redux/action";
import "./Cartpage.css";

export const Cartpage = () => {
  let data = useSelector((s) => s.products);
  let newdata=[...data]
  let [page, setpage] = useState(1);
  let [total, settotal] = useState(0);
  let styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  let dispatch = useDispatch();
  useEffect(() => {
    let url = `http://localhost:8080/products`;
    let datapack = [url];
    dispatch(getproductsuccess(datapack));
    let x=0
    let value=newdata.filter((e)=>e.cartquantity>0).map((e)=>x=x+Number(e.price))
    settotal(x)
  }, []);
  return (
    <>
      <div className="Product-Cart-Heading">
        <h1 className="Product-Cart-header-h1">Shopping Cart</h1>
      </div>
      <div className="Product-Cart-main">
        <div className="Product-Cart-left">
          {data
            .filter((e) => e.cartquantity > 0)
            .map((arr) => (
              <div className="Product-Cart">
                <div>
                  <img
                    src={arr.image}
                    alt={arr.title}
                    width="50px"
                    height="100px"
                  />
                </div>
                <div className="Cart-details">
                  <h1>{arr.title}</h1>
                  <p>In Stock</p>
                  <h3>from {arr.category}</h3>
                  <div>
                    <Button
                      disabled={page == 1}
                      onClick={() => setpage(page - 1)}
                    >
                      <MinusIcon />
                    </Button>
                    &nbsp;&nbsp;
                    <Button>{page}</Button>&nbsp;&nbsp;
                    <Button onClick={() => setpage(page + 1)}>
                      <AddIcon />
                    </Button>
                    &nbsp;&nbsp;
                    <Button onClick={() => setpage(page + 1)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
                <div>
                  <h1 className="Cart-price">₹ {arr.price.toFixed(2)}</h1>
                </div>
              </div>
            ))}
        </div>
        <div className="Product-Cart-right">
          <div>
            <label>Coupons</label>
            <br />
            <hr />
            <br />
            <div style={styles}>
              <CalendarIcon />
              <Text fontSize="md"> Apply Coupons</Text>
              <Button size="sm" colorScheme="red">
                Apply
              </Button>
            </div>
            <br />
            <Text color="red" textAlign="center" fontSize="md">
              Get Upto 50% OFF
            </Text>
          </div>
          <br />
          <div>
            <label>Gifting & Personalization</label>
            <br />
            <hr />
            <br />
            <img src="/Image/gift.jpg" alt="xcvb" />
          </div>
          <br />
          <div>
            <label>Price Details</label>
            <br />
            <hr />
            <br />
            <div style={styles}>
              <label>Total MRP</label>
              <label>₹{total.toFixed(2)}</label>
            </div>
            <div style={styles}>
              <label>Total Discount MRP</label>
              <label>-₹{(total / 10).toFixed(2)}</label>
            </div>
            <div style={styles}>
              <label>Coupos DisCount</label>
              <label>-₹20</label>
            </div>
            <div style={styles}>
              <label>
                Convenience Fee <span style={{ color: "red" }}>Know more</span>
              </label>
              <label>
                <Text as="s">₹99</Text>{" "}
                <span style={{ color: "red" }}>FREE</span>
              </label>
            </div>
            <hr />
            <div style={styles}>
              <label>Total Amount</label>
              <label>₹{(total - total / 10).toFixed(2)}</label>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
/*
<div className="Product-Cart-header">
<h1>Subtotal (3 items):   2,179.00</h1>
            <Button>Proceed to Buy</Button>
          <div>
            <h1 className="Product-Cart-header-h1">Shopping Cart</h1>
            <h3>Shopping Cart</h3>
          </div>
          <div>
            <h1>Price Amount</h1>
          </div>
        </div>
        {data.map((arr) => (
          <div className="Product-Cart">
            <div>
              <img src={arr.image} alt={arr.title} width="100px" />
            </div>
            <div>
              <h1 className="Cart-title">{arr.title}</h1>
            </div>
            <div>
              <Button disabled={page == 1} onClick={() => setpage(page - 1)}>
                <MinusIcon />
              </Button>
              &nbsp;&nbsp;
              <Button>{page}</Button>&nbsp;&nbsp;
              <Button onClick={() => setpage(page + 1)}>
                <AddIcon />
              </Button>
            </div>
            <div>
              <h1 className="Cart-title">{arr.price.toFixed(2)}</h1>
            </div>
          </div>
        ))}
*/

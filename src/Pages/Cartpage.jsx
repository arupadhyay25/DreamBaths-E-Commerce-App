import { CalendarIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Center, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SingleCart } from "../Components/SingleCart";
import "./Cartpage.css";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import axios from "axios";
import { apiorder, apiproduct } from "../Components/Api";
import { async } from "q";
let styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const Cartpage = () => {
  let [data, setcartdata] = useState([]);
  let [state, setstate] = useState(0);
  let [coupons, setcoupons] = useState(0);
  let [total, settotal] = useState(0);
  let navigate = useNavigate();

  let sum = 0;
  let sumProduct = () => {
    if (data === 0) {
      settotal(0);
    } else {
      data.forEach((e) => (sum += e.price));
      settotal(sum);
    }
  };
  // let addelement = (elem) => {
  //   axios.post(`${apiorder}`, elem);
  // };
  let handlecoupons = () => {
    setcoupons(30);
  };

  // let handlecheakoutbutton = () => {
  //   data.forEach((e) => addelement(e));
  //   navigate("/checkout");
  // };

  let getproduct = async () => {
    await axios
      .get(`${apiproduct}?cartquantity=1`)
      .then((r) => setcartdata(r.data))
      .then(sumProduct());
  };

  useEffect(() => {
    getproduct();
  }, [state, sum]);

  return (
    <>
      <Navbar />
      <div className="Product-Cart-Heading">
        <h1 className="Product-Cart-header-h1">Shopping Cart</h1>
        <Alert status="info">
          <img src="/Image/ship-free.png" width="40px" />
          &nbsp;&nbsp;&nbsp; Yay! No convenience fee on this order.
        </Alert>
        <br />
      </div>
      <div className="Product-Cart-main">
        <div className="Product-Cart-left">
          {data && data.length === 0 ? (
            <>
              <img src="/Image/emptycart.jpg" />
              <br />
              <Center>
                <Link to="/body-care">
                  <Button colorScheme="red">BACK TO PRODUCT PAGE</Button>
                </Link>
              </Center>
            </>
          ) : (
            data.map((arr, i) => (
              <SingleCart key={i} arr={arr} state={state} setstate={setstate} />
            ))
          )}
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
              <Button
                disabled={coupons > 0 || total == 0}
                onClick={handlecoupons}
                size="sm"
                colorScheme="red"
              >
                {coupons > 0 ? "Applied" : "Apply"}
              </Button>
            </div>
            <br />
            {coupons > 0 ? (
              <Alert status="success">
                <AlertIcon />
                Flat -₹30 Coupon Applied !!
              </Alert>
            ) : (
              <Text color="red" textAlign="center" fontSize="md">
                Get Upto 50% OFF
              </Text>
            )}
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
              <label>-₹{coupons}</label>
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
              <label>₹{(total - total / 10 - coupons).toFixed(2)}</label>
            </div>
            <br />
            <Center>
              <Button
                disabled={total == 0}
                // onClick={handlecheakoutbutton}
                colorScheme="teal"
              >
                PROCEED TO CHECKOUT
              </Button>
            </Center>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

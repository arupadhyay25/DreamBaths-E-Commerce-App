import React, { useEffect, useState } from "react";
import "./BodyCare.css";
import { Singleproduct } from "../Components/Singleproduct";
import axios from "axios";
import { Button, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const BodyCare = () => {
  let [state, setstate] = useState([]);
  let [order, setorder] = useState("");
  let [page, setpage] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/products`).then((r) => setstate(r.data));
  }, []);

  return (
    <>
      <div className="Product-main-div">
        <div className="Product-left-div">
          <br />
          <br />
          <br />
          <div className="Product-left-div-header">
            <Text fontSize="2xl">Filters</Text>
            <Text as="u" color="blue">
              ClearAll
            </Text>
          </div>
          <br />
          <div className="sort-by">
            <label>Sort by Price</label>
            <br />
            <span>
              <input type="radio" />
              &nbsp;&nbsp;
              <label>Low to High</label>
            </span>
            <br />
            <span>
              <input type="radio" />
              &nbsp;&nbsp;
              <label>High to Low</label>
            </span>
          </div>
        </div>
        <div className="Product-right-div">
          <div className="Product-header">
            <div>
              <h1>ALL BODYCARE</h1>
            </div>
            <div>
              <Button onClick={() => setpage(page - 1)}>
                <ArrowLeftIcon />
              </Button>
              &nbsp;&nbsp;
              <Button>{page}</Button>&nbsp;&nbsp;
              <Button onClick={() => setpage(page + 1)}>
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
          <div className="Product-grid">
            {state
              .filter((e) => e.category === "bodycare" && e.id < 24)
              .map((e, i) => (
                <Singleproduct
                  key={i}
                  title={e.title}
                  titledesp={e.titledesp}
                  category={e.category}
                  price={e.price}
                  image={e.image}
                  rating={e.rating}
                  reviewCount={e.reviewCount}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

/*
    <>
      <div className="product-heading">
        <div>
          <Text fontSize="5xl" textAlign="left">
            All Body Care
          </Text>
        </div>
        <div>
          <Button onClick={() => setpage(page - 1)}>
            <ArrowLeftIcon />
          </Button>
          &nbsp;&nbsp;
          <Button>{page}</Button>&nbsp;&nbsp;
          <Button onClick={() => setpage(page + 1)}>
            <ArrowRightIcon />
          </Button>
          &nbsp;&nbsp;
        </div>
      </div>
      <br />
      <hr />
      <div className="bodycare-products-div">
        <div className="bodycare-products-left">
          <Flex alignItems="center">
            <Text fontSize="3xl">Filters</Text>&nbsp;
            <Text fontSize="2xl">ClearAll</Text>
          </Flex>
        </div>
        <div className="bodycare-products-right">
          <div className="bodycare-products">
            {state
              .filter((e) => e.category === "bodycare")
              .map((e, i) => (
                <Singleproduct
                  key={i}
                  title={e.title}
                  titledesp={e.titledesp}
                  category={e.category}
                  price={e.price}
                  image={e.image}
                  rating={e.rating}
                  reviewCount={e.reviewCount}
                />
              ))}
          </div>
        </div>
      </div>
    </>
*/

import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { Singleproduct } from "../Components/Singleproduct";
import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { FilterSort } from "../Components/FilterSort";
import { apiproduct } from "./Api";
import axios from "axios";

export const ProductPage = ({ cat1, cat2, cat3, cat4, heading }) => {
  let [page, setpage] = useState(1);
  let [Products, setproducts] = useState([]);
  let [state, setstate] = useState(0);

  let getProduct = () => {
    axios.get(apiproduct).then((r) => setproducts(r.data));
  };

  useEffect(() => {
    getProduct();
  }, [state]);

  return (
    <>
      <div className="Product-main-div">
        <div className="Product-left-div">
          <br />
          <br />
          <br />
          <FilterSort val1={cat1} val2={cat2} val3={cat3} val4={cat4} />
        </div>
        <div className="Product-right-div">
          <div className="Product-header">
            <div>
              <h1>{heading}</h1>
            </div>
            <div>
              <Button disabled={page === 1} onClick={() => setpage(page - 1)}>
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
            {Products.length > 0 &&
              Products.map((e, i) => (
                <Singleproduct
                  key={i}
                  title={e.title}
                  titledesp={e.titledesp}
                  category={e.category}
                  price={e.price}
                  image={e.image}
                  rating={e.rating}
                  reviewCount={e.reviewCount}
                  cartquantity={e.cartquantity}
                  id={e.id}
                  state={state}
                  setstate={setstate}
                />
              ))}
          </div>
          {/* pagination */}
          <div>
            <Button disabled={page === 1} onClick={() => setpage(page - 1)}>
              <ArrowLeftIcon />
            </Button>
            &nbsp;&nbsp;
            <Button>{page}</Button>&nbsp;&nbsp;
            <Button onClick={() => setpage(page + 1)}>
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";
import "./BodyCare.css";
import { Singleproduct } from "../Components/Singleproduct";
import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { getproductsuccess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { FilterSort } from "../Components/FilterSort";
import { useLocation, useSearchParams } from "react-router-dom";

export const Candles = () => {
  let [page, setpage] = useState(1);
  let dispatch = useDispatch();
  let Products = useSelector((s) => s.products);
  let [searchParams] = useSearchParams();
  let location = useLocation();

  useEffect(() => {
    if (location || Products.length === 0) {
      let titledesp = searchParams.getAll("titledesp");
      let _sort = searchParams.getAll("_sort");
      let _order = searchParams.getAll("_order");
      let queryparams = {
        titledesp: titledesp,
        _sort: _sort[0],
        _order: _order[0],
        _page: page,
        _limit: 25,
      };
      dispatch(getproductsuccess(queryparams));
    }
  }, [page, location.search]);

  console.log(Products);
  return (
    <>
      <div className="Product-main-div">
        <div className="Product-left-div">
          <br />
          <br />
          <br />
          <FilterSort
            val1={"3-Wick Candle"}
            val2={"Single Wick Candle"}
            val3={"12-Day Countdown Calendar"}
            val4={"3-Wick Candle Holder"}
          />
        </div>
        <div className="Product-right-div">
          <div className="Product-header">
            <div>
              <h1>Buy 1, Get 1 FREE All Candles</h1>
            </div>
            <div>
              <Button disabled={page == 1} onClick={() => setpage(page - 1)}>
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
              Products.filter((e) => e.category === "candles").map((e, i) => (
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

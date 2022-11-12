import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { Singleproduct } from "../Components/Singleproduct";
import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { getproductsuccess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { FilterSort } from "../Components/FilterSort";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductPage = ({ category, cat1, cat2, cat3, cat4, heading }) => {
  let [page, setpage] = useState(1);
  let [cart, setcart] = useState([]);
  let dispatch = useDispatch();
  let Products = useSelector((s) => s.products);
  let [state, setstate] = useState(0);

  let [searchParams] = useSearchParams();
  let location = useLocation();

  useEffect(() => {
    if (location || Products.length === 0) {
      let titledesp = searchParams.getAll("titledesp");
      let rating = searchParams.getAll("rating");
      let _sort = searchParams.getAll("_sort");
      let _order = searchParams.getAll("_order");
      let queryparams = {
        titledesp: titledesp,
        rating: rating,
        _sort: _sort[0],
        _order: _order[0],
        _page: page,
        _limit: 13,
      };
      let url = `http://localhost:8080/products?category=${category}`;
      let data = [url, queryparams];
      dispatch(getproductsuccess(data));
    }
  }, [page, location.search, state]);

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
      </div>
    </>
  );
};

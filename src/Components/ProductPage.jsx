import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { Singleproduct } from "../Components/Singleproduct";
import { Button, Img } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { FilterSort } from "../Components/FilterSort";
import { apiproduct } from "./Api";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

let getProduct = (category) => {
    return axios.get(`${apiproduct}?category=${category}`);
};
let getSortedProduct = (category, titledesp, sort, order) => {
    return axios.get(
        `${apiproduct}?category=${category}&titledesp=${titledesp}&_sort=${sort}&_order=${order}`
    );
};
let getPriceSortedProduct = (category, sort, order) => {
    return axios.get(
        `${apiproduct}?category=${category}&_sort=${sort}&_order=${order}`
    );
};
let getCatsProducts = (category, titledesp) => {
    return axios.get(
        `${apiproduct}?category=${category}&titledesp=${titledesp}`
    );
};
export const ProductPage = ({ cat1, cat2, cat3, cat4, heading, category }) => {
    let [page, setpage] = useState(1);
    let [Products, setproducts] = useState([]);
    let [state, setstate] = useState(0);
    const [searchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get('titledesp'));
        let sortby = searchParams.get("_sort") || "";
        let orderby = searchParams.get("_order") || "";
        let titledesp = searchParams.get("titledesp") || "";
        if (titledesp !== "" && sortby !== "" && orderby !== "") {
            getSortedProduct(category, titledesp, sortby, orderby).then((r) =>
                setproducts(r.data)
            );
        } else if (sortby !== "" && orderby !== "") {
            getPriceSortedProduct(category, sortby, orderby).then((r) =>
                setproducts(r.data)
            );
        } else if (titledesp !== "") {
            getCatsProducts(category, titledesp).then((r) =>
                setproducts(r.data)
            );
        } else {
            getProduct(category).then((r) => setproducts(r.data));
        }
    }, [state, searchParams,category]);

    return (
        <>
            <div className="Product-main-div">
                <div className="Product-left-div">
                    <br />
                    <br />
                    <br />
                    <FilterSort
                        val1={cat1}
                        val2={cat2}
                        val3={cat3}
                        val4={cat4}
                    />
                </div>
                <div className="Product-right-div">
                    <div className="Product-header">
                        <div>
                            <h1>{heading}</h1>
                        </div>
                        <div>
                            <Button
                                disabled={page === 1}
                                onClick={() => setpage(page - 1)}
                            >
                                <ArrowLeftIcon />
                            </Button>
                            &nbsp;&nbsp;
                            <Button>{page}</Button>&nbsp;&nbsp;
                            <Button onClick={() => setpage(page + 1)}>
                                <ArrowRightIcon />
                            </Button>
                        </div>
                    </div>
                    {(Products.length > 0 && (
                        <div className="Product-grid">
                            {Products.map((e, i) => (
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
                    )) || (
                        <Img
                            width={"100%"}
                            src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif"
                            alt="loading"
                        />
                    )}
                    {/* pagination */}
                    <div>
                        <Button
                            disabled={page === 1}
                            onClick={() => setpage(page - 1)}
                        >
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

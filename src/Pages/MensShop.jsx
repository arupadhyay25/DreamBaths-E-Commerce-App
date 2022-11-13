import React from "react";
import { ProductPage } from "../Components/ProductPage";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export let MensShop = () => {
  return (
    <>
      <Navbar />
      <ProductPage
        category={"mensshop"}
        heading={"Men's Fragrance, Body Care & More"}
        cat1={"Body Spray"}
        cat2={"Wallflowers Fragrance Refill"}
        cat3={"Ultimate Hydration Body Cream"}
        cat4={"Gentle Foaming Hand Soap"}
      />
      <Footer />
    </>
  );
};

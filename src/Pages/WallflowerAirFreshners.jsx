import React from "react";
import { ProductPage } from "../Components/ProductPage";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export let WallflowerAirFreshners = () => {
  return (
    <>
      <Navbar />
      <ProductPage
        category={"wallflowers"}
        heading={"Wallflowers & Air Fresheners"}
        cat1={"Wallflowers Fragrance Refill"}
        cat2={"Wallflowers Fragrance Plug"}
        cat3={"Concentrated Room Spray"}
        cat4={"Car Fragrance Refill"}
      />
      <Footer />
    </>
  );
};

import React from "react";
import { ProductPage } from "../Components/ProductPage";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export let Moxy = () => {
  return (
    <>
      <Navbar />
      <ProductPage
        category={"moxy"}
        heading={"MOXY"}
        cat1={"Body Spray"}
        cat2={"3-Wick Candle"}
        cat3={"Ultimate Hydration Body Cream"}
        cat4={"Moisturizing Hand Sanitizer"}
      />
      <Footer />
    </>
  );
};

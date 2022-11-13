import React from "react";
import { ProductPage } from "../Components/ProductPage";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export let Candles = () => {
  return (
    <>
      <Navbar />
      <ProductPage
        category={"candles"}
        heading={"Buy 1, Get 1 FREE All Candles"}
        cat1={"3-Wick Candle"}
        cat2={"Single Wick Candle"}
        cat3={"Single Wick Candle Holder"}
        cat4={"3-Wick Candle Holder"}
      />
      <Footer />
    </>
  );
};

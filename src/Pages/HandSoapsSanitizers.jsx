import React from "react";
import { ProductPage } from "../Components/ProductPage";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export let HandSoapsSanitizers = () => {
  return (
    <>
      <Navbar />
      <ProductPage
        category={"handshops"}
        heading={"Hand Soaps & Sanitizers"}
        cat1={"Gentle Foaming Hand Soap"}
        cat2={"Cleansing Gel Hand Soap"}
        cat3={"PocketBac Hand Sanitizers, 5-Pack"}
        cat4={"Hand Sanitizer Spray"}
      />
      <Footer />
    </>
  );
};

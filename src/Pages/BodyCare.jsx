import React from "react";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { ProductPage } from "../Components/ProductPage";

export const BodyCare = () => {
  return (
    <>
      <Navbar />
      <ProductPage
        category={"bodycare"}
        heading={"All Body Care"}
        cat1={"Ultimate Hydration Body Cream"}
        cat2={"Body Spray"}
        cat3={"Daily Nourishing Body Lotion"}
        cat4={"Fine Fragrance Mist"}
      />
      <Footer />
    </>
  );
};

import React from "react";
import { ProductPage } from "../Components/ProductPage";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export let HolidayShop = () => {
  return (
    <>
      <Navbar />
      <ProductPage
        category={"holidays"}
        heading={"Holiday Shop"}
        cat1={"Fine Fragrance Mist"}
        cat2={"12-Day Countdown Calendar"}
        cat3={"Gentle Foaming Hand Soap"}
        cat4={"Gift Set"}
      />
      <Footer />
    </>
  );
};

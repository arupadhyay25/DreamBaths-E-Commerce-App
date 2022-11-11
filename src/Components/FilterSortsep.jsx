import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterSortsep = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [order, setorder] = useState("");

  let handlesort = (e) => {
    let option = e.target.value;

    setorder(option);
  };

  useEffect(() => {
    let params = {};
    order && (params._sort = "price") && (params._order = order);
    setSearchParams(params);
  }, [order, setSearchParams]);


  return (
    <>
      <div className="Product-left-div-header">
        <Text fontSize="2xl">Filters</Text>
        <Text as="u" color="blue">
          ClearAll
        </Text>
      </div>
      <br />
      {/* sort by price */}
      <div className="sort-by">
        <label>Sort by Price</label>
        <br />
        <span>
          <input
            type="checkbox"
            value="asc"
            onChange={handlesort}
            defaultChecked={order == "desc"}
          />
          &nbsp;&nbsp;
          <label>Low to High</label>
        </span>
        <br />
        <span>
          <input
            type="checkbox"
            value="desc"
            onChange={handlesort}
            defaultChecked={order == "desc"}
          />
          &nbsp;&nbsp;
          <label>High to Low</label>
        </span>
      </div>
      <br />
    </>
  );
};
/*
"3-Wick Candle"
"Single Wick Candle"
"12-Day Countdown Calendar"
"3-Wick Candle Holder"
"Single Wick Candle Holder"
"3-Wick Candle Magnet"
*/

// "Ultimate Hydration Body Cream":24,"Body Spray":7,"Shower Steamers":1,"Daily Nourishing Body Lotion":16,"Shower Gel":12,"3-in-1 Hair, Face & Body Wash":9,"Fine Fragrance Mist":22,"Moisturizing Body Lotion":1,"Mini Cologne":3,"Eau de Parfum":2,"Salt Body Scrub":1,"Cologne":3,"Body Spray & Ultimate Hydration Body Cream Bundle":1,"Body Wash and Foam Bath":2,"Bath Soak":2,"Exfoliating Glow Body Scrub":2,"12-Day Countdown Calendar":1,"Travel Size Shower Gel":2,"Travel Size Ultimate Hydration Body Cream":6,"Lip Gloss":4,"Shea Butter Cleansing Bar":3,"Flavor Burst Lip Gloss":3,"Travel Size Fine Fragrance Mist":9,"Travel Size Diamond Shimmer Mist":1,"Bath Fizzy""Single Wick Candle & Gentle Foaming Hand Soap Bundle""Exfoliating Lip Scrub""Hand Cream""Moisturizing Body Wash""Whipped Glow-tion"

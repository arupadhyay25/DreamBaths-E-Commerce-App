import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Top_offers } from "../Pages/Top_offers";
import { Body_care } from "../Pages/Body_care";
import { Candles } from "../Pages/Candles";
import { Wallflower_AirFreshners } from "../Pages/Wallflower_AirFreshners";
import { HandSoaps_Sanitizers } from "../Pages/HandSoaps_Sanitizers";
import { Mens_Shop } from "../Pages/Mens_Shop";
import { Moxy } from "../Pages/Moxy";
import { Holiday_Shop } from "../Pages/Holiday_Shop";
import { Login_page } from "../Pages/Login_page";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login_page />} />
      <Route path="/top-offers" element={<Top_offers />} />
      <Route path="/body-care" element={<Body_care />} />
      <Route path="/candles" element={<Candles />} />
      <Route path="/home-fragrance" element={<Wallflower_AirFreshners />} />
      <Route path="/hand-soaps-sanitizers" element={<HandSoaps_Sanitizers />} />
      <Route path="/mens-shop" element={<Mens_Shop />} />
      <Route path="/moxy-collection" element={<Moxy />} />
      <Route path="/holiday-shop" element={<Holiday_Shop />} />
    </Routes>
  );
};

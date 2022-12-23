import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { TopOffers } from "../Pages/TopOffers";
import { BodyCare } from "../Pages/BodyCare";
import { Candles } from "../Pages/Candles";
import { WallflowerAirFreshners } from "../Pages/WallflowerAirFreshners";
import { HandSoapsSanitizers } from "../Pages/HandSoapsSanitizers";
import { MensShop } from "../Pages/MensShop";
import { Moxy } from "../Pages/Moxy";
import { HolidayShop } from "../Pages/HolidayShop";
import { LoginPage } from "../Pages/LoginPage";
import { Admin } from "../Pages/Admin";
import { Cartpage } from "../Pages/Cartpage";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { PaymentPage } from "../Pages/PaymentPage";
import SignUpPage from "../Pages/SignUpPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<Cartpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/top-offers" element={<TopOffers />} />
      <Route path="/body-care" element={<BodyCare />} />
      <Route path="/candles" element={<Candles />} />
      <Route path="/home-fragrance" element={<WallflowerAirFreshners />} />
      <Route path="/hand-soaps-sanitizers" element={<HandSoapsSanitizers />} />
      <Route path="/mens-shop" element={<MensShop />} />
      <Route path="/holiday-shop" element={<HolidayShop />} />
      <Route path="/moxy-collection" element={<Moxy />} />
    </Routes>
  );
};

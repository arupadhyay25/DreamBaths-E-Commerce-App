import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar-links">
        <Link to="/">Navbar</Link>
        <Link to="/login">Login/Signup</Link>
      </div>
      <br />
      <div className="navbar-links">
        <Link to="/top-offers">Top Offers</Link>
        <Link to="/body-care">Body Care</Link>
        <Link to="/candles">Candles</Link>
        <Link to="/home-fragrance">Wallflower & AirFreshners</Link>
        <Link to="/hand-soaps-sanitizers">Hand Soaps & Sanitizers </Link>
        <Link to="/mens-shop">Men's Shop</Link>
        <Link to="/moxy-collection">Moxy</Link>
        <Link to="holiday-shop">Holiday Shop</Link>
      </div>
    </div>
  );
};

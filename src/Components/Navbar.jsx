import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
import Slider from "react-slick";
import { useState } from "react";

export const Navbar = () => {
  const [isMobail, setisMobail] = useState(false);
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
  };

 
  return (
    <>
      <Slider {...settings} className="slid">
        <div>
          <h3>10% off for new users on first order</h3>
        </div>
        <div>
          <h3>FREE SHIPPING on PREPAID Orders</h3>
        </div>
        <div>
          <h3>USE CODE : MASAI10 TO GET 10% OFF</h3>
        </div>
      </Slider>

      <div className="navbar">
        <div className="logosection">
          <div>
            
            <button className="drawer" onClick={()=>setisMobail(!isMobail)}><i class="fa-solid fa-bars"></i></button>
          </div>
          <div>
            
            <img src={logo} alt="" className="logo" />
          </div>

          <div className="signupsection">
            <button className="logbtn">
              <Link to="/login">Login/Signup</Link>
            </button>
            <button className="logbtn">fav</button>
            <button>cart</button>
          </div>
        </div>
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
      <div className={isMobail?"resdrawer":"norespon"}>
        <div className="closebuton" ><button onClick={()=>setisMobail(!isMobail)}> close x</button></div>
        <div className="navbar-links-drawer">

          <h4 onClick={()=>setisMobail(!isMobail)}> <Link to="/top-offers">Top Offers</Link></h4>
        
          <h4 onClick={()=>setisMobail(!isMobail)}><Link to="/body-care">Body Care</Link></h4>
        
          <h4 onClick={()=>setisMobail(!isMobail)}><Link to="/candles">Candles</Link></h4>
        
          <h4 onClick={()=>setisMobail(!isMobail)}><Link to="/home-fragrance">Wallflower & AirFreshners</Link></h4>
        
          <h4 onClick={()=>setisMobail(!isMobail)}><Link to="/hand-soaps-sanitizers">Hand Soaps & Sanitizers </Link></h4>
        
          <h4 onClick={()=>setisMobail(!isMobail)}><Link to="/mens-shop">Men's Shop</Link></h4>
        
          <h4 onClick={()=>setisMobail(!isMobail)}><Link to="/moxy-collection">Moxy</Link></h4>
        
          <h4 onClick={()=>setisMobail(!isMobail)}><Link to="holiday-shop">Holiday Shop</Link></h4>
          <h4 onClick={()=>setisMobail(!isMobail)}><Link >Favereat</Link></h4>
          <h4 onClick={()=>setisMobail(!isMobail)}><Link >Login</Link></h4>
        </div>


      </div>


    </>
  );
};

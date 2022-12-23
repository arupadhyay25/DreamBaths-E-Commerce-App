import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Slider from "react-slick";
import { useState } from "react";

export const NavbarLogin = () => {
  const [isMobail, setisMobail] = useState(false);
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    <>
      <br />
      <Slider {...settings} className="slid">
        <div>
          <h3>10% off for new users on first order</h3>
        </div>
        <div>
          <h3>Login to continue</h3>
        </div>
        <div>
          <h3>USE CODE : MASAI10 TO GET 10% OFF</h3>
        </div>
      </Slider>

      <div className="navbar">
        <div className="logosection">
          <div>
            <button className="drawer" onClick={() => setisMobail(!isMobail)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div>
            <img
              src="/Image/logo.png"
              alt="dfd"
              className="logo"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="signupsection">
            <button className="logbtn">
              <Link to="/">
                <i  className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </button>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

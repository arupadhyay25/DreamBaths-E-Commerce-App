import React from "react";
import "./HomePage.css";
import Slider from "react-slick";
import HomePage3 from "../Components/HomePage3"
import ShopCollection from "../Components/ShopCollection"

export const HomePage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows:1,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          centerMode: true,
          rows:1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          rows:1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows:1,
        }
      }
    ]
  };
  return (
    <>
      <div className="homeheade-01">LIMITED TIME ONLY!</div>
      <img
        src="/Image/homepage/limg1.gif"
        alt=""
        className="homeimg-tpohead1"
      />
      <img
        src="/Image/homepage/limg2.gif"
        alt=""
        className="homeimg-tpohead2"
      />

      <div className="sliderbody-0234">
        <h1>TODAY'S TOP OFFERS</h1>
        <Slider {...settings} className="nowr215">
          <div>
            <div className="silksliderinerdiv2">
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
        </Slider>
      </div>

      <img
        src="/Image/homepage/limg3.gif"
        alt=""
        className="homeimg-tpohead3"
      />
      <img
        src="/Image/homepage/limg4.gif"
        alt=""
        className="homeimg-tpohead4"
      />

      <ShopCollection/>
      <HomePage3/>
    </>
  );
};

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const Navbar = () => {
  const [isMobail, setisMobail] = useState(false);
  const [logined, setLogined] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
  };
  const logout = () => {
    onClose();
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {
    let token = localStorage.getItem("token") || "";
    if (token !== "") {
      setLogined(true);
    } else {
      setLogined(false);
    }
  }, [setLogined, logined]);
  return (
    <>
      <br />
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
              {logined ? (
                <>
                  <i
                    className="fa-solid fa-right-from-bracket"
                    onClick={onOpen}
                  ></i>

                  {/* <Button onClick={onOpen}>Open Modal</Button> */}

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Are you sure ?</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        {/* <Lorem count={2} /> */}
                        On clicking yes you will be Logged out !!!
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          No
                        </Button>
                        <Button onClick={logout} variant="ghost">
                          Yes
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              ) : (
                <Link to="/login">
                  <i className="fa-regular fa-user"></i>
                </Link>
              )}
            </button>
            <button className="favbtn">
              <i className="fa-sharp fa-solid fa-heart"></i>
            </button>
            <button className="cartbtn-0nav">
              {logined ? (
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              ) : (
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={() => {
                    alert("please login first.");
                  }}
                ></i>
              )}
            </button>
          </div>
        </div>
        <div className="navbar-links">
          <Link className="pagelinks-cat012" to="/top-offers">
            Top Offers
          </Link>
          <Link className="pagelinks-cat012" to="/body-care">
            Body Care
          </Link>
          <Link className="pagelinks-cat012" to="/candles">
            Candles
          </Link>
          <Link className="pagelinks-cat012" to="/home-fragrance">
            Wallflower & AirFreshners
          </Link>
          <Link className="pagelinks-cat012" to="/hand-soaps-sanitizers">
            Hand Soaps & Sanitizers{" "}
          </Link>
          <Link className="pagelinks-cat012" to="/mens-shop">
            Men's Shop
          </Link>
          <Link className="pagelinks-cat012" to="/moxy-collection">
            Moxy
          </Link>
          <Link className="pagelinks-cat012" to="/holiday-shop">
            Holiday Shop
          </Link>
        </div>
      </div>
      <div className={isMobail ? "resdrawer" : "norespon"}>
        <div className="closebuton">
          <button
            onClick={() => setisMobail(!isMobail)}
            className="btnclosedrawer-987"
          >
            {" "}
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="navbar-links-drawer">
          <h4 onClick={() => setisMobail(!isMobail)}>
            {" "}
            <Link className="drawer-links-0934" to="/top-offers">
              Top Offers
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/body-care">
              Body Care
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/candles">
              Candles
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/home-fragrance">
              Wallflower & AirFreshners
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/hand-soaps-sanitizers">
              Hand Soaps & Sanitizers{" "}
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/mens-shop">
              Men's Shop
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/moxy-collection">
              Moxy
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/holiday-shop">
              Holiday Shop
            </Link>
          </h4>
          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934">WishList</Link>
          </h4>
          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934">Login</Link>
          </h4>
        </div>
      </div>
      <img
        src="/Image/homepage/adbaner.jpg"
        alt="add"
        className="navaddsec-21"
      />
    </>
  );
};

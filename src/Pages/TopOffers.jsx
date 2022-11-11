import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width : 100%;
  margin : auto 40px;
  text-align : left;
  @media (min-width: 768px){
    width : 40%;
    height : auto;
    margin : 100px auto;
    text-align : left;

  }
  
`;
const Detail = styled.p`
  margin : 0;
  margin-top : 15px;
  font-size : 15px;
  color : black;
  line-height : 25px;
  
`
const TopOfferDiv = styled.div`
 
  grid-template-columns : repeat(1,1fr);
  width : 100%;
  @media (min-width: 768px) {
  display : grid;
  grid-template-columns : repeat(4,1fr);
  grid-gap : 20px;
  width : 80%;
  height : auto;
  margin : 100px auto;
  border:1px solid;
  }

`
const TopOfferDataDiv = styled.div`
  margin-bottom : 30px;
  @media (min-width: 768px){
  margin-bottom: 30px;
  border:1px solid;
  }
`
const Header = styled.div`
  display : none;
  @media (min-width: 768px){
    width : 40%;
    height : auto;
    margin : 50px auto;
    margin-bottom : -10px;
    line-height: 0px;
    text-align : left;
    display: block ;
  }
`
const ProductImage = styled.img`
height : 350px;
width : 350px;
  @media (min-width: 768px){
    height : 200px;
    width : 100%;
  }
 
`
const ShopButton = styled.button`
  border : 2px solid black;
  font-size : 12px;
  padding : 10px 70px;
  background-color : black;
  color : white;
`
const OfferAdd = styled.p`
font-size : 16px;

 @media (min-width: 768px){
  font-size : 18px;
  font-weight : 300;
 }
`
export const TopOffers = () => {
  const offerData = [
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dwe657fa3a/fbc_give-love-spring_fall1_ss.jpg",
      text: " BODY CARE",
      btext: "ALL @ B3G1",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw1e3e0abb/obc_travel_fall1_ss.jpg",
      text: " TRAVEL SIZE",
      btext: "ALL @ B2G1",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw0243e6a5/cndl_mday_fall1_ss.jpg",
      text: " 3-WICK CANDLES",
      btext: "All @ ₹ 2199",  
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw0be54642/cndl_sw_fall1_ss.jpg",
      text: " SINGLE-WICK CANDLES",
      btext: "All @ ₹ 1099",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw91a5cf38/HANDSOAPSCLEANSERS1.jpg",
      text: " HAND SOAPS",
      btext: "BUY 4 @ ₹ 2099 / 6 @ ₹ 2999",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw9b6c9d0c/roomsprays1.jpg",
      text: " ROOM SPRAYS",
      btext: "All @ B2G1",
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6310a4a8/images/Christmas2022/bc_travel_c1_ss.jpg?yocs=o_s_",
      text: " TRAVEL, HAND & LIP CARE",
      btext: "All @ B3G1",
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc0851ed2/images/Christmas2022/sn_pbac_ch1_ss.jpg?yocs=o_s_",
      text: " HAND SANITIZER",
      btext: "BUY 5 @ ₹ 1099",
    },
  ];
  return (
          <>
            <Header>
            <h1 style={{marginBottom:"40px"}}>TOP OFFERS</h1>
            <OfferAdd>Too good to pass up! Shop our best offers now.</OfferAdd>
            <hr className="Top-offer-hr" />
            </Header>
            
            <TopOfferDiv className="topoffer-div" >
            {offerData.map((e) => {
            return (
              <TopOfferDataDiv className="topoffer-data-div">
                <ProductImage className="topoffer-data-div-img" src={e.image} alt="" />
                <p className="offer-box-div-p">{e.text}</p>
                <h2 className="offer-box-div-p1" style={{fontWeight:"400"}}>{e.btext}</h2>
                <ShopButton className="offer-box-div-but">SHOP</ShopButton>
              </TopOfferDataDiv>
            );
            })}
            </TopOfferDiv>
            <Info>
              <h1 style={{fontWeight:"400", fontSize:"23px"}}>About Top Offers from Bath & Body Works</h1>
          
              <Detail>Welcome to the one-stop-shop for all Bath & Body Works coupons. This is the spot to watch for the latest deals, coupon codes, hottest steals and the most need-right-now promotions we’ve got going on. From home fragrance favorites to body care loves, we definitely have something amazing for whatever mood (or season) you’re feeling..</Detail>
            
              <Detail>And while you’re here, let’s talk about a few things that we’re totally obsessed with right now. After all, a Bath & Body Works promotion is the best time to try something new, right? We’re super excited about our new body care collections (they’re basically joy in a bottle), and our latest candle and Wallflowers arrivals turn your home into a fragrance paradise. Trust us: with Bath & Body Works coupons, you actually can have it all!</Detail>
            
              <Detail>Another way we love using Bath & Body Works coupon codes? On gifts, of course! Check your calendar: if you have any birthdays or holidays on the horizon, this would be the perfect time to stock up on someone’s (or your) favorite fragrance. You could even score a few extra hand soaps or single wick candles to keep in your gift closet for the next celebration. (Incredible gifting strategy, go you!) And if you have a few common questions, let’s answer them here…</Detail>
             
              <Detail>How do you get Bath & Body Works coupons mailed to you? Just fill out our Mailing Address Update email form. Choose "Add me to your mailing list" as your Request Type and provide all relevant information. Then you should be good to go!</Detail>
            </Info>
          </>
          );
};

import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width : 90%;
  margin : auto 20px;
  text-align : left;

  @media (min-width: 768px){
    width : 40%;
    height : auto;
    margin : 50px auto;
    text-align : left;
  }
  
`;
const Detail = styled.p`
  margin : 0;
  margin-top : 15px;
  font-size : 15px;
  font-weight : 100;
  color : black;
  line-height : 25px;
  
`
const Detailtitle = styled.h1`
  font-size : 22px;
  font-weigth : 800;
`
const TopOfferDiv = styled.div`
 
  grid-template-columns : repeat(1,1fr);
  width : 100%;
  @media (min-width: 768px) {
  display : grid;
  grid-template-columns : repeat(3,1fr);
  grid-gap : 20px;
  width : 70%;
  height : auto;
  margin : 50px auto ; 
  }

`
const TopOfferDataDiv = styled.div`
    margin-left:20px;
 
  @media (min-width: 768px){
    display: block ;
    text-align : center;
    margin : auto;
    border:1px solid #D3D3D3;
  }
`
const Header = styled.div`
    width : 80%;
    height : auto;
    margin : 20px auto;
    display: block ;
    text-align : left;
`
const Anounce = styled.div`
  display : block;
  text-align : center;
  align-itmes: center;
  height : 40px;
  padding-top : 5px;
  border : 1px solid;
  width : 100%;
  background-color: rgb(228,5,50);
  color : white;
  font-size : 18px;
  font-weight: bold;
`
const Advertise = styled.img`
width: 80%;
margin : auto;  
@media (min-width: 768px){
  display: block;
  margin-left: auto;
  margin-right: auto;
}  
`
const ProductImage = styled.img`

width : 95%;
  @media (min-width: 768px){
    height : 300px;
    width : 100%;
  }
 
`
const ProductTitle = styled.p`
margin : 15px;
text-align : center;
font-size : 18px;
font-weight : 400;
`
const ProductPrice = styled.p`
text-align : center;
font-size : 18px;
font-weight:600;
margin : 15px;

`
const ShopButton = styled.button`
  font-size : 15px;
  margin : 0px 0px 30px;
  padding : 10px 80px;
  background-color : rgb(51,51,51);
  color : white;
  font-weight : 700;
`;

const UnderLine = styled.hr`
  width : 100%;
  border-bottom : 1px solid black;
  margin : 40px auto;
  @media (min-width: 768px){
    border-bottom : 1px solid black;
    margin : 40px auto;
    width : 45%;
  } 
`
export const TopOffers = () => {
  const offerData = [
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6687083f/images/Christmas2022/bc_hol-trads_c1_ss.jpg?yocs=o_s_",
      text: " All Full-Size Body Care",
      btext: "Buy 3, Get 1 FREE",
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9216acfe/images/Christmas2022/diff_decor_c1_ss.jpg?yocs=o_s_",
      text: " Wallflowers Fragrance Refills",
      btext: "5/$25",
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7afb083a/images/Christmas2022/sp_holtrads-gifting_c1_ss.jpg?yocs=o_s_",
      text: " Hand Soaps",
      btext: "All @ ₹ 2199",  
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6310a4a8/images/Christmas2022/bc_travel_c1_ss.jpg?yocs=o_s_",
      text: " Travel, Hand & Lip Care",
      btext: "Buy 3, Get 1 FREE",
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc0851ed2/images/Christmas2022/sn_pbac_ch1_ss.jpg?yocs=o_s_",
      text: " Hand Sanitizer 5-Packs",
      btext: "₹ 2999",
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf285eec9/images/Christmas2022/diff_crs_c1_ss.jpg?yocs=o_s_",
      text: " Room Sprays",
      btext: "3/$22",
    },
  ];
  return (
          <>
            <Header>
            <h1 style={{fontSize: "25px",fontWeight: "600"}}>TOP OFFERS</h1>
            <hr style={{borderBottom : "1px solid black",margin : "20px auto 30px",width : "100%"}}/>
            
            <Anounce>
              <h1> LIMITED TIME ONLY!</h1>
            </Anounce>
            </Header>
    
            <Advertise src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd53d69dd/images/Christmas2022/b1g1candles_c1_6x1.gif?yocs=s_" alt='Banner'/>

            <TopOfferDiv >
            {offerData.map((e) => {
            return (
              <TopOfferDataDiv >
                <ProductImage src={e.image} alt="" />
                <ProductTitle >{e.text}</ProductTitle>
                <ProductPrice >{e.btext}</ProductPrice>
                <ShopButton >SHOP</ShopButton>
              </TopOfferDataDiv>
            );
            })}
            </TopOfferDiv>

            <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd2941b82/images/Fall2022/boc-launch-prospects_sb_0.jpg?yocs=o_s_" alt="addvertise" style={{margin:"auto"}}/>
            <UnderLine/>
            <Info>
              <Detailtitle>About Top Offers from Bath & Body Works</Detailtitle>
          
              <Detail>Welcome to the one-stop-shop for all Bath & Body Works coupons. This is the spot to watch for the latest deals, coupon codes, hottest steals and the most need-right-now promotions we’ve got going on. From home fragrance favorites to body care loves, we definitely have something amazing for whatever mood (or season) you’re feeling..</Detail>
            
              <Detail>And while you’re here, let’s talk about a few things that we’re totally obsessed with right now. After all, a Bath & Body Works promotion is the best time to try something new, right? We’re super excited about our new body care collections (they’re basically joy in a bottle), and our latest candle and Wallflowers arrivals turn your home into a fragrance paradise. Trust us: with Bath & Body Works coupons, you actually can have it all!</Detail>
            
              <Detail>Another way we love using Bath & Body Works coupon codes? On gifts, of course! Check your calendar: if you have any birthdays or holidays on the horizon, this would be the perfect time to stock up on someone’s (or your) favorite fragrance. You could even score a few extra hand soaps or single wick candles to keep in your gift closet for the next celebration. (Incredible gifting strategy, go you!) And if you have a few common questions, let’s answer them here…</Detail>
             
              <Detail>How do you get Bath & Body Works coupons mailed to you? Just fill out our Mailing Address Update email form. Choose "Add me to your mailing list" as your Request Type and provide all relevant information. Then you should be good to go!</Detail>
              <br />
              <Detailtitle>How do you get Bath & Body Works coupons mailed to you?</Detailtitle>
              <Detail>
              Just fill out our Mailing Address Update email form. Choose "Add me to your mailing list" as your Request Type and provide all relevant information. Then you should be good to go!
              </Detail>
              <br />
              <Detailtitle>Does Bath & Body Works offer free shipping?</Detailtitle>
              <Detail>
              Sometimes! Sign up for emails to stay in the know – it’s that easy. Don’t forget you can also see our best deals on this page
              </Detail>
              <br />
              <Detailtitle>How many promo codes can you redeem per online order?</Detailtitle>
              <Detail>Just one! Keep in mind that a lot of offers and promotions don’t require a promo code, so you can still add one in that case. If more than one code is entered at checkout, the only code that will be applied is the last promo code entered.
              </Detail>
              <br />
              
              <Detailtitle>What is the Bath & Body Works return policy?</Detailtitle>
              <Detail>We’re always updating this page with the latest and greatest Bath & Body Works sales, so bookmark it now and check back often. Other coupon sites can wait – this is the spot to check for the best deals. Hint, hint: now that you’ve seen our greatest deals shop our <span><a href="/">newest arrivals.</a></span> </Detail>
            </Info>
          </>
          );
};

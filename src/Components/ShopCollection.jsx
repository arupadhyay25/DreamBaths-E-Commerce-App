import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';    

const CategoryDataDiv = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display : block;
@media (min-width: 768px){
    display: flex;
    flex-wrap: wrap;
    column-gap: 2%;
    text-align : center;
    width :80%;
    margin:auto;
}    
`
const CategoryContent = styled.div`
    width : 100%;
    @media (min-width: 768px){
    width:15%
}
`
const CollectionDataDiv = styled.div`
    grid-template-columns : repeat(1,1fr);
    text-align : center;
@media (min-width: 768px){
    display: grid;
    width : 80%;
    margin:auto;
    grid-template-columns : repeat(2,1fr);
    grid-gap : 30px;
}
   
`
const CategoryImage = styled.img`
    width : 100%;
`
const CategoryLinks = styled.p`
    text-align : center;
    text-decoration: underline; 
    margin : 10px 0px;
`
const TextDes = styled.p`
    text-align : center;
    margin : 10px auto;
`
const ShopCollection = () => {
    const categoryData=[
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw90169280/images/Christmas2022/bc_dream-bright_c1_vn.jpg?yocs=o_s_",
            text: " Shop Body Care",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4201241f/images/Christmas2022/diff_decor_c1_vn.jpg?yocs=o_s_",
            text: " Shop Candles",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4201241f/images/Christmas2022/diff_decor_c1_vn.jpg?yocs=o_s_",
            text: " Shop Wallflowers",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8ac572be/images/Christmas2022/sp_holtrads-gifting_c1_vn.jpg?yocs=o_s_",
            text: " Shop Hand Soaps",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe05b7acb/images/Christmas2022/xcat_wellness-pov_c1_vn.jpg?yocs=o_s_",
            text: " Shop Aromathearpy",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf3b1b26/images/Christmas2022/bc_mens-sfl-blktie_c1_vn.jpg?yocs=o_s_",
            text: " Shop Men's",
        },
    ]
    const collectionData=[
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5e99db2a/images/Christmas2022/xcat_dream-bright_c1_atb.jpg?yocs=o_s_",
            text: "For the really, really nice list: Bring joy home.",
            link: "Shop Holiday",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw872bda80/images/Christmas2022/xcat_wellness-pov_c1_hps.jpg?yocs=o_s_",
            text: "Hectic holiday? Not this year.",
            link: "Shop Aromatherapy",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa7f4e5a2/images/Christmas2022/xcat_snow-beautiful_c1_hps.jpg?yocs=o_s_",
            text: "Let wintry shades, shrimmering details and flurrying fragrance be your reason for the gifting season!",
            link: "Shop the Collection",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw55db398a/images/Christmas2022/xcat_nutcracker-nightb4_c1_hps.jpg?yocs=o_s_",
            text: "Go for gifting gold with a sophisticated routine upgrade.",
            link: "Shop Men's",
        },
       
    ]
  return (
    <>
        <h1 style={{fontSize:"25px", fontWeight:"600", margin:"20px"}}>SHOP BY CATEGORY</h1>
        <CategoryDataDiv>
        {categoryData.map((e) => {
            return (
              <CategoryContent >
                <CategoryImage src={e.image} alt=""  />
                <CategoryLinks><Link to={"/"}>{e.text}</Link></CategoryLinks>
              </CategoryContent>
              
            );
            })}
        </CategoryDataDiv>
        <h1 style={{fontSize:"25px", fontWeight:"600", margin:"20px"}}>NEW Dream Bright</h1>
        <TextDes>Let fragrance dreams become reality with a unique blend of sapphire berries,<br /> night-blooming orchid and crystalized vanilla.</TextDes>
        <button style={{padding:"10px 40px",backgroundColor:"gray",color:"white",fontWeight:"600",margin:"20px auto"}}>SHOP THE COLLECTION</button>
        <CollectionDataDiv>
        {collectionData.map((e) => {
            return (
              <div>
                <img src={e.image} alt="" style={{borderRadius: "10px"}}/>
                <p style={{textAlign:"center", margin: "15px auto", color : "grey"}}>{e.text}</p>
                <CategoryLinks><Link to={"/"}>{e.link}</Link></CategoryLinks>
              </div>
            );
            })}
        </CollectionDataDiv>
    </>
  )
}

export default ShopCollection
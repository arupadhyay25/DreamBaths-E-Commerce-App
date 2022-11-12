import React from 'react'
import styled from "styled-components";

const CategoryDataDiv = styled.div`
    display: flex;
    width :80%;
    margin:auto;
`
const CollectionDataDiv = styled.div`
    
    display: grid;
    width : 80%;
    margin:auto;
    grid-template-columns : repeat(2,1fr);
    grid-gap : 30px;
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
            text: "",
            link: "",
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
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa7f4e5a2/images/Christmas2022/xcat_snow-beautiful_c1_hps.jpg?yocs=o_s_",
            text: "For the really, really nice list: Bring joy home.",
            link: "Shop Holiday",
        },
        {
            image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4a0649b6/images/Christmas2022/bc_mens-sfl-blktie_c1_hps.jpg?yocs=o_s_",
            text: "Go for gifting gold with a sophisticated routine upgrade",
            link: "Shop Men's",
        },
        // {
        //     image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5e99db2a/images/Christmas2022/xcat_dream-bright_c1_atb.jpg?yocs=o_s_",
        //     text: "",
        //     link: "",
        // },
    ]
  return (
    <>
        <h1 style={{fontSize:"25px", fontWeight:"600", margin:"20px"}}>SHOP BY CATEGORY</h1>
        <CategoryDataDiv>
        {categoryData.map((e) => {
            return (
              <div>
                <img src={e.image} alt="" />
                <p>{e.text}</p>
              </div>
            );
            })}
        </CategoryDataDiv>
        <h1 style={{fontSize:"25px", fontWeight:"600", margin:"20px"}}>NEW Dream Bright</h1>
        <p>Let fragrance dreams become reality with a unique blend of sapphire berries,<br /> night-blooming orchid and crystalized vanilla.</p>
        <button style={{padding:"10px 40px",backgroundColor:"gray",color:"white",fontWeight:"600",margin:"20px auto"}}>SHOP THE COLLECTION</button>
        <CollectionDataDiv>
        {collectionData.map((e) => {
            return (
              <div>
                <img src={e.image} alt="" />
                <p>{e.text}</p>
                <p>{e.text}</p>
              </div>
            );
            })}
        </CollectionDataDiv>
    </>
  )
}

export default ShopCollection
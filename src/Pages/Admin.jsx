import React, { useEffect, useRef } from "react";
import * as ReactDOM from 'react-dom';
import styles from "./Admin.module.css";
import Plot from "react-plotly.js";
import { Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import {category,categoryList,getTitleDesp,categoryListCount} from "./Admin.utits.js"
import { useState } from "react";
export const Admin = () => {
    const [rawData,setRawData]=useState({});
    const [selectedCat,setSelectedCat]=useState("");
    const dashRef = useRef();
    const categoryRef = useRef();
    const productRef = useRef();
    const visibleDash = () => {
        dashRef.current.style.display = "block";
        categoryRef.current.style.display = "none";
        productRef.current.style.display = "none";
    };
    const visibleCategory = () => {
        dashRef.current.style.display = "none";
        categoryRef.current.style.display = "block";
        productRef.current.style.display = "none";
    };
    const visibleProduct = () => {
        dashRef.current.style.display = "none";
        categoryRef.current.style.display = "none";
        productRef.current.style.display = "block";
    };
    useEffect(() => {
        visibleDash();
        let result=getTitleDesp('bodycare');
        setSelectedCat('Bodycare');
        setRawData(result);
    }, []);

    const pickColor=()=>{
      let col=['red','blue','green','pink','aqua','Aquamarine','Brown','Coral','DarkCyan','DarkMagenta','DarkSalmon','DodgerBlue','GoldenRod','IndianRed','MediumOrchid','MediumTurquoise','Navy','Orange','Sienna'];
      let random_col= col[Math.floor(Math.random()*col.length)];
      return random_col;
    }
    const showData=(e)=>{
        console.log(e.target.innerText);
        let cat=e.target.innerText;
        setSelectedCat(cat);
        cat=cat.toLowerCase();
        let result=getTitleDesp(cat.trim());
        setRawData(result);
    }
    return (
        <div className={styles.main}>
            <div className={styles.sideMenuAdmin}>
                <p onClick={visibleDash}>Dashboard</p>
                <p onClick={visibleCategory}>Category</p>
                <p onClick={visibleProduct}>Products</p>
            </div>
            <div ref={dashRef} className={styles.mainDash}>
                <Heading as="h4" size='lg' style={{textDecoration:"underline"}}>Dashboard</Heading>
                <br/>
                <div className={styles.dashFlexItem}>
                    <div className={`${styles.cardBox} ${styles.colorGreen}`}>
                        {/* <img></img> */}
                        <p className={styles.cardTitle}>Total Products</p>
                        <p>760</p>
                    </div>
                    <div className={`${styles.cardBox} ${styles.colorBlue}`}>
                        {/* <img></img> */}
                        <p className={styles.cardTitle}>Weekly Sells</p>
                        <p>$ 19268</p>
                    </div>
                    <div className={`${styles.cardBox} ${styles.colorPink}`}>
                        {/* <img></img> */}
                        <p className={styles.cardTitle}>
                            Weekly Visitors Count
                        </p>
                        <p>1150</p>
                    </div>
                </div>

                <div className={styles.datacharts}>
                    <div>
                        <Plot
                            data={[
                                {
                                    x: categoryList,
                                    y: categoryListCount,
                                    type: "bar",
                                    mode: "line+markers",
                                    maker: { color: "green" },
                                },
                            ]}
                            layout={{ width: 600, height: 320, title: "Category Counts" }}
                        />
                    </div>
                    <div>
                        <Plot
                            data={[
                                {
                                    values: [32, 40, 28],
                                    labels: [
                                        "local",
                                        "National",
                                        "International",
                                    ],
                                    type: "pie",
                                },
                            ]}
                            layout={{
                                width: 400,
                                height: 400,
                                title: "Visitors from",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div ref={categoryRef} className={styles.mainDash}>
                <Heading as="h4" size='lg' style={{textDecoration:"underline"}}>Category</Heading>
                <br/>
                <div className={styles.categoryBox}>
                {categoryList&&categoryList.map((e,i)=>{
                  return (<div key={i} className={`${styles.categoryCard} ${styles[pickColor()]}`}>
                    <p onClick={(e)=>{showData(e)}}>{e}</p>
                  </div>)
                })}
                </div>
                <div className={styles.showSubCat}>
                    <Heading size='md'>{selectedCat}</Heading>
                    <br/>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Sub-Category</Th>
                            <Th>Product Count</Th>
                        </Tr>
                    </Thead>
                    <Tbody className={styles.scrollShowSubCat}>

                    {Object.keys(rawData).map((e,i)=>{
                        return (
                            <Tr key={i}>
                                <Td>{e}</Td>
                                <Td>{rawData[e]}</Td>
                            </Tr>
                        );
                    })}            
                    </Tbody>
               
                                
                </Table>
                    
                </div>
                
            </div>
            <div ref={productRef} className={styles.mainDash}>
                <Heading as="h4" size='lg' style={{textDecoration:"underline"}}>Products</Heading>
                <br/>
            </div>
        </div>
    );
};

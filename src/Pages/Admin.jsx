import React, { useEffect, useRef } from "react";
// import * as ReactDOM from 'react-dom';
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import styles from "./Admin.module.css";
import Plot from "react-plotly.js";
import { Heading, Table, Tbody, Td, Th, Thead, Tr, useMediaQuery } from "@chakra-ui/react";
import {
    category,
    categoryList,
    getTitleDesp,
    categoryListCount,
} from "./Admin.utits.js";
import { useState } from "react";
export const Admin = () => {
    const [rawData, setRawData] = useState({});
    const [selectedCat, setSelectedCat] = useState("");
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
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
        let result = getTitleDesp("bodycare");
        setSelectedCat("Bodycare");
        setRawData(result);
    }, []);

    const pickColor = () => {
        let col = [
            "red",
            "blue",
            "green",
            "pink",
            "aqua",
            "Aquamarine",
            "Brown",
            "Coral",
            "DarkCyan",
            "DarkMagenta",
            "DarkSalmon",
            "DodgerBlue",
            "GoldenRod",
            "IndianRed",
            "MediumOrchid",
            "MediumTurquoise",
            "Navy",
            "Orange",
            "Sienna",
        ];
        let random_col = col[Math.floor(Math.random() * col.length)];
        return random_col;
    };
    const showData = (e) => {
        console.log(e.target.innerText);
        let cat = e.target.innerText;
        setSelectedCat(cat);
        cat = cat.toLowerCase();
        let result = getTitleDesp(cat.trim());
        setRawData(result);
    };
    const ascSortCat = () => {
        let newa = rawData;
        const ordered = Object.keys(newa)
            .sort()
            .reduce((obj, key) => {
                obj[key] = newa[key];
                return obj;
            }, {});
        setRawData(ordered);
    };
    const ascSortProd = () => {
        let newa = rawData;
        let sortData = [];
        for (var key in newa) {
            sortData.push([key, newa[key]]);
        }

        sortData.sort(function (a, b) {
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
        });
        let obj = {};
        for (let i = 0; i < sortData.length; i++) {
            obj[sortData[i][0]] = sortData[i][1];
        }
        setRawData(obj);
    };
    const descSortCat = () => {
        let newa = rawData;
        const ordered = Object.keys(newa)
            .sort((a, b) => {
                if (a < b) return 1;
                if (a > b) return -1;
                return 0;
            })
            .reduce((obj, key) => {
                obj[key] = newa[key];
                return obj;
            }, {});
        setRawData(ordered);
    };
    const descSortProd = () => {
        let newa = rawData;
        let sortData = [];
        for (var key in newa) {
            sortData.push([key, newa[key]]);
        }

        sortData.sort(function (a, b) {
            if (a[1] < b[1]) return 1;
            if (a[1] > b[1]) return -1;
            return 0;
        });
        let obj = {};
        for (let i = 0; i < sortData.length; i++) {
            obj[sortData[i][0]] = sortData[i][1];
        }
        setRawData(obj);
    };
    
    return (
        <div className={styles.main}>
            <div className={styles.sideMenuAdmin}>
                <p onClick={visibleDash}>Dashboard</p>
                <p onClick={visibleCategory}>Category</p>
                <p onClick={visibleProduct}>Products</p>
            </div>
            <div ref={dashRef} className={styles.mainDash}>
                <Heading
                    as="h4"
                    size="lg"
                    style={{ textDecoration: "underline" }}
                >
                    Dashboard
                </Heading>
                <br />
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
                            layout={isLargerThan1024?{
                                width: 600,
                                height: 320,
                                title: "Category Counts",
                            }:{
                                width: 400,
                                height: 280,
                                title: "Category Counts",
                            }}
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
                            layout={isLargerThan1024?{
                                width: 400,
                                height: 400,
                                title: "Visitors from",
                            }:{
                                width: 300,
                                height: 300,
                                title: "Visitors from",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div ref={categoryRef} className={styles.mainDash}>
                <Heading
                    as="h4"
                    size="lg"
                    style={{ textDecoration: "underline" }}
                >
                    Category
                </Heading>
                <br />
                <div className={styles.categoryBox}>
                    {categoryList &&
                        categoryList.map((e, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`${styles.categoryCard} ${
                                        styles[pickColor()]
                                    }`}
                                >
                                    <p
                                        onClick={(e) => {
                                            showData(e);
                                        }}
                                    >
                                        {e}
                                    </p>
                                </div>
                            );
                        })}
                </div>
                <div className={styles.showSubCat}>
                    <Heading size="md">{selectedCat}</Heading>
                    <br />
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>
                                    Sub-Category
                                    <BiUpArrow
                                        onClick={() => {
                                            ascSortCat();
                                        }}
                                    />
                                    <BiDownArrow
                                        onClick={() => {
                                            descSortCat();
                                        }}
                                    />
                                </Th>
                                <Th>
                                    Product Count
                                    <BiUpArrow
                                        onClick={() => {
                                            ascSortProd();
                                        }}
                                    />
                                    <BiDownArrow
                                        onClick={() => {
                                            descSortProd();
                                        }}
                                    />
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody className={styles.scrollShowSubCat}>
                            {Object.keys(rawData).map((e, i) => {
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
                <Heading
                    as="h4"
                    size="lg"
                    style={{ textDecoration: "underline" }}
                >
                    Products
                </Heading>
                <br />
                <div className={styles.productPageCss}>
                <div className={styles.productAdd}>
                    <Heading size='md'>Product Update</Heading>
                    <br/>
                    <p>Get data by Id</p>
                    <input type="text" />
                    <br/><br/>
                    <button>Get Product</button>
                    <p>Title</p>
                    <input type="text" />
                    <p>image_url</p>
                    <input type="text"/>
                    <p>Price</p>
                    <input type="text"/>
                    <p>Sub-Category</p>
                    <input type="text"/>
                    <p>Category</p>
                    <input type="text"/>
                    <p>Cart-Quantity</p>
                    <input type="text" />
                    <p>Review_count</p>
                    <input type="text" />
                    <p>Rating</p>
                    <input type="text" />
                    <br/><br/>
                    <button>Update Product</button>
                </div>
                <div className={styles.productAdd}>
                    <Heading size='md'>Product Add</Heading>
                    <br/>
                    <p>Title</p>
                    <input type="text" />
                    <p>image_url</p>
                    <input type="text"/>
                    <p>Price</p>
                    <input type="text"/>
                    <p>Sub-Category</p>
                    <input type="text"/>
                    <p>Category</p>
                    <input type="text"/>
                    <p>Cart-Quantity</p>
                    <input type="text" />
                    <p>Review_count</p>
                    <input type="text" />
                    <p>Rating</p>
                    <input type="text" />
                    <br/><br/>
                    <button>Add Product</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

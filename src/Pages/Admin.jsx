import React, { useEffect, useRef } from "react";
import {
  BsArrowDown,
  BsArrowDownLeftSquare,
  BsSortAlphaDownAlt,
  BsSortAlphaUpAlt,
  BsSortNumericDown,
  BsSortNumericUp,
} from "react-icons/bs";
import styles from "./Admin.module.css";
import Plot from "react-plotly.js";
import {
  Box,
  Button,
  Center,
  Icon,
  Image,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { GrUserAdmin } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  categoryList,
  getTitleDesp,
  categoryListCount,
} from "./Admin.utits.js";
import { useState } from "react";
import axios from "axios";
import { AddPatch } from "../Components/AddPatch";
import { DownloadIcon, SearchIcon } from "@chakra-ui/icons";
import { EditPage } from "../Components/EditPage";
import { Link } from "react-router-dom";
import { Orderpage } from "./Orderpage";
let api="https://dreambaths.onrender.com/products"

export const Admin = () => {
  const [rawData, setRawData] = useState({});
  const [selectedCat, setSelectedCat] = useState("");
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const dashRef = useRef();
  const categoryRef = useRef();
  const productRef = useRef();
  const producteditRef = useRef();
  const productorderRef = useRef();
  let [Productcount, setproductcount] = useState(0);
  const visibleDash = () => {
    dashRef.current.style.display = "block";
    categoryRef.current.style.display = "none";
    productRef.current.style.display = "none";
    producteditRef.current.style.display = "none";
    productorderRef.current.style.display = "none";
  };
  const visibleCategory = () => {
    dashRef.current.style.display = "none";
    categoryRef.current.style.display = "block";
    productRef.current.style.display = "none";
    producteditRef.current.style.display = "none";
    productorderRef.current.style.display = "none";
  };
  const visibleProduct = () => {
    dashRef.current.style.display = "none";
    categoryRef.current.style.display = "none";
    productRef.current.style.display = "block";
    producteditRef.current.style.display = "none";
    productorderRef.current.style.display = "none";
  };
  const visibleeditProduct = () => {
    dashRef.current.style.display = "none";
    categoryRef.current.style.display = "none";
    productRef.current.style.display = "none";
    producteditRef.current.style.display = "block";
    productorderRef.current.style.display = "none";
  };
  const visibleOrder = () => {
    dashRef.current.style.display = "none";
    categoryRef.current.style.display = "none";
    productRef.current.style.display = "none";
    producteditRef.current.style.display = "none";
    productorderRef.current.style.display = "block";
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
  useEffect(() => {
    axios
      .get("${api}")
      .then((r) => setproductcount(r.data.length));
  }, [Productcount]);

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbarleft}>
          <br />
          <img className={styles.logo} src="/Image/logo.png" alt="logo" />
          <br />
        </div>
        <div className={styles.topbarright}>
          <div>
            <Heading fontWeight="normal">Overview</Heading>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              paddingRight: "20px",
            }}
          >
            <Input
              variant="filled"
              placeholder="Product Search"
              w="100%"
              textAlign="center"
              focusBorderColor="white"
            />
            <SearchIcon fontSize="2xl" variant="filled" />
          </div>
          <div>
            <Icon fontSize="4xl" as={IoNotificationsOutline} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon fontSize="4xl" as={FiSettings} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">
              <Icon fontSize="4xl" as={GrUserAdmin} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.sideMenuAdmin}>
          <Text>
            <br />
            <Box bg="white" borderRadius={10} p={2} display="flex" gap={3}>
              <Box>
                <Image
                  borderRadius="full"
                  boxSize="60px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Box>
              <Center>
                <Box>
                  <Text fontSize="lg" fontWeight="bold">
                    Dan Abramov
                  </Text>
                  <Text>Sales manager</Text>
                </Box>
              </Center>
            </Box>
          </Text>
          <Text display="flex" alignItems="center" textAlign="left">
            E-Commerce
            <BsArrowDown />
          </Text>
          <Text onClick={visibleDash}>
            <Button
              w="100%"
              p={7}
              borderRadius="13px"
              fontSize="2xl"
              fontWeight="bold"
              colorScheme="blue"
            >
              Dashboard
            </Button>
          </Text>
          <br />
          <Text onClick={visibleCategory}>
            <Button
              w="100%"
              p={7}
              borderRadius="13px"
              fontSize="2xl"
              fontWeight="bold"
              colorScheme="blue"
            >
              Category
            </Button>
          </Text>
          <Text display="flex" alignItems="center" textAlign="left">
            Products
            <BsArrowDown />
          </Text>
          <Text onClick={visibleProduct}>
            <Button
              w="100%"
              p={7}
              borderRadius="13px"
              fontSize="2xl"
              fontWeight="bold"
              colorScheme="blue"
            >
              Add Products
            </Button>
          </Text>
          <br />
          <Text onClick={visibleeditProduct}>
            <Button
              w="100%"
              p={7}
              borderRadius="13px"
              fontSize="2xl"
              fontWeight="bold"
              colorScheme="blue"
            >
              Edit Products
            </Button>
          </Text>
          <Text display="flex" alignItems="center" textAlign="left">
            Orders
            <BsArrowDown />
          </Text>
          <Text onClick={visibleOrder}>
            <Button
              w="100%"
              p={7}
              borderRadius="13px"
              fontSize="2xl"
              fontWeight="bold"
              colorScheme="blue"
            >
              Orders
            </Button>
          </Text>
        </div>
        <div ref={dashRef} className={styles.mainDash}>
          <Heading textAlign="center">
            <Box
              borderRadius="10px"
              size="lg"
              textAlign="center"
              color="white"
              bg="blue.500"
              pt="10px"
              pb="10px"
            >
              Dashboard
            </Box>
          </Heading>
          <br />
          <div className={styles.dashFlexItem}>
            <div className={`${styles.cardBox} ${styles.colorGreen}`}>
              {/* <img></img> */}
              <Text className={styles.cardTitle}>Total Products</Text>
              <Text>{Productcount}</Text>
            </div>
            <div className={`${styles.cardBox} ${styles.colorBlue}`}>
              {/* <img></img> */}
              <Text className={styles.cardTitle}>Weekly Sells</Text>
              <Text>₹ 19268</Text>
            </div>
            <div className={`${styles.cardBox} ${styles.colorPink}`}>
              {/* <img></img> */}
              <Text className={styles.cardTitle}>Weekly order Count</Text>
              <Text>150</Text>
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
                layout={
                  isLargerThan1024
                    ? {
                        width: 600,
                        height: 320,
                        title: "Category Counts",
                      }
                    : {
                        width: 400,
                        height: 280,
                        title: "Category Counts",
                      }
                }
              />
            </div>
            <div>
              <Plot
                data={[
                  {
                    values: [32, 40, 28],
                    labels: ["local", "National", "International"],
                    type: "pie",
                  },
                ]}
                layout={
                  isLargerThan1024
                    ? {
                        width: 400,
                        height: 400,
                        title: "Visitors from",
                      }
                    : {
                        width: 300,
                        height: 300,
                        title: "Visitors from",
                      }
                }
              />
            </div>
          </div>
        </div>
        <div ref={categoryRef} className={styles.mainDash}>
          <Heading size="lg">
            <Box
              borderRadius="10px"
              size="lg"
              textAlign="center"
              color="white"
              bg="blue.500"
              pt="10px"
              pb="10px"
            >
              Category
            </Box>
          </Heading>
          <br />
          <div className={styles.categoryBox}>
            {categoryList &&
              categoryList.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`${styles.categoryCard} ${styles[pickColor()]}`}
                  >
                    <Text
                      onClick={(e) => {
                        showData(e);
                      }}
                    >
                      {e}
                    </Text>
                  </div>
                );
              })}
          </div>
          <div className={styles.showSubCat}>
            <Heading size="md">{selectedCat}</Heading>
            <br />
            <TableContainer>
              <Table variant="striped" size="md">
                <Thead>
                  <Tr>
                    <Th fontSize="2xl">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Text>Sub-Category</Text>&nbsp;&nbsp;
                        <BsSortAlphaUpAlt
                          onClick={() => {
                            ascSortCat();
                          }}
                        />
                        &nbsp;&nbsp;
                        <BsSortAlphaDownAlt
                          onClick={() => {
                            descSortCat();
                          }}
                        />
                      </div>
                    </Th>
                    <Th fontSize="2xl">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <BsSortNumericUp
                          onClick={() => {
                            ascSortProd();
                          }}
                        />
                        <BsSortNumericDown
                          onClick={() => {
                            descSortProd();
                          }}
                        />
                      </div>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
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
            </TableContainer>
          </div>
        </div>
        <div ref={productRef} className={styles.mainDash}>
          <Heading size="lg">
            <Box
              borderRadius="10px"
              size="lg"
              textAlign="center"
              color="white"
              bg="blue.500"
              pt="10px"
              pb="10px"
            >
              Add Products
            </Box>
          </Heading>
          <br />
          <div>
            <AddPatch />
          </div>
        </div>
        <div ref={producteditRef} className={styles.mainDash}>
          <Heading size="lg">
            <Box
              borderRadius="10px"
              size="lg"
              textAlign="center"
              color="white"
              bg="blue.500"
              pt="10px"
              pb="10px"
            >
              Add Products
            </Box>
          </Heading>
          <br />
          <div>
            <EditPage />
          </div>
        </div>
        <div ref={productorderRef} className={styles.mainDash}>
          <Heading size="lg">
            <Box
              borderRadius="10px"
              size="lg"
              textAlign="center"
              color="white"
              bg="blue.500"
              pt="10px"
              pb="10px"
            >
              Orders
            </Box>
          </Heading>
          <br />
          <div>
            <Orderpage />
          </div>
        </div>
      </div>
    </>
  );
};

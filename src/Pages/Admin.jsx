import React, { useEffect, useRef } from "react";
import styles from "./Admin.module.css";
import Plot from "react-plotly.js";
import { Heading } from "@chakra-ui/react";
export const Admin = () => {
  const getData = () => {
    let db = [];
    let n = db.length;
    let category = new Set();
    for (let i = 0; i < n; i++) {
      category.add(db[i].category);
    }
    console.log(category);
  };
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
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.sideMenuAdmin}>
        <p onClick={visibleDash}>Dashboard</p>
        <p onClick={visibleCategory}>Category</p>
        <p onClick={visibleProduct}>Products</p>
      </div>
      <div ref={dashRef} className={styles.mainDash}>
        <Heading as="h4" size="lg" style={{ textDecoration: "underline" }}>
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
            <p className={styles.cardTitle}>Weekly Visitors Count</p>
            <p>1150</p>
          </div>
        </div>

        <div className={styles.datacharts}>
          <div>
            <Plot
              data={[
                {
                  x: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"],
                  y: [72, 20, 40, 40, 50, 55, 65, 60],
                  type: "bar",
                  mode: "line+markers",
                  maker: { color: "green" },
                },
              ]}
              layout={{ width: 600, height: 320, title: "Sales" }}
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
        <Heading as="h4" size="lg" style={{ textDecoration: "underline" }}>
          Category
        </Heading>
        <br />
      </div>
      <div ref={productRef} className={styles.mainDash}>
        <Heading as="h4" size="lg" style={{ textDecoration: "underline" }}>
          Products
        </Heading>
        <br />
      </div>
    </div>
  );
};

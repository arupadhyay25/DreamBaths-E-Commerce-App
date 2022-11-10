import React from "react";
import styles from "./Admin.module.css";
import Plot from "react-plotly.js"
import bar from "plotly.js/lib/bar";
export const Admin = () => {
  
  return <div className={styles.main}>
      <div className={styles.sideMenuAdmin}>
        <p>Dashboard</p>
        <p>Products</p>
        <p>Category</p>
      </div>
      <div className={styles.mainDash}>
        <div className={styles.dashFlexItem}>
          <div className={`${styles.cardBox} ${styles.colorGreen}`}>
            <img></img>
            <p className={styles.cardTitle}>Weekly Orders</p>
            <p>402</p>
          </div>
          <div className={`${styles.cardBox} ${styles.colorBlue}`}>
            <img></img>
            <p className={styles.cardTitle}>Weekly Sells</p>
            <p>$ 19268</p>
          </div>
          <div className={`${styles.cardBox} ${styles.colorPink}`}>
            <img></img>
            <p className={styles.cardTitle}>Weekly Visitors Count</p>
            <p>1150</p>
          </div>
        </div>

        <div className={styles.datacharts}>
          <div>
            <Plot data={[
              { 
                x:['sun','mon','tue','wed','thur','fri','sat'],
                y:[72, 20, 40, 40, 50,55, 65, 60],
                type:'bar',
                mode: 'line+markers',
                maker:{color:'green'}
              }
            ]}
            layout={{width:600,height:320,title:"Sales"}}
             />
          </div>
          <div>
            <Plot data={[
              {
                values:[32,40,28],
                labels:['local','National','International'],
                type:'pie'
              }
            ]}
            layout={{width:400,height:400,title:"Visitors from"}}
             />
          </div>
        </div>
      </div>
  </div>;
};

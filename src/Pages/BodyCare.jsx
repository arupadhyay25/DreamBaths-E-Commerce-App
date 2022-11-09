import React, { useEffect, useState } from "react";
import "./BodyCare.css";
import { Singleproduct } from "../Components/Singleproduct";
import axios from "axios";

export const BodyCare = () => {
  let [state, setstate] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((r)=>setstate(r.data))
  }, []);

  return (
    <div>
      Body_care
      <div className="bodycare-products">
        {state
          .filter((e) => Number(e.price))
          .map((e, i) => (
            <Singleproduct
              key={i}
              title={e.title}
              titledesp={e.titledesp}
              category={e.category}
              price={e.price}
              image={e.image}
            />
          ))}
      </div>
    </div>
  );
};

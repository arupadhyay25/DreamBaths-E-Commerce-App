import React, { useEffect, useState } from "react";
import "./BodyCare.css";
import { Singleproduct } from "../Components/Singleproduct";
import axios from "axios";

export const BodyCare = () => {
  let [state, setstate] = useState([]);
  let [order, setorder] = useState("");
  let [page, setpage] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/products`).then((r) => setstate(r.data));
  }, [page, order]);

  return (
    <div>
      Body_care
      <br />
      <button onClick={() => setpage(1)}>1</button>
      <button onClick={() => setpage(2)}>2</button>
      <button onClick={() => setpage(3)}>3</button>
      <br />
      <div className="bodycare-products">
        {state
          .filter((e) => e.category === "mensshop")
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

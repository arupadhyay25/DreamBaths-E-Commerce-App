import { StarIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterSort = ({ val1, val2, val3, val4 }) => {
  const ascSortRef =useRef();
  const descSortRef =useRef();
  const cat1Ref = useRef();
  const cat2Ref = useRef();
  const cat3Ref = useRef();
  const cat4Ref = useRef();
  const rating1Ref = useRef();
  const rating2Ref = useRef();
  const rating3Ref = useRef();
  const rating4Ref = useRef();
  const rating5Ref = useRef();
  let [searchParams, setSearchParams] = useSearchParams();
  let [category, setcategory] = useState(
    searchParams.getAll("titledesp") || []
  );
  let [rating, setrating] = useState(searchParams.getAll("rating") || []);
  let [sort, setsort] = useState(searchParams.getAll("_sort") || []);
  let [order, setorder] = useState(searchParams.getAll("_order") || []);

  let handleFilter = (e) => {
    let option = e.target.value;
    let newcategory = [...category];
    if (newcategory.includes(option)) {
      newcategory.splice(newcategory.indexOf(option), 1);
    } else {
      newcategory.push(option);
    }
    setcategory(newcategory);
  };
  let handlesort = (e) => {
    let option = e.target.value;
    if(option==='asc'){descSortRef.current.checked=false}
    if(option==='desc'){ascSortRef.current.checked=false}
    let neworder = [option];
    let newsort = ["price"];
    if (order.includes(option)) {
      setorder([]);
      setsort([]);
    } else {
      setorder(neworder);
      setsort(newsort);
    }
  };
  let handlerating = (e) => {
    let option = e.target.value;
    let newrating = [...rating];
    if (newrating.includes(option)) {
      newrating.splice(newrating.indexOf(option), 1);
    } else {
      newrating.push(option);
    }
    setrating(newrating);
  };
  let handlereset = () => {
    cat1Ref.current.checked=false;
    cat2Ref.current.checked=false;
    cat3Ref.current.checked=false;
    cat4Ref.current.checked=false;
    setcategory([]);
    rating1Ref.current.checked=false;
    rating2Ref.current.checked=false;
    rating3Ref.current.checked=false;
    rating4Ref.current.checked=false;
    rating5Ref.current.checked=false;
    setrating([]);
    ascSortRef.current.checked=false;
    descSortRef.current.checked=false;
    setorder([]);
    setsort([]);
    if(searchParams.has('_sort')){

      searchParams.delete('_sort');
      setSearchParams(searchParams);
    }
    if(searchParams.has('titledesp')){

      searchParams.delete('titledesp');
      setSearchParams(searchParams);
    }
    if(searchParams.has('_order')){

      searchParams.delete('_order');
      setSearchParams(searchParams);
    }
    if(searchParams.has('rating')){

      searchParams.delete('rating');
      setSearchParams(searchParams);
    }
    // setSearchParams(searchParams);
  };

  useEffect(() => {
    let params = {};
    category && (params.titledesp = category);
    rating && (params.rating = rating);
    order && (params._sort = sort) && (params._order = order);
    setSearchParams(params);
  }, [rating, order, category,sort, setSearchParams]);

  return (
    <>
      <div className="Product-left-div-header">
        <Text fontSize="2xl">Filters</Text>
        <Text onClick={handlereset} id="filter-reset" as="u" color="blue">
          ClearAll
        </Text>
      </div>
      <br />
      {/* sort by price */}
      <div className="sort-by" >
        <label>Sort by Price</label>
        <br />
        <span>
          <input
            ref={ascSortRef}
            type="checkbox"
            value="asc"
            onChange={handlesort}
            defaultChecked={order.includes("asc")}
          />
          &nbsp;&nbsp;
          <label>Low to High</label>
        </span>
        <br />
        <span>
          <input
            ref={descSortRef}
            type="checkbox"
            value="desc"
            onChange={handlesort}
            defaultChecked={order.includes("desc")}
          />
          &nbsp;&nbsp;
          <label>High to Low</label>
        </span>
      </div>
      <br />
      {/* sort by category */}
      <div className="sort-by" >
        <label>Sort by Category</label>
        <br />
        <span>
          <input
          ref={cat1Ref}
            type="checkbox"
            value={val1}
            onChange={handleFilter}
            defaultChecked={category.includes({ val1 })}
          />
          &nbsp;&nbsp;
          <label>{val1}</label>
        </span>
        <br />
        <span>
          <input
          ref={cat2Ref}
            type="checkbox"
            value={val2}
            onChange={handleFilter}
            defaultChecked={category.includes({ val2 })}
          />
          &nbsp;&nbsp;
          <label>{val2}</label>
        </span>
        <br />
        <span>
          <input
          ref={cat3Ref}
            type="checkbox"
            value={val3}
            onChange={handleFilter}
            defaultChecked={category.includes({ val3 })}
          />
          &nbsp;&nbsp;
          <label>{val3}</label>
        </span>
        <br />
        <span>
          <input
          ref={cat4Ref}
            type="checkbox"
            value={val4}
            onChange={handleFilter}
            defaultChecked={category.includes(val4)}
          />
          &nbsp;&nbsp;
          <label>{val4}</label>
        </span>
        <br />
      </div>
      <br />
      {/* sort by rating */}
      <div className="sort-by">
        <label>Sort by Rating</label>
        <br />
        <div>
          <div>
            <input
            ref={rating5Ref}
              type="checkbox"
              value={5}
              onChange={handlerating}
              defaultChecked={rating.includes(5)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        <div>
          <div>
            <input
            ref={rating4Ref}
              type="checkbox"
              value={4}
              onChange={handlerating}
              defaultChecked={rating.includes(4)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div>
            <input
            ref={rating3Ref}
              type="checkbox"
              value={3}
              onChange={handlerating}
              defaultChecked={rating.includes(3)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div>
            <input
            ref={rating2Ref}
              type="checkbox"
              value={2}
              onChange={handlerating}
              defaultChecked={rating.includes(2)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 2 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div>
            <input
            ref={rating1Ref}
              type="checkbox"
              value={1}
              onChange={handlerating}
              defaultChecked={rating.includes(1)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 1 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

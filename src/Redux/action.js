import axios from "axios";

import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actiontypes";

export const getproductrequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};
let params={
  _sort:"price",
  _order:"asc"
}
export let getproductsuccess = (queryparams) => (dispatch) => {
  axios
    .get("http://localhost:8080/products?category=candles", {
      params: queryparams,
    })
    .then((result) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: result.data,
      });
    })
    .catch((err) => {
      dispatch(getproductfailure());
    });
};
export const getproductfailure = () => {
  return {
    type: GET_PRODUCTS_FAILURE,
  };
};

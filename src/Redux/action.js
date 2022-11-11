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
export let getproductsuccess = (data) => (dispatch) => {
  axios
    .get(data[0], {
      params: data[1],
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

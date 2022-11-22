import axios from "axios";

import {
  ADD_PRODUCTS_QUANTITY,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_QUANTITY,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actiontypes";

export const getproductrequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

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
export const addtocart = (id) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/products/${id}`, {
      cartquantity: 1,
    })
    .then(() =>
      dispatch({
        type: ADD_PRODUCTS_QUANTITY,
      })
    );
};
export const addproductquantity = (id, page) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/products/${id}`, {
      cartquantity: page + 1,
    })
    .then(() =>
      dispatch({
        type: ADD_PRODUCTS_QUANTITY,
      })
    );
};
export const subproductquantity = (id, page) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/products/${id}`, {
      cartquantity: page - 1,
    })
    .then(() =>
      dispatch({
        type: ADD_PRODUCTS_QUANTITY,
      })
    );
};
export const resetcartbag = (id) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/products/${id}`, {
      cartquantity: 0,
    })
    .then(() =>
      dispatch({
        type: ADD_PRODUCTS_QUANTITY,
      })
    );
};

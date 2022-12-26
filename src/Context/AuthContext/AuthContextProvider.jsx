import React from "react";
import Reducer from "./reducer";
import { useReducer } from "react";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiurl } from "../../Components/Api";

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state; it goes without saying; you are expected to use useReducer as state management tool; (hint : different actions that you are expected to have can be login - loading, success, failure ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  let dispatcher = { isAuth: false, token: "C4_Eval", loading: false };

  let [state, dispatch] = useReducer(Reducer, dispatcher);
  let navigate = useNavigate();

  const handleLogin = async (username, password) => {
    dispatch(LOGIN_REQUEST());
    axios
      .post(`${apiurl}/users/login`, {
        email: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(LOGIN_SUCCESS(res.data.token));
        if (res.data.role === "user") {
          navigate("/");
        } else {
          navigate("/admin");
        }
      })
      .catch(function (error) {
        dispatch(LOGIN_FAILURE);
        alert("Login Again !!!!");
        navigate("/login");
      });
  };
  return (
    <AuthContext.Provider value={{ handleLogin, state }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

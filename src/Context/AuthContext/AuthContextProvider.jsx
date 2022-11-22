import React from "react";
import Reducer from "./reducer";
import { useReducer } from "react";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state; it goes without saying; you are expected to use useReducer as state management tool; (hint : different actions that you are expected to have can be login - loading, success, failure ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  let dispatcher = { isAuth: false, token: "C4_Eval", loading: false };

  let [state, dispatch] = useReducer(Reducer, dispatcher);
  let navigate =useNavigate()

  const handleLogin = async (username, password) => {
    dispatch(LOGIN_REQUEST());
    axios
      .post("https://reqres.in/api/login", {
        username: "eve.holt@reqres.in",
        password: "123",
      })
      .then(function (response) {
        dispatch(LOGIN_SUCCESS(response.data.token));
        if(username=="masai@user.com"){
          navigate("/")
        }
        else if(username=="masai@admin.com"){
          navigate("/admin")
        }
      })
      .catch(function (error) {
        dispatch(LOGIN_FAILURE);
        // alert(error,"Login Again !!!!");
      });
  };
  return (
    <AuthContext.Provider value={{ handleLogin, state }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
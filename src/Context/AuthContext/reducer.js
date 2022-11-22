let Reducer = (state, action) => {
    switch ((action.type)) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuth: true,
          token: action.payload,
          loading: false,
        };
      case "LOGIN_REQUEST":
        return {
          ...state,
          isAuth: false,
          token: "",
          loading: true,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          isAuth: false,
          token: "",
          loading: false,
        };
    }
  };
  
  export default Reducer
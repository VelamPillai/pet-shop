import { useEffect, useReducer } from "react";

import { StoreContext } from "../context/StoreContext.js";
import { useNavigate } from "react-router-dom";
import { homepageReducer } from "../reducers/homepageReducer.js";
import { loginReducer } from "../reducers/loginReducer.js";


import initialState from "../reducers/initialState.js";
export default function Container(props) {
  //homepageReducer
  const [homepageState, homepageDispatch] = useReducer(homepageReducer, initialState);
   //loginReducer
   const [loginState, loginDispatch] = useReducer(loginReducer, initialState);

  const navigate = useNavigate();

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8000/users/verifyusertoken", {
        method: "GET",
        headers: { token: token },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            homepageDispatch({ type: "setUser", payload: { data: result.data } });

            console.log(homepageState.user);
          } else {
            navigate("/login");
          }
        });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <StoreContext.Provider value={{ homepageState,homepageDispatch ,loginState, loginDispatch,initialState}}>
      {props.children}
    </StoreContext.Provider>
  );
}


import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";


import { StoreContext } from '../context/StoreContext.js';
import { homepageReducer } from '../reducers/homepageReducer.js';
import { productReducer } from '../reducers/productReducer.js';
import { loginReducer } from '../reducers/loginReducer.js';
import { signupReducer } from '../reducers/signupReducer.js';
import { adminReducer } from "../reducers/adminReducer.js";
import initialState from '../reducers/initialState.js';
import adminInitialState from "../reducers/adminInitialState.js";

export default function Container(props) {
  //homepageReducer
  const [homepageState, homepageDispatch] = useReducer(
    homepageReducer,
    initialState
  );
  //loginReducer
  const [loginState, loginDispatch] = useReducer(loginReducer, initialState);
  //signupReducer
  const [signupState, signupDispatch] = useReducer(signupReducer, initialState);
  //productReducer
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );
  //adminReducer
  const [adminState, adminDispatch] = useReducer(adminReducer, adminInitialState);
  const navigate = useNavigate();

  const { user } = homepageState;
  
 
  useEffect(() => {

    fetch("http://localhost:8000/products", {
      method: "GET",

    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          productDispatch({

            type: "setProduct",
            payload: { data: result.data },
          });
        } else {
          console.log("error");
        }
      });

    const token = localStorage.getItem("token");

    if (token) {
      fetch('http://localhost:8000/users/verifyusertoken', {
        method: 'GET',
        headers: { token: token },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            homepageDispatch({
              type: 'setUser',
              payload: { data: result.data },
            });

            //console.log(user);
            
          } else {
            navigate('/login');
          }
        });
    } else {
      navigate('/');
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{
        homepageState,
        homepageDispatch,
        loginState,
        loginDispatch,
        signupState,
        signupDispatch,
        productState,
        productDispatch,
        initialState,
        adminState, adminDispatch
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

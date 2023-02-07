import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { StoreContext } from "../../context/StoreContext.js";

import { TiTick } from "react-icons/ti";
import LoginImage from "../../image/loginImage.png";

export default function Login() {
  const navigate = useNavigate();

  const { homepageDispatch, loginState, loginDispatch, productDispatch } =
    useContext(StoreContext);

  //onSubmit - loginHandler -form element

  const loginHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    loginDispatch({ type: "clearForm" });

    //to avoid empty email and password fields - to avoid token = null
    data.get("email") &&
      data.get("password") &&
      fetch("   /users/login", {
        method: "POST",
        body: data,
      })
        .then((res) => {
          const token = res.headers.get("token");
          //only for valid username and Password , store the token in to the local storage.
          token && localStorage.setItem("token", token);

          return res.json();
        })
        .then((result) => {
          if (result.success) {
            toast.success("Logged in successfully");
            //console.log(result.data);
            //user
            homepageDispatch({
              type: "setUser",
              payload: { data: result.data },
            });
            //favorite product from database
            productDispatch({
              type: "setFavoriteProduct",
              payload: { data: result.data.favoriteProduct },
            });
            setTimeout(() => navigate("/"), 2000);
          } else {
            toast.error(result.message);
          }
        });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center flex-col xl:flex-row w-[100%]  lg:border m-auto lg:m-1 rounded shadow-black shadow-xs ">
      <Toaster />
      <img
        src={LoginImage}
        alt="login-pic"
        className="rounded  drop-shadow-xl   lg:w-[500px] lg:h-[500px] lg:ml-[6rem] "
      />

      <div className="flex flex-col justify-center items-center border lg:border-0 w-[100%]  p-[1rem] mb-[1rem] md:p-[1rem] lg:h-[550px] ">
        <p className="m-[.25rem]  font-bold text-center ">LOGIN</p>
        <form
          onSubmit={loginHandler}
          className=" flex flex-col justify-center items-center w-[100%]"
        >
          <label className="flex flex-col justify-center item-center  text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            Email:{" "}
            <input
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              type="email"
              name="email"
              onChange={(e) =>
                loginDispatch({
                  type: "onChange",

                  payload: { name: e.target.name, data: e.target.value },
                })
              }
              value={loginState.email}
            />
          </label>

          <label className="flex flex-col justify-center  text-xs md:text-md item-center md:items-start m-[.25rem] md:m-[1rem]">
            Password:{" "}
            <div
              className="flex-col
            "
            >
              <input
                className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
                type="password"
                name="password"
                onChange={(e) =>
                  loginDispatch({
                    type: "onChange",

                    payload: { name: e.target.name, data: e.target.value },
                  })
                }
                value={loginState.password}
              />
            </div>
          </label>
          <div className="flex  flex-wrap md:flex-nowrap  align-start pl-2 md:pl-0  ">
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>{" "}
              Mind. 8 Characters
            </div>
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              {" "}
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>{" "}
              AaBbCc
            </div>
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>{" "}
              0-9
            </div>{" "}
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              {" "}
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>
              !@#$%
            </div>
          </div>
          <button className="bg-orange-500 justify-center items-center w-[100px] md:w-[400px]  my-3 text-xs md:text-mdmd:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">
            LOG IN
          </button>
          <div className="mt-[2rem]   flex  flex-col lg:flex-row justify-center items-center">
            <p className="  md:p-1 text-xs "> Don't have an account? </p>
            <button
              onClick={signUpHandler}
              className=" text-red-500 font-bold text-xs md:text-md w-[100px] md:w-[200px] my-3 md:mx-auto md:my-[1rem] md:p-3  "
            >
              {" "}
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

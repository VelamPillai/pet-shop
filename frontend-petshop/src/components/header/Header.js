import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Logo from "../../image/icon-new.png";
import Logout from "../user/Logout";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import Navbar from "../navbar/Navbar";

export default function Header() {
  const { homepageState } = useContext(StoreContext);

  const { user } = homepageState;
  const navigate = useNavigate();
  const homePageHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col  sm:justify-between items-center   sm:shadow   sm:m-1  z-50 w-[100vw] fixed top-0 bg-white ">
      <div
        onClick={homePageHandler}
        className=" font-bold  flex  sm:hidden justify-center items-center"
      >
        <img src={Logo} alt="header-icon" className=" w-[200px] " />
        {/*  <p className="text-xl">Pet Store </p> */}
      </div>
      <div className="flex justify-between items-center  sm:px-[5rem]  sm:w-[100%] relative ">
        <div className=" hidden lg:flex z-10">
          <HeaderSearch />
        </div>

        <div
          onClick={homePageHandler}
          className=" sm:text-4xl font-bold   sm:p-3  hidden  sm:flex  justify-center items-center"
        >
          <img src={Logo} alt="header-icon" className=" w-[300px] " />
          {/*   <p className="">Pet Store </p> */}
        </div>
        <div className="block  sm:hidden  ">
          <Navbar />
        </div>
        {user && <Logout />}

        <HeaderMenu />
      </div>

      <div className=" block lg:hidden ">
        <HeaderSearch />
      </div>
      <div className="hidden  sm:block">
        <Navbar />
      </div>
    </div>
  );
}

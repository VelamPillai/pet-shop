import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Logo from "../../image/header-icon.png";
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
    <div className="flex flex-col md:justify-between items-center  md:shadow  md:mb-3  z-50 w-[100vw] fixed top-0 bg-white ">
      <div
        onClick={homePageHandler}
        className=" font-bold  flex md:hidden justify-center items-center"
      >
        <img src={Logo} alt="header-icon" className=" w-20 mr-2" />
        <p className="text-2xl">Pet Store </p>
      </div>
      <div className="flex justify-between items-center md:px-[5rem] md:w-[100%] relative ">
        <div className=" hidden lg:flex z-10">
          <HeaderSearch />
        </div>

        <div
          onClick={homePageHandler}
          className="md:text-4xl font-bold  md:p-3  hidden md:flex  justify-center items-center"
        >
          <img src={Logo} alt="header-icon" className=" w-20 mr-2" />
          <p className="">Pet Store </p>
        </div>
        <div className="block md:hidden  ">
          <Navbar />
        </div>
        {user && <Logout />}

        <HeaderMenu />
      </div>

      <div className=" block lg:hidden ">
        <HeaderSearch />
      </div>
      <div className="hidden md:block">
        <Navbar />
      </div>
    </div>
  );
}

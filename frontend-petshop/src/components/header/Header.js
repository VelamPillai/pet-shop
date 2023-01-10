import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Logo from "../../image/header-icon.png";
import Logout from "../user/Logout";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  const { homepageState} = useContext(StoreContext);

  const { user } = homepageState;
  const navigate = useNavigate();
  const homePageHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-around items-center pt-[3rem]">
      <HeaderSearch />
      <div onClick={homePageHandler} className="text-4xl font-bold flex p-3 ">
        <img src={Logo} alt="header-icon" className="w-12 mr-2" />
        <p className="">Pet Store </p>
      </div>
      {user && <Logout />}
      <HeaderMenu />
    </div>
  );
}

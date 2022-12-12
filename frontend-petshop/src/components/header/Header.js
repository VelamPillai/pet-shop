import React from "react";
import Logo from "../../image/header-icon.png";

import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <div className="flex justify-around items-center">
      <HeaderSearch />
      <div className="text-4xl font-bold flex p-3 justify-around items-center ">
        <img src={Logo} alt="header-icon" className="w-12 mr-2" />

        <p className="">Pet Store</p>
      </div>
      <HeaderMenu />
    </div>
  );
}

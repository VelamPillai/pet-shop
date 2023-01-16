import { NavLink, Outlet } from "react-router-dom";
import React, { useState } from "react";

import { FaAngleDoubleDown, FaAngleDoubleUp , FaCartPlus } from "react-icons/fa";




const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => setNav(!nav);

  return (
    <div className=" sticky top-0 w-full h-[100px]  md:h-[150px] flex  justify-between items-center p-[2rem]   md:text-xl z-10 text-orange-500 md:shadow-xl">
      
      {/* menu */}

      <ul className="hidden md:flex  md:justify-between md:items-center md:p-3">
        <li>
          <NavLink to="/dogs" className=" navHover my-2 border-box lg:p-[3rem] md:p-[1rem]">
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/cats" className=" navHover my-2 border-box lg:p-[3rem] md:p-[1rem]">
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/brands" className=" navHover my-2 border-box lg:p-[3rem] md:p-[1rem]">
            Brands
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className=" navHover my-2 border-box lg:p-[3rem] md:p-[1rem]">
            Blogs
          </NavLink>
              </li>
              <li>
          <NavLink to="/specialOffers" className=" navHover my-2 border-box lg:p-[3rem] md:p-[.5rem] text-green-800 animate-ping">
          Sale %
          </NavLink>
        </li>
      </ul>
      {/* hamburger */}
      <div
        className="  md:hidden text-lg text-orange-500 border-green-800 hover:text-green-800 hover:border-orange-500 border-solid border-4 z-10 relative "
        onClick={handleNavClick}
      >
        {nav ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden "
            : "absolute top-[70px]  right-[-80px] h-[100vh]  bg-orange-200 flex flex-col justify-center items-center md:hidden p-[1rem]"
        }
      >
        <li className="py-6 text-xl">
          <NavLink
            to="/dogs"
            className=" navHover my-3 border-box p-1"
            onClick={handleNavClick}
          >
            Dogs
          </NavLink>
        </li>
        <li className="py-6 text-xl">
          <NavLink
            to="/cats"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick}
          >
            Cats
          </NavLink>
        </li>
        <li className="py-6 text-xl">
          <NavLink
            to="/brands"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick}
          >
            Brands
          </NavLink>
        </li>
        <li className="py-6 text-xl">
          <NavLink
            to="/blogs"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick}
          >
            Blogs
          </NavLink>
              </li>
              <li className="py-6 text-xl">
          <NavLink
            to="sale"
            className=" navHover my-2 border-box p-1 text-green-800 animate-ping"
            onClick={handleNavClick}
          >
           Sale %
          </NavLink>
              </li>
              <li className="py-6 text-xl">
          <NavLink
            to="cart"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick}
          >
           <div className="flex justify-center items-center  border border-orange-500  text-4xl rounded">
        <FaCartPlus className="mr-3  p-2  hover:cursor-pointer" />
        <p className="text-lg p-2  border-l hover:cursor-pointer border-orange-500 ">
          $0.00
        </p>
      </div>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;

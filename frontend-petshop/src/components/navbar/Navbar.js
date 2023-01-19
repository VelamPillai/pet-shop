
import React, { useState,useContext } from 'react';
import {  NavLink, Outlet } from "react-router-dom";


import { FaAngleDoubleDown, FaAngleDoubleUp, FaCartPlus } from "react-icons/fa";

import { StoreContext } from '../../context/StoreContext.js';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  //to show and hide the mobile menu after selection of menu item
  const handleNavClick = () => setNav(!nav);


  const { productDispatch} =
    useContext(StoreContext);
  
  
  
  //to set the petName to filter the products from the DB
  const handleMenuClick = (e) => {
    productDispatch({
      type: "setMenuName",
      payload: { data: e.target.textContent.toLowerCase() },
    });
    
  }
  
  return (
    <div className=" md:sticky w-full md:h-[150px] flex  justify-between items-center   md:text-xl  text-orange-500 ">
      
      {/* menu */}

      <ul className="hidden md:flex  md:justify-between md:items-center md:p-2 ">
        <li >
          <NavLink to="/petMainPage" onClick={ handleMenuClick} className=" md:leading-7     lg:p-[2rem] md:p-[1rem]  md:hover:underline " >
            Dog 
          </NavLink> 
          
        </li>
        <li>
          <NavLink to="/petMainPage"  onClick={ handleMenuClick} className=" md:leading-7 md:hover:underline border-black/6 my-2 border-box lg:p-[3rem] md:p-[1rem]">
            Cat
          </NavLink>
        </li>
        <li>
          <NavLink to="/petMainPage"  onClick={ handleMenuClick} className=" md:leading-7 md:hover:underline border-black/6 my-2 border-box lg:p-[3rem] md:p-[1rem]">
            Brand
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs"  onClick={ handleMenuClick}className=" md:leading-7 md:hover:underline border-black/6 my-2 border-box lg:p-[3rem] md:p-[1rem]">
            Blogs
          </NavLink>
              </li>
              <li>
          <NavLink to="/petMainPage" onClick={ handleMenuClick} className=" md:leading-7 md:hover:underline border-black/6 my-2 border-box lg:p-[3rem] md:p-[.5rem] text-green-800 animate-ping hover:animate-none">
          Sale %
          </NavLink>
        </li>
      </ul>
      {/* hamburger */}
      <div
        className="  md:hidden text-4xl text-orange-500 border-green-800 hover:text-green-800 hover:border-orange-500 border-solid border-2    ml-[1rem] z-10 rounded w-[100%]"
        onClick={handleNavClick}
      >
        {nav ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden "
            : "  z-20 w-[90vw]  absolute left-[-5rem]  top-[100px] mb-3 bg-orange-200 flex flex-col justify-center items-center md:hidden p-[1rem] "
        } 
      >
        <li className="py-6 text-xl ">
          <NavLink
            to="/dogs"
            className=" navHover my-3 border-box p-1 "
            onClick={handleNavClick}
          >
            Dogs
          </NavLink>
        </li>
        <hr />
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

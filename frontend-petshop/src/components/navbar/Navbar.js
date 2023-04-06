
import React, { useState,useContext } from 'react';
import {   NavLink } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";


import toast from 'react-hot-toast';

import { FaAngleDoubleDown, FaAngleDoubleUp, FaCartPlus } from "react-icons/fa";

import { StoreContext } from '../../context/StoreContext.js';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  

  //to show and hide the mobile menu after selection of menu item
  const handleNavClick = (e) =>  {
    handleMenuClick(e)
    setNav(!nav);
   
  }
  const { productDispatch,productState,homepageState} =
    useContext(StoreContext);
  
  const { product ,favoriteProduct,cart } = productState;
  const { user } = homepageState;
  
   //hideFavoriteModalHandler -
   const hideModalHandler = (e) => {
     productDispatch({ type: "setShowHideFavoriteBtn" })
    
  }; 
  //hideCartModalHandler
  const hideCartModalHandler = (e) => {
    productDispatch({type:"setShowHideCartBtn"})
};
  //to set the petName to filter the products from the DB
  const handleMenuClick = (e) => {
    
    productDispatch({
      type: "setMenuName",
      payload: { data: e.target.textContent.toLowerCase() },
    });
    
  }
  const handleMenuBrandClick = (e) => {
    productDispatch({
      type: "setMenuName",
      payload: { data: e.target.textContent.toLowerCase() },
    });
    productDispatch({
      type: "setBrand",
      payload: { data: [...new Set([...product].map(item=>item.brand))]},
    });
    setNav(!nav);    
  }

  
  
  return (
    <div className=" md:sticky w-[100%] md:w-[100vw] md:shadow-lg  md:h-[50px] flex  justify-center items-center font-bold  md:text-xs text-orange-500   ">
      
      {/* menu */}

      <ul className="hidden md:flex  md:justify-between md:items-center md:p-2  ">
        {user.role==='admin' &&  <li >
          <NavLink to="/admin" onClick={handleMenuClick} className=" md:leading-7     lg:p-[2rem] md:p-[1rem]  md:hover:underline " >
            Admin
          </NavLink> 
          
        </li>}
     
        <li >
          <NavLink to="/petMainPage" onClick={ handleMenuClick} className=" md:leading-7     lg:p-[2rem] md:p-[1rem]  md:hover:underline  md:focus:text-green-600" >
            Dog 
          </NavLink> 
          
        </li>
        <li>
          <NavLink to="/petMainPage"  onClick={ handleMenuClick} className=" md:leading-7 md:hover:underline border-black/6 my-2 border-box lg:p-[2rem] md:p-[1rem] md:focus:text-green-600">
            Cat
          </NavLink>
        </li>
        <li>
          <NavLink to="/brand"  onClick={ handleMenuBrandClick } className=" md:leading-7 md:hover:underline border-black/6 my-2 border-box lg:p-[2rem] md:p-[1rem] md:focus:text-green-600">
            Brand
          </NavLink>
        </li>
        
              <li>
          <NavLink to="/petMainPage" onClick={ handleMenuClick} className=" md:leading-7 md:hover:underline border-black/6 my-2 border-box lg:p-[3rem] md:p-[.5rem] text-green-800 animate-ping hover:animate-none md:focus:text-orange-600 focus:animate-none">
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
            : "  z-20 w-[100vw]  absolute left-[-5rem]  top-[100px] mb-3 bg-orange-200 flex flex-col justify-center items-center md:hidden p-[1rem] "
        } 
      >
      {user.role==='admin' &&  <li className="py-1 text-xl ">
          <NavLink
            to="/admin"
            className=" navHover my-3 border-box p-1 "
            onClick={handleNavClick} 
          >
            Admin
          </NavLink>
        </li>}
       
        <li className="py-1 text-xl ">
          <NavLink
            to="/petMainPage"
            className=" navHover my-3 border-box p-1 "
            onClick={handleNavClick} 
          >
            Dog
          </NavLink>
        </li>
        <hr />
        <li className="py-1 text-xl">
          <NavLink
            to="/petMainPage"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick} 
          >
            Cat
          </NavLink>
        </li>
        <li className="py-1 text-xl">
          <NavLink
            to="/brand"
            className=" navHover my-2 border-box p-1"
            onClick={handleMenuBrandClick} >
            Brand
          </NavLink>
        </li>
        
              <li className="py-1 text-xl">
          <NavLink
            to="/petMainPage"
            className=" navHover my-2 border-box p-1 text-green-800 animate-ping"
            onClick={handleNavClick} 
          >
           Sale %
          </NavLink>
              </li>
              <li className="py-1 text-xl">
          <NavLink
            to="cart"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick} 
          >
           <div className="flex justify-center items-center  border border-orange-500  text-4xl rounded">
           {user && <div className=" border-r border-orange-500 p-1 relative">
          {
          favoriteProduct.length ?
          <p  >
                <BsHeartFill  onClick={hideModalHandler } className="  p-2  text-orange-600  hover:cursor-pointer " /><span className="absolute text-sm top-0 right-0 text-orange-600  p-1">{favoriteProduct.length}</span></p> : <p>
          <BsHeart  className="  p-2   hover:cursor-pointer " onClick={()=> toast.error('Please click Heart to add favorite products')} /></p>
        }
            </div> }
      {/*   <FaCartPlus className="  p-2  hover:cursor-pointer" /> 
      */}
              {cart && <div className=" border-r border-orange-500 p-1 relative">
                {cart.length ?
                  <p ><FaCartPlus onClick={hideCartModalHandler} className="  p-2  text-orange-600  hover:cursor-pointer " /><span className="absolute text-sm top-0 right-0 text-orange-600  p-1">{cart.length}</span></p> :
                  <FaCartPlus onClick={() => toast.error('Please add Product to cart to show the cart products')} className="  p-2   hover:cursor-pointer " />
        
                }
              </div>
              }
      </div>
          </NavLink>
        </li>
      </ul>
      {/* <Outlet /> */}
    </div>
  );
};

export default Navbar;

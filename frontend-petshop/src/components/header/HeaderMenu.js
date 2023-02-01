import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaCartPlus } from "react-icons/fa";
import {BsHeart,BsHeartFill } from "react-icons/bs";
import { StoreContext } from "../../context/StoreContext";

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { homepageState,productState } = useContext(StoreContext);

  const { user } = homepageState;
  const {favoriteProduct} = productState;

  const navigateToUser = () => {    
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex text-3xl  ">
      {user ? null : (
        <FaUserCircle
          className=" mx-2 md:mx-4 text-5xl md:border md:text-6xl border-orange-500 rounded p-2 hover:cursor-pointer text-orange-500 hover:text-green-800 mb-3 md:mb-0"
          onClick={navigateToUser}
        />
      )}

      <div className="md:flex justify-center items-center  border border-orange-500  text-4xl hidden  rounded">
        {user && <div className=" border-r border-orange-500 p-1 relative">
          {
          favoriteProduct.length ?
          <p>
          <BsHeartFill  className="  p-2  text-orange-600  hover:cursor-pointer " /><span className="absolute text-sm top-0 right-0 text-orange-600  p-1">{favoriteProduct.length}</span></p> : <p>
          <BsHeart  className="  p-2   hover:cursor-pointer " /></p>
        }
            </div> }
        <FaCartPlus className="  p-2  hover:cursor-pointer " />
        

      </div>
    </div>
  );
}

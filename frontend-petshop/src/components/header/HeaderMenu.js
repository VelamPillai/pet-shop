import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaCartPlus } from "react-icons/fa";
import {BsHeart,BsHeartFill } from "react-icons/bs";
import { StoreContext } from "../../context/StoreContext";
import FavoriteModal from "../modal/FavoriteModal";
import toast, { Toaster } from 'react-hot-toast';

export default function HeaderMenu() {
  
  const navigate = useNavigate();
  const { homepageState,productState,productDispatch } = useContext(StoreContext);

  const { user } = homepageState;
  const {favoriteProduct ,showHideFavoriteBtn} = productState;

  const navigateToUser = () => {    
    navigate("/login", { replace: true });
  };
  
  //hideModalHandler -
  const hideModalHandler = (e) => {
    productDispatch({type:"setShowHideFavoriteBtn"})
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
          <p  >
                <BsHeartFill  onClick={hideModalHandler } className="  p-2  text-orange-600  hover:cursor-pointer " /><span className="absolute text-sm top-0 right-0 text-orange-600  p-1">{favoriteProduct.length}</span></p> : <p>
          <BsHeart  className="  p-2   hover:cursor-pointer " onClick={()=> toast.error('Please click Heart to add favorite products')} /></p>
        }
            </div> }
        <FaCartPlus className="  p-2  hover:cursor-pointer " />
        
        
      </div>
     <div className={`${showHideFavoriteBtn ? 'visible' : 'invisible'}`} > <FavoriteModal /> </div>
     
    </div>
  );
}

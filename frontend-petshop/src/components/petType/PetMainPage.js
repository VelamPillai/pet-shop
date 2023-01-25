import React, { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sort from "./Sort";
import PetMenu from "./PetMenu.js";
import SideMenu from "./SideMenu.js";
import ProductCard from "./ProductCard.js";


import { StoreContext } from "../../context/StoreContext.js";

export default function PetMainPage() {
 

  const [viewBtn, setViewBtn] = useState(false); 
  

  const { productState} = useContext(StoreContext);

  const { product, menuName} = productState;

  //to display less product while the first load of the page
useEffect(()=>{ 
  setViewBtn(false);
  
    
}, [menuName])
  

  //event handler for display less/more products
  
  const handleBtnClick = (e) => {
    e.preventDefault();
    setViewBtn((btn) => !btn)
    
  };

  
 
  return (
    <div className="flex flex-col ">
      <p className="flex justify-center items-center text-md font-bold " >
        {menuName.toUpperCase()}
      </p>

      <div>
        {/* dog menu */}
        <PetMenu />
      </div>
      <div className="flex flex-col md:flex-row justify:center items-center md:justify-between m-1 ">
        {/* products */}
        <p className=" mb-3 md:mb-0 text-xs md:text-md">
          <span className="md:font-bold">
          {product && (menuName === "dog" || menuName === "cat")
            ? product
                .filter(
                  (item ) =>
                    item.petName === menuName || item.petName === "dog/cat"
                )
                .length
            : menuName === "sale %" &&
              product
                .filter((item) => item.sale === true)
                .length}
          </span>{" "}
          products
        </p>
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      <div className="flex justify-between mt-5">
        {/* side menu */}
        <div className="w-1/4 hidden  md:flex">
           <SideMenu />  
        </div>

        {/* products card */}
        <div className="flex justify-center md:justify-start md:items-center w-3/4 flex-wrap ">
          {product && (menuName === "dog" || menuName === "cat")
            ? product
                .filter(
                  (item  ) => 
                    item.petName === menuName || item.petName === "dog/cat"
                )
                .map((item ,idx ) => idx <= (viewBtn ?   product.length : 2) && (
                  <ProductCard product={{ ...item }} key={item._id} />
                ))
            : menuName === "sale %" &&
              product
                .filter((item) => item.sale === true)
                .map((item,idx) => idx <= (viewBtn ?   product.length : 2) && (
                  <ProductCard product={{ ...item }} key={item._id}  />
                ))
             
             
            }
        </div>
        
      </div>
      <div className="flex justify-end items-center m-2 relative">
        
        <button
          className=" p-2 m-2 ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25"
          onClick={handleBtnClick}
        >
          {viewBtn ? "show less" : "show more"}
        </button>
      </div>
      <div>Payment methods</div>
    </div>
  );
}

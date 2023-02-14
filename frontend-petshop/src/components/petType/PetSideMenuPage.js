import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sort from "./Sort";
import SideMenu from "./SideMenu.js";
import ProductCard from "./ProductCard.js";
import PetMenu from "./PetMenu.js";

import { StoreContext } from "../../context/StoreContext.js";

export default function PetSideMenuPage() {
  const { productState } = useContext(StoreContext);

  const { product, menuName,subMenuName,sideMenuProduct } = productState;
   
    console.log(sideMenuProduct)


  return (
    <div className="flex flex-col mt-[3rem] md:m-1">
      <p className="flex justify-center items-center text-xl font-bold">{
      menuName==='sale %' ? menuName.split(' ')[0].slice(0, 1).toUpperCase()+menuName.slice(1,4).toUpperCase():
        menuName.toUpperCase()}
      </p>

     <div className="md:hidden">
        {/* dog menu */}
         {menuName !== 'brand'  && <PetMenu /> }
       </div> 
     {/*  <p className="flex justify-center items-center text-xl font-bold">{
      menuName==='sale %' ? menuName.split(' ')[0].slice(0, 1).toUpperCase()+menuName.slice(1,4).toUpperCase()+' '+subMenuName.toUpperCase():
        menuName.toUpperCase()+' - '+subMenuName.toUpperCase()}
      </p> */}

      
      <div className="flex flex-row justify-between m-3">
        {/* products */}
        <p>
          <span className="font-bold">
           { 
          sideMenuProduct && sideMenuProduct.length
            
        }
          </span>{" "}
          products
        </p>
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      <div className="flex justify-between mt-5 p-4">
        {/* side menu */}
        <div className="w-1/4 hidden md:flex">
          { menuName=== 'brand' ? null : <SideMenu />}
        </div>

        {/* products card */}
        <div className="flex justify-start items-start w-3/4 flex-wrap ">
          {sideMenuProduct && sideMenuProduct.map((item)=> <ProductCard product={{ ...item }} key={item._id} />) 
            
            }
        </div>
      </div>
      <div>Payment methods</div>
    </div>
  );
}

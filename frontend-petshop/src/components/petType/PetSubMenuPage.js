import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sort from "./Sort";
import Sidemenu from "./SideMenu.js";
import ProductCard from "./ProductCard.js";
import PetMenu from "./PetMenu.js";

import { StoreContext } from "../../context/StoreContext.js";

export default function PetSubMenuPage() {
  const { productState } = useContext(StoreContext);

  const { product, menuName,subMenuName } = productState;
   
  

  return (
    <div className="flex flex-col">
      
     <div className="md:hidden">
        {/* dog menu */}
         {menuName !== 'brand'  && <PetMenu /> }
       </div> 
      <p className="flex justify-center items-center text-xl font-bold">{
      menuName==='sale %' ? menuName.split(' ')[0].slice(0, 1).toUpperCase()+menuName.slice(1,4).toUpperCase()+' '+subMenuName.toUpperCase():
        menuName.toUpperCase()+' - '+subMenuName.toUpperCase()}
      </p>

      
      <div className="flex flex-row justify-between m-3">
        {/* products */}
        <p>
          <span className="font-bold">
            
            {product && (menuName === "dog" || menuName === "cat")
            ?
            product.filter(
                (item) =>
                ((item.petName === menuName || item.petName === "dog/cat") && item.productCategory === subMenuName)
              ).length : menuName === "sale %" ?
              product
              .filter((item) => (item.sale === true && item.productCategory===subMenuName ))
              .length : (menuName === "brand" &&
              product
              .filter((item) => (item.brand === subMenuName ))
              .length)
            
            }
          </span>{" "}
          products
        </p>
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      <div className="flex justify-between mt-5">
        {/* side menu */}
        <div className="w-1/4 hidden md:flex">
          { menuName=== 'brand' ? null : <Sidemenu />}
        </div>

        {/* products card */}
        <div className="flex justify-start items-start w-3/4 flex-wrap ">
          {product && (menuName === "dog" || menuName === "cat")
            ?
            product.filter(
                (item) =>
                ((item.petName === menuName || item.petName === "dog/cat") && item.productCategory === subMenuName)
              ).map((item) => (
                  <ProductCard product={{ ...item }} key={item._id} />
              )) : menuName === "sale %" ?
              product
              .filter((item) => (item.sale === true && item.productCategory===subMenuName ))
              .map((item) => (
                <ProductCard product={{ ...item }} key={item._id} />
              )): (menuName === "brand" &&
              product
              .filter((item) => (item.brand === subMenuName ))
              .map((item) => (
                <ProductCard product={{ ...item }} key={item._id} />
              )))
            
            }
        </div>
      </div>
      <div>Payment methods</div>
    </div>
  );
}

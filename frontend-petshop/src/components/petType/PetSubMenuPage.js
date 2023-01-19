import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sort from "./Sort";
import Sidemenu from "./Sidemenu.js";
import ProductCard from "./ProductCard.js";

import { StoreContext } from "../../context/StoreContext.js";

export default function PetSubMenuPage() {
 


  const { productState } = useContext(StoreContext);

  const { product, menuName,subMenuName } = productState;
   /* console.log('subMenuName', subMenuName);
  console.log('menu name', menuName) 
  console.log(product && product.filter(
    (item) =>
      ((item.petName === menuName || item.petName === "dog/cat") && item.productCategory === subMenuName)
  )) */

  return (
    <div className="flex flex-col">
      <p className="flex justify-center items-center text-xl font-bold">{
      menuName==='sale %' ? menuName.split(' ')[0].slice(0, 1).toUpperCase()+menuName.slice(1,4).toUpperCase()+' '+subMenuName.toUpperCase():
        menuName.toUpperCase()+' '+subMenuName.toUpperCase()}
      </p>

      
      <div className="flex flex-row justify-between m-3">
        {/* products */}
        <p>
          <span className="font-bold">
            {/* {product && 
              product.filter(
                (item) =>
                ((item.petName === menuName || item.petName === "dog/cat") && item.productCategory === subMenuName)
              ).length} */} 
            {product && (menuName === "dog" || menuName === "cat")
            ?
            product.filter(
                (item) =>
                ((item.petName === menuName || item.petName === "dog/cat") && item.productCategory === subMenuName)
              ).length : menuName === "sale %" &&
              product
              .filter((item) => (item.sale === true && item.productCategory===subMenuName ))
              .length
            
            }
          </span>{" "}
          products
        </p>
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      <div className="flex justify-between mt-5">
        {/* side menu */}
        <div className="w-1/4">
          <Sidemenu />
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
              )) : menuName === "sale %" &&
              product
              .filter((item) => (item.sale === true && item.productCategory===subMenuName ))
              .map((item) => (
                <ProductCard product={{ ...item }} key={item._id} />
              ))
            
            }
        </div>
      </div>
      <div>Payment methods</div>
    </div>
  );
}

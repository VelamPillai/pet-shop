import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";

import Sort from "./Sort";
import PetMenu from "./PetMenu.js";
import SideMenu from "./SideMenu.js";
import ProductCard from "./ProductCard.js";


import { StoreContext } from "../../context/StoreContext.js";

export default function PetMainPage() {
  const navigate = useNavigate();

  const [btn, setBtn] = useState("false");

  const { productState } = useContext(StoreContext);

  const { product, menuName } = productState;


  const handleBtnClick = (e) => {
    e.preventDefault();
    setBtn((btn) => !btn);
  };

  return (
    <div className="flex flex-col">
      <p className="flex justify-center items-center text-xl font-bold">
        {menuName.toUpperCase()}
      </p>

      <div>
        {/* dog menu */}
        <PetMenu />
      </div>
      <div className="flex flex-row justify-between m-3">
        {/* products */}
        <p>
          <span className="font-bold">
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
        <div className="w-1/4">
           <SideMenu />  
        </div>

        {/* products card */}
        <div className="flex justify-start items-center w-3/4 flex-wrap ">
          {product && (menuName === "dog" || menuName === "cat")
            ? product
                .filter(
                  (item  ) => 
                    item.petName === menuName || item.petName === "dog/cat"
                )
                .map((item ,idx ) => idx <= (btn ?   product.length : 5) && (
                  <ProductCard product={{ ...item }} key={item._id} />
                ))
            : menuName === "sale %" &&
              product
                .filter((item) => item.sale === true)
                .map((item) => (
                  <ProductCard product={{ ...item }} key={item._id} />
                ))
             
             
            }
        </div>
        
      </div>
      <div className="flex justify-end items-center m-2 ">
        <button
          className=" p-2 m-2 ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25"
          onClick={handleBtnClick}
        >
          {!btn ? "show more" : "show less"}
        </button>
      </div>
      <div>Payment methods</div>
    </div>
  );
}

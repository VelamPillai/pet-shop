import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sort from "./Sort";
import PetMenu from "./PetMenu.js";
import SideMenu from "./SideMenu.js";
import ProductCard from "./ProductCard.js";

import { StoreContext } from "../../context/StoreContext.js";

export default function PetMainPage() {
  const [viewBtn, setViewBtn] = useState(false);

  const { productState, productDispatch } = useContext(StoreContext);

  const { product, menuName } = productState;

  //to display less product while the first load of the page
  useEffect(() => {
    setViewBtn(false);
    productDispatch({
      type: "setProduct",
      payload: { data: product },
    });
  }, [menuName]);

  //event handler for display less/more products

  const handleBtnClick = (e) => {
    e.preventDefault();
    setViewBtn((btn) => !btn);
  };

  return (
    <div className="flex flex-col mt-[3rem]  sm:m-[1rem]  ">
      <p className="flex justify-center items-center text-md font-bold ">
        {menuName.toUpperCase()}
      </p>

      <div>
        {/* dog menu */}
        <PetMenu />
      </div>
      <div className="flex flex-col  sm:flex-row justify:center items-center  sm:justify-between m-1  ">
        {/* products */}

        <p className=" mb-3  sm:mb-0 text-xs  sm:text-md">
          <span className=" sm:font-bold">
            {product && (menuName === "dog" || menuName === "cat")
              ? product.filter(
                  (item) =>
                    item.petName === menuName || item.petName === "dog/cat"
                ).length
              : menuName === "sale %" &&
                product.filter((item) => item.sale === true).length}
          </span>{" "}
          products
        </p>
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      <div className="flex justify-between mt-5">
        {/* side menu */}
        <div className="w-1/4 hidden   sm:flex">
          <SideMenu />
        </div>

        {/* products card */}
        <div className="flex justify-center   sm:justify-start  sm:items-center  sm: flex-wrap  ">
          {product && (menuName === "dog" || menuName === "cat")
            ? product
                .filter(
                  (item) =>
                    item.petName === menuName || item.petName === "dog/cat"
                )
                .map(
                  (item, idx) =>
                    idx <= (viewBtn ? product.length : 2) && (
                      <ProductCard product={{ ...item }} key={item._id} />
                    )
                )
            : menuName === "sale %" &&
              product
                .filter((item) => item.sale === true)
                .map(
                  (item, idx) =>
                    idx <= (viewBtn ? product.length : 2) && (
                      <ProductCard product={{ ...item }} key={item._id} />
                    )
                )}
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
      {/*  <div>Payment methods</div> */}
    </div>
  );
}

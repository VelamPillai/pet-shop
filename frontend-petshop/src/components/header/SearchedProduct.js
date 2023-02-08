import React, { useContext, useState, useEffect } from "react";

import { StoreContext } from "../../context/StoreContext.js";

import Sort from "../petType/Sort.js";
import ProductCard from "../petType/ProductCard.js";
export default function SearchedProduct() {
  const { productState } = useContext(StoreContext);

  const { searchedProduct } = productState;
  const [viewBtn, setViewBtn] = useState(false);

  const handleBtnClick = (e) => {
    e.preventDefault();
    setViewBtn((btn) => !btn);
  };
  return (
    <div className="mt-[3rem] md-1">
      SearchedProduct
      <div className="flex flex-col  sm:flex-row justify:center items-center  sm:justify-between m-1 ">
        {/* products */}
        <p className=" mb-3  sm:mb-0 text-xs  sm:text-md">
          <span className=" sm:font-bold">
            {searchedProduct && searchedProduct.length}
          </span>{" "}
          products
        </p>
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      {/* products card */}
      <div className="flex justify-center  sm:justify-start  sm:items-center w-3/4 flex-wrap ">
        {searchedProduct &&
          searchedProduct.map(
            (item, idx) =>
              idx <= (viewBtn ? searchedProduct.length : 2) && (
                <ProductCard product={{ ...item }} key={item._id} />
              )
          )}
      </div>
      <div className="flex justify-end items-center m-2 relative">
        {searchedProduct.length > 3 && (
          <button
            className=" p-2 m-2 ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25"
            onClick={handleBtnClick}
          >
            {viewBtn ? "show less" : "show more"}
          </button>
        )}
      </div>
    </div>
  );
}

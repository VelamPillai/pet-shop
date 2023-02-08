import React, { useContext } from "react";

import { StoreContext } from "../../context/StoreContext";

export default function FavoriteModal() {
  const { homepageState, productState, productDispatch } =
    useContext(StoreContext);

  const { user } = homepageState;

  const { favoriteProduct, product, showHideFavoriteBtn } = productState;
  //hideModalHandler -
  const hideModalHandler = (e) => {
    productDispatch({ type: "setShowHideFavoriteBtn" });
  };

  return (
    <div
      className={`bg-orange-400  fixed right-[5px]  sm:right-0  inset-y-0 z-50 w-[100%]  sm:w-[50%] ${
        showHideFavoriteBtn ? "visible" : "invisible"
      }`}
    >
      <div className="flex h-screen text-[1.5rem]  justify-center align-top  ">
        <p className="flex  mt-2 text-green-900  text-shadow">
          Favorite Product
        </p>
        <p
          onClick={hideModalHandler}
          className="top-0 right-5 absolute cursor-pointer   text-green-900  text-shadow text-[3rem]"
        >
          x
        </p>
        <div className="flex flex-col justify-center items-center  top-10 right-5 absolute p-5  sm:p-0">
          <ul className="grid grid-cols-1  sm:grid-cols-2">
            {product &&
              product
                .filter((item) => favoriteProduct?.includes(item._id))
                .map((item) => {
                  return (
                    <li
                      key={item._id}
                      className="shadow-lg border-black bg-orange-100 rounded-xl m-1 p-1 flex "
                    >
                      <img
                        src={item.productImage}
                        alt="card-pic"
                        className=" w-[75px] h-[75px]  sm:w-[150px]  sm:h-[150px] mr-4 p-1"
                      />
                      <div>
                        <p className="text-[.5rem]  sm:text-[1rem] ">
                          {item.brand} - {item.petName}
                        </p>
                        <p className="font-bold text-[.5rem]  sm:text-[1rem]">
                          {item.productName}
                        </p>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
}

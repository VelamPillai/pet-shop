import React, { useContext } from "react";

import { StoreContext } from "../../context/StoreContext";


export default function FavoriteModal() {
  
  const { homepageState, productState ,productDispatch} = useContext(StoreContext);
 
  
    const { user } = homepageState;
    
    const { favoriteProduct, product, showHideFavoriteBtn } = productState;
    //hideModalHandler -
    const hideModalHandler = (e) => {
        productDispatch({type:"setShowHideFavoriteBtn"})
  }; 
  /* console.log(
    product && product.filter((item) => favoriteProduct.includes(item._id))
  ); */

  return (
    
          <div className={`bg-gray-900 opacity-90 fixed right-0 inset-y-0 z-50 w-[90%] ${ showHideFavoriteBtn? 'visible':'invisible'}`}>
        <div className="flex h-screen text-[1.5rem]  justify-center align-top ">
          <p className="flex  mt-2 text-orange-500 ">Favorite Product</p>
          <p
            onClick={hideModalHandler}
            className="top-0 right-5 absolute cursor-pointer  text-orange-500 text-[3rem]"
          >
            x
          </p>
          <div className="flex flex-col justify-center items-center  top-10 right-5 absolute">
            <ul className="grid grid-cols-3">
              {product &&
                product
                  .filter((item) => favoriteProduct?.includes(item._id))
                  .map((item) => {
                    return (
                      <li
                        key={item._id}
                        className="shadow-lg border-black bg-gray-300/25 rounded-xl m-1 p-1 flex "
                      >
                        <img
                          src={item.productImage}
                          alt="card-pic"
                          className="w-[150px] h-[150px] mr-4 p-2"
                        />
                        <div>
                          <p className="text-[1rem] text-orange-500">
                            {item.brand} - {item.petName}
                          </p>
                          <p className="font-bold text-[1rem] text-orange-500">
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

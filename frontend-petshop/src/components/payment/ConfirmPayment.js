import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import sleepingDog from '../../image/slepping dogcat.jpeg';

import { StoreContext } from "../../context/StoreContext";

export default function ConfirmPayment() {
  const { homepageState, productState, productDispatch } =
    useContext(StoreContext);

  const { user } = homepageState;

  useEffect(() => {
    user &&
      productDispatch({
        type: "setFavoriteProduct",
        payload: { data: [...user.favoriteProduct] },
      });
    productDispatch({ type: "setShowHideCartBtn" });
    productDispatch({ type: "setShowHideCartBtn" });
  }, [user]);
  return (
      <div className="flex flex-col sm:flex-row mt-[3rem]">
          <div>
              <img src={sleepingDog} alt='sleepingdog' className="rounded-xl shadow-lg shadow-black mr-[1rem]" />
          </div>
          <div className="flex flex-col justify-center p-5 m-5">
          <h1>Thank you for your Order!!!</h1>
      <Link to="/" className="text-orange-500 hover:text-green-500 mt-[3rem] text-xs">Go to HomePage</Link>
          </div>
     
    </div>
  );
}

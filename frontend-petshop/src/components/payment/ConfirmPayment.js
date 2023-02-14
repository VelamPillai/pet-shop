import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Thank you for your Order</h1>
      <Link to="/">Go to HomePage</Link>
    </div>
  );
}

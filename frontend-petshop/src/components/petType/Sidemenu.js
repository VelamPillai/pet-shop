import React, { useContext } from 'react';

import { StoreContext } from "../../context/StoreContext.js";
export default function Sidemenu() {
    
  const { productState,productDispatch } = useContext(StoreContext);

  const { product, menuName, brand,subMenuName } = productState;
  return (
      <div>
      <p>Brand</p>
      

    </div>
  )
}

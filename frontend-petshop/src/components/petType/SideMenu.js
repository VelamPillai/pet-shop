import React, { useContext, useState, useEffect } from "react";

import { StoreContext } from "../../context/StoreContext.js";
export default function Sidemenu() {
  const [btn, setBtn] = useState("false");

  const { productState, productDispatch } = useContext(StoreContext);

  const { product, menuName,   sideMenuBrand, subMenuName } = productState;
  useEffect(() => { 
    
    let sideMenuProduct='';
    let sideMainProduct = '';
    product &&  
      
    (sideMainProduct = [...product].filter(
      (item) =>
      (item.petName === menuName || item.petName === "dog/cat") 
      )
  )
    product && subMenuName &&
      (sideMenuProduct = [...product].filter(
        (item) =>
          ((item.petName === menuName || item.petName === "dog/cat") && item.productCategory === subMenuName)
      ));
   
      
      
    (product &&  subMenuName) ?
    ( productDispatch({
      type: "setSideMenuBrand",
      payload: { data: [...new Set([...sideMenuProduct ].map((item) => item.brand))] },
     }) ):   (productDispatch({
      type: "setSideMenuBrand",
      payload: { data: [...new Set([...sideMainProduct ].map((item) => item.brand))] },
    }))
    
    
    
  }, []); 


  
  


  const handleBtnClick = (e) => {
    e.preventDefault();
    setBtn((btn) => !btn);
  };

  return (
    <div className="border-2 m-2 p-5 rounded-lg bg-orange-100">
      <p className="font-bold text-lg mb-2">Brand</p>
      <div className="">
        {  sideMenuBrand &&
            sideMenuBrand.map(
            (item, idx) =>
              idx <= (btn ?   sideMenuBrand.length : 4) && (
                <div key={idx}>
                  <input type="checkbox" name="brand" value={item} />
                  <label className="ml-3">
                    {item[0].toUpperCase() + item.slice(1, item.length )}
                  </label>
                </div>
              )
          )}
      </div>
      <div className="flex justify-center ">
        <button
          className=" border bg-orange-500 p-1 rounded-md hover:bg-orange-400 m-2"
          onClick={handleBtnClick}
        >
          {!btn ? "show more" : "show less"}
        </button>
      </div>
    </div>
  );
}

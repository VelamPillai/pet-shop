import React, { useContext, useState, useEffect } from "react";
import { MdUnfoldLess ,MdUnfoldMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { StoreContext } from "../../context/StoreContext.js";



export default function SideMenu() {
  const navigate = useNavigate();
  const [btn, setBtn] = useState(false);

  const { productState, productDispatch } = useContext(StoreContext);

  const { product, menuName,   sideMenuBrand, subMenuName ,sideMenuProduct,originalProduct} = productState;
  
  useEffect(()=>{ 
    setBtn(false)
  },[menuName])
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

  //handleSideMenuClick
  const handleSideMenuClick = (e) => {
    if (e.target.checked) {
      console.log(e.target.checked);
      productDispatch({
      type: "setSideMenuProduct",
      payload:{data:e.target.value,checked:true}
      })
      navigate('/petSideMenuPage')
    }
    else {
      if (sideMenuProduct) {
        productDispatch({
          type: "setProduct",
          payload:{data:originalProduct}
        })
        if (menuName && subMenuName) {
          
          navigate('/petSubMenuPage')
         
        }
        else {
          navigate('/petMainPage')
}
        
       
      }
      else{
      productDispatch({
      type: "setSideMenuProduct",
      payload:{data:e.target.value,checked:false}
      })
      navigate('/petSideMenuPage')
    }
    
   
    }
    
    
  }
  console.log(menuName,subMenuName)

  return (
    <div className="border-2 m-1 p-5 rounded-lg bg-orange-100 ">
      <p className="font-bold text-lg mb-2">Brand</p>
      <div >
        {  sideMenuBrand &&
            sideMenuBrand.map(
            (item, idx) =>
              idx <= (btn ?   sideMenuBrand.length : 2) && (
                <div key={idx}>
                    <input onClick={ handleSideMenuClick} type="checkbox" name="brand" value={item} />
                  <label className="ml-3">
                    {item[0].toUpperCase() + item.slice(1, item.length )}
                  </label>
                </div>
              )
          )}
      </div>
      <div className="flex justify-center ">
        <button
          className=" border bg-orange-500 p-1 rounded-md hover:bg-orange-400 m-2 shadow-lg shadow-black"
          onClick={handleBtnClick}
        >
          {btn ? <MdUnfoldLess /> : <MdUnfoldMore />}
        </button>
      </div>
    </div>
  );
}

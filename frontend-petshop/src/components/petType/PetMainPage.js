import React, { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillEyeSlashFill, BsFillEyeFill} from "react-icons/bs";

import Sort from "./Sort";
import PetMenu from "./PetMenu.js";
import SideMenu from "./SideMenu.js";
import ProductCard from "./ProductCard.js";



import { StoreContext } from "../../context/StoreContext.js";

export default function PetMainPage() {
 

  const [viewBtn, setViewBtn] = useState(false); 
  

  const { productState,productDispatch} = useContext(StoreContext);

  const { product, menuName} = productState;

  //to display less product while the first load of the page
useEffect(()=>{ 
  setViewBtn(false);
  productDispatch({

    type: "setProduct",
    payload: { data:product },
  });
  productDispatch({
    type: "resetSideMenuProduct",
   
  })
    
}, [menuName])
  

  //event handler for display less/more products
  
  const handleBtnClick = (e) => {
    e.preventDefault();
    setViewBtn((btn) => !btn)
    
  };

  
 
  return (
    <div className="flex flex-col mt-[3rem]   ">
      <p className="flex justify-center items-center text-md font-bold " >
        {menuName.toUpperCase()}
      </p>

      <div>
        {/* dog menu */}
        <PetMenu />
      </div>
      <div className="flex flex-col md:flex-row justify:center items-center md:justify-between m-1  ">
        {/* products */}
        <div className="flex justify-between items-center gap-[8rem]">
        <p className=" mb-3 md:mb-0 text-xs md:text-md">
          <span className="md:font-bold">
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
        
          
</div>
       
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      <div className="flex justify-between p-4 mt-5">
        {/* side menu */}
        <div className="w-1/4 hidden  md:flex ">
           <SideMenu />  
        </div>

        {/* products card */}
        <div className="flex justify-center  md:justify-start md:items-center md: flex-wrap  ">
          {product && (menuName === "dog" || menuName === "cat")
            ? product
                .filter(
                  (item  ) => 
                    item.petName === menuName || item.petName === "dog/cat"
                )
                .map((item ,idx ) => idx <= (viewBtn ?   product.length : 2) && (
                  <ProductCard product={{ ...item }} key={item._id} />
                ))
            : menuName === "sale %" &&
              product
                .filter((item) => item.sale === true)
                .map((item,idx) => idx <= (viewBtn ?   product.length : 2) && (
                  <ProductCard product={{ ...item }} key={item._id}  />
                ))
             
             
          }
          <div className="flex justify-start items-center m-2 relative">
      <p
          /* className=" p-2 m-2 ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25" */
          className=" flex justify-center items-center border w-[300px] sm-[300px] 2xl:w-[300px] h-[300px] md:h-[300px] bg-orange-400/50 box-border rounded-lg p-4 m-1 text-[4rem] text-green-800"
          onClick={handleBtnClick}
        >
          {viewBtn ? <BsFillEyeSlashFill className="text-red-600"/> : <BsFillEyeFill />}
        </p>
        
      </div>
        </div>
        
      </div>
      
     {/*  <div>Payment methods</div> */}
    </div>
  );
}

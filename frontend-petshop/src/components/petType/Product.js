import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

import { GiCancel } from "react-icons/gi";
import { StoreContext } from "../../context/StoreContext.js";


import toast , {Toaster} from "react-hot-toast";
export default function Product() {
  const navigate = useNavigate();
  const { productState ,productDispatch ,homepageState} = useContext(StoreContext);

  const { user } = homepageState;
  const { singleProduct,cart,menuName ,subMenuName} = productState;

  

  //event handler to handle Cart click
  const handleCartClick = (e) => {
    e.preventDefault();
     cart.map(item=>item._id).includes(singleProduct._id)? toast.error('product is exists in the Cart'):
    productDispatch({
      type: 'setCart',
      payload:{data:singleProduct}
    }) 
    
  //cart && console.log(cart,menuName)  */
   
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    user.role === 'user' && menuName !== 'brand' ? navigate('/petMainPage') : navigate('/brand')
    
  }
  
  return (
    <div>
      {user.role==='user' &&   <RiArrowGoBackFill  className="text-white bg-red-500 border-red-500 p-1 rounded-full  text-center text-3xl" onClick={ cancelHandler} />}
     
      
     
      {singleProduct && (
        <div className="flex flex-col md:flex-row w-full mt-[4rem]">
          {singleProduct.sale && (
            <p className="bg-red-500 w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex justify-center items-center p-2 rounded-tl-xl rounded-br-xl animate-bounce">
              {" "}
              Sale{" "}
            </p>
          )}
          <Toaster />
          <div className="w-[2/4] m-1 p-1 md:m-5 md:p-5">
            <img
              src={singleProduct.productImage}
              alt="card-pic"
              className=" w-[300px] h-[300px] rounded-lg shadow-lg shadow-gray-500"
            />
          </div>
          <div className="w-[2/4] m-1 p-1 md:m-5 md:p-5">
            <p className="text-sm  text-gray-500 mb-2">
              {singleProduct.brand} - {singleProduct.petName}
            </p>
            <p className="font-bold text-md md:text-3xl  mb-1">
              {singleProduct.productName}
            </p>
            <p className="text-xs my-4  text-gray-500">
              {singleProduct.description}
            </p>
            <div className="flex flex-row">
              {singleProduct.productCharacter.map((item, idx) => (
                <p
                  key={idx}
                  className="text-xs mr-4  mb-5 bg-gray-300 p-2 rounded-md"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <p className="text-orange-500 text-xl font-bold mr-3">
                $ {singleProduct.price}
              </p>
              {!(user.role === 'admin') && <button
                onClick={handleCartClick}
                className="border md:w-[40%] p-3 flex justify-center items-center rounded-lg bg-orange-500  mb-4 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50"
              >
                Add to Cart
              </button>}
           
           
            </div>
          </div>
      
        </div>

      
      )
      }
    </div>
   
   
      
  );
  
}

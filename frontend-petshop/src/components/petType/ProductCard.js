import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";

import cardImage from "../../image/dog.jpeg";
import { StoreContext } from "../../context/StoreContext.js";

export default function ProductCard({ product }) {

  const navigate = useNavigate();
  const { productDispatch } = useContext(StoreContext);

  
  //event handler to navigate to single product page

  const showProductClick = (e) => {
   //console.log(product)
    productDispatch({
      type: "setSingleProduct",
      payload: { data:product  },
     
    });
    
     navigate('/product') 
    
    
  }
  return (
    <div onClick={showProductClick} className="flex flex-col border w-[325px] h-[500px] box-border rounded-lg p-4 m-1 relative  ">
      {product.sale && <p className="absolute top-2 left-2  text-white bg-red-500 p-4 rounded-br-2xl ">Sale</p>}
      <img src={product.productImage} alt="card-pic" className="w-[100%] h-[200px] mb-3" />
      <p className="text-sm  text-gray-500">
        {product.brand} - {product.petName}
      </p>
      <p className="font-bold text-sm mb-1">{product.productName}</p>
      <p className="text-xs my-4">{product.productCharacter}</p>
      <div className="flex justify-center items-center ">
        { product.sale ?
          <p className="border w-[80%] flex justify-center items-center rounded-lg bg-red-500 absolute bottom-0 mb-4 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50">
            $ {product.price}
          </p> : <p className="border w-[80%] flex justify-center items-center rounded-lg bg-orange-100 absolute bottom-0 mb-4 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50">
            $ {product.price}
          </p>
        }
      </div>
    </div>
  );
}

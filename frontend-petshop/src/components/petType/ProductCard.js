import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";


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
    <div onClick={showProductClick} className="flex flex-col border w-[250px] 2xl:w-[350px] h-[300px] box-border rounded-lg p-1 m-1 relative  ">
      {product.sale && <p className="absolute top-2 left-2  text-white bg-red-500 p-4 rounded-br-2xl ">Sale</p>}
      <img src={product.productImage} alt="card-pic" className="w-[100%] h-[150px] mb-1" />
      <p className="text-sm  text-gray-500">
        {product.brand} - {product.petName}
      </p>
      <p className="font-bold text-sm ">{product.productName}</p>
      <p className="text-xs my-1">{product.productCharacter}</p>
      <div className="flex justify-center items-center ">
        { product.sale ?
          <p className="border w-[80%] flex justify-center items-center rounded-lg bg-red-500 absolute bottom-0 mb-2 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50">
            $ {product.price}
          </p> : <p className="border w-[80%] flex justify-center items-center rounded-lg bg-orange-100 absolute bottom-0 mb-2 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50">
            $ {product.price}
          </p>
        }
      </div>
    </div>
  );
}

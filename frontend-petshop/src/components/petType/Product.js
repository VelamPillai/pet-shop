import React, { useContext,useState } from "react";

import cardImage from "../../image/catfood.jpg";
import { StoreContext } from "../../context/StoreContext.js";


import { GiBasket} from "react-icons/gi";
export default function Product() {
  const { productState } = useContext(StoreContext);

    const { singleProduct } = productState;
    
    const [addCart, setAddCart] = useState(true)
    
    //event handler to handle Cart click
    const handleCartClick = (e) => {
        e.preventDefault();
        setAddCart(false)

    }

  return (
    singleProduct && (
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-[2/4] m-1 p-1 md:m-5 md:p-5">
          <img src={singleProduct.productImage} alt="card-pic" className=" w-[300px] h-[300px]" />
        </div>
        <div className="w-[2/4] m-1 p-1 md:m-5 md:p-5">
          <p className="text-sm  text-gray-500 mb-2">
            {singleProduct.brand} - {singleProduct.petName}
          </p>
          <p className="font-bold text-3xl  mb-1">
            {singleProduct.productName}
          </p>
          <p className="text-xs my-4  text-gray-500">
            {singleProduct.description}
                  </p>
                  <div className="flex flex-row">
                  {singleProduct.productCharacter.map((item ,idx) => (
                      <p key={idx} className="text-xs mr-4  mb-5 bg-gray-300 p-2 rounded-md">{item}</p>
          ))}
                  </div>
          
          <div className="flex flex-col md:flex-row">
            <p className="text-orange-500 text-xl font-bold mr-3">
              $ {singleProduct.price}
                      </p>
                      {addCart ? <button onClick={handleCartClick} className="border w-[80%] p-3 flex justify-center items-center rounded-lg bg-orange-500  mb-4 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50" >
                          Add to Cart
                      </button> : <div className="flex flex-row"> 
                      <button onClick={handleCartClick} className="border w-[20%] p-3 flex justify-center items-center rounded-lg text-xl bg-orange-500  mb-4 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50" >
                         -
                          </button>
                          <div className="border w-[400px] p-3 flex justify-center items-center rounded-lg  bg-orange-500  mb-4 "> < GiBasket /> <p className="mx-2">4</p> < GiBasket /> </div>
                                
                          <button onClick={handleCartClick} className="border w-[20%] p-3 flex text-xl justify-center items-center rounded-lg bg-orange-500  mb-4 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50" >
                          +
                      </button>
                      </div>
                         
                      }
                     
          </div>
        </div>
      </div>
    )
  );
}

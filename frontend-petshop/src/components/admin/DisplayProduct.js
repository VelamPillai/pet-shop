import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../petType/ProductCard.js";
import toast, { Toaster } from "react-hot-toast";

import { StoreContext } from "../../context/StoreContext.js";




export default function DisplayProduct() {
    const navigate = useNavigate();
    const { productState, productDispatch, adminDispatch} = useContext(StoreContext);
    
    const { product } = productState;
    

    //delete handler
    const deleteHandler = (id) => {
        
      
    fetch(`http://localhost:8000/products/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") }      
    })
      .then((res) => res.json())
      .then((result) => {
          if (result.success) {
            
             toast.success('Product has Deleted');
            productDispatch({
                type: "setProduct",
                payload: { data: result.data },
              });           
        }
        else {            
           toast.error(result.message.message)
          }
      }) 
       

    }
    
     //update handler
    const updateHandler = (product) => {
        
         adminDispatch({
            type: "setProduct",
            payload: { data:product },
          });  
        navigate('/updateProduct') 
    }
  return (
      <div className="flex flex-col items-center mt-[3rem] md:mt-1">
          <Toaster />
          <p className="font-bold text-xl mb-3">Products</p>    
          <div>
              <ul className="grid grid-cols-1 md:grid-cols-2">
                  
              {product && 
                      product.map((item, idx) => {
                          return (
                              <li key={idx}    className="flex flex-row justify-center items-center">
                                  <ProductCard product={{ ...item }} />
                                  <div className="flex flex-col"><button onClick={ () => updateHandler(item)} className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-[1rem] md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">Update</button>
                                      <button onClick={ () => deleteHandler(item._id)} className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-[1rem] md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">Delete</button></div>
                                  
                              </li>
                      )
                  
              })
                  }
                  
              </ul>
              
          </div>
      </div>
  )
}

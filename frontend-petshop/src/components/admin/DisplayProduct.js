import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../petType/ProductCard.js";
import toast, { Toaster } from "react-hot-toast";

import { StoreContext } from "../../context/StoreContext.js";


import { AiFillDelete } from "react-icons/ai";

import { MdUpdate } from "react-icons/md";


export default function DisplayProduct() {
    const navigate = useNavigate();
    const { productState, productDispatch, adminDispatch} = useContext(StoreContext);
    
    const { product } = productState;
    
    //adProductHandler
    const addProductHandler =()=>{
      navigate("/addProduct")
    }

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
      <div className="flex flex-col items-center mt-[3rem] md:mt-[2rem]">
          <Toaster />
      <p className="font-bold text-xl mb-3 text-shadow">Products</p>  
      <div onClick={addProductHandler} className=" w-[220px]  md:w-[250px] 2xl:w-[300px] h-[340px] text-green-600 box-border rounded-lg p-1 m-1 border-green-600 border-4  ">
              <p className="flex justify-center items-center text-[7rem]">+</p>

              </div>
          <div>
              <ul className="flex flex-col sm:flex-row    justify-center  items-center flex-wrap">
                  
              {product && 
                      product.map((item, idx) => {
                          return (
                            <li key={idx} className="flex flex-row justify-center items-center relative ">
                              <div className="relative z-0"><ProductCard product={{ ...item }}  /></div>
                                  
                              <div className="flex flex-col">
                                <button onClick={() => updateHandler(item)} className=" text-lg text-green-600 font-bold justify-center items-center  m-3 p-2 rounded shadow-black shadow-md bg-green-400/50 hover:bg-green-200   lg:box-content absolute top-0 right-5 z-40"><MdUpdate /></button>
                                      <button onClick={ () => deleteHandler(item._id)} className="text-lg text-red-600 font-bold justify-center items-center  m-3 p-2 rounded shadow-black shadow-md bg-red-100 hover:bg-red-200   lg:box-content absolute top-10 right-5 z-40"><AiFillDelete /></button></div>
                                  
                              </li>
                      )
                  
              })
                  }
                  
              </ul>
              
              
          </div>
      </div>
  )
}

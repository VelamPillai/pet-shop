import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import toast, { Toaster } from "react-hot-toast";

import { StoreContext } from "../../context/StoreContext.js";
import OrderCard from "./OrderCard.js";


import { AiFillDelete } from "react-icons/ai";

import { MdUpdate } from "react-icons/md";


export default function DisplayOrders() {
    const navigate = useNavigate();
    const { productState, productDispatch, adminDispatch} = useContext(StoreContext);
    
    const { order } = productState;

    //get all orders
    useEffect( () => {
        fetch("http://localhost:8000/orders/userOrders", {
            method: "GET",
      
          })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    
                productDispatch({
      
                  type: "resetOrder",
                  payload: { data: result.data },
                });
                
              } else {
                console.log("error");
              }
            });
          
        
    },[])
    
   /*  //adProductHandler
    const dispalyOrderHandler =()=>{
      navigate("/addProduct")
    } */

    //delete handler
    const deleteHandler = (id) => {
        
      
    fetch(`http://localhost:8000/orders/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") }      
    })
      .then((res) => res.json())
      .then((result) => {
          if (result.success) {
            
              toast.success('order has Deleted');
              console.log('delete',order)
            productDispatch({
                type: "resetOrder",
                payload: { data: result.data },
              });           
        }
        else {            
           toast.error(result.message.message)
          }
      }) 
       

    }
    
     //update handler
    const updateHandler = (order) => {
        
         adminDispatch({
            type: "setOrder",
            payload: { data:order },
          });  
        navigate('/updateOrder') 
    }
  return (
      <div className="w-[100%] flex flex-col items-center mt-[3rem] md:mt-1">
          <Toaster />
          <p className="font-bold text-xl mb-3 text-shadow">Orders</p>    
          <div>
          <div className='flex justify-around  items-center w-[900px] h-[100px] bg-green-600/50 rounded-lg m-2 p-4  shadow-black shadow-inner'>
          
          <p className='mr-5'>Order No </p>
          <p className='mr-5'>TotalPrice in $</p>
                  <p className='mr-5'>orderedDate</p>
                  <p className='mr-5'>Carrier</p>
          <p className='mr-5'>status</p>
          
    </div>
              <ul className="grid grid-cols-1 w-[100%] ">
                  
              {order && 
                      order.map((item, idx) => {
                          return (
                              <li key={idx}    className="flex flex-row justify-center items-center relative ">
                                  <OrderCard order={{ ...item }} />
                                  <div className="flex flex-row "><button onClick={ () => updateHandler(item)} className=" text-lg text-green-600 font-bold justify-center items-center  m-3 p-1 rounded shadow-black shadow-md hover:bg-green-200   lg:box-content "><MdUpdate /></button>
                                      <button onClick={ () => deleteHandler(item._id)} className="text-lg text-red-600 font-bold justify-center items-center  m-3 p-1 rounded shadow-black shadow-md hover:bg-red-100   lg:box-content "><AiFillDelete /></button></div>
                                  
                              </li>
                      )
                  
              })
                  }
                  
              </ul>
             
              
          </div>
      </div>
  )
}

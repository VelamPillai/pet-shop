import React,{useContext} from "react";
import {useNavigate} from 'react-router-dom'

import toast, { Toaster } from "react-hot-toast";

import { StoreContext } from '../../context/StoreContext';

export default function UpdateOrder() {
    const navigate = useNavigate();
  const { adminState,adminDispatch, productDispatch} = useContext(StoreContext);
  
    const { order } = adminState;
    
    const updateOrder =async (e) => {
        e.preventDefault();
        //let formData = new FormData(e.target);
        let data = new FormData();
    
        data.append('status', e.target.status.value)
        data.append('carrier', e.target.carrier.value)
        
        adminDispatch({ type: 'clearForm' });
    
        fetch(`http://localhost:8000/orders/updateOrder/${order._id}`, {
          method: "PATCH",
          headers: { token: localStorage.getItem("token") },
          body: data
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
               productDispatch({ type: "resetOrder", payload: { data: result.data } }); 
              
              
              toast.success(`Order updated!!!`);
              setTimeout(() => navigate("/displayOrders"), 1000);
            } else {
              if (Array.isArray(result.message)) {
                const errMessage = result.message.reduce(
                  (overallError, errItem) => (overallError += ` * ${errItem}  \n `)," ");           
                toast.error(`${errMessage}`);
              } else {
                toast.error(result.message.message);
                
              }
            }
          });
    
      }
  return (
    <div>
    <div className="flex justify-center items-center flex-wrap flex-col xl:flex-row  lg:border m-auto rounded shadow-black shadow-xs mt-[3rem] md:mt-1">
      <Toaster />
      
      <p className="  font-bold text-center ">Update Order</p>

      <form onSubmit={updateOrder } className=" grid md:grid-cols-3 justify-center items-center w-[100%]">     
       
       
       
        
        <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem]  ">
          Status :{" "}
          <select
            className="border border-slate-200 rounded w-[150px] lg:w-[300px] md:w-[200px] h-[50px] "
            name="status"
            /* onChange={(e) => adminDispatch({
            type: "onChange",
            payload: { name: e.target.name, data: e.target.value }
          })}
          value={adminState.email} */
          defaultValue={order.status}
          >
            {" "}
            <option value="inProcess">in Process</option>
            <option value="delivered">Delivered</option>
            <option value="shipped">Shipped</option>
        </select>
        </label>
        <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem]  ">
          Carrier :{" "}
          <select
            className="border border-slate-200 rounded w-[150px] md:w-[200px] lg:w-[300px] h-[50px] "
            name="carrier"
            /* onChange={(e) => adminDispatch({
            type: "onChange",
            payload: { name: e.target.name, data: e.target.value }
          })}
          value={adminState.email} */
          defaultValue={order.carrier}
          >
            {" "}
            <option value="DHL">DHL</option>
            <option value="UPS">UPS</option>
            <option value="DPD">DPD</option>            
          </select>
        </label>
        
        <button className="bg-orange-500 justify-center items-center w-[150px] md:w-[300px]  my-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md hover:bg-green-600  h-[30px] lg:box-content">
          UpdateOrder
        </button>
      </form>
    </div></div>
  )
}

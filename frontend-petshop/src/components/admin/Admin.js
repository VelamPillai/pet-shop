import React, { useState ,useEffect,useContext} from "react";
import { useNavigate } from "react-router-dom";
import adminPic from '../../image/catadmin.jpg'

import { StoreContext } from "../../context/StoreContext.js";
import DisplayOrders from "./DisplayOrders";

const adminFeatures = [
  
  "Products",
  "Customers", 
  "Orders"
  
];


export default function Admin() {
    const [display, setDisplay] = useState(true);
  const navigate = useNavigate();

  const { adminState, adminDispatch ,productState,productDispatch} = useContext(StoreContext);
  const { customers } = adminState;
  const { product ,order} = productState;
  useEffect(() => {
    
    //customer
    fetch("http://localhost:8000/users", {
  method: "GET",

    })
        .then((res) => res.json())
        .then((result) => {
            if (result.success) {
                adminDispatch({
                    type: 'setCustomers',
                    payload:{data:result.data}
            })
            } else {
                console.log('error')
        }
        })
    
    //order
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

  const handleAdminClick = (e) => {
    e.preventDefault();
    setDisplay((display) => !display);
  };
    
    const handleMenuClick = (e) => {
      e.preventDefault();
      e.target.textContent==='Products'?navigate('/displayProduct'):e.target.textContent==='Customers'?navigate('/displayCustomers'):e.target.textContent==='Orders'?navigate('/displayOrders'):navigate('/admin')
    }
  return (
    <div className="mt-[1rem]">
       <p
        className=" text-xl flex justify-center items-center  font-bold text-shadow my-[1rem] "
        onClick={handleAdminClick}
      >
        Admin Dashboard
      </p>
      <div className="flex flex-col md:flex-row p-5">
      <div className="relative md:w-[1/4] p-5">
        <div className="border-8 border-orange-500 w-[80%] h-[220px] md:w-[55%] md:h-[80%] rounded-2xl absolute -top-5 -left-5 -z-10 shadow-xl shadow-black"></div>
          <img src={adminPic} className=" w-[100%] h-[200px] md:w-[60%] md:h-[90%] rounded-xl shadow-xl shadow-black " alt='adminpic ' />
          {/* <div className="border-8 border-orange-500 w-[350px] h-[200px] md:w-[60%] md:h-[80%] rounded-2xl absolute bottom-5 "></div> */}
      </div>
      <div className="w-[3/4]">
     
      {display && (
        <ul className="flex flex-col md:flex-row justify-center  flex-wrap p-1 rounded-lg">
          {adminFeatures.map((item, idx) => (
            <li
              key={idx} onClick={handleMenuClick}
              className="flex justify-center items-center p-2 md:border bg-orange-400/25 hover:bg-orange-400/25 md:m-3 rounded-lg relative w-[250px] m-1 hover:cursor-pointer shadow-lg shadow-black"
            >
              <div className="border-8 border-orange-500  md:h-[100%]  rounded-2xl absolute  -z-10 shadow-xl shadow-black left-0" ></div>
              <div className="font-bold  flex flex-col md:flex-row  ">
                
                <p className="md:ml-5">{item}</p>
                <p className="md:ml-5 ring ring-orange-500 rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center bg-orange-500"> {item==='Products' ? product.length : item==='Customers' ? customers.length :item==='Orders' ? order.length : ''}</p>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
      
    </div>
    
  );
}

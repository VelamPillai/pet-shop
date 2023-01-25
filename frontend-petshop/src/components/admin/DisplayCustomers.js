import React, { useContext, useEffect } from "react";

import { StoreContext } from "../../context/StoreContext.js";


export default function DisplayCustomers() {

    const { adminState,  adminDispatch } = useContext(StoreContext);
    
    const { customers } = adminState;
    useEffect(() => {
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
    },[])
    
  return (
      <div>
         
          Customers
          <ul className="grid grid-cols-3 gap-4">
              {customers && 
                  customers.map((item, idx) => <li key={idx} className="border-2 flex justify-evenly mb-2">
                      <p className="mr-5">{item.firstName} <br/>
                      {item.lastName}<br/>
                          {item.email}<br /></p>
                      <img src={item.profileImage} width='50px' alt='profile-pic' / >
                      
                  </li>)
              }
          </ul>
      </div>
  )
}

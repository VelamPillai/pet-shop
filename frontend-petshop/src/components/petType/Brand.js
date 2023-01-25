import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import PetMenu from './PetMenu.js';

import { StoreContext } from "../../context/StoreContext.js";
export default function Brand() {
  const navigate = useNavigate();
    const { productState,productDispatch } = useContext(StoreContext);

    const {  menuName, brand} = productState;
    
    const handleBrandClick = (e) => {
        e.preventDefault();
        productDispatch({
          type: "setSubMenuName",
          payload: { data: e.target.textContent },
         
        });
       
       
        
       navigate('/petSubMenuPage')

    }
    
  return (
      <div className="flex flex-col">
          <p className="flex justify-center items-center text-xl font-bold">
        {menuName.toUpperCase()}
          </p>
          <div>
        {/* Brand  */}
    <ul className="flex flex-row   flex-wrap justify-around m-1 ">
        {
            brand &&   brand.map((item, idx) => {
            return (
              <li
                key={idx} onClick={handleBrandClick}
                className="p-1 m-1 w-[300px] ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25 text-center"
              >
                 {item}
                  
                
              </li>
            );
          })}
      </ul>
      </div>
    </div>
  )
}

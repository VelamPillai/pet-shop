import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { StoreContext } from '../../context/StoreContext.js';


export default function PetMenu() {

  const navigate = useNavigate();

  const { productState,productDispatch} =
    useContext(StoreContext);
  
  const { menuName } = productState;

  const petMenu = [
    "Food",
    "Pharmacy",
    "Toys",
    "Treats and Bones",
    "Homes",
    "care and Maintenance",
    "Supplements",
  ];



  const handleClick =(e) => {   
    
    productDispatch({
      type: "setSubMenuName",
      payload: { data: e.target.textContent.split(' ')[1].toLowerCase() },
     
    });
   
   
    
   navigate('/petSubMenuPage')
    
  }
  
  return (
    <div>
      {(menuName === "dog" || menuName === "cat" || menuName === "sale %") &&
        <ul className="flex flex-row  flex-wrap justify-around m-3 ">
        {
          petMenu.map((item, idx) => {
            return (
              <li
                key={idx} onClick={handleClick}
                className="p-2 m-2 ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25"
              >
                { (menuName==='dog'||menuName==='cat' ) ?
                  `${menuName.slice(0, 1).toUpperCase()}${menuName.slice(1)} ${item}` : 
                 ( menuName==='sale %' && `${menuName.split(' ')[0].slice(0, 1).toUpperCase()}${menuName.slice(1,4)} ${item}`)  
                  
                }
              </li>
            );
          })}
      </ul>
        
        
      }
         
    </div>
  )
}

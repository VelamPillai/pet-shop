import React, { useContext ,useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { MdKeyboardArrowDown } from "react-icons/md";
import { StoreContext } from '../../context/StoreContext.js';


export default function PetMenu() {

  const navigate = useNavigate();
  const [hideOption, setHideOption] = useState(true);
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
    setHideOption((hideOption) => !hideOption);
      navigate('/petSubMenuPage')
    
  }

   const handleBtnClick = (e) => {
    e.preventDefault();
    setHideOption(!hideOption);
  }; 
  

  return (
    <div className='mt-[1rem]'>
    <div className= "hidden md:flex flex-wrap m-[1rem] justify-around items-center">
      {(menuName === "dog" || menuName === "cat" || menuName === "sale %") &&
        <ul className="flex flex-row  flex-wrap justify-around  ">
        {
          petMenu.map((item, idx) => {
            return (
              <li
                key={idx} onClick={handleClick}
                className="p-1 m-2 ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 text-sm hover:bg-green-100/25 "
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
    <div className="flex flex-col md:hidden justify-center items-center  p-5 w-full">
      
      <button
            
            type="button"
             onClick={handleBtnClick} 
            className=" mt-1 p-5 bg-orange-100/75 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-300 md:font-medium rounded-lg text-sm  md:px-4 py-2.5 text-center inline-flex justify-between items-center dark:bg-orange-600 "
           
          >
           Subcategories
           <MdKeyboardArrowDown  />
           </button> 
            
           {!hideOption && (
            <div
              className="z-10 p-5 bg-orange-100/75 divide-y divide-orange-100  shadow w-[200px]   "
              
            >
              {(menuName === "dog" || menuName === "cat" || menuName === "sale %") &&
              <ul className="p-1 space-y-1 text-xs md:text-sm text-orange-700  w-[100%]">
                {
                  petMenu.map((item, idx) => {
                    return (
                      <li key={idx} onClick={handleClick}
                      className="p-1  text-xs  hover:ring-green-500 hover:bg-orange-500/25 ">
                      { (menuName==='dog'||menuName==='cat' ) ?
                  `${menuName.slice(0, 1).toUpperCase()}${menuName.slice(1)} ${item}` : 
                 ( menuName==='sale %' && `${menuName.split(' ')[0].slice(0, 1).toUpperCase()}${menuName.slice(1,4)} ${item}`)  
                  
                }
                    </li>
                    )
                  })
                }


                
                </ul>
                }
                </div>
)}
          
      </div>


    </div>
  )
}

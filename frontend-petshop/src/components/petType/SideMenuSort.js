import React,{useState,useContext} from 'react'

import { StoreContext } from '../../context/StoreContext.js';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SideMenuSort() {
  const {productDispatch,productState} =
    useContext(StoreContext);

  const { sortOption ,sideMenuProduct, originalSideMenuProduct } = productState
  const [hideOption, setHideOption] = useState(true);


  const handleSortClick = (e) => {
    e.preventDefault();
    productDispatch({ type: "setSortOption", payload: { data: e.currentTarget.value } });
   
    e.currentTarget.value==='Price(high-low)' &&
    sideMenuProduct.sort((a, b) => Number(b.price) - Number(a.price)) 
    e.currentTarget.value === 'Price(low-high)' &&
    sideMenuProduct.sort((a, b) => Number(a.price) - Number(b.price)) 
    e.currentTarget.value==='Recommended' && productDispatch({ type: "setSideMenuProduct", payload: { data:[...originalSideMenuProduct] } });
    setHideOption((hideOption) => !hideOption);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    setHideOption(!hideOption);
  };
  return (
    <div>
        <div>
          <button
            className=" text-xs bg-orange-100/75 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-300 md:font-medium rounded-lg md:text-sm  md:px-4 py-2.5 text-center inline-flex items-center dark:bg-orange-600 "
            type="button"
            onClick={handleBtnClick}
          >
            Sort: {sortOption}
            <MdKeyboardArrowDown className="ml-2" />
          </button> 

          
          {!hideOption && (
            <div
              className="z-10  bg-orange-100 divide-y divide-orange-100 rounded-lg shadow w-[200px] md:w-[280px] dark:bg-orange-700 "
              
            >
              <ul className="p-3 space-y-1 text-xs md:text-sm text-orange-700 ">
                <li>
                  <div className="flex p-2 rounded hover:bg-orange-100/50">
                    <div className="flex items-center h-5">
                      <input
                        name="sortOption"
                        type="radio"
                        value="Recommended"
                        className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 focus:ring-orange-500  "
                        onChange={handleSortClick}
                      />
                    </div>
                    <div className="ml-2 text-xs md:text-sm ">
                      <label className="md:font-medium text-gray-900 ">
                        <div>Recommended</div>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex p-2 rounded hover:bg-orange-100/50">
                    <div className="flex items-center h-5">
                      <input
                        name="sortOption"
                        type="radio"
                        value="Price(high-low)"
                        className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 focus:ring-orange-500 "
                        onChange={handleSortClick}
                      />
                    </div>
                    <div className="ml-2 text-xs md:text-sm ">
                      <label className="md:font-medium text-gray-900 ">
                        <div>Price(high-low)</div>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex p-2 rounded hover:bg-orange-100/50">
                    <div className="flex items-center h-5">
                      <input
                        name="sortOption"
                        type="radio"
                        value="Price(low-high)"
                        className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 focus:ring-orange-500 "
                        onChange={handleSortClick}
                      />
                    </div>
                    <div className="ml-2 text-xs md:text-sm ">
                      <label className="md:font-medium text-gray-900 ">
                        <div>Price(low-high)</div>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          
      </div>
      
    </div>
  )
}

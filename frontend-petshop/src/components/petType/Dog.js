import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowDown } from "react-icons/md";

export default function Dog() {
  const navigate = useNavigate();

    const [sortOption, setSortOption] = useState("Recommended");
    const [hideOption,setHideOption] =  useState(true)

  const handleSortClick = (e) => {
    e.preventDefault();
      setSortOption(e.target.value);
      setHideOption((hideOption)=>!hideOption)
  };
    
    const handleBtnClick = (e) => {
        e.preventDefault();
        setHideOption(false)

    }
  
  const dogMenu = [
    "Dog Food",
    "Dog Pharmacy",
    "Dog Toys",
    "Dog Treats and Bones",
    "Dog Homes",
    "care and Maintenance",
    "Supplements",
  ];

  return (
    <div className="flex flex-col">
      <p className="flex justify-center items-center text-xl font-bold">Dog</p>

      <div>
        <ul className="flex flex-row justify-between m-3">
          {/* dog menu */}
          {dogMenu.map((item, idx) => {
            return (
              <li
                key={idx}
                className="p-2  ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row justify-between m-3">
        {/* products */}
        <p>
          <span className="font-bold">2222</span> products
        </p>
        {/* search - drop down menu - filter */}
        <div>
          <button
            className=" bg-orange-100/75 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-orange-600 "
                      type="button"
                      onClick={handleBtnClick}
          >
            Sort: {sortOption}
                      <MdKeyboardArrowDown className="ml-2" />
                      
          </button>

          {/* <div>
                      <input type="radio" name="sortOption" value="Recommended" onChange={ handleSortClick } className="mr-2 "/>
                      <label>Recommended</label><br />
                      <input type="radio" name="sortOption" value="Price(low - high)" onChange={ handleSortClick } className="mr-2 "/>
                      <label >Price(low - high)</label><br />
                      <input type="radio" name="sortOption" value="Price(high-low)" onChange={ handleSortClick } className="mr-2 "/>
                      <label >Price(high-low)</label><br />
                  </div> */}
           {!hideOption &&  <div
            className="z-10  bg-white divide-y divide-orange-100 rounded shadow w-60 dark:bg-orange-700 "
            style={{
              position: "absolute",
              inset: "auto auto 0px 0px",
              margin: "0px",
              transform: "translate3d(54rem, -10rem, 0px)",
            }}
          >
            <ul className="p-3 space-y-1 text-sm text-orange-700 ">
            <li>
                <div className="flex p-2 rounded hover:bg-orange-100/50">
                  <div className="flex items-center h-5">
                    <input
                      name="sortOption"
                      type="radio"
                      value="Recommanded"
                                          className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 focus:ring-orange-500 "
                                          onChange={handleSortClick}
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label className="font-medium text-gray-900 ">
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
                  <div className="ml-2 text-sm">
                    <label className="font-medium text-gray-900 ">
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
                  <div className="ml-2 text-sm">
                    <label className="font-medium text-gray-900 ">
                      <div>Price(low-high)</div>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>}
          
        </div>
      </div>
      <div>
        {/* side menu */}
        <p>Side menu</p>
        {/* products card */}
        <p>Display pf Products</p>
      </div>
      <div>Payment methods</div>
    </div>
  );
}

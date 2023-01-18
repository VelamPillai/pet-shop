import React,{useState} from 'react'

import { MdKeyboardArrowDown } from "react-icons/md";

export default function Sort() {

  const [sortOption, setSortOption] = useState("Recommended");
  const [hideOption, setHideOption] = useState(true);

  const handleSortClick = (e) => {
    e.preventDefault();
    setSortOption(e.target.value);
    setHideOption((hideOption) => !hideOption);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    setHideOption(false);
  };
  return (
    <div>
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
          {!hideOption && (
            <div
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
            </div>
          )}
        </div>
    </div>
  )
}

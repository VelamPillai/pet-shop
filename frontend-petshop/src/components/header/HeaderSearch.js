import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import { StoreContext } from "../../context/StoreContext.js";

export default function HeaderSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  
  const { productState ,productDispatch} = useContext(StoreContext);

  const { product } = productState;
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
     
      productDispatch({
        type: 'setSearchedProduct',
        payload:{data:product.filter((item) => (item.petName === search || item.brand===search || item.productName===search || item.productArrival===search)&& item)}
      })
      setSearch('');
      navigate('/searchedProduct')
    }
   
  }
  return (
    
    <div className="w-48 mt-[20px] md:mt-[-20px] ">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <AiOutlineSearch onClick={ handleSearch} className=" text-orange-800 hover:text-green-500  " />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-orange-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none hover:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm hover:bg-orange-300/50"
          placeholder="Search for Product..."
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          onKeyDown ={ handleSearch}
        />
      </label>
    </div>
    
  );
}

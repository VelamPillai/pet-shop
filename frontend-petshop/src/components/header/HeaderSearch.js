import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function HeaderSearch() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-48 ">
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                 <AiOutlineSearch  className=" text-orange-800  focus:text-green-500 "/>
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-orange-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm"
          placeholder="Search for Product..."
          type="text"
          name="search"
        />
      </label>
      
    </div>
  );
}

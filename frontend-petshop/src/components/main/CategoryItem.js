import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { StoreContext } from "../../context/StoreContext.js";
export default function CategoryItem({ item }) {
  const { title } = item;

  const navigate = useNavigate();

  const {  productDispatch } = useContext(StoreContext);

 

  const categoriesHandler = () => {
    productDispatch({
      type: "setMenuName",
      payload: { data: title.toLowerCase() },
    });

    navigate("/petMainPage");
  };

  return (
    <div onClick={categoriesHandler} className="relative">
     
      <img className="w-full object-cover " src={item.img} alt="cat-img"></img>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full flex-col ">
        <h4 className="text-center mt-2 text-3xl font-semibold text-white">
          {item.title}
        </h4>
        <button className="rounded-md border-0 px-4 py-2 bg-orange-400 my-3 cursor-pointer text-white">
          Shop {item.title} now
        </button>
      </div>
      
    </div>
  );
}

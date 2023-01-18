import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dog() {
  const navigate = useNavigate();
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
          {dogMenu.map((item) => {
            return (
              <li className="p-2  ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25">
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
          <label for="sort">Sort:</label>
          <select name="dog-product-sort" id="dog-product-sort">
            <option value="">Recommended</option>
            <option value="bestseller">Best Seller</option>
            <option value="newest-items">Newest items</option>
            <option value="low-price">Price (low to high)</option>
            <option value="high-price">Price (high to low)</option>
          </select>
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

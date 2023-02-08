import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const adminFeatures = [
  "Product",
  "Customers",
  /*  "displaySingleCustomer", */
  "Orders",
  /* "displaySingleOrder", */
];
export default function Admin() {
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();

  const handleAdminClick = (e) => {
    e.preventDefault();
    setDisplay((display) => !display);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    e.target.textContent === "Product"
      ? navigate("/displayProduct")
      : e.target.textContent === "Customers"
      ? navigate("/displayCustomers")
      : e.target.textContent === "Orders"
      ? navigate("/displayOrders")
      : navigate("/admin");
  };
  return (
    <div>
      <p
        className=" text-xl flex justify-center items-center  font-bold text-shadow  sm:mt-[1rem]"
        onClick={handleAdminClick}
      >
        Admin
      </p>
      {display && (
        <ul className="flex flex-col  sm:flex-row justify-center flex-wrap p-1 rounded-lg">
          {adminFeatures.map((item, idx) => (
            <li
              key={idx}
              onClick={handleMenuClick}
              className="flex justify-center items-center  sm:p-2  sm:border bg-orange-200/25 hover:bg-orange-400/25  sm:m-3 rounded-lg "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

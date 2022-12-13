import React from 'react';
import { FaUserCircle, FaCartPlus } from 'react-icons/fa';
export default function HeaderMenu() {
  return (
    <div className="flex text-4xl  ">
      <FaUserCircle className="mx-4  border text-6xl border-orange-500 rounded p-2 " />
      <div className="flex justify-center items-center  border border-orange-500  text-4xl rounded">
        <FaCartPlus className="mr-3  p-2 " />
        <p className="text-lg p-2  border-l border-orange-500 ">$0.00</p>
      </div>
    </div>
  );
}

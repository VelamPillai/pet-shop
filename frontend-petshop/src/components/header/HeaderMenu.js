import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaCartPlus } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { homepageState } = useContext(StoreContext);

  const { user } = homepageState;

  const navigateToUser = () => {    
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex text-4xl  ">
      {user ? null : (
        <FaUserCircle
          className=" mx-2 md:mx-4  border md:text-6xl border-orange-500 rounded p-2 hover:cursor-pointer"
          onClick={navigateToUser}
        />
      )}

      <div className="md:flex justify-center items-center  border border-orange-500  text-4xl hidden  rounded">
        <FaCartPlus className="mr-3  p-2  hover:cursor-pointer" />
        <p className="text-lg p-2  border-l hover:cursor-pointer border-orange-500 ">
          $0.00
        </p>
      </div>
    </div>
  );
}

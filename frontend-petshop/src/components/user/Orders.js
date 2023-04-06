import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { StoreContext } from "../../context/StoreContext";

export default function Orders() {
  const { homepageState, productState, productDispatch } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const { user } = homepageState;
  const { order } = productState;

  //admin Order
  //console.log('admin order', order)

  let userOrder = [];
  let adminOrder = [];
  order.map((item) => adminOrder.push(item._id));
  user &&
    user.ordersId.map(
      (item) => adminOrder.includes(item) && userOrder.push(item)
    );

  //profile handler
  const profileHandler = (e) => {
    user &&
      (e.target.textContent === "Account"
        ? navigate("/account")
        : e.target.textContent === "Profile"
        ? navigate("/profile")
        : navigate("/orders"));
  };

  //displaySingleOrder
  const displaySingleOrder = (orderId) => {
    console.log(orderId);

    fetch(` /orders/userOrders/${orderId}`, {
      method: "GET",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          productDispatch({
            type: "setSingleOrder",
            payload: { data: result.data },
          });

          navigate("/userOrderCard");
        } else {
          toast.error(result.message.message);
        }
      });
  };
  return (
    <div>
      <p></p>
      <p className="flex justify-center items-center text-[1rem] font-bold text-shadow ">
        Orders
      </p>
      <div className="flex  flex-col justify-center items-center  w-[100%]  lg:border mx-auto my-[1rem] md:m-[1rem] rounded shadow-black shadow-lg">
        <div className="flex flex-col w-[40%]  p-5">
          <div className="flex justify-end items-center flex-col md:flex-row">
            <button
              onClick={profileHandler}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Account
            </button>
            <button
              onClick={profileHandler}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-[1rem] md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Profile
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col w-[100%] md:h-[100%] md:w-[60%] lg:border p-3  bg-gradient-to-r from-orange-500 to-yellow-600 text hover:bg-gradient-to-l md:mr-5 rounded-tl-[10rem] rounded-br-[10rem]">
          <div className="flex justify-center items-start md:w-[100%] ">
            <p className="font-bold">Orders Information</p>
          </div>
          <div className="flex  items-center  md:p-5 flex-col md:w-[75%]">
            <ul>
              {user && userOrder.length ? (
                userOrder.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={() => displaySingleOrder(item)}
                      className="hover:text-xl  hover:text-green-200"
                    >
                      <p className="m-5 cursor-pointer flex gap-3 justify-center items-center ">
                        {" "}
                        <MdOutlineProductionQuantityLimits className="font-bold text-lg text-green-200 " />{" "}
                        {item}
                      </p>
                    </li>
                  );
                })
              ) : (
                <li>No Orders </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

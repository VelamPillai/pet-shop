import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { CgProfile } from "react-icons/cg";

import { StoreContext } from "../../context/StoreContext";

export default function Profile() {
  const { homepageState, homepageDispatch } = useContext(StoreContext);
  const navigate = useNavigate();
  const { user } = homepageState;

  //profile handler
  const profileHandler = (e) => {
    user &&
      (e.target.textContent === "Account"
        ? navigate("/account")
        : e.target.textContent === "Profile"
        ? navigate("/profile")
        : navigate("/notification"));
  };

  //delete handler
  const deleteHandler = (id) => {
    fetch(`   /users/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Account has Deleted");
          setTimeout(() => {
            localStorage.removeItem("token");
            homepageDispatch({ type: "setUser", payload: { data: "" } });
            navigate("/");
          }, 2000);
        }
      });
  };

  return (
    <>
      <p className="flex justify-center items-center text-[1rem] font-bold  ">
        Profile
      </p>
      <div className="flex  flex-col justify-center items-center  xl:flex-row w-[100%]  lg:border mx-auto my-[1rem] md:m-[1rem] rounded shadow-black shadow-lg">
        <div className="flex flex-col w-[40%]  p-5">
          <img
            src={user.profileImage}
            alt="profile"
            className="m-auto rounded-[50%]  md:visible"
          />
          <div className="flex justify-center items-center flex-col md:flex-row">
            <button
              onClick={profileHandler}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Account
            </button>
            {/* <button
              onClick={profileHandler}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-[1rem] md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Notification
            </button> */}
            <button
              onClick={() => deleteHandler(user._id)}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px]  m-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col w-[100%] md:h-[100%] md:w-[60%] lg:border p-3  bg-gradient-to-r from-orange-500 to-yellow-600 text hover:bg-gradient-to-l md:mr-5 rounded-tl-[10rem] rounded-br-[10rem]">
          <div className="flex justify-center items-start md:w-[100%] ">
            <CgProfile className=" mr-2" />
            <p className="font-bold">Profile Information</p>
          </div>
          <div className="flex  items-center  md:p-5 flex-col md:w-[75%]">
            <p className="m-5"> first Name : {user.firstName}</p>
            <p className="m-5">Last Name : {user.lastName}</p>
            <p className="m-5">Email : {user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import toast, { Toaster } from 'react-hot-toast';

export default function Logout() {
  const { homepageState, homepageDispatch } = useContext(StoreContext);
  
  const {user} = homepageState
  const navigate = useNavigate()

  //onClick - logout  Handler - p element
   const logoutHandler = () => {   
    localStorage.removeItem('token');    
    homepageDispatch({ type: 'setUser', payload: { data: '' } })  
    toast.success('logged out successfully')
    setTimeout(() => navigate('/'),2000);
  } 

  //onClick -profile Handler - p element
  const profileHandler = () => {
  navigate('/profile')
}

  return (
    <div className="flex justify-center items-center flex-row border border-orange-500 text-xs ml-[2rem] md:text-lg rounded box-border md:mr-3">
      <p onClick={profileHandler} className="p-1 md:mr-3  md:p-2 border-r md:border-b-0  border-orange-500  hover:cursor-pointer hover:border-collapse   hover:animate-pulse hover:scale-105">Hi! {user.firstName}</p>
      
      <p  onClick={logoutHandler} className=" p-1 md:mr-3 md:p-2  hover:cursor-pointer   hover:animate-pulse hover:scale-105" >
        Log Out
      </p>
      <Toaster />
    </div>
  );
}

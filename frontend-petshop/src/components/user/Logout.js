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
    /* homepageDispatch({type:'setUerIconStatus'}) */
    toast.success('logged out successfully')
    setTimeout(() => navigate('/'),2000);
  }

  //onClick -profile Handler - p element
  const profileHandler = () => {
  navigate('/profile')
}

  return (
    <div className="flex justify-center items-center  border border-orange-500  text-2xl rounded">
      <p onClick={ profileHandler} className="mr-3  p-2  hover:cursor-pointer">Hi! {user.firstName}</p>
      <p  onClick={logoutHandler} className="text-sm p-2  border-l hover:cursor-pointer border-orange-500 " >
        Log Out
      </p>
      <Toaster />
    </div>
  );
}

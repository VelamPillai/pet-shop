import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import toast, { Toaster } from 'react-hot-toast';

export default function Logout() {
  const { homepageState, homepageDispatch } = useContext(StoreContext);
  
 

  //const {user,  userIconStatus} = homepageState
  const {user} = homepageState
  const navigate = useNavigate()

  const logoutHandler = () => {   
    localStorage.removeItem('token');    
    homepageDispatch({ type: 'setUser', payload: { data: '' } })
    /* homepageDispatch({type:'setUerIconStatus'}) */
    toast.success('logged out successfully')
    setTimeout(() => navigate('/'),2000);


  }

  return (
    <div className="flex justify-center items-center  border border-orange-500  text-2xl rounded">
      <p className="mr-3  p-2  hover:cursor-pointer">Hi! {user.firstName}</p>
      <p  onClick={logoutHandler} className="text-sm p-2  border-l hover:cursor-pointer border-orange-500 " >
        Log Out
      </p>
      <Toaster />
    </div>
  );
}

import React from "react";
import {  useNavigate } from "react-router-dom";



export default function User() {
  const navigate = useNavigate();
  const navigateToSignup = () => navigate("/user/signup", { replace: true });
  const navigateToLogin = () => navigate("/user/login", { replace: true });

  return (
    <div className="flex justify-center items-center m-[2rem]">
       <button className='bg-orange-300 w-[100px] h-[100px] m-[1rem] p-[1rem]' onClick={navigateToLogin}>Log in</button>
      <button className='bg-orange-300 w-[100px] h-[100px] m-[1rem] p-[1rem]' onClick={navigateToSignup}>Sign Up</button>
     
    </div>
  );
}

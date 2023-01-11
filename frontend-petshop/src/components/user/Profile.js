import React, { useContext } from 'react';

import { CgProfile } from "react-icons/cg";

import { StoreContext } from "../../context/StoreContext";

export default function Profile() {
     const { homepageState, homepageDispatch } = useContext(StoreContext);

      const {user} = homepageState
  return (
    <>
      <p className='flex justify-center items-center text-[2rem] font-bold m-5'>Profile</p>
      <div className="flex  flex-col justify-center items-center  xl:flex-row w-[100%]  lg:border m-auto lg:m-[1rem] rounded shadow-black shadow-xs ">
      <div className='flex flex-col w-[40%] lg:border p-5'>
          <img src={user.profileImage} alt='profile' className='m-auto rounded-[50%] hidden md:visible' />
          <div className='flex justify-center items-center md:flex-row'>
          <button className="bg-orange-400 justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">
            Account
            </button>
            <button className="bg-orange-400 justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">
            Notification
            </button>
            <button className="bg-orange-400 justify-center items-center w-[100px] md:w-[200px]  m3-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">
            Delete
          </button>
          </div>
        </div>
     
        <div className='flex justify-center items-center flex-col w-[100%] md:w-[60%] lg:border p-5 mb-5 bg-gradient-to-r from-orange-500 to-yellow-600 text'>
         
          
          <div className='flex justify-center items-start md:w-[100%] '>
            <CgProfile className=' mr-2'/>
            <p className='font-bold'>Profile Information</p>
            </div>
          <div className='flex  items-center p-2 md:p-5 flex-col md:w-[75%]'>
            <p className='m-5'> first Name : {user.firstName}</p>
            <p className='m-5' >Last Name : {user.lastName}</p>
            <p className='m-5' >Email : {user.email}</p>
           </div>
          
          
        </div>
       
     </div>
     

    </>
  )
}

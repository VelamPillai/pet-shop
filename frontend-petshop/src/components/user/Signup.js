import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { StoreContext } from '../../context/StoreContext';

import { TiTick } from "react-icons/ti";
import SignupImage from "../../image/signupImage.png";

export default function Signup() { 
  const navigate = useNavigate();
  const {  signupDispatch,signupState} = useContext(StoreContext);
 

  //file to binary
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  
  //onSubmit - registerUser Handler -form element

   const registerUser =async(e) => {
    e.preventDefault();
     
     let formData = new FormData(e.target);
     let profileImage = await toBase64 (formData.get('profileImage'))//convert file to binary
     let data = new FormData();
      data.append('firstName', e.target.firstName.value)
     data.append('lastName', e.target.lastName.value);
     data.append('email', e.target.email.value);
     data.append('password', e.target.password.value);
      data.append('profileImage',profileImage)   
     
     for (let key of data.keys()) {
      console.log(key)
    }
     for (let values of data.values()) {
       console.log(values)
     } 
     signupDispatch({type:'clearForm'})

    //post newUser to server
    fetch('http://localhost:8000/users/signup', { method: 'POST', body: data })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          let name = result.data.firstName.concat(' ', result.data.lastName);
          toast.success(`Hallo ${name} ! Welcome to Pet-Store !!! please Login to place orders.`);
          setTimeout(() => navigate('/login'), 2000);
        } else {
          if (Array.isArray(result.message)) {
            const errMessage = result.message.reduce(
              (overallError, errItem) => (overallError += ` * ${errItem}  \n `),
              ''
            );
            console.log(result.message);
            toast.error(`${errMessage}`);
          } else {
            toast.error(result.message);
            
          }
        }
      });
  };  

  return (
    <div className="flex justify-center items-center flex-col xl:flex-row w-[100%]  lg:border m-auto lg:m-[1rem] rounded shadow-black shadow-xs ">
      <Toaster />
      <img
        src={SignupImage}
        alt="login-pic"
        className="rounded  drop-shadow-xl lg:w-[700px] lg:h-[700px] lg:ml-[6rem] "
      />
        
      
      <div className="flex flex-col justify-center items-center border lg:border-0 w-[100%]  p-[1rem] mb-[1rem] md:p-[3rem] lg:h-[900px] ">
      <p className="m-[.25rem] md:m-[1rem] font-bold text-center ">CREATE AN ACCOUNT</p>
       {/*  <form className=" flex flex-col" onSubmit={(e) => {
          e.preventDefault();
          signupDispatch({ type: 'signup', payload: { data: e } })
        }
         
        }> */}
        <form  className=" flex flex-col justify-center items-center w-[100%]" onSubmit={registerUser}> 
          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            First Name :{' '}
            <input
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              type="text"
              name="firstName"
              onChange={(e) => signupDispatch({
                type: "onChange",
                payload: { name: e.target.name, data: e.target.value }
              })
              }
              value={signupState.firstName}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            Last Name :{' '}
            <input
              type="text"
              name="lastName"
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              onChange={(e) => signupDispatch({
                type: "onChange",
                payload: { name: e.target.name, data: e.target.value }
              })
              }
              value={signupState.lastName}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            Email :{' '}
            <input
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              type="email"
              name="email"
              onChange={(e) => signupDispatch({
                type: "onChange",
                payload: { name: e.target.name, data: e.target.value }
              })}
              value={signupState.email}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs md:text-md  md:items-start m-[.25rem] md:m-[1rem] ">
            Password:{' '}
            <input
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              type="password"
              name="password"
              onChange={(e) => signupDispatch({
                type: "onChange",
                payload: { name: e.target.name, data: e.target.value }
              })}
              value={signupState.password}
            />
          </label>
          <div className="flex  flex-wrap md:flex-nowrap  align-start pl-2 md:pl-0  ">
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>{" "}
              Mind. 8 Characters
            </div>
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              {" "}
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>{" "}
              AaBbCc
            </div>
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>{" "}
              0-9
            </div>{" "}
            <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
              {" "}
              <sup>
                {" "}
                <TiTick />{" "}
              </sup>
              !@#$%
            </div>
          </div>
          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            Profile Image:{' '}
            <input
               className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              type="file"
              name="profileImage"              
              onChange={(e) => {             
                
                signupDispatch({
                type: "onChange",
                payload: { name: e.target.name, data: e.target.files[0] }/* for image file  */
              })
              }
            }
            />
          </label>
          <button className="bg-orange-500 justify-center items-center w-[100px] md:w-[400px]  my-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">
            SIGN UP
          </button>
        </form>
          
      </div>
    </div>
  );
}

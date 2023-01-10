

import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
//import { StoreContext } from '../../context/StoreContext';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const navigate = useNavigate();


  

  //to get the form data
  const registerUser = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    //post newUser to server
    fetch('http://localhost:8000/users/signup', { method: 'POST', body: data })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          let name = result.data.firstName.concat(' ', result.data.lastName);
          toast.success(`Hallo ${name} ! Welcome to Pet-Store`);
          setTimeout(() => navigate('/user/login'), 2000);
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
            //console.log(result)
          }
        }
      });
  };
  return (
    <div className="flex justify-center items-center flex-col my-[2rem] ">
      <Toaster />
      <p className="m-[1rem] font-bold">CREATE AN ACCOUNT</p>
      <div className="flex justify-center items-center border p-[3rem]">
        <form className=" flex flex-col" onSubmit={registerUser}>
          <label className="flex justify-center items-center m-[1rem]">
            First Name :{' '}
            <input
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-2"
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>
          <label className="flex justify-center items-center m-[1rem]">
            Last Name :{' '}
            <input
              type="text"
              name="lastName"
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-2"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          <label className="flex justify-center items-center m-[1rem]">
            Email :{' '}
            <input
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-10"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="flex justify-center items-center m-[1rem]">
            Password:{' '}
            <input
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-2"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label className="flex justify-center items-center m-[1rem]">
            Profile Image:{' '}
            <input
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-2"
              type="file"
              name="profileImage"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="bg-orange-500 w-[200px]  mx-auto my-[1rem] p-3 rounded shadow-black shadow-md focus:bg-green-600 ">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

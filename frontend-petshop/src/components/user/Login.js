import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { StoreContext } from '../../context/StoreContext.js'

export default function Login() {
  const navigate = useNavigate();

   const {  setUser ,setState,state} = useContext(StoreContext);
 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setState(!state);
  },[])

  const loginHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      body: data,
    })
      .then((res) => {
        const token = res.headers.get('token');
        localStorage.setItem('token', token);
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          toast.success('Logged in successfully');
          console.log(result.data);
          setUser(result.data);

          
         // setStatus(true);
          setTimeout(() => navigate('/'), 2000);
        } else {
          toast.error(result.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center flex-col my-[2rem] ">
      <Toaster />
      <p className="m-[1rem] font-bold">LOG IN</p>
      <div className="flex justify-center items-center border p-[3rem]">
        <form onSubmit={loginHandler} className=" flex flex-col">
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
          <button className="bg-orange-500 w-[200px]  mx-auto my-[1rem] p-3 rounded shadow-black shadow-md focus:bg-green-600 ">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

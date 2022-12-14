import React, { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center flex-col my-[2rem] ">
      <p className="m-[1rem] font-bold">CREATE AN ACCOUNT</p>
      <div className="flex justify-center items-center border p-[3rem]">
        <form className=" flex flex-col">
          <label className="flex justify-center items-center m-[1rem]">
            First Name :{" "}
            <input
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-2"
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>
          <label className="flex justify-center items-center m-[1rem]">
            Last Name :{" "}
            <input
              type="text"
              name="lastName"
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-2"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          <label className="flex justify-center items-center m-[1rem]">
            Email :{" "}
            <input
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-10"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="flex justify-center items-center m-[1rem]">
            Password:{" "}
            <input
              className="border border-slate-200 rounded w-[500px] h-[50px] ml-2"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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

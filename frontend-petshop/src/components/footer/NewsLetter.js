import React, { useState } from "react";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { GrFacebookOption, GrYoutube, GrInstagram } from "react-icons/gr";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex  flex-col  sm:flex-row justify-around items-center bg-orange-600 text-white ">
      <MdOutlineLocalPostOffice className="text-xl  sm:text-5xl" />
      <p className="uppercase text-sm  sm:text-xl">join our Newsletter </p>
      <form className=" flex  flex-col border border-orange-500  m-3  sm:m-5 p-1   sm:w-2/4 bg-white  sm:relative  sm:p-3">
        <input
          text="email"
          placeholder="Your email address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="  sm:w-[500px] "
        />
        <button className="text-sm bg-black  sm:absolute  sm:right-0  sm:p-4  sm:top-[.5px]  sm:w-[150px] w-[100px]">
          Subscribe
        </button>
      </form>
      <div className="flex pb-2">
        <GrFacebookOption className="mr-3  sm:text-3xl  hover:text-black" />
        <GrYoutube className="mr-3  sm:text-3xl  hover:text-black" />
        <GrInstagram className="mr-3  sm:text-3xl  hover:text-black" />
      </div>
    </div>
  );
}

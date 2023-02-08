import React, { useState } from 'react';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { GrFacebookOption, GrYoutube, GrInstagram } from 'react-icons/gr';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  return (
    <div className="flex  flex-col md:flex-row justify-around items-center bg-orange-600 text-white ">
      <MdOutlineLocalPostOffice className="text-xl md:text-5xl" />
      <p className="uppercase text-sm md:text-xl">join our Newsletter </p>
      <form className=" flex  flex-col border border-orange-500  m-3 md:m-5 p-1  md:w-2/4 bg-white md:relative md:p-3">
        <input
          text="email"
          placeholder="Your email address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className=" md:w-[500px] "
        />
        <button className="text-sm bg-black md:absolute md:right-0 md:p-4 md:top-[.5px] md:w-[150px] w-[100px]">
          Subscribe
        </button>
      </form>
      <div className="flex pb-2">
        <GrFacebookOption className="mr-3 md:text-3xl  hover:text-black" />
        <GrYoutube className="mr-3 md:text-3xl  hover:text-black" />
        <GrInstagram className="mr-3 md:text-3xl  hover:text-black" />
      </div>
    </div>
  );
}

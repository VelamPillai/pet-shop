import React, { useState } from 'react';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { GrFacebookOption, GrYoutube, GrInstagram } from 'react-icons/gr';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  return (
    <div className="flex justify-around items-center bg-orange-600 text-white ">
      <MdOutlineLocalPostOffice className="text-5xl" />
      <p className="uppercase">join our Newsletter </p>
      <form className="border border-orange-500  m-6 p-2 w-2/4 bg-white relative">
        <input
          text="email"
          placeholder="Your email address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button className="uppercase bg-black absolute right-0 p-2 top-0">
          Subscribe
        </button>
      </form>
      <div className="flex">
        <GrFacebookOption className="mr-3 text-3xl" />
        <GrYoutube className="mr-3 text-3xl" />
        <GrInstagram className="mr-3 text-3xl" />
      </div>
    </div>
  );
}

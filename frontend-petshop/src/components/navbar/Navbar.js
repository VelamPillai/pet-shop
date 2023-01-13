import { NavLink, Outlet } from "react-router-dom";
import React, { useState } from "react";

import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 w-full h-[180px]  md:h-[300px] flex justify-between items-center px-10 md:px-16 shadow bg-white text-black md:text-3xl z-10">
      
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <NavLink to="/about" className=" navHover my-3 border-box p-1">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className=" navHover my-2 border-box p-1">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonials" className=" navHover my-2 border-box p-1">
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className=" navHover my-2 border-box p-1">
            contact
          </NavLink>
        </li>
      </ul>
      {/* hamburger */}
      <div
        className="md:hidden text-3xl text-green-800 border-green-800 border-solid border-4 z-10"
        onClick={handleNavClick}
      >
        {nav ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden "
            : "absolute top-0 right-0 w-full h-[100vh]  bg-green-300 flex flex-col justify-center items-center md:hidden"
        }
      >
        <li className="py-6 text-3xl">
          <NavLink
            to="/about"
            className=" navHover my-3 border-box p-1"
            onClick={handleNavClick}
          >
            About
          </NavLink>
        </li>
        <li className="py-6 text-3xl">
          <NavLink
            to="/gallery"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick}
          >
            Gallery
          </NavLink>
        </li>
        <li className="py-6 text-3xl">
          <NavLink
            to="/testimonials"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick}
          >
            Testimonials
          </NavLink>
        </li>
        <li className="py-6 text-3xl">
          <NavLink
            to="/contact"
            className=" navHover my-2 border-box p-1"
            onClick={handleNavClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;

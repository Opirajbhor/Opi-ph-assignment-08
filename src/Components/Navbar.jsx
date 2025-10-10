import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router";

const Items = (
  <div className="flex items-center gap-[32px]">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `text-lg font-medium ${
          isActive
            ? "border-b-2 border-purple-500 bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent"
            : "text-gray-700"
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/Apps"
      className={({ isActive }) =>
        `text-lg font-medium ${
          isActive
            ? "border-b-2 border-purple-500 bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent"
            : "text-gray-700"
        }`
      }
    >
      Apps
    </NavLink>

    <NavLink
      to="/Installation"
      className={({ isActive }) =>
        `text-lg font-medium ${
          isActive
            ? "border-b-2 border-purple-500 bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent"
            : "text-gray-700"
        }`
      }
    >
      Installation
    </NavLink>
  </div>
);
const Navbar = () => {
  return (
    <>
      <div className="text-black lg:max-w-[1440px] flex items-center justify-between p-3  mx-auto">
        {/* Logo */}
        <Link to='/'>
        <div className="flex items-center gap-2">
          <img className="h-10" src="../../assets/logo.png" alt="Logo" />
          <h1 className="font-bold text-[16px] bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
            HERO.IO
          </h1>
        </div>
        </Link>
        
        {/* items */}
        <div className="lg:flex hidden">{Items}</div>
        {/* buttons */}
        <div>
          <Link to="https://github.com/Opirajbhor">
            <button className="btn text-white border-none bg-gradient-to-r from-violet-700 to-purple-500">
              {" "}
              <FaGithub /> Contribute
            </button>
          </Link>
        </div>
      </div>

      {/* items for mobile */}
      <div className=" items-center flex justify-center border-y p-1.5 text-center lg:hidden gap-[32px]">
        {Items}
      </div>
    </>
  );
};

export default Navbar;

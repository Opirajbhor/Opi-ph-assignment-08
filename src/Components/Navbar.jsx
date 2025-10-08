import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router";

const Items = (
  <div className="flex items-center gap-[32px]">
    <Link to='/'><h1>Home</h1></Link>
   <Link to='/Apps'>  <h1>Apps</h1></Link>
   <Link to='/Installation'><h1>Installation</h1></Link>
    
  </div>
);
const Navbar = () => {
  return (
    <>
      <div className="text-black lg:max-w-[1440px] flex items-center justify-between p-3  mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-10" src="../../assets/logo.png" alt="Logo" />
          <h1 className="font-bold text-[16px] bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
            SOFTSTORE
          </h1>
        </div>
        {/* items */}
        <div className="lg:flex hidden">
          {Items}
        </div>
        {/* buttons */}
        <div>
          <button className="btn text-white border-none bg-gradient-to-r from-violet-700 to-purple-500">
            {" "}
            <FaGithub /> Contribute
          </button>
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

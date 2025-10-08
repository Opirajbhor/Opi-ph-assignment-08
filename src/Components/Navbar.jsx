import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Items = (
  <div className="flex items-center gap-[32px]">
    <h1>Home</h1>
    <h1>Apps</h1>
    <h1>Installation</h1>
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
          <button className="btn  border-none bg-gradient-to-r from-violet-700 to-purple-500">
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

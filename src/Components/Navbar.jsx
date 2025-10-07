import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-black lg:max-w-[1440px] flex items-center justify-between p-3  mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="h-10" src="../../assets/logo.png" alt="Logo" />
        <h1 className="font-bold text-[16px] bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">SOFTSTORE</h1>
      </div>

      <div className="flex items-center gap-[32px]">
        <h1>Home</h1>
        <h1>Apps</h1>
        <h1>Installation</h1>
      </div>

      <div>
        <button className="btn border-none bg-gradient-to-r from-violet-700 to-purple-500"> <FaGithub /> Contribute</button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrAppleAppStore } from "react-icons/gr";
import { Link } from "react-router";

const HeroSec = () => {
  return (
    <div className="bg-white mt-[40px]">
        {/* hero tittle */}
      <h1 className="lg:text-[72px] text-[36px] text-center">
        We Build <br />
        <span className="bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent font-bold">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="lg:text-[24px] text-[18px] text-center text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
{/* Store Buttons */}
      <div className="flex gap-4 items-center justify-center my-5">
        <Link to='https://play.google.com/store/apps?hl=en'>

        <button className="lg:w-[250px] w-[160px] inline-flex lg:font-extrabold font-bold lg:text-2xl text-[16px] border-gray-300 border-1 lg:p-[18px] p-3 text-center rounded-[4px] cursor-pointer"> 
            <span className="lg:text-3xl text-[16px]"><IoLogoGooglePlaystore /></span>
            <span className="ml-5">Google Play</span>
            </button>
        </Link>
        <Link to="https://apps.apple.com/us/app/apple-store/id375380948"><button className="lg:w-[250px] w-[160px] inline-flex lg:font-extrabold font-bold lg:text-2xl text-[16px] border-gray-300 border-1 lg:p-[18px] p-3 text-center rounded-[4px] cursor-pointer"> 
            <span className="lg:text-3xl text-[16px]"><GrAppleAppStore /></span>
            <span className="ml-5">Apple Store</span>
            </button></Link>
      </div>

      {/* hero Banner */}
      <div className="flex items-center w-auto mx-5 lg:ml-[110px]">
        <img src="../../assets/hero.png" alt="Hero Banner" />
      </div>
    </div>
  );
};

export default HeroSec;

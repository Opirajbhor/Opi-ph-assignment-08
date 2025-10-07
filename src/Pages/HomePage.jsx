import React from "react";
import Navbar from "../Components/Navbar";
import HeroSec from "../Components/HeroSec";

const HomePage = () => {
  return (
    <div>
      <div className="h-[70px] w-full bg-white ">
        <Navbar></Navbar>
      </div>

      <div className="lg:max-w-[1170px] mx-auto">
        <HeroSec></HeroSec>
      </div>
    </div>
  );
};

export default HomePage;

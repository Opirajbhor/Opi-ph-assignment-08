import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSec from "../Components/HeroSec";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import TrendingApps from "../Components/TrendingApps";


const HomePage = () => {
  const[apiData, setApiData] = useState([])

useEffect(()=>{
  fetch('/Data.json')
  .then(res=>res.json())
  .then(data=> setApiData(data))
},[])



  return (
    <div>

      {/* -------------Hero-------------- */}
      <div className="lg:max-w-[1170px] mx-auto">
        <HeroSec></HeroSec>
      </div>
      <div>
        
      <Banner></Banner>
      </div>

      {/* Trending Apps Section */}
      <div>
        <TrendingApps apiData={apiData}></TrendingApps>
      </div>

      
    </div>
  );
};

export default HomePage;

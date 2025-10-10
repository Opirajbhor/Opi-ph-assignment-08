import React from "react";
import AppsCard from "./AppsCard";
import { Link } from "react-router";

const TrendingApps = ({ apiData }) => {
  const popularapps = [1,2,3,4,5,6,7,8]
  const homeAppData = apiData.filter(app=> popularapps.includes(app.id))
  // console.log("homeAppData", homeAppData)

  return (
    <div>
      <div className="text-center mt-6 ">
        <h1 className="lg:text-[48px] text-[24px] font-bold">Trending Apps</h1>
        <p className="text-[#627382] text-[12px] font-normal lg:text-[20px]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Trending Apps item */}
      <div className="lg:max-w-[1440px] text-center mx-auto my-7 ">
        <div className="grid lg:grid-cols-4 grid-cols-2 justify-center items-center lg:gap-[16px] gap-[10px] ml-8">

        {/* -------------------------- */}
        {homeAppData.map((item) => (
            <AppsCard key={item.id} item={item}></AppsCard>
        ))}
        </div>

      </div>


       <div className="flex items-center justify-center mt-[40px] mb-[80px]">
          <Link to="/Apps">
          <button className="btn w-[145px] text-white font-bold border-none bg-gradient-to-r from-violet-700 to-purple-500">
             Show All
          </button>
          </Link>
        </div>
    </div>
  );
};

export default TrendingApps;

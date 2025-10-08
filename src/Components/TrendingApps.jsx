import React from "react";
import AppsCard from "./AppsCard";


const TrendingApps = () => {
  return (
    <div className="text-center mt-6 ">
      <h1 className="lg:text-[48px] text-[24px] font-bold">Trending Apps</h1>
      <p className="text-[#627382] text-[12px] font-normal lg:text-[20px]">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* Trending Apps item */}
      <div className="lg:max-w-[1170px] mx-auto my-7">
        {/* -------------------------- */}
        <AppsCard></AppsCard>
      </div>
    </div>
  );
};

export default TrendingApps;

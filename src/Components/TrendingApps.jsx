import React from "react";
import AppsCard from "./AppsCard";

const TrendingApps = ({ apiData }) => {
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
        <div className="lg:grid lg:grid-cols-4 items-center lg:gap-[16px] ">

        {/* -------------------------- */}
        {apiData.map((item) => (
            <AppsCard key={item.id} item={item}></AppsCard>
        ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;

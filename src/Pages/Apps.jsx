import React from "react";
import AppsCard from "../Components/AppsCard";
import { useLoaderData } from "react-router";

const Apps = () => {
  const data = useLoaderData();
  return (
    <div className="text-center mt-[80px] lg:max-w-[1440px] lg:mx-auto">
      <h1 className="text-[48px] font-bold">Our All Applications</h1>
      <p className="text-[20px] text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex items-center justify-between mx-auto my-[40px]">
        <h2 className="text-[24px] font-semibold">(132) Apps Found</h2>
        {/* search */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      {/* apps */}
      <div className="lg:grid lg:grid-cols-4 items-center justify-between lg:gap-[16px] lg:max-w-[1440px] lg:mx-auto ">
        {data.map((item) => (
          <AppsCard item={item}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;

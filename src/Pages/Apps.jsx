import React, { useState } from "react";
import AppsCard from "../Components/AppsCard";
import { Link, useLoaderData } from "react-router";

const Apps = () => {
  const dataLoader = useLoaderData();
  const [data, setData] = useState(dataLoader);

  // search
  const [userInput, setUserInput] = useState("");
  const filterApp = (e) => {
    const userValue = e.target.value;
    setUserInput(userValue);
    const searchApps = dataLoader.filter((app) =>
      app.title.toLowerCase().includes(userValue.toLowerCase())
    );
    setData(searchApps);
  };

  let checkData;
  if (data.length > 0) {
    checkData = (
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between lg:gap-[16px] lg:max-w-[1440px] lg:mx-auto ml-8">
        {data.map((item) => (
          <AppsCard key={item.id} item={item}></AppsCard>
        ))}
      </div>
    );
  } 
  else{
    checkData = <div className="flex flex-col items-center justify-center">
      <img src="../../assets/App-Error.png" alt="" />
      <div className="flex items-center justify-center mt-[40px] mb-[80px]">
          <Link to="/">
          <button className="btn w-[145px] text-white font-bold border-none bg-gradient-to-r from-violet-700 to-purple-500">
             Go Back!
          </button>
          </Link>
        </div>
      </div>
  }


    return (
      <div className="text-center mt-[80px] lg:max-w-[1440px] lg:mx-auto">
        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex flex-col gap-5 lg:flex-row items-center justify-between mx-auto my-[40px]">
          <h2 className="lg:text-[24px] text-[16px] font-semibold">
            ({data.length}) Apps Found
          </h2>
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
            <input
              onChange={filterApp}
              value={userInput}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>

        {/* apps */}
        <div >
          {checkData}
        </div>
      </div>
    );
};

export default Apps;

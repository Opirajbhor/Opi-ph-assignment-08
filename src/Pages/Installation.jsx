import React, { useState } from "react";
import { getStoredApp } from "../Utililties/AddtoDB";
import { useLoaderData } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Installation = () => {
  const data = useLoaderData();
  const installApps = getStoredApp();

  const installedAppArray = data.filter((app) => installApps.includes(app.id));

  const [installedAppData, setInstalledAppData] = useState(installedAppArray);

  // uninsall button
  const uninsallBtn = (id) => {
    const updatedApps = installedAppData.filter((app) => app.id !== id);
    setInstalledAppData(updatedApps);
    const updatedId = updatedApps.map((app) => app.id);
    localStorage.setItem("appList", JSON.stringify(updatedId));
    toast.error("Uninstall Completed");
  };

  // sort apps
  const [sortApps, setSortApps] = useState('');

  const handleSort = (type) => {
    setSortApps(type);
    if(type ==="High"){
      const sortedByHigh = [...installedAppData.sort((a,b)=>Number(a.downloads) - Number(b.downloads)) ]
      setInstalledAppData(sortedByHigh)
    }
    if(type ==="Low"){
      const sortedByLow = [...installedAppData.sort((a,b)=>Number(b.downloads) - Number(a.downloads)) ]
      setInstalledAppData(sortedByLow)
    }

 
  };

  return (
    <div>
      <div className="lg:max-w-[1440px] mx-auto">
        <div className="text-center mt-[80px] lg:max-w-[1440px] lg:mx-auto">
          <h1 className="lg:text-[48px] text-[28px] font-bold">
            Your Installed Apps
          </h1>
          <p className="lg:text-[20px] text-[12px] text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="flex flex-col gap-5 lg:flex-row items-center justify-between mx-auto my-[40px]">
            <h2 className="lg:text-[24px] text-[16px] font-semibold">
              {installedAppData.length} Apps Found
            </h2>
            {/* sort data */}
            <div>
              <details className="dropdown p-3 border-1 border-gray-300 rounded-10">
                <summary className=" m-1">Sort By Downloads</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  
                  <li>
                    <a onClick={()=>handleSort("Low")}>High to Low</a>
                  </li>
                  <li>
                    <a onClick={()=>handleSort("High")}> Low to High</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        {installedAppData.map((app) => (
          <div className="shadow-2xs border-1 border-gray-300 rounded-[8px] mb-3">
            {/* app */}
            <div className="flex items-center justify-between h-[118px]  mx-4">
              {/* left side info */}
              <div className="flex items-center  justify-center lg:gap-[20px] gap-[10px]">
                <img
                  className="bg-white lg:w-[100px] w-[60px]"
                  src={app.image}
                  alt=""
                />
                <div>
                  <h1 className="lg:text-[20px] text-[16px]text-green-500">
                    {app.title}
                  </h1>
                  <div className="flex gap-5">
                    {/* Donwloads */}
                    <div className="flex items-center">
                      <img
                        className="w-[16px] h -[16px]"
                        src="../../assets/icon-downloads.png"
                        alt=""
                      />
                      <h3 className="text-[16px] ">{app.downloads}M</h3>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center">
                      <img
                        className="w-[16px] h -[16px]"
                        src="../../assets/icon-ratings.png"
                        alt=""
                      />
                      <h3 className="text-[16px]">{app.ratingAvg}</h3>
                    </div>
                    {/* Download Size */}
                    <div className="flex items-center">
                      <h3 className="text-[16px] ">{app.size}MB</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side Uninstall Btn */}
              <div>
                <button
                  onClick={() => uninsallBtn(app.id)}
                  className="btn bg-[#00D390] text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Installed Apps */}
      </div>
      <Toaster />
    </div>
  );
};

export default Installation;

import React from "react";
import { getStoredApp } from "../Utililties/AddtoDB";
import { useLoaderData } from "react-router";

const Installation = () => {
  const data = useLoaderData();
  console.log("data", data);
  const installApps = getStoredApp();

  const installedAppData = data.filter((app) => installApps.includes(app.id));

  return (
    <div>
      <div className="lg:max-w-[1440px] mx-auto">
        <div className="text-center mt-[80px] lg:max-w-[1440px] lg:mx-auto">
          <h1 className="text-[48px] font-bold">Your Installed Apps</h1>
          <p className="text-[20px] text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="flex flex-col gap-5 lg:flex-row items-center justify-between mx-auto my-[40px]">
            <h2 className="lg:text-[24px] text-[16px] font-semibold">
             {installedAppData.length} Apps Found
            </h2>
          </div>
        </div>
        {installedAppData.map((app) => (
          <div>
            {/* app */}
            <div className="flex items-center justify-between h-[118px] border-1 mx-4">
              {/* left side info */}
              <div className="flex items-center justify-center gap-[20px]">
                <img className="w-[100px]" src={app.image} alt="" />
                <div>
                  <h1 className="text-[20px] text-green-500">{app.title}</h1>
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
                <button className="btn bg-[#00D390] text-white">
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Installed Apps */}
      </div>
    </div>
  );
};

export default Installation;

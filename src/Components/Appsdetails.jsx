import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import toast, { Toaster } from "react-hot-toast";
import { addToStoredDB } from "../Utililties/AddtoDB";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// chart
const dataChart = [
  { month: "Jan", sales: 12, profit: 5 },
  { month: "Feb", sales: 19, profit: 10 },
  { month: "Mar", sales: 8, profit: 4 },
  { month: "Apr", sales: 15, profit: 7 },
  { month: "May", sales: 9, profit: 3 },
];

const Appsdetails = () => {
  const { id } = useParams();
  const currentId = parseInt(id);
  const data = useLoaderData();

  // Installed apps array
  const [isInstalled, setIsInstalled] = useState([]);

  // data find
  const currentItem = data.find((item) => item.id === currentId);

  // install button logic
  const [isDisabled, setIsDisabled] = useState(false);
  let btnInitialText = `Install Now (${currentItem.size} MB)`;
  const [installBTn, setInstallBtn] = useState(btnInitialText);

  // check if item already exist to local storage
  useEffect(() => {
    const appListLocalStorage = localStorage.getItem("appList");
    if (!appListLocalStorage || !currentId) return;

    let applistArray = [];
    try {
      applistArray = JSON.parse(appListLocalStorage) || [];
    } catch (err) {
      applistArray = [];
    }

    if (applistArray.includes(currentId)) {
      setInstallBtn("Installed");
      setIsDisabled(true);
    } else {
      setInstallBtn(btnInitialText);
      setIsDisabled(false);
    }
  }, [currentId, btnInitialText]);

  // install function
  const handleInstall = (id) => {
    addToStoredDB(id);
    setIsInstalled(...data, currentItem);
    setInstallBtn("Installed");
    setIsDisabled(true);
    toast.success("Successfully Installed!");
  };


 
  return (
    <div className="lg:max-w-[1440px]">
      <div className="lg:max-w-[1440px]">
        {/* App Details */}
        <div className="lg:max-w-[1440px] max-w-[300px] lg:h-[300px] h-auto mx-auto flex lg:flex-row flex-col items-center justify-center gap-10 mt-7">
          <div className="lg:max-w-[600px] lg:h-[300px] flex items-center border-1 border-gray-300 rounded-2xl p-5 bg-white">
            <img
              className=" lg:w-[270px] w-[100px] "
              src={currentItem.image}
              alt={currentItem.title}
            />
          </div>
          <div className="lg:max-w-[600px]">
            <h1 className="lg:text-[32px] text-[20px] font-bold">
              {currentItem.title}{" "}
            </h1>
            <p>
              Developed by{" "}
              <span className="bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
                {currentItem.companyName}
              </span>
            </p>
            {/* Interective Details */}
            <div className="flex items-center justify-between lg:gap-[100px] gap-[20px] my-6">
              {/* Donwloads */}
              <div>
                <img
                  className="lg:w-[40px] w-[25px] "
                  src="../../assets/icon-downloads.png"
                  alt=""
                />
                <p className="text-[16px]">Downloads</p>
                <h3 className="lg:text-[40px] text-[25px] font-extrabold">
                  {currentItem.downloads}M
                </h3>
              </div>
              {/* Rating */}
              <div>
                <img
                  className="lg:w-[40px] w-[25px]"
                  src="../../assets/icon-ratings.png"
                  alt=""
                />
                <p className="lg:text-[16px] text-[14px]">Average Ratings</p>
                <h3 className="lg:text-[40px] text-[25px] font-extrabold">
                  {currentItem.ratingAvg}
                </h3>
              </div>
              {/* Reviews */}
              <div>
                <img
                  className="lg:w-[40px] w-[25px]"
                  src="../../assets/icon-review.png"
                  alt=""
                />
                <p className="text-[16px]">Average Reviews</p>
                <h3 className="lg:text-[40px] text-[25px] font-extrabold">
                  {currentItem.reviews}K
                </h3>
              </div>
            </div>

            {/* Install button */}
            <button
              disabled={isDisabled}
              onClick={() => handleInstall(currentId)}
              className="bg-[#00D390] cursor-pointer text-white w-240px text-center p-[20px] rounded-[4px]"
            >
              {installBTn}
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="lg:w-[1440px] w-[250px] lg:ml-[240px]">
          <h2 className="text-[20px] text-left p-3 ml-3 lg:text-[24px] mb-4">
            Ratings
          </h2>
          {
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={1440}
                height={256}
                data={currentItem.ratings}
                layout="vertical" // <-- horizontal bars
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          }
        </div>

        {/* Description */}
        <div className="lg:w-[1440px] lg:ml-[250px] px-4">
          <h3 className="text-[24px] font-bold mt-5">Description</h3>
          <p className="text-[16px] lg:text-[20px] my-5 text-justify">
            {currentItem?.description || "No description available."}
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Appsdetails;

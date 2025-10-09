import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const Appsdetails = () => {
  const { id } = useParams();
  const currentId = parseInt(id);
  const data = useLoaderData();

  const currentItem = data.find((item) => item.id === currentId);
  console.log(currentItem.ratings);

  return (
    <div className="mx-[80px]">
      <div>
        {/* App Details */}
        <div className="lg:max-w-[1440px] h-[300px] flex items-center justify-center gap-10 mt-7">
          <div className="lg:max-w-[600px] h-[300px] flex items-center border-1 border-gray-300 rounded-2xl p-5 bg-white">
            <img
              className=" w-[270px] "
              src={currentItem.image}
              alt={currentItem.title}
            />
          </div>
          <div className="lg:max-w-[600px]">
            <h1 className="text-[32px] font-bold">{currentItem.title} </h1>
            <p>
              Developed by
              <span className="bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
                {currentItem.companyName}
              </span>
            </p>
            {/* Interective Details */}
            <div className="flex items-center justify-between gap-[100px] my-6">
              {/* Donwloads */}
              <div>
                <img
                  className="w-[40px] h -[40px]"
                  src="../../assets/icon-downloads.png"
                  alt=""
                />
                <p className="text-[16px]">Downloads</p>
                <h3 className="text-[40px] font-extrabold">
                  {currentItem.downloads}M
                </h3>
              </div>
              {/* Rating */}
              <div>
                <img
                  className="w-[40px] h -[40px]"
                  src="../../assets/icon-ratings.png"
                  alt=""
                />
                <p className="text-[16px]">Average Ratings</p>
                <h3 className="text-[40px] font-extrabold">
                  {currentItem.ratingAvg}
                </h3>
              </div>

              {/* Reviews */}
              <div>
                <img
                  className="w-[40px] h-[40px]"
                  src="../../assets/icon-review.png"
                  alt=""
                />
                <p className="text-[16px]">Average Reviews</p>
                <h3 className="text-[40px] font-extrabold">
                  {currentItem.reviews}K
                </h3>
              </div>
            </div>

            {/* Install button */}
            <button className="bg-[#00D390] cursor-pointer text-white w-240px text-center p-[20px] rounded-[4px]">
              Install Now <span>{currentItem.size}MB</span>
            </button>
          </div>
        </div>

        {/* Chart */}
        
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={currentItem.ratings}>
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        

        {/* Description */}
        <div>
          <h3 className="text-[24px] font-bold mt-5">Description</h3>
          <p className="text-[20px] my-5 text-justify">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appsdetails;

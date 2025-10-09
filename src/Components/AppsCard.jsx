import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppsCard = ({ item }) => {
  const {
    image,
    title,
    companyName,
    id,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = item;
  return (
    <Link to={`/Appsdetails/${id}`}>
      <div className="lg:w-[348px] w-[120px]  lg:h-auto shadow-2xl my-4 cursor-pointer">
       <div className="flex items-center justify-center">
         <img
          className="lg:w-[316px] w-[50px] rounded-[4px] mx-auto lg:h-[316px] h-[50px]"
          src={image}
          alt=""
        />
       </div>
        <h1 className="lg:text-[20px] text-[14px]  rounded-[4px]">{title}</h1>
        <div className=" flex items-center justify-between mx-2 my-1">
          {/* donwload icon-text */}
          <div className="flex items-center bg-[#f1f5e8] gap-1 p-2 text-[#00d390] lg:text-[16px] text-[10px]">
            <IoDownloadOutline />
            <p>{downloads}M</p>
          </div>
          {/* Rating */}
          <div className="flex items-center bg-[#fff0e1] text-[#ff8811] gap-1 p-2 lg:text-[16px] text-[10px]">
            <FaStar />
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;

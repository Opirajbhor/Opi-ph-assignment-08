import React from 'react';
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const AppsCard = () => {
    return (
        <div className="lg:w-[348px] lg:h-auto shadow-2xl ">
          <img className="lg:h-[316px] rounded-[4px] mx-auto lg:w-[316px]" src="" alt="" />
          <h1 className="lg:text-[20px] rounded-[4px]">Forest: Focus for Productivity</h1>
          <div className=" flex items-center justify-between mx-2 my-1">
            {/* donwload icon-text */}
            <div className="flex items-center bg-[#f1f5e8] gap-1 p-2 text-[#00d390] lg:text-[16px]">
            <IoDownloadOutline />
            <p>5M</p>

            </div> 
           {/* Rating */}
           <div className="flex items-center bg-[#fff0e1] text-[#ff8811] gap-1 p-2 lg:text-[16px]">
            <FaStar />
           <p>5</p>
           </div>
          </div>
        </div>
    );
};

export default AppsCard;
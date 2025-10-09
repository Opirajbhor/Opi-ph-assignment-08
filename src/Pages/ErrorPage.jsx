import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <img src="../../assets/error-404.png" alt="" />
      {/* button */}
      <div className="mt-[50px]">
        <Link to="/">
          <button className="btn text-white border-none bg-gradient-to-r from-violet-700 to-purple-500">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

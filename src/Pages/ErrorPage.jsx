import React from "react";
import { useNavigate } from "react-router";
import bannerImage from "../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
      
      <img src={bannerImage} alt="404" className="w-72 md:w-96 mb-6" />

      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Oops, page not found!
      </h1>

      
      <p className="text-gray-500 mt-4 max-w-md">
        The page you are looking for is not available.
      </p>

      
      <button
        onClick={() => navigate("/")} 
        className="mt-6 px-6 py-2 bg-[#9F62F2] text-white rounded-md hover:opacity-90"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;

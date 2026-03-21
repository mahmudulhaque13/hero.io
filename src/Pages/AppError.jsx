import React from "react";
import { useNavigate } from "react-router";
import errorApp from "../assets/App-Error.png";

const AppError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      {/* IMAGE */}
      <img src={errorApp} alt="App Not Found" className="w-72 md:w-96 mb-6" />

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        OPPS!! APP NOT FOUND
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-500 mt-4 max-w-md">
        The App you are requesting is not found in our system. Please try
        another apps.
      </p>

      {/* BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-2 bg-[#9F62F2] text-white rounded-md hover:opacity-90"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppError;

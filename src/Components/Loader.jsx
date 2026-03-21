import React from "react";

const Loader = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <span className="loading loading-ring loading-lg"></span>
      <p className="mt-4 text-gray-500">Loading...</p>
    </div>
  );
};

export default Loader;

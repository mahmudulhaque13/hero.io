import React from "react";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <div className="my-10">
          <h1 className="text-center font-bold text-3xl">Trending Apps</h1>
          <p className="text-center text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

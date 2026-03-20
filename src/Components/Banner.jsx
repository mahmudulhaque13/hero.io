import React from "react";
import bannerImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-5xl my-10">
          We Build <br />
          <span className="font-extrabold text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="text-gray-500 my-5">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="space-x-5 mx-auto flex justify-center my-8">
          <button className=" rounded-lg px-3 border border-gray-200">
            <a
              className="flex justify-center items-center font-bold"
              href="https://play.google.com/store/games?hl=en&pli=1"
            >
              <img
                src="https://img.icons8.com/fluency/48/google-play.png"
                alt=""
              />
              Google Play
            </a>
          </button>
          <button className=" rounded-lg px-3 border border-gray-200">
            <a
              className="flex justify-center items-center font-bold"
              href="https://www.apple.com/store"
            >
              <img
                src="https://img.icons8.com/fluency/48/apple-app-store.png"
                alt=""
              />
              App Store
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

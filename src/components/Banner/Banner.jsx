import React from "react";
import banner from "../../assets/Banner-min.jpg";
import "./banner.css";
const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[60vh] object-cover transform scale-x-[-1]"
        src={banner}
        alt="banner"
      />
      <div className="absolute top-40 left-42">
        <h1 className="sora-semibold text-5xl text-white ">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="sora-light text-2xl text-white mt-4">
          Discover rare collectibles, luxury goods, and vintage <br /> treasures
          in our curated auctions
        </p>
        <button className="sora-medium text-xl py-4 px-8 text-[#010000] bg-white rounded-4xl mt-4">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;

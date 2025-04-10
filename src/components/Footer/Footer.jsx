import React from "react";

const Footer = () => {
  return (
    <div className="text-center my-32">
      <div>
        <h1 className="poppins-medium text-[#003EA4] text-3xl">
          Auction
          <span className="text-[#FFD337] text-3xl poppins-bold">Gallery</span>
        </h1>
      </div>
      <div className="sora-regular text-xl flex justify-center gap-5 mt-4">
        <h3>Bid.</h3>
        <h3>Win.</h3>
        <h3>Own.</h3>
      </div>
      <div>
        <ul className="flex justify-center gap-11 mt-5">
          <li className="poppins-regular text-xl">Home</li>
          <li className="poppins-regular text-xl">Auctions</li>
          <li className="poppins-regular text-xl">Categories</li>
          <li className="poppins-regular text-xl">How to works</li>
        </ul>
        <p className="sora-regular text-xl mt-8">
          © 2025 AuctionHub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

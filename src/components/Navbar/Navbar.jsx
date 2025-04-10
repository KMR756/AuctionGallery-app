import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto my-6">
      <div className="navbar bg-white flex justify-between items-center">
        <div className="">
          <h1 className="text-[#003EA4] poppins-medium text-4xl">
            Auction
            <span className="text-[#FFD337] poppins-extrabold text-4xl">
              Gallery
            </span>
          </h1>
        </div>
        <div className="">
          <ul className=" flex    gap-40">
            <li className="poppins-regular text-xl">
              <a>Home</a>
            </li>
            <li className="poppins-regular text-xl">
              <a>Auctions</a>
            </li>
            <li className="poppins-regular text-xl">
              <a>Categories</a>
            </li>
            <li className="poppins-regular text-xl">
              <a>How to works</a>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle mr-6">
              <div className="indicator  rounded-full  bg-[#EBF0F5] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#0E2954]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item  text-white bg-[#0E2954] rounded-full ">
                  9
                </span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

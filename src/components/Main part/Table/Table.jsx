import React from "react";
import { FaRegHeart } from "react-icons/fa";
const Table = () => {
  return (
    <div className="bg-[#EBF0F5] ">
      <div className="w-10/12 mx-auto py-32">
        <div>
          <div>
            <h3 className="sora-medium text-4xl text-[#0E2954]">
              Active Auctions
            </h3>
            <p className="sora-regular text-xl mt-5">
              Discover and bid on extraordinary items
            </p>
          </div>

          <div className="flex justify-between">
            {/* table  left*/}
            <div className="mt-8 bg-white rounded-3xl w-[65%]">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="sora-regular text-xl">Items</th>
                      <th className="sora-regular text-xl text-center">
                        Current Bid
                      </th>
                      <th className="sora-regular text-xl text-center">
                        Time Left
                      </th>
                      <th className="sora-regular text-xl text-center">
                        Bid Now
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="sora-regular text-[18px] text-[#0E2954] ">
                              Hart Hagerty
                            </div>
                            <div className="sora-regular text-[14px] text-[#0E2954]">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sora-medium text-[18px] text-[#0E2954]">
                        $ currect bit
                      </td>
                      <td className="sora-medium text-[18px] text-center text-[#0E2954]">
                        2 Days left
                      </td>
                      <th className="text-center">
                        <button className="cursor-pointer  text-[#0E2954]">
                          <FaRegHeart size={35} />
                        </button>
                      </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="sora-regular text-[18px] text-[#0E2954] ">
                              Hart Hagerty
                            </div>
                            <div className="sora-regular text-[14px] text-[#0E2954]">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sora-medium text-[18px] text-[#0E2954]">
                        $ currect bit
                      </td>
                      <td className="sora-medium text-[18px] text-center text-[#0E2954]">
                        2 Days left
                      </td>
                      <th className="text-center">
                        <button className="cursor-pointer  text-[#0E2954]">
                          <FaRegHeart size={35} />
                        </button>
                      </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="sora-regular text-[18px] text-[#0E2954] ">
                              Hart Hagerty
                            </div>
                            <div className="sora-regular text-[14px] text-[#0E2954]">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sora-medium text-[18px] text-[#0E2954]">
                        $ currect bit
                      </td>
                      <td className="sora-medium text-[18px] text-center text-[#0E2954]">
                        2 Days left
                      </td>
                      <th className="text-center">
                        <button className="cursor-pointer  text-[#0E2954]">
                          <FaRegHeart size={35} />
                        </button>
                      </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="sora-regular text-[18px] text-[#0E2954] ">
                              Hart Hagerty
                            </div>
                            <div className="sora-regular text-[14px] text-[#0E2954]">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sora-medium text-[18px] text-[#0E2954]">
                        $ currect bit
                      </td>
                      <td className="sora-medium text-[18px] text-center text-[#0E2954]">
                        2 Days left
                      </td>
                      <th className="text-center">
                        <button className="cursor-pointer  text-[#0E2954]">
                          <FaRegHeart size={35} />
                        </button>
                      </th>
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="sora-regular text-[18px] text-[#0E2954] ">
                              Hart Hagerty
                            </div>
                            <div className="sora-regular text-[14px] text-[#0E2954]">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sora-medium text-[18px] text-[#0E2954]">
                        $ currect bit
                      </td>
                      <td className="sora-medium text-[18px] text-center text-[#0E2954]">
                        2 Days left
                      </td>
                      <th className="text-center">
                        <button className="cursor-pointer  text-[#0E2954]">
                          <FaRegHeart size={35} />
                        </button>
                      </th>
                    </tr>
                    {/* row 6 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="sora-regular text-[18px] text-[#0E2954] ">
                              Hart Hagerty
                            </div>
                            <div className="sora-regular text-[14px] text-[#0E2954]">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sora-medium text-[18px] text-[#0E2954]">
                        $ currect bit
                      </td>
                      <td className="sora-medium text-[18px] text-center text-[#0E2954]">
                        2 Days left
                      </td>
                      <th className="text-center">
                        <button className="cursor-pointer  text-[#0E2954]">
                          <FaRegHeart size={35} />
                        </button>
                      </th>
                    </tr>
                    {/* row 7 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="sora-regular text-[18px] text-[#0E2954] ">
                              Hart Hagerty
                            </div>
                            <div className="sora-regular text-[14px] text-[#0E2954]">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sora-medium text-[18px] text-[#0E2954]">
                        $ currect bit
                      </td>
                      <td className="sora-medium text-[18px] text-center text-[#0E2954]">
                        2 Days left
                      </td>
                      <th className="text-center">
                        <button className="cursor-pointer  text-[#0E2954]">
                          <FaRegHeart size={35} />
                        </button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                </table>
              </div>
            </div>
            {/* right */}
            <div className="w-[30%] h-fit mt-8 bg-white rounded-3xl">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th colSpan={4} className="text-center">
                        <div className="flex justify-center items-center">
                          <h1 className="sora-medium text-3xl text-[#0E2954] flex gap-4 py-3 ">
                            <FaRegHeart size={35} /> Favorite Items
                          </h1>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* favorites */}
                    <tr>
                      <td colSpan={4} className="text-center">
                        <div className="py-12">
                          <h3 className="sora-medium text-2xl">
                            No favorites yet
                          </h3>
                          <p className="sora-regular text-xl mt-6">
                            Click the heart icon on any item to add it to your
                            favorites
                          </p>
                        </div>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td
                        colSpan={3}
                        className="sora-regular text-2xl pl-10 py-8"
                      >
                        Total bids Amount
                      </td>
                      <td className="sora-medium text-2xl text-right pr-10">
                        $0000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

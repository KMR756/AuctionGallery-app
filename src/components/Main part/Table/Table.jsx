import React from "react";

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
                      <th>Items</th>
                      <th>Current Bid</th>
                      <th>Time Left</th>
                      <th>Bid Now</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>currect bit</div>
                      </td>
                      <td>time left</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          bit now
                        </button>
                      </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>currect bit</div>
                      </td>
                      <td>time left</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          bit now
                        </button>
                      </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>currect bit</div>
                      </td>
                      <td>time left</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          bit now
                        </button>
                      </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>currect bit</div>
                      </td>
                      <td>time left</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          bit now
                        </button>
                      </th>
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>currect bit</div>
                      </td>
                      <td>time left</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          bit now
                        </button>
                      </th>
                    </tr>
                    {/* row 6 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>currect bit</div>
                      </td>
                      <td>time left</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          bit now
                        </button>
                      </th>
                    </tr>
                    {/* row 7 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src="" alt="" />
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>currect bit</div>
                      </td>
                      <td>time left</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          bit now
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
                          <h1>Favorite Items</h1>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* favorites */}
                    <tr>
                      <td colSpan={4} className="text-center">
                        <div>
                          <h3>No favorites yet</h3>
                          <p>
                            Click the heart icon on any item to add it to your
                            favorites
                          </p>
                        </div>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td colSpan={3}>Total bids Amount</td>
                      <td>$0000</td>
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

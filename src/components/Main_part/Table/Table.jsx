import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [favDatas, setFavDatas] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalBid, setTotalBid] = useState(0);

  useEffect(() => {
    const total = favDatas.reduce(
      (sum, item) => sum + Number(item.currentBidPrice),
      0
    );
    setTotalBid(total);
  }, [favDatas]);

  const handleFavItem = (data) => {
    if (!favorites.includes(data.id)) {
      setFavDatas([...favDatas, data]);
      setFavorites([...favorites, data.id]);
      toast.success(`${data.title} added to favorites!`);
    }
  };

  const handleRemoveItem = (data) => {
    setFavDatas(favDatas.filter((item) => item.id !== data.id));
    setFavorites(favorites.filter((id) => id !== data.id));
    toast.error(`${data.title} removed from favorites!`);
  };

  useEffect(() => {
    fetch("./bidItems.json")
      .then((res) => res.json())
      .then((data) => {
        const parsedData = data.map((item) => ({
          ...item,
          currentBidPrice: Number(item.currentBidPrice),
        }));
        setTableData(parsedData);
      });
  }, []);

  return (
    <div className="bg-[#EBF0F5]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
            <div className="mt-8 bg-white rounded-3xl w-[65%]">
              <div className="overflow-x-auto">
                <table className="table">
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
                    {tableData.map((data) => (
                      <tr key={data.id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <img
                              className="w-[110px] h-[80px] object-cover"
                              src={data.image}
                              alt={data.title}
                            />
                            <div>
                              <div className="sora-regular text-[18px] text-[#0E2954]">
                                {data.title}
                              </div>
                              <div className="sora-regular text-[14px] text-[#0E2954]">
                                {data.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center sora-medium text-[16px] text-[#0E2954]">
                          $ {data.currentBidPrice.toLocaleString()}
                        </td>
                        <td className="sora-medium text-[16px] text-center text-[#0E2954]">
                          {data.timeLeft} Days left
                        </td>
                        <th className="text-center">
                          <button
                            onClick={() => handleFavItem(data)}
                            disabled={favorites.includes(data.id)}
                            className={`cursor-pointer transition-colors ${
                              favorites.includes(data.id)
                                ? "opacity-50 cursor-not-allowed"
                                : "text-[#0E2954] hover:text-red-700"
                            }`}
                          >
                            {favorites.includes(data.id) ? (
                              <FaHeart
                                size={35}
                                className="text-red-700 fill-current"
                              />
                            ) : (
                              <FaRegHeart size={35} />
                            )}
                          </button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-[30%] h-fit mt-8 bg-white rounded-3xl">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={4} className="text-center">
                        <div className="flex justify-center items-center">
                          <h1 className="sora-medium text-3xl text-[#0E2954] flex gap-4 py-3">
                            <FaRegHeart size={35} /> Favorite Items
                          </h1>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {favDatas.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="text-center">
                          <div className="py-12">
                            <h3 className="sora-medium text-2xl">
                              No favorites yet
                            </h3>
                            <p className="sora-regular text-xl mt-6">
                              Click the heart icon to add favorites
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      favDatas.map((favData) => (
                        <tr key={favData.id} className="flex">
                          <td className="flex gap-4 w-full items-center p-4">
                            <img
                              className="w-[80px] h-[60px] object-cover"
                              src={favData.image}
                              alt={favData.title}
                            />
                            <div className="flex flex-col flex-grow">
                              <div className="sora-regular text-[16px] text-[#0E2954]">
                                {favData.title}
                              </div>
                              <div className="flex gap-4 mt-2">
                                <span className="sora-medium text-[16px] text-[#0E2954]">
                                  $ {favData.currentBidPrice.toLocaleString()}
                                </span>
                                <span className="sora-medium text-[16px] text-[#0E2954]">
                                  {favData.timeLeft} Days left
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(favData)}
                              className="text-red-600 hover:text-red-800 transition-colors ml-auto"
                            >
                              <FaTimes size={20} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                  <tfoot className="flex justify-between border-t-2">
                    <h3 className="sora-regular text-2xl pl-10 py-8">
                      Total bids Amount
                    </h3>
                    <h3 className="sora-medium text-2xl text-right pr-10 py-8">
                      ${totalBid.toLocaleString()}
                    </h3>
                  </tfoot>
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

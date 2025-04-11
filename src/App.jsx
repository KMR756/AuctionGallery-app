import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Table from "./components/Main_part/Table/Table";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [favDatas, setFavDatas] = useState([]);
  const handleFavItem = (data) => {
    setFavDatas([...favDatas, data]);
    console.log(data);
  };
  console.log(favDatas);

  return (
    <>
      <Navbar />
      <Banner />
      <Table handleFavItem={handleFavItem} />
      <Footer />
    </>
  );
}

export default App;

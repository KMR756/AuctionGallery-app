import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Table from "./components/Main_part/Table/Table";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Table />
      <Footer />
    </>
  );
}

export default App;

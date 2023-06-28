import React from "react";
import { Route, Routes } from "react-router-dom";
import  Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import  Home from "./pages/Home";
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="relative sm:-8  min-h-screen flex flex-row">
      <div className="sm:flex hidden  relative ">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 bg-[#F2F9FF]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
    </>
  );
};

export default App;

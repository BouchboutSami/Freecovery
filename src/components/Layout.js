import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center font-SofiaRegular justify-between pt-8 gap-20">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

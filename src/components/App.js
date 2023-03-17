import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center font-SofiaRegular gap-5">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;

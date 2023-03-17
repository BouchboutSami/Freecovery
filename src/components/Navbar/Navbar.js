import React from "react";
import Button from "@mui/material/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer w-full h-[15%] flex items-center px-[5%] justify-between">
      <div className="navLogo font-SofiaBold text-4xl">
        <span className="text-yellowIWD">F</span>ree
        <span className="text-greenIWD">C</span>overy
      </div>
      <div className="navPages">
        <ul className="flex flex-row justify-center items-center gap-20">
          <li className="">Home</li>
          <li className="">Articles</li>
          <li className="">Events</li>
          <li className="">MyProgress</li>
        </ul>
      </div>
      <div className="navAccount flex flex-row gap-20">
        <button className="font-SofiaBold text-lg py-2 px-5 hover:bg-greenIWD rounded-md">
          LOGIN
        </button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F9D207",
            color: "black",
            fontFamily: "SofiaBold",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#F9D207",
            },
          }}
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

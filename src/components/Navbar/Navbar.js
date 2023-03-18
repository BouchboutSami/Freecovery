import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer w-full h-[15%] flex items-center px-[5%] justify-between">
      <Link to="/">
        <div className="navLogo font-SofiaBold text-4xl flex items-center -translate-y-[10%]">
          <span className="text-yellowIWD">F</span>ree
          <span className="text-greenIWD">C</span>overy
        </div>
      </Link>

      <div className="navPages">
        <ul className="flex flex-row justify-center items-center gap-20 text-lg font">
          <Link to="/">
            <li className="">Home</li>
          </Link>
          <Link to="/trainings">
            <li className="">Trainings</li>
          </Link>
          <Link to="/articles">
            <li className="">Articles</li>
          </Link>
          <Link to="/events">
            <li className="">Events</li>
          </Link>
          <Link to="/myProgress">
            <li className="">MyProgress</li>
          </Link>
        </ul>
      </div>
      <div className="navAccount flex flex-row gap-20">
        <Link to="/login">
          <button className="font-SofiaBold text-lg py-2 px-5 hover:bg-greenIWD rounded-md hover:text-[#ffffff]">
            LOGIN
          </button>
        </Link>
        <Link to="/signup">
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
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

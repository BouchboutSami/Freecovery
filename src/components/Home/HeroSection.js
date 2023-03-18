import React from "react";
import Button from "@mui/material/Button";
import HeroSectionImage from "./HeroSectionImage.png";

const HeroSection = () => {
  return (
    <div className="w-full flex px-[5%] items-center">
      <div className="leftSide flex flex-col w-[55%] gap-10">
        <h1 className="text-5xl font-SofiaBold leading-[5rem]">
          BREAKING <span className="bg-yellowIWD px-2 leading-0">FREE</span>{" "}
          FROM
          <br />
          ADDICTION, ONE STEP
          <br />
          <span className="bg-yellowIWD px-2">AT A TIME</span>
        </h1>
        <p className="font-sofiaBold text-grayIWD font-bold">
          Empowering You to Overcome Addiction and Embrace a Brighter Future
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2ACF8A",
            width: 1 / 4,
            color: "white",
            fontFamily: "SofiaBold",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#2ACF8A",
            },
          }}
        >
          MyProgress
        </Button>
      </div>
      <div className="rightSide w-[45%] flex justify-center">
        <img src={HeroSectionImage} alt="Hero Section cover" className="" />
      </div>
    </div>
  );
};

export default HeroSection;

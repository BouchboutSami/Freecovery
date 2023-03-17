import React from "react";
import HeroSection from "./HeroSection";

const Posts = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <HeroSection />
      <div className="mt-10 w-2/5 h-1 bg-[#1E1E1E] rounded-md"></div>
      <div className="container"></div>
    </div>
  );
};

export default Posts;

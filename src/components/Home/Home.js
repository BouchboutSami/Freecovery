import React from "react";
import HeroSection from "./HeroSection";
import Posts from "./Posts";
import ArticlesAside from "./ArticlesAside";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20">
      <HeroSection />
      <div className="divider w-2/5 h-1 bg-[#1E1E1E] rounded-md"></div>
      <div className="container flex w-full pl-[5%]">
        <Posts />
        <ArticlesAside />
      </div>
    </div>
  );
};

export default Home;

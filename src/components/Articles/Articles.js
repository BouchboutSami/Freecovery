import React from "react";
import CardArticle from "./CardArticle";

const Articles = () => {
  return (
    <div className="flex flex-col gap-16 items-center w-full">
      <h1 className="text-4xl font-SofiaBold">All Articles</h1>
      <div className="w-2/3 grid grid-cols-3 justify-center gap-6">
        <CardArticle index="0" />
        <CardArticle index="1" />
        <CardArticle index="2" />
        <CardArticle index="3" />
        <CardArticle index="4" />
        <CardArticle index="5" />
      </div>
    </div>
  );
};

export default Articles;

import React from "react";
import SingleArticleAside from "./SingleArticleAside";

const ArticlesAside = () => {
  return (
    <div className="w-2/5 flex flex-col items-center gap-10">
      <h2 className="text-xl font-SofiaBold border-b-4 pb-1 mb-8 border-greenIWD">
        Articles
      </h2>
      <SingleArticleAside
        author="Division of Population Health"
        title="Drinking too much alcohol can harm your health"
        index="0"
      />
      <SingleArticleAside
        author="Dr Larbaoui"
        title="Epidemiology of smoking in the Wilaya population of Algeria"
        index="1"
      />
      <SingleArticleAside
        author="Jennifer Casarella"
        title="Drug Abuse & Addiction: Effects on Brain"
        index="2"
      />
      <SingleArticleAside author="NIDA. 2021" title="Is marijuana addictive?" />
    </div>
  );
};

export default ArticlesAside;

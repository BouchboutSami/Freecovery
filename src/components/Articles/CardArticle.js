import React from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

const CardArticle = (props) => {
  return (
    <div className="w-full flex flex-col p-6 gap-4">
      <div className="imageArticle h-44 rounded-lg"></div>
      <p className="font-SofiaBold text-grayIWD">12 mins ago</p>
      <Link to={`/articles/${props.index}`}>
        <h2 className="text-xl">Title of the Article</h2>
      </Link>
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
        consectetur adip consectetur adip
      </p>
    </div>
  );
};

export default CardArticle;

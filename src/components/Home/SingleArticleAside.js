import React from "react";
import { Link } from "react-router-dom";

const SingleArticleAside = (props) => {
  return (
    <div className="flex flex-col w-1/2 gap-5">
      <div className="w-full h-1 bg-[#D1D1D1] rounded-md"></div>
      <p>{props.author}</p>
      <Link to={`/articles/${props.index}`}>
        <p className="font-SofiaBold text-xl">{props.title}</p>
      </Link>
    </div>
  );
};

export default SingleArticleAside;

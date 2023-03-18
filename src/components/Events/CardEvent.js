import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

const CardEvent = (props) => {
  return (
    <div className="w-full flex flex-col p-6 gap-4">
      <div className="imageArticle h-44 rounded-lg"></div>
      <p className="font-SofiaBold text-grayIWD">{props.date}</p>
      <Link to={`/events/${props.index}`}>
        <h2 className="text-xl">{props.title}</h2>
      </Link>
      <p className="font-bold">{props.synopsis}</p>
    </div>
  );
};

export default CardEvent;

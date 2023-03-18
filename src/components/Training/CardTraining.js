import React from "react";
import { Link } from "react-router-dom";
import "./Trainings.css";

const CardTraining = (props) => {
  return (
    <div className="w-full flex flex-col p-6 gap-4">
      <div className="imageArticle h-44 rounded-lg"></div>
      <p className="font-SofiaBold text-grayIWD">{props.date}</p>
      <Link to={`/trainings/${props.index}`}>
        <h2 className="text-xl">{props.title}</h2>
      </Link>
      <p className="font-bold">{props.description}</p>
    </div>
  );
};

export default CardTraining;

import React from "react";
import Avatar from "./avatar.png";
import "./SinglePost.css";
import Exemple from "./ExempleImage.jpeg";

const SinglePost = () => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">HH:MM</div>
        <img className="ui avatar image" src={Avatar} alt="AVATAR" />
        Bouchbout Sami
      </div>
      <div className="w-full flex flex-col justify-center items-center py-10 gap-10">
        <img src={Exemple} alt="Post background" className="w-1/3 h-auto" />
        <p className="text-lg w-4/5">
          L'addiction est une maladie, mais la guérison est possible. Si vous ou
          quelqu'un que vous connaissez luttez contre l'addiction, sachez qu'il
          y a de l'espoir. Ne renoncez pas à vous-même ou aux autres. La
          progression même petite est toujours une progression. Il est important
          de prendre les choses un jour à la fois et de célébrer les petites
          victoires en cours de route. Continuez à avancer ! #addiction
          #rétablissement #ne_jamais_abandonner
        </p>
      </div>
      <div className="content">
        <span className="right floated">
          <i className="heart like icon"></i>X likes
        </span>
        <i className="comment icon"></i>Y comments
      </div>
      <div className="extra content">
        <div className="ui large transparent left icon input">
          <i className="heart icon"></i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

import React from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Event;

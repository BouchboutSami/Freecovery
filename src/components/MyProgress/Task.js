import React from "react";

const Task = (props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <label className="self-start">{props.TaskName}</label>
      <div className="ui indicating progress" data-percent="33">
        <div className="bar" style={{ width: props.percentage }}></div>
        <div className="label">{props.status}</div>
      </div>
    </div>
  );
};

export default Task;

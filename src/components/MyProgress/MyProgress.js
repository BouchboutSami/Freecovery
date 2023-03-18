import React from "react";
import TherapistCard from "./TherapistCard";
import Task from "./Task";

const MyProgress = () => {
  return (
    <div className="flex w-2/3 gap-10">
      <TherapistCard />
      <div className="h-full bg-[#afb4b5] w-[1px]"></div>
      <div className="TasksProgress w-1/2 text-center flex flex-col gap-10">
        <h1 className="w-full text-center font-SofiaBold text-3xl">
          Task Progress
        </h1>
        <Task
          TaskName="Run 1km a day for a week"
          status="1 day done"
          percentage="33%"
        />
        <Task
          TaskName="Start Drawing sessions"
          status="2 day done"
          percentage="25%"
        />
      </div>
    </div>
  );
};

export default MyProgress;

import React from "react";
import CardTraining from "./CardTraining";

const Events = () => {
  return (
    <div className="flex flex-col gap-16 items-center w-full">
      <h1 className="text-4xl font-SofiaBold">All Trainings</h1>
      <div className="w-2/3 grid grid-cols-3 justify-center gap-6">
        <CardTraining
          index="0"
          title="Brainstorming techniques Training"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
        <CardTraining
          index="1"
          title="Public Speaking Training"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
        <CardTraining
          index="2"
          title="Self confidence Training"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
      </div>
    </div>
  );
};

export default Events;

import React from "react";
import CardEvent from "./CardEvent";

const Events = () => {
  return (
    <div className="flex flex-col gap-16 items-center w-full">
      <h1 className="text-4xl font-SofiaBold">All Events</h1>
      <div className="w-2/3 grid grid-cols-3 justify-center gap-6">
        <CardEvent
          index="0"
          title="Event Title"
          synopsis="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
        <CardEvent
          index="1"
          title="Event Title"
          synopsis="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
        <CardEvent
          index="2"
          title="Event Title"
          synopsis="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
      </div>
    </div>
  );
};

export default Events;

import React from "react";
import "./therapist.css";

const TherapistCard = () => {
  return (
    <div className="w-[45%] h-full flex flex-col gap-10">
      <h1 className="w-full text-center font-SofiaBold text-3xl">
        My therapist
      </h1>
      <div className="therapistCard bg-yellowIWD h-[450px] flex flex-col-reverse drop-shadow-2xl rounded-xl">
        <div className="bg-[white] w-full h-3/5 rounded-xl flex flex-col relative items-center gap-4">
          <div className="avatar absolute w-44 h-44 bg-[white] rounded-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%]"></div>
          <h2 className="mt-[100px] text-xl font-SofiaBold">
            Pr. Bouchbout Sami
          </h2>
          <div className="w-2/3 h-[1px] bg-[#a4a3a35c]"></div>
          <div className="infos flex flex-col w-full px-[10%] justify-start">
            <div className="flex justify-center items-center gap-4">
              <i class="phone icon"></i>
              <p>06 73 70 57 41</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <i class="envelope icon"></i>
              <p>ks_bouchbout@esi.dz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;

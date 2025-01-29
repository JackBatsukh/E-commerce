import React from "react";


const Stats = () => {
  return (
    <div className="bg-white flex justify-between items-center rounded-xl p-8 shadow-lg w-[400px]">
      <div className="flex flex-col">
        <h1>Шинэ хэрэглэгч</h1>
        <span className="text-3xl font-bold">737</span>
        <span className="text-sm text-green-500">Өмнөх сараас 93-р өссөн</span>
      </div>
        <img src="src\assets\ser-circle-svgrepo-com (1).svg" alt="" className="w-[35px]" />
    </div>
  );
};

export default Stats;

import React from "react";

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="w-fit flex flex-col gap-[10px]">
      <h1 className="text-[20px]">
        Нийт: <span>$ {totalPrice.toLocaleString()}</span>
      </h1>
      <button className="bg-[#262626] w-fit px-[50px] py-[10px] rounded-xl">
        <p className="text-white">Захиалах</p>
      </button>
    </div>
  );
};

export default TotalPrice;

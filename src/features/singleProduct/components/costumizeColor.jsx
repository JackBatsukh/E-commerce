import React from "react";

const CostumizeColor = () => {
  return (
    <div className="w-fit h-fit flex flex-col gap-[20px]">
      <h1 className="font-medium text-[20px] text-start text-black">Өнгө сонгох</h1>
      <div className="colors flex flex-row gap-[10px]">
        <button className="w-[32px] h-[32px] border-[1px] rounded-full bg-[#D9D9D9]"></button>
        <button className="w-[32px] h-[32px] border-[1px] rounded-full bg-[#F27070]"></button>
        <button className="w-[32px] h-[32px] border-[1px] rounded-full bg-[#EEC98E]"></button>
        <button className="w-[32px] h-[32px] border-[1px] rounded-full bg-[#C08DE8]"></button>
        <button className="w-[32px] h-[32px] border-[1px] rounded-full bg-[#6C90EA]"></button>
      </div>
    </div>
  );
};

export default CostumizeColor;

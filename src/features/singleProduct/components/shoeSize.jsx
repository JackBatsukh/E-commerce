import React from "react";

const ShoeSize = () => {
  return (
    <div className="w-fit h-fit flex flex-col gap-[20px]">
      <h1 className="font-medium text-[20px] text-start text-black">Размер сонгох</h1>
      <div className="colors flex flex-row gap-[10px]">
        <button className="w-[50px] h-[40px] border-[1px] border-black/30 rounded-lg ">
          <p className="font-medium">39</p>
        </button>
        <button className="w-[50px] h-[40px] border-[1px] border-black/30 rounded-lg ">
          <p className="font-medium">40</p>
        </button>
        <button className="w-[50px] h-[40px] border-[1px] border-black/30 rounded-lg ">
          <p className="font-medium">41</p>
        </button>
        <button className="w-[50px] h-[40px] border-[1px] border-black/30 rounded-lg ">
          <p className="font-medium">42</p>
        </button>
        <button className="w-[50px] h-[40px] border-[1px] border-black/30 rounded-lg ">
          <p className="font-medium">43</p>
        </button>
      </div>
    </div>
  );
};

export default ShoeSize;

import React from "react";

const Description = ({ data }) => {
  return (
    <div className="w-full h-fit flex flex-col  gap-[20px] ">
      <h1 className="w-[384px] font-medium text-[20px]">Тайлбар</h1>
      <p className="max-w-[384px]">{data.description}</p>
    </div>
  );
};

export default Description;

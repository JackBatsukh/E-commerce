import React from "react";

const Brand = ({ data }) => {
  return (
    <div>
      <h1 className="text-[16px] font-medium italic ">{data.brand}</h1>
    </div>
  );
};

export default Brand;

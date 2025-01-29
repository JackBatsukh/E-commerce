import React from "react";

const CategoryName = ({ data }) => {
  return (
    <div>
      <button className="text-[20px]">{data.name}</button>
    </div>
  );
};

export default CategoryName;

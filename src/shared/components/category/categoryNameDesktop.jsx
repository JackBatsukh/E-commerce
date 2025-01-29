import React from "react";

const CategoryNameDesktop = ({ data }) => {
  return (
    <button className="text-[20px] w-[300px] flex gap-[10px] justify-between items-center">
      {data.name}
      <img src="/src/assets/arrow-right-bold-svgrepo-com.svg" alt="" className="w-[15px]" />
    </button>
  );
};

export default CategoryNameDesktop;

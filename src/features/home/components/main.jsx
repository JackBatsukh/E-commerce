import React, { useState } from "react";
import Category from "../../../shared/components/Nav/category";
import Products from "./products";
import Advertisement from "./advertisement";

const Main = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full h-fit py-[30px] flex flex-col px-[5px]">
      <Advertisement />
      {/* <Category onCategorySelect={handleCategorySelect} /> */}
      <div className="content py-[20px] flex flex-col gap-[30px]">
        <h1 className="font-semibold text-[24px] py-[20px] md:text-[32px]">
          Бүтээгдэхүүн
        </h1>
        <Products />
      </div>
    </div>
  );
};

export default Main;

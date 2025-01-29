import React, { useEffect, useState } from "react";
import Head from "../Nav/head";
import CategoryName from "./categoryName";

const MobileCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col gap-[10px]">
      <Head />
      <div className="content w-full h-fit flex flex-col gap-[30px] px-[10px] py-[40px] rounded-xl bg-white">
        <h1 className="text-[24px] font-medium">Бүтээгдэхүүн</h1>
        <div className="menu flex flex-col gap-[5px] px-[10px]">
          {categoryData.map((el, index) => {
            return <CategoryName key={index} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileCategory;

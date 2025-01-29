import React, { useEffect, useState, useRef } from "react";
import CategoryNameDesktop from "./categoryNameDesktop";

const DesktopCategory = ({ isVisible, onClose, selectedCategory }) => {
  const [categoryData, setCategoryData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);

  if (!isVisible) return null;

  const filteredCategories = selectedCategory
    ? categoryData.filter((category) => category === selectedCategory)
    : categoryData;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={onClose}></div>
      <div
        ref={ref}
        className="w-[500px] h-screen border-[1px] fixed bg-white top-0 left-0 z-20 px-[50px] py-[30px]"
      >
        <div className="w-full h-full flex flex-col gap-[5px] justify-start">
          {filteredCategories.map((el, index) => {
            return <CategoryNameDesktop key={index} data={el} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DesktopCategory;

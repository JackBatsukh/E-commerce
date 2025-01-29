import React from "react";

const Review = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-[10px] rounded-xl py-[30px] px-[20px] bg-[#fff] ">
      <div className="w-full flex flex-col">
        <h1>Сэтгэгдэл үлдээх</h1>
        <textarea name="" id="" className="w-full h-[100px] border-[1px] rounded-lg bg-white"></textarea>
      </div>
      <div className="w-full flex flex-col">
        <h1>Үнэлгээ өгөх</h1>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-[20px] h-[20px]"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-[20px] h-[20px]"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-[20px] h-[20px]"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-[20px] h-[20px]"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-[20px] h-[20px]"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-[#282828] text-[#fff] px-[20px] py-[5px] rounded-lg">
          Илгээх
        </button>
      </div>
    </div>
  );
};

export default Review;

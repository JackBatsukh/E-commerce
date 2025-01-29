import React from "react";
import Rating from "./rating";

const OtherReviews = ({ data }) => {
  let rates = Math.floor(data.rating);
  return (
    <div className="w-[200px] max-h-[240px]  h-fit flex flex-col gap-[20px] border-[1px] rounded-[20px] bg-[#fff] py-[30px] px-[20px]">
      <div className="upper flex flex-row items-center gap-[20px]">
        <h1 className="text-[14px] font-medium">{data.reviewerName}</h1>
        <div className="flex flex-row">
          {Array.from({ length: rates }, (_, i) => (
            <Rating />
          ))}
        </div>
      </div>
      <div className="lower">
        <p>{data.comment}</p>
      </div>
    </div>
  );
};

export default OtherReviews;

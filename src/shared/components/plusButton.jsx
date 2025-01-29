import React from "react";

const PlusButton = ({ addToCart }) => {
  return (
    <button
      className="h-[32px] w-[32px] rounded-full border-[1px] bg-[#fff]/50 flex justify-center items-center"
      onClick={addToCart}>
      <svg
        className="w-[20px] h-[20px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 12H18M12 6V18"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    </button>
  );
};

export default PlusButton;

import React from "react";

const DeleteButton = ({ onDelete }) => {
  return (
    <button
      className="h-[32px] w-[32px] rounded-full bg-[#fff]/50 border-[1px] flex justify-center items-center"
      onClick={onDelete}>
      <img src="/src/assets/trashcan-svgrepo-com.svg" alt="" />
    </button>
  );
};

export default DeleteButton;

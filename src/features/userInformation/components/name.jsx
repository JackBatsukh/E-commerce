import React from "react";

const Name = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h1>Хэрэглэгчийн нэр :</h1>
      <input
        type="text"
        className="w-[250px] h-[30px] rounded-lg bg-white border-[1px]"
      />
    </div>
  );
};

export default Name;

import React from "react";

const NoItem = () => {
  return (
    <div className="w-full h-full md:mt-[300px] flex flex-col items-center justify-center gap-[20px]">
      <img
        src="/src/assets/cart-svgrepo-com.svg"
        alt=""
        className="w-[70px] h-[70px]"
      />
      <h1>Таны сагс хоосон байна</h1>
    </div>
  );
};

export default NoItem;

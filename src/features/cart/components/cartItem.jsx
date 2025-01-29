import React, { useContext } from "react";
import cartContext from "../hooks/cartContext";

const CartItem = ({ el }) => {
  const { minusFromQuantity, addOnQuantity, deleteProduct } =
    useContext(cartContext);

  return (
    <div className="w-full h-[120px] border rounded-2xl bg-white p-[10px] flex flex-row justify-between relative">
      <div className="flex flex-row gap-[5px]">
        <button
          className="w-fit h-full px-[5px] border rounded-md"
          onClick={() => deleteProduct(el.id)}>
          <img src="/src/assets/trashcan-svgrepo-com.svg" alt="Delete" />
        </button>
        <div className="info w-fit h-full flex flex-row gap-[10px]">
          <img src={el.images} alt="" className="w-fit rounded-xl border" />
          <div className="w-fit h-full flex flex-col">
            <h1 className=" text-[18px] md:text-[20px] lg:text-[24px] italic">
              {el.title}
            </h1>
            <p className="  lg:text-[20px] text-[#000]/40">{el.rating}</p>
          </div>
        </div>
      </div>
      <div className="w-100px price flex flex-col items-end gap-[10px]">
        <h1 className="w-full flex flex-row text-[20px] justify-end lg:text-[24px]">
          ${el.price}
        </h1>
        <div className="flex gap-[5px] items-center">
          <h1 className="lg:text-[18px]">Тоо:</h1>
          <div className="flex flex-row">
            <p className="border bg-white w-[32px] h-[32px] rounded-l-md flex items-center justify-center border-black/50">
              {el.quantity}
            </p>
            <div className="flex flex-col">
              <button
                className="w-[16px] h-[16px] flex items-center text-center border-t border-r border-black/50 border-b rounded-tr"
                onClick={() => addOnQuantity(el)}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 12H18M12 6V18"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="w-[16px] h-[16px] flex items-center border-black/50 border-r border-b rounded-br"
                onClick={() => minusFromQuantity(el)}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 12L18 12"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
